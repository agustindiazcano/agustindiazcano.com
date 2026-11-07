import type { RankingTier } from "./rankings";

export const competitionsLastUpdated = "2026-11-07";

export const competitionTiers: RankingTier[] = [
    {
        id: "hackathons",
        title: "Hackathons",
        description: "One entry per event, with results and verified participation.",
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
                platform: "IBM Bob 2.0 Global Hackathon (lablab.ai)",
                metric: "Top 32% by delivery",
                detail: "One of 1,124 successful submissions out of 3,464 teams and 15,727 participants, with TestMind AI.",
                url: "https://lablab.ai/ai-hackathons/ibm-bob-2-hackathon",
                source: "lablab.ai",
                checked: "2026-11",
                links: [{ label: "Participation certificate", url: "https://lablab.ai/u/@agustin_diazcano6/ai-hackathons/ibm-bob-2-hackathon/certificate" }],
            },
        ],
    },
];
