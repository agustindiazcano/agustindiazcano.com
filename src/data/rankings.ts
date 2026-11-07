export type RankingEntry = {
    platform: string;
    metric: string;
    detail: string;
    url: string;
    source: string;
    checked: string;
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
 * Committers.top Argentina, LibHunt (AFAW), Codewars, VibeCodeStats, Trendshift, UNICEN news note.
 */
export const rankingTiers: RankingTier[] = [
    {
        id: "awards",
        title: "Competitive awards and hackathons",
        description: "Results evaluated by juries or platform-wide submission counts.",
        entries: [
            {
                platform: "Qollab x IonQ Global Quantum Hackathon",
                metric: "QWind: quantum optimization project",
                detail: "QAOA optimizer built with Baltazar Salerno and published on the Qollab showcase.",
                url: "https://qollab.xyz/u/agustindiazcano/qwind",
                source: "qollab.xyz",
                checked: "2026-11",
            },
            {
                platform: "IBM Bob 2.0 Global Hackathon (lablab.ai)",
                metric: "Top 32% by delivery",
                detail: "One of 1,124 successful submissions out of 3,464 teams and 15,727 participants, with TestMind AI.",
                url: "https://lablab.ai/ai-hackathons/ibm-bob-2-hackathon",
                source: "lablab.ai",
                checked: "2026-11",
            },
            {
                platform: "IBM Bob 2.0 certificate",
                metric: "Verified participation certificate",
                detail: "Official certificate issued on the hackathon platform.",
                url: "https://lablab.ai/u/@agustin_diazcano6/ai-hackathons/ibm-bob-2-hackathon/certificate",
                source: "lablab.ai",
                checked: "2026-11",
            },
        ],
    },
    {
        id: "engineering",
        title: "Engineering and open source rankings",
        description: "Automated rankings computed from public GitHub activity.",
        entries: [
            {
                platform: "Gitista Argentina",
                metric: "#23 in Argentina",
                detail: "724 total contributions (690 pull requests) across 34 repositories.",
                url: "https://gitista.com/argentina/",
                source: "gitista.com",
                checked: "2026-11-07",
            },
            {
                platform: "Gitista Global",
                metric: "#3291 worldwide",
                detail: "Global rank on Gitista, with 61 followers on GitHub.",
                url: "https://gitista.com/search/?country=AR&handle=agustindiazcano",
                source: "gitista.com",
                checked: "2026-11-07",
            },
            {
                platform: "Gitista Argentina: Python",
                metric: "#12 in Argentina (Python)",
                detail: "Position when filtering the Argentina ranking by the Python language.",
                url: "https://gitista.com/argentina/",
                source: "gitista.com",
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
