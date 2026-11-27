import type { RankingTier } from "./rankings";

export const competitionsLastUpdated = "2026-11-27";

export const competitionTiers: RankingTier[] = [
    {
        id: "hackathons",
        title: "Hackathons",
        description: "One entry per event, with results and verified participation.",
        entries: [
            {
                platform: "NASA Space Apps Challenge 2026 (Buenos Aires, Argentina)",
                metric: "Impact Category Winner among 450+ participants",
                detail: "Tango Horizon, a team of AI agents for astronaut EVA and rescue in a Mars simulation built on real NASA and USGS data. Host site: Universidad de Palermo.",
                url: "https://www.spaceappschallenge.org/2026/find-a-team/tango-horizon/?tab=project",
                source: "spaceappschallenge.org",
                checked: "2026-11-27",
                links: [
                    { label: "Universidad de Palermo host site", url: "https://www.palermo.edu/ingenieria/2026/noviembre/up-sede-nasa-space-apps-challenge.html" },
                    { label: "Universidad de Palermo video on Facebook", url: "https://www.facebook.com/universidaddepalermo/videos/as%C3%AD-se-vivi%C3%B3-el-nasa-space-apps-challenge-en-la-upla-universidad-de-palermo-fue-/1829309231323121/" },
                    { label: "Instagram reel", url: "https://www.instagram.com/reels/DgH_go-JCgu/" },
                    { label: "Post on X", url: "https://x.com/udepalermo/status/2125210609981456661" },
                    { label: "Certificate", url: "https://github.com/agustindiazcano/nasa-mars-tango-horizon/blob/main/docs/media/impact-winner-certificate.jpeg" },
                    { label: "Repository", url: "https://github.com/agustindiazcano/nasa-mars-tango-horizon" },
                ],
            },
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
