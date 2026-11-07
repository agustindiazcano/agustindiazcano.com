import type { RankingTier } from "./rankings";

export const competitionsLastUpdated = "2026-11-07";

export const competitionTiers: RankingTier[] = [
    {
        id: "hackathons",
        title: "Hackathons",
        description: "Hackathon results and verified participation.",
        entries: [
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
];
