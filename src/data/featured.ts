export type FeaturedItem = {
    title: string;
    label: string;
    image: string;
    href: string;
};

export const featured: FeaturedItem[] = [
    {
        title: "MCP Transactional Agent",
        label: "AI Agents",
        image: "/images/images-projects/1-mcp.png",
        href: "/projects/mcp-transactional-agent",
    },
    {
        title: "Multi-Agent Mutation Testing",
        label: "Hackathon",
        image: "/images/images-projects/test-mind-home.png",
        href: "/projects/multi-agent-mutation-testing",
    },
    {
        title: "Anti-Fragile Agentic Workflow",
        label: "AFAW",
        image: "/images/images-projects/1-afaw.png",
        href: "/projects/afaw",
    },
    {
        title: "Memory-Constrained LLM Optimization",
        label: "LLMs",
        image: "/images/images-projects/llm-optimization.png",
        href: "/projects/memory-constrained-llm-optimization",
    },
    {
        title: "Game Dev: Modding",
        label: "Game Dev",
        image: "/images/images-projects/zombie-mod/call-to-arms-zombie-mod-1.png",
        href: "/projects/game-dev-modding",
    },
];
