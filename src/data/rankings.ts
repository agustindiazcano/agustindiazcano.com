export type RankingEntry = {
    platform: string;
    metric: string;
    detail: string;
    url: string;
    source: string;
    checked: string;
    method?: string;
    links?: { label: string; url: string }[];
};

export type RankingTier = {
    id: string;
    title: string;
    description: string;
    entries: RankingEntry[];
};

export const rankingsLastUpdated = "2026-11-07";

/**
 * Only entries with a verifiable external source belong here.
 * To add a row: confirm the position on the source page, then add it with the date checked (YYYY-MM).
 *
 * Pending (need exact source URL + screenshot before adding):
 * VibeCodeStats, Trendshift.
 */
export const rankingTiers: RankingTier[] = [
    {
        id: "awards",
        title: "Honors & Awards",
        description: "Results evaluated by juries or platform-wide submission counts.",
        entries: [
            {
                platform: "Qollab x IonQ Global Quantum Hackathon (Argentina)",
                metric: "1st place Quantum Impact (Industrial Application) and 3rd place overall",
                detail: "QWind, a quantum optimizer for wind farms that I built and ran on IonQ Forte 1 hardware. Categories: Quantum Impact (Industrial Application), Quantum Unlocked (Educational), Quantum Playground (Games).",
                url: "https://exa.unicen.edu.ar/la-sede-unicen-se-destaco-en-el-hackathon-mundial-de-computacion-cuantica-con-proyectos-premiados/",
                source: "exa.unicen.edu.ar",
                checked: "2026-11-07",
                links: [{ label: "Qollab node results", url: "https://qollab.xyz/explore/hackathon-2026/unicen" }],
            },
            {
                platform: "Uruguay eCommerce Awards 2025 (eCommerce Institute)",
                metric: "Nomination: 3 sites among the finalists",
                detail: "Disco Uy, Geant and Devoto Uy were nominated after the platform migrations. I was the QA Automation Owner.",
                url: "https://ecommerceday.org.uy/2025/wp-content/uploads/2025/09/Comunicado-finalistas-del-eCommerce-Award-Uruguay-2025.pdf",
                source: "ecommerceday.org.uy",
                checked: "2026-11-07",
            },
            {
                platform: "Uruguay eCommerce Awards 2024 (eCommerce Institute)",
                metric: "Nomination: 3 sites among the finalists",
                detail: "Disco Uy, Geant and Devoto Uy were nominated for the first time. I was the QA Automation Owner.",
                url: "https://ecommerceday.org.uy/2024/se-conocieron-los-finalistas-de-los-ecommerce-awards-uruguay-2024/",
                source: "ecommerceday.org.uy",
                checked: "2026-11-07",
            },
        ],
    },
    {
        id: "engineering",
        title: "Engineering and open source rankings",
        description: "Automated rankings computed from public GitHub activity.",
        entries: [
            {
                platform: "Committers.top Argentina: Contributions",
                metric: "#14 in Argentina (contributions)",
                detail: "3,968 contributions over the past year, among the 256 most active GitHub users in Argentina.",
                method: "Most active GitHub users in Argentina (at least 59 followers). Users located in Argentina are ranked by followers (top 1,000), then re-ranked by activity over the past year and cut to the top 256. This list counts contributions: commits plus other GitHub activity such as pull requests and issues.",
                url: "https://committers.top/argentina",
                source: "committers.top",
                checked: "2026-11-07",
            },
            {
                platform: "Committers.top Argentina: Commits",
                metric: "#15 in Argentina (public commits)",
                detail: "3,244 public commits over the past year. List generated 2026-11-05.",
                method: "Most active GitHub users in Argentina (at least 59 followers). Users located in Argentina are ranked by followers (top 1,000), then re-ranked by activity over the past year and cut to the top 256. This list counts only public commits, so private work is not included.",
                url: "https://committers.top/argentina",
                source: "committers.top",
                checked: "2026-11-07",
            },
            {
                platform: "Gitista Argentina",
                metric: "#23 in Argentina",
                detail: "724 total contributions (690 pull requests) across 34 repositories.",
                method: "Method: Gitista scores each developer as the sum of pull requests, reviews, issues and repositories (S = PRs + Reviews + Issues + Repos). Here: 690 PRs + 0 reviews + 0 issues + 34 repositories = 724.",
                url: "https://gitista.com/argentina/",
                source: "gitista.com",
                checked: "2026-11-07",
            },
            {
                platform: "Gitista Global",
                metric: "#3291 worldwide",
                detail: "Global rank on Gitista, with 61 followers on GitHub.",
                method: "Method: same score as the Argentina ranking (S = PRs + Reviews + Issues + Repos), compared worldwide.",
                url: "https://gitista.com/search/?country=AR&handle=agustindiazcano",
                source: "gitista.com",
                checked: "2026-11-07",
            },
            {
                platform: "Gitista Argentina: Python",
                metric: "#12 in Argentina (Python)",
                detail: "Position when filtering the Argentina ranking by the Python language.",
                method: "Method: same score (S = PRs + Reviews + Issues + Repos), with the Argentina ranking filtered by the Python language.",
                url: "https://gitista.com/argentina/",
                source: "gitista.com",
                checked: "2026-11-07",
            },
        ],
    },
    {
        id: "algorithms",
        title: "Algorithms and project discovery",
        description: "Competitive programming standings and open source project indexes.",
        entries: [
            {
                platform: "Codewars: global leaderboard",
                metric: "#30,420 worldwide (honor percentile: Top 3.945%)",
                detail: "Top 3.945% by honor is about the 96th percentile. 5 kyu, 1,132 honor, 263 kata completed.",
                url: "https://www.codewars.com/users/agusdiazcano",
                source: "codewars.com",
                checked: "2026-11-07",
            },
            {
                platform: "Codewars: Plataforma 5 clan",
                metric: "#8 in the Plataforma 5 clan leaderboard",
                detail: "Ranked by honor among all members of the Plataforma 5 programming bootcamp clan.",
                url: "https://www.codewars.com/users/leaderboard/clan?clan=Plataforma+5",
                source: "codewars.com",
                checked: "2026-11-07",
            },
            {
                platform: "LibHunt: Python ai-assisted-development",
                metric: "Listed #8 of 8 projects",
                detail: "AFAW (Anti-Fragile Agentic Workflow) is indexed in this topic, which is ordered by GitHub stars. It was also mentioned in a Show HN post on Hacker News (2026-09-30).",
                url: "https://www.libhunt.com/l/python/topic/ai-assisted-development",
                source: "libhunt.com",
                checked: "2026-11-07",
            },
        ],
    },
    {
        id: "software",
        title: "Software adoption at scale",
        description: "Public download and rating counts from game modding work.",
        entries: [
            {
                platform: "ModDB: Men of War Zombie Mod",
                metric: "Community-rated mod",
                detail: "Published under the alias Heroagastin.",
                url: "https://www.moddb.com/mods/men-of-war-zombie-mod",
                source: "moddb.com",
                checked: "2026-11",
            },
            {
                platform: "ModDB: Zombie Assault",
                metric: "Community-rated mod",
                detail: "Published under the alias Heroagastin.",
                url: "https://www.moddb.com/mods/zombie-mod5",
                source: "moddb.com",
                checked: "2026-11",
            },
            {
                platform: "ModDB: HD Mod",
                metric: "Community-rated mod",
                detail: "Published under the alias Heroagastin.",
                url: "https://www.moddb.com/mods/hd-mod",
                source: "moddb.com",
                checked: "2026-11",
            },
        ],
    },
];
