export interface CountryData {
    code: string;
    name: string;
    visitors: number;
    views: number;
}

export interface AnalyticsData {
    visitors: number;
    pageViews: number;
    countries: CountryData[];
}

export function aggregateAnalytics(globResult: Record<string, any>): AnalyticsData {
    let totalVisitors = 0;
    let totalPageViews = 0;
    const countriesMap = new Map<string, CountryData>();

    for (const path in globResult) {
        // globResult can have the JSON module either directly or in `.default` depending on Astro/Vite configuration
        const data = globResult[path].default || globResult[path];
        if (!data) continue;

        totalVisitors += data.visitors || 0;
        totalPageViews += data.pageViews || 0;

        if (Array.isArray(data.countries)) {
            for (const c of data.countries) {
                const existing = countriesMap.get(c.code);
                if (existing) {
                    existing.visitors += c.visitors || 0;
                    existing.views += c.views || 0;
                } else {
                    countriesMap.set(c.code, { ...c });
                }
            }
        }
    }

    const aggregatedCountries = Array.from(countriesMap.values())
        .sort((a, b) => b.visitors - a.visitors);

    return {
        visitors: totalVisitors,
        pageViews: totalPageViews,
        countries: aggregatedCountries
    };
}
