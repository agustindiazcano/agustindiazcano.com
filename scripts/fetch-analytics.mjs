import fs from 'fs';
import path from 'path';

// Load environment variables (supports VERCEL_PROJECT_ID or PROJECT_ID)
const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
const PROJECT_ID = process.env.VERCEL_PROJECT_ID || process.env.PROJECT_ID;

if (!VERCEL_TOKEN || !PROJECT_ID) {
    console.error("Missing VERCEL_TOKEN or VERCEL_PROJECT_ID / PROJECT_ID environment variables.");
    process.exit(1);
}

// Helper to calculate previous 7 days (Monday to Sunday)
// Note: If running on a Monday, this gets the previous Monday -> Sunday.
const today = new Date();
const currentDay = today.getDay(); // 0 is Sunday, 1 is Monday
const daysToSubtract = currentDay === 0 ? 6 : currentDay - 1; 

const lastMonday = new Date(today);
lastMonday.setDate(today.getDate() - daysToSubtract - 7);
lastMonday.setHours(0, 0, 0, 0);

const lastSunday = new Date(lastMonday);
lastSunday.setDate(lastMonday.getDate() + 6);
lastSunday.setHours(23, 59, 59, 999);

const sinceIso = lastMonday.toISOString();
const untilIso = lastSunday.toISOString();

console.log(`Fetching data from ${sinceIso} to ${untilIso}`);

async function fetchVercelAPI(endpoint, params = {}) {
    const url = new URL(`https://api.vercel.com/v1/query/web-analytics/${endpoint}`);
    url.searchParams.append('projectId', PROJECT_ID);
    url.searchParams.append('since', sinceIso);
    url.searchParams.append('until', untilIso);
    
    for (const [key, value] of Object.entries(params)) {
        url.searchParams.append(key, value);
    }

    const response = await fetch(url.toString(), {
        headers: {
            'Authorization': `Bearer ${VERCEL_TOKEN}`
        }
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch ${endpoint}: ${response.status} ${response.statusText} - ${errorText}`);
    }

    return response.json();
}

async function run() {
    try {
        // 1. Fetch total visitors and pageviews
        // Response format: { version: 1, data: { visitors: 58, pageviews: 1079 } }
        const countRes = await fetchVercelAPI('visits/count');
        const countData = countRes?.data || {};
        const visitors = countData.visitors || 0;
        const pageViews = countData.pageviews || 0;

        // 2. Fetch aggregate data by country
        // Response format: { version: 1, data: [ { country: 'AR', visitors: 40, pageviews: 1167 }, ... ] }
        const aggregateRes = await fetchVercelAPI('visits/aggregate', {
            'by': 'country'
        });

        const countriesList = aggregateRes?.data || [];
        
        const formattedCountries = countriesList.map(c => ({
            code: (c.country || 'unknown').toLowerCase(),
            name: (c.country || 'Unknown').toUpperCase(),
            visitors: c.visitors || 0,
            views: c.pageviews || 0
        }));

        const resultData = {
            visitors,
            pageViews,
            countries: formattedCountries
        };

        // Format date for filename: YYYY-MM-DD
        const dateStr = lastSunday.toISOString().split('T')[0];
        const filePath = path.join(process.cwd(), `src/data/analytics/${dateStr}.json`);

        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, JSON.stringify(resultData, null, 2));

        console.log(`Successfully saved analytics data to ${filePath}`);

    } catch (error) {
        console.error("Error fetching Vercel Analytics:", error);
        process.exit(1);
    }
}

run();
