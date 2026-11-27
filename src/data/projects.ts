export type Project = {
    title: string;
    slug: string;
    description: string;
    tags: string[];
    year: string;
    githubUrl: string | null;
    /** Optional external links shown as buttons on the home cards; a button is only rendered when its URL is set */
    gitlab?: string;
    youtube?: string;
    live?: string;
    image?: string;
    /** Gallery images shown on the project page (include the cover as the first one) */
    images?: string[];
    /** Optional alt text per image, same order as `images` (falls back to the project title) */
    imageAlts?: string[];
    /** Long text for the project page, one string per paragraph. Write here to extend a project page. */
    body?: string[];
};

// Single source for the /projects page, the home page projects section and every /projects/<slug> page
const projectList: Project[] = [
        {
            title: "2D Robotics Simulation and Safety Control Plane for LLM-Directed Warehouse Fleets",
            slug: "warehouse-fleets-safety-control-plane",
            description: "2D robotics simulation and a safety control plane for LLM-directed warehouse fleets.",
            tags: ["Robotics", "Multi-Agent AI", "AI Safety", "Logistics"],
            year: "2026",
            githubUrl: "https://github.com/agustindiazcano/waggle-agents-meta-muse",
            live: "https://agustindiazcano.github.io/waggle-agents-meta-muse/"
        },
        {
            title: "AFAW Engine: Full CI/CD, Hands-Free with Agents and Self-Healing",
            slug: "afaw-engine",
            description: "AFAW Engine on GitLab: a full CI/CD pipeline that runs hands-free with AI agents and self-healing.",
            tags: ["CI/CD", "AI Agents", "Self-Healing", "GitLab"],
            year: "2026",
            githubUrl: "https://github.com/agustindiazcano/afaw-engine-gitlab",
            gitlab: "https://gitlab.com/gitlab-ai-hackathon/transcend-october-2026/43344247/showcase"
        },
        {
            title: "Infection Chains in LLM Swarms: Spread, Detection and Layered Gating",
            slug: "infection-chains-llm-swarms",
            description: "AI safety research on how infections spread through LLM swarms, how to detect them, and how layered gating contains them.",
            tags: ["AI Safety", "LLM Swarms", "Multi-Agent AI"],
            year: "2026",
            githubUrl: "https://github.com/agustindiazcano/apart-research-swarm-alignment",
            youtube: "https://youtu.be/HHjFbyk4vnM",
            live: "https://agustindiazcano.github.io/apart-research-swarm-alignment/"
        },
        {
            title: "Multi-Agent AI Systems, Robotics & Mars Simulation",
            slug: "tango-horizon",
            image: "/images/images-projects/tango-horizon/1-tango-horizon-mars-base.png",
            images: [
                "/images/images-projects/tango-horizon/1-tango-horizon-mars-base.png",
                "/images/images-projects/tango-horizon/2-tango-horizon-test-harness.png",
                "/images/images-projects/tango-horizon/3-tango-horizon-eva-astronaut.png",
                "/images/images-projects/tango-horizon/4-tango-horizon-rescue-crater.png",
                "/images/images-projects/tango-horizon/5-tango-horizon-rescue-operation.png",
                "/images/images-projects/tango-horizon/6-tango-horizon-rover-astronaut.png"
            ],
            imageAlts: [
                "Mars base overview",
                "3D test harness with life support and environment panels",
                "Astronaut on the Martian surface during EVA",
                "Rescue robot reaching an astronaut in a crater",
                "Rescue operation with rover and rescue robot",
                "Rover and astronaut on the Martian surface"
            ],
            description: "Impact Category Winner at the NASA Space Apps Challenge 2026 (Buenos Aires, Argentina, 450+ participants). Multi-agent AI systems for robotics, vision and voice controls in a Mars simulation for extravehicular activity (EVA).",
            body: [
                "Tango Horizon won the Impact Category at the NASA Space Apps Challenge 2026 in Buenos Aires, Argentina, among 450+ participants. The host site was Universidad de Palermo, with support from NASA, CONAE and IBM Argentina.",
                "It is a real-time 3D simulation of the Gale Crater built on real NASA and USGS terrain data, where astronauts work with a fleet of simulated robots. A team of AI agents understands spoken orders in five languages, coordinates rovers, drones and a rescue robot, monitors suit health, and a safety layer checks every action before it reaches a robot."
            ],
            tags: ["NASA Space Apps", "Robotics", "Vision", "Voice Controls", "Multi-Agent AI", "Mars Simulation"],
            year: "2026",
            githubUrl: "https://github.com/agustindiazcano/nasa-mars-tango-horizon",
            live: "https://tangohorizon.vercel.app/"
        },
        {
            title: "TestMind AI: Multi-Agent Mutation Testing System (MCP)",
            slug: "multi-agent-mutation-testing",
            image: "/images/images-projects/test-mind-home.png",
            images: [
                "/images/images-projects/test-mind-home.png",
                "/images/images-projects/test-mind-2.png",
                "/images/images-projects/test-mind-3.png"
            ],
            description: "Built from scratch in 48 hours for the IBM Bob 2.0 Hackathon (one of 1,124 successful submissions out of 3,464 teams and 15,727 participants). Measures whether tests actually catch bugs (not just line coverage), then uses AI agents to write the missing ones.",
            body: [
                "Custom AST mutation engine, parallel multi-agent swarm (Writer + Critic + Gate), native MCP server, and 30+ automated verification checks as guardrails against LLM hallucinations and cheating tests. About 20,000+ lines written in a single weekend."
            ],
            tags: ["Python", "FastAPI", "Next.js", "TypeScript", "MCP", "Multi-Agent AI", "Hackathon"],
            year: "2026",
            githubUrl: "https://github.com/agustindiazcano/ibm-bob-mcp-agent-guard",
            youtube: "https://www.youtube.com/watch?v=m64qdd1axV0&t=6s",
            live: "https://ibm-bob-mcp-agent-guard.vercel.app/"
        },
        {
            title: "Anti-Fragile Agentic Workflow (AFAW)",
            slug: "afaw",
            image: "/images/images-projects/1-afaw.png",
            images: [
                "/images/images-projects/1-afaw.png",
                "/images/images-projects/2-afaw.png",
                "/images/images-projects/3-afaw.png"
            ],
            description: "Boilerplate and rules for AI-assisted development with multiple parallel coding agents (Claude, Gemini, etc.). Premise: the AI decides, the engine measures.",
            body: [
                "Every result is verified with deterministic tools (tests, type checkers, AST mutation testing, CI) and a human approves every PR; rules are enforced outside the prompt (branch protection, hooks, CI).",
                "Isolated per-agent state checked by CI, strict TDD, one branch per task, and cloud validation in GitHub Actions. The reference rules target a Python backend (mypy --strict) and can be adapted to other stacks."
            ],
            tags: ["AI Agents", "CI/CD", "TDD", "Python", "GitHub Actions"],
            year: "2026",
            githubUrl: "https://github.com/agustindiazcano/afaw-anti-fragile-agentic-workflow",
            live: "https://agustindiazcano.github.io/afaw-anti-fragile-agentic-workflow"
        },
        {
            title: "MCP Transactional Agent",
            slug: "mcp-transactional-agent",
            image: "/images/images-projects/1-mcp.png",
            images: [
                "/images/images-projects/1-mcp.png",
                "/images/images-projects/2-mcp.png",
                "/images/images-projects/3-mcp.png"
            ],
            description: "Event-driven AI agentic engine. Features MCP tool sandboxing, RabbitMQ asynchronous routing, strict ACID idempotency, and LLM-as-a-Judge guardrails.",
            tags: ["AI", "LLMs", "PostgreSQL", "FastAPI", "RabbitMQ", "AWS Bedrock", "GCP Vertex AI", "LangGraph", "LangChain", "MCP", "RAG", "Groq", "Docker"],
            year: "2026",
            githubUrl: "https://github.com/agustindiazcano/mcp-transactional-agent"
        },
        {
            title: "Long-Term Portfolio Experiment",
            slug: "long-term-portfolio-experiment",
            description: "Data visualization front end for a long-term buy & hold investment experiment started in March 2016 with £100,000 of simulated capital. Positions were bought using fundamental and macroeconomic analysis, among other factors, and left untouched for over a decade without active trading.",
            tags: ["Data Visualization", "Finance", "Investing"],
            year: "2016",
            githubUrl: "https://github.com/agustindiazcano/long-term-porfolio-experiment",
            live: "https://agustindiazcano.github.io/long-term-porfolio-experiment/"
        },
        {
            title: "Argentina 2056: Data Visualization and Economic Analysis",
            slug: "argentina-2056",
            description: "Interactive data visualization of the Crossing of the Andes (1817), Argentina's current economy, and a projection towards 2056 with the impact of AI on the economy.",
            tags: ["TypeScript", "Python", "React 19", "Three.js", "ECharts", "MapLibre GL"],
            year: "2026",
            githubUrl: "https://github.com/agustindiazcano/arg-2056-udesa"
        },
        {
            title: "Quantum Computing: Windfarm Optimization",
            slug: "wind-farm-quantum-optimization",
            description: "Constraint-preserving quantum optimization (XY-mixer QAOA) that minimizes wake losses during wind farm curtailment, validated on IonQ Forte 1 trapped-ion hardware.",
            tags: ["Quantum Computing", "Python"],
            year: "2026",
            githubUrl: "https://github.com/agustindiazcano/qwind-qaoa-windfarm",
            youtube: "https://www.youtube.com/watch?v=UGVkgYGXkF4",
            live: "https://agustindiazcano.github.io/qwind-qaoa-windfarm/"
        },
        {
            title: "Memory-Constrained LLM Optimization (OpenAI Parameter Golf)",
            slug: "memory-constrained-llm-optimization",
            image: "/images/images-projects/llm-optimization.png",
            description: "Exploration into memory-constrained LLM optimization using OpenAI APIs and parameter golf techniques.",
            tags: ["AI", "LLMs", "Optimization", "Python"],
            year: "2024",
            githubUrl: "https://github.com/agustindiazcano/openai-llm-optimizers-parameter-golf"
        },
        {
            title: "Algorithmic Trading Engine",
            slug: "algorithmic-trading-engine",
            description: "Automated trading system for financial markets.",
            tags: ["Fintech", "Python", "Trading"],
            year: "2025",
            githubUrl: "https://github.com/agustindiazcano/algorithmic-trading-engine"
        },
        {
            title: "LATAM E-commerce",
            slug: "ecommerce-latam",
            description: "E-commerce platform for the Latin American market.",
            tags: ["Web Dev", "E-commerce", "React"],
            year: "2022",
            githubUrl: null
        },
        {
            title: "InsurTech Quoting Engine",
            slug: "insurance-quoter",
            description: "Dynamic insurance quoting engine and frontend.",
            tags: ["Fintech", "TypeScript", "React"],
            year: "2021",
            githubUrl: null
        },
        {
            title: "Game Dev: Men of War Zombie Mod (200k+ downloads, 3M+ video views)",
            slug: "game-dev-modding",
            image: "/images/images-projects/zombie-mod/call-to-arms-zombie-mod-1.png",
            description: "Men of War Zombie Mod: 200,000+ downloads and 3M+ video views.",
            tags: ["Game Dev", "3D Modeling"],
            year: "2011",
            githubUrl: null
        },
        {
            title: "Game Dev: Men of War HD Mod (20k downloads)",
            slug: "game-dev-modding",
            image: "/images/images-projects/hd-mod/men-of-war-hd-mod-1.jpg",
            description: "Men of War HD Mod: 20,000 downloads.",
            tags: ["Game Dev", "3D Modeling"],
            year: "2010",
            githubUrl: null
        },
        {
            title: "Game Dev: Modding",
            slug: "game-dev-modding",
            image: "/images/images-projects/zombie-mod/call-to-arms-zombie-mod-1.png",
            description: "220,000+ Downloads. Combining Zombie Mod and HD Mod across Men of War series.",
            tags: ["Game Dev", "3D Modeling"],
            year: "2015",
            githubUrl: null
        },
        {
            title: "Game Dev: Zombie Horde Survivors",
            slug: "zombie-horde-survivors",
            description: "Hybrid 3D squad shooter and real-time strategy game.",
            tags: ["TypeScript", "Three.js", "Vite", "Vitest", "WebGL"],
            year: "2026",
            githubUrl: "https://github.com/agustindiazcano/zombie-horde-survivors"
        },
        {
            title: "Agustin Diaz-Cano Portfolio",
            slug: "portfolio",
            description: "Personal website and portfolio built with Astro, React, and Tailwind CSS v4. Features server-side rendering, smooth transitions, and a modern aesthetic.",
            tags: ["Astro", "React", "Tailwind CSS", "Portfolio"],
            year: "2026",
            githubUrl: "https://github.com/agustindiazcano/agustindiazcano.com"
        }
];

// Newest first. Array.sort is stable, so projects from the same year keep the order above.
export const projects: Project[] = [...projectList].sort((a, b) => Number(b.year) - Number(a.year));

// Pages that exist but are not part of the public project lists above (linked from the profile page)
const unlistedPages: Project[] = [
    { slug: "ai-ml-research", title: "AI & ML Research", description: "A collection of academic experiments and proofs of concept focusing on physics simulations, neural networks, and optimization.", tags: ["AI", "ML", "Neural Networks", "Python"], year: "", githubUrl: null },
    { slug: "astrophysics-data-simulations", title: "Astrophysics Data Simulations", description: "Simulations of astrophysical phenomena and data analysis.", tags: ["Data Science", "Physics", "Python"], year: "", githubUrl: null },
    { slug: "go-async-order-processor", title: "Go Async Order Processor", description: "High-throughput asynchronous order processing engine built with Go.", tags: ["Backend", "Go", "Concurrency"], year: "", githubUrl: null },
    { slug: "agent-robot-fleets-logistics", title: "Agent robot fleets for logistics", description: "A safety and reliability control plane for LLM-directed warehouse robot fleets.", tags: ["AI", "Robotics", "Logistics", "Agentic Systems"], year: "", githubUrl: null },
];

// One entry per slug for the /projects/<slug> pages. Later entries win, so the listed projects override the unlisted ones,
// and for the three game-dev-modding listings the generic "Game Dev: Modding" entry (the last one) is the page.
export const projectPages: Project[] = [...new Map([...unlistedPages, ...projectList].map((p) => [p.slug, p])).values()];
