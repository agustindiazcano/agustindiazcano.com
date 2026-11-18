export type Project = {
    title: string;
    slug: string;
    description: string;
    tags: string[];
    year: string;
    githubUrl: string | null;
    image?: string;
};

// Source for the /projects page and the home page projects section (mirrors [slug].astro)
export const projects: Project[] = [
        {
            title: "MCP Transactional Agent",
            slug: "mcp-transactional-agent",
            image: "/images/images-projects/1-mcp.png",
            description: "Event-driven AI agentic engine. Features MCP tool sandboxing, RabbitMQ asynchronous routing, strict ACID idempotency, and LLM-as-a-Judge guardrails.",
            tags: ["AI", "LLMs", "PostgreSQL", "FastAPI", "RabbitMQ", "AWS Bedrock", "GCP Vertex AI", "LangGraph", "LangChain", "MCP", "RAG", "Groq", "Docker"],
            year: "2026",
            githubUrl: "https://github.com/agustindiazcano/mcp-transactional-agent"
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
            githubUrl: "https://github.com/agustindiazcano/qwind-qaoa-windfarm"
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
            title: "AI & ML Research",
            slug: "ai-ml-research",
            description: "A collection of academic experiments and proofs of concept focusing on physics simulations, neural networks, and optimization.",
            tags: ["AI", "ML", "Neural Networks", "Python"],
            year: "2024",
            githubUrl: "https://github.com/agustindiazcano/ai-ml-research"
        },
        {
            title: "Astrophysics Data Simulations",
            slug: "astrophysics-data-simulations",
            description: "Simulations of astrophysical phenomena and data analysis.",
            tags: ["Data Science", "Physics", "Python"],
            year: "2023",
            githubUrl: "https://github.com/agustindiazcano/astrophysics-data-simulations"
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
            title: "Game Dev: Modding",
            slug: "game-dev-modding",
            image: "/images/images-projects/zombie-mod/call-to-arms-zombie-mod-1.png",
            description: "220,000+ Downloads. Combining Zombie Mod and HD Mod across Men of War series.",
            tags: ["Game Dev", "3D Modeling"],
            year: "2015",
            githubUrl: null
        },
        {
            title: "Zombie Horde Survivors: Hybrid 3D Squad Shooter & Real-Time Strategy Game",
            slug: "zombie-horde-survivors",
            description: "3D survival game, RTS",
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
