export type NewsItem = {
    title: string;
    date: string;
    description: string;
    href?: string;
};

// Mock entries. Replace with real news; the home page shows the first 5 and /news lists all of them.
export const news: NewsItem[] = [
    {
        title: "Quantum wind farm optimizer takes 1st place Quantum Impact at the Qollab x IonQ hackathon",
        date: "Nov 2026",
        description: "QWind, a quantum optimizer for wind farms, wins the Quantum Impact (Industrial Application) track.",
        href: "/projects/wind-farm-quantum-optimization",
    },
    {
        title: "New case study: MCP Transactional Agent",
        date: "Oct 2026",
        description: "Architecture notes on a transactional agent built on the Model Context Protocol.",
        href: "/projects/mcp-transactional-agent",
    },
    {
        title: "Memory-constrained LLM optimization results published",
        date: "Sep 2026",
        description: "Benchmarks and trade-offs from running LLMs under tight memory budgets.",
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
    {
        title: "Mock: guest talk on production GenAI backends",
        date: "Aug 2026",
        description: "Placeholder entry to be replaced with a real announcement.",
    },
];
