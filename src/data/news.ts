export type NewsEntry = {
    title: string;
    date: string;
    description: string;
    /** Related link: a project or page of this site, or an external source. Shown as a button on the news page. */
    href?: string;
    /** Long text for the news page, one string per paragraph. Write here to extend a news page. */
    body?: string[];
};

export type NewsItem = NewsEntry & { slug: string };

// Mock entries. Replace with real news; the home page shows the first 5 and /news lists all of them.
const newsEntries: NewsEntry[] = [
    {
        title: "Tango Horizon wins the Impact Category at NASA Space Apps Challenge Buenos Aires",
        date: "Nov 2026",
        description: "Impact Category Winner among 450+ participants in Buenos Aires, Argentina, for a multi-agent AI system for EVA and Mars exploration.",
        href: "/projects/tango-horizon",
    },
    {
        title: "Quantum wind farm optimizer takes 1st place Quantum Impact at the Qollab x IonQ hackathon",
        date: "Nov 2026",
        description: "QWind, a quantum optimizer for wind farms, wins the Quantum Impact (Industrial Application) track.",
        href: "/projects/wind-farm-quantum-optimization",
    },
    {
        title: "New case study: MCP Transactional Agent",
        date: "Sep 2026",
        description: "Architecture notes on a transactional agent built on the Model Context Protocol.",
        href: "/projects/mcp-transactional-agent",
    },
    {
        title: "Memory-constrained LLM optimization",
        date: "Mar 2026",
        description: "Participation in OpenAI's 16MB Parameter Golf Challenge.",
        href: "/projects/memory-constrained-llm-optimization",
    },
    {
        title: "Fundamental Principles of Scientific Validation",
        date: "Mar 2026",
        description: "A new essay on mechanism versus statistical anecdote.",
        href: "/writing/fundamental-principles",
    },
    {
        title: "Site relaunch with a new home, projects and news sections",
        date: "Nov 2026",
        description: "A single-page home with featured work and the latest updates.",
    },
    // Career timeline, newest first
    {
        title: "Nominated for the Uruguay eCommerce Awards, with 3 sites among the finalists",
        date: "2025",
        description: "Disco Uy, Geant and Devoto Uy were nominated after the platform migrations. I was the QA Automation Owner.",
        href: "https://ecommerceday.org.uy/2025/wp-content/uploads/2025/09/Comunicado-finalistas-del-eCommerce-Award-Uruguay-2025.pdf",
    },
    {
        title: "Nominated for the Uruguay eCommerce Awards for the first time",
        date: "2024",
        description: "Disco Uy, Geant and Devoto Uy were nominated. I was the QA Automation Owner.",
        href: "https://ecommerceday.org.uy/2024/se-conocieron-los-finalistas-de-los-ecommerce-awards-uruguay-2024/",
    },
    {
        title: "Started the MS in Information Systems Engineering at UTN",
        date: "May 2024",
        description: "Began master's studies at Universidad Tecnológica Nacional (UTN).",
        href: "https://frba.utn.edu.ar/",
    },
    {
        title: "Ran the Buenos Aires Marathon (42k) again",
        date: "Sep 2025",
        description: "My second 42k marathon finish.",
        href: "/running-agustin-diaz-cano",
    },
    {
        title: "Started part-time as a Technical Code Reviewer for student full stack projects",
        date: "May 2024",
        description: "Reviewing full stack student projects for an e-learning company in Latin America (remote).",
    },
    {
        title: "Ran my first 42k: the Buenos Aires Marathon",
        date: "Sep 2023",
        description: "My first marathon finish.",
        href: "/running-agustin-diaz-cano",
    },
    {
        title: "Started as a Full Stack Developer at Pocima",
        date: "Aug 2022",
        description: "Joined Pocima (Montevideo, Uruguay) as a remote Full Stack Developer.",
        href: "https://www.pocimadigital.com/",
    },
    {
        title: "Graduated with a Licenciatura en Administración (Management Sciences & Quantitative Methods)",
        date: "Jul 2022",
        description: "176 class contact credits and 2,800+ class contact hours, equivalent to a European BS plus an integrated master's degree.",
        href: "https://www.palermo.edu/negocios/licenciatura-administracion/plan.html",
    },
    {
        title: "Shipped my first pull request to production",
        date: "Jun 2021",
        description: "My first production PR as a software engineer.",
    },
    {
        title: "Received a job offer from Hello Auto / Petroprix",
        date: "May 14, 2021",
        description: "My first software engineering role.",
        href: "https://www.linkedin.com/company/hello-auto-insurance/",
    },
    {
        title: "Finished the Plataforma 5 Full Stack Bootcamp",
        date: "Apr 2021",
        description: "Completed the full stack coding bootcamp.",
        href: "https://www.plataforma5.la/",
    },
    {
        title: "Gave a talk on generative AI, GPT and deep learning at the bootcamp",
        date: "Mar 2021",
        description: "My tech presentation, 20 months before ChatGPT.",
        href: "/writing/predicting-generative-ai-boom",
    },
    {
        title: "Passed the coding challenge for the Plataforma 5 Full Stack Bootcamp",
        date: "Dec 2020",
        description: "The entry challenge to join the bootcamp.",
        href: "https://www.plataforma5.la/",
    },
    {
        title: "Completed the intermediate degree: Analista Universitario en Administración (Management Sciences & Quantitative Methods)",
        date: "Dec 2020",
        description: "130 contact credits and 1,900 contact hours.",
    },
    {
        title: "Wrote a college research study forecasting that electric cars would reach almost 30% by 2022",
        date: "2017",
        description: "A forecast made during my college studies.",
    },
    {
        title: "Started investing in XRP, ETH and BTC, and began mining BTC",
        date: "2017",
        description: "My first steps in crypto: investing and mining.",
    },
    {
        title: "Started a long-term portfolio experiment, up 6x by 2026",
        date: "Mar 2016",
        description: "A paper trading, buy-and-hold portfolio that started with 100,000 GBP and includes Tesla shares.",
        href: "https://www.labolsavirtual.com/marcelogallardiola",
    },
];

const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

// "Nov 2026", "May 14, 2021" or just "2017" -> sortable number (year, month, day)
function dateKey(date: string): number {
    let year = 0;
    let month = 0;
    let day = 0;
    for (const part of date.replace(",", "").split(/\s+/)) {
        if (/^\d{4}$/.test(part)) year = Number(part);
        else if (/^\d{1,2}$/.test(part)) day = Number(part);
        else month = MONTHS.indexOf(part.slice(0, 3).toLowerCase()) + 1;
    }
    return year * 10000 + month * 100 + day;
}

// URL slug from the title (max 60 chars, cut at a word boundary), unique across all entries
function slugify(title: string): string {
    const base = title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
    if (base.length <= 60) return base;
    const cut = base.slice(0, 60);
    return cut.slice(0, cut.lastIndexOf("-") > 20 ? cut.lastIndexOf("-") : 60);
}

const used = new Set<string>();
const withSlugs: NewsItem[] = newsEntries.map((entry) => {
    let slug = slugify(entry.title);
    for (let n = 2; used.has(slug); n++) slug = `${slugify(entry.title)}-${n}`;
    used.add(slug);
    return { ...entry, slug };
});

// Newest first. Array.sort is stable, so entries with the same date keep the order above.
export const news: NewsItem[] = [...withSlugs].sort((a, b) => dateKey(b.date) - dateKey(a.date));
