export type FeaturedItem = {
    title: string;
    label: string;
    /** Optional: without an image the card shows the grid pattern */
    image?: string;
    href: string;
    /** Optional external links shown as buttons under the card title; a button is only rendered when its URL is set */
    github?: string;
    gitlab?: string;
    youtube?: string;
    live?: string;
};

export const featured: FeaturedItem[] = [
    {
        title: "Multi-Agent AI Systems, Robotics & Mars Simulation",
        label: "Robotics, Vision & Voice Controls",
        image: "/images/images-projects/tango-horizon/1-tango-horizon-mars-base.png",
        href: "/projects/tango-horizon",
        github: "https://github.com/agustindiazcano/nasa-mars-tango-horizon",
        live: "https://tangohorizon.vercel.app/",
    },
    {
        title: "2D Robotics Simulation and Safety Control Plane for LLM-Directed Warehouse Fleets",
        label: "Robotics",
        href: "/projects/warehouse-fleets-safety-control-plane",
        github: "https://github.com/agustindiazcano/waggle-agents-meta-muse",
        live: "https://agustindiazcano.github.io/waggle-agents-meta-muse/",
    },
    {
        title: "MCP Transactional Agent",
        label: "AI Agents",
        image: "/images/images-projects/1-mcp.png",
        href: "/projects/mcp-transactional-agent",
        github: "https://github.com/agustindiazcano/mcp-transactional-agent",
    },
    {
        title: "Infection Chains in LLM Swarms: Spread, Detection and Layered Gating",
        label: "AI Safety",
        href: "/projects/infection-chains-llm-swarms",
        github: "https://github.com/agustindiazcano/apart-research-swarm-alignment",
        youtube: "https://youtu.be/HHjFbyk4vnM",
        live: "https://agustindiazcano.github.io/apart-research-swarm-alignment/",
    },
    {
        title: "Quantum Computing: Windfarm Optimization",
        label: "Quantum Computing",
        href: "/projects/wind-farm-quantum-optimization",
        github: "https://github.com/agustindiazcano/qwind-qaoa-windfarm",
        youtube: "https://www.youtube.com/watch?v=UGVkgYGXkF4",
        live: "https://agustindiazcano.github.io/qwind-qaoa-windfarm/",
    },
    {
        title: "Multi-Agent Mutation Testing",
        label: "Hackathon",
        image: "/images/images-projects/test-mind-home.png",
        href: "/projects/multi-agent-mutation-testing",
        github: "https://github.com/agustindiazcano/ibm-bob-mcp-agent-guard",
        youtube: "https://www.youtube.com/watch?v=m64qdd1axV0&t=6s",
        live: "https://ibm-bob-mcp-agent-guard.vercel.app/",
    },
    {
        title: "Anti-Fragile Agentic Workflow",
        label: "AFAW",
        image: "/images/images-projects/1-afaw.png",
        href: "/projects/afaw",
        github: "https://github.com/agustindiazcano/afaw-anti-fragile-agentic-workflow",
        live: "https://agustindiazcano.github.io/afaw-anti-fragile-agentic-workflow",
    },
    {
        title: "AFAW Engine: Full CI/CD, Hands-Free with Agents and Self-Healing",
        label: "CI/CD",
        href: "/projects/afaw-engine",
        github: "https://github.com/agustindiazcano/afaw-engine-gitlab",
        gitlab: "https://gitlab.com/gitlab-ai-hackathon/transcend-october-2026/43344247/showcase",
    },
    {
        title: "Memory-Constrained LLM Optimization",
        label: "LLMs",
        image: "/images/images-projects/llm-optimization.png",
        href: "/projects/memory-constrained-llm-optimization",
        github: "https://github.com/agustindiazcano/openai-llm-optimizers-parameter-golf",
    },
    {
        title: "Game Dev: Modding",
        label: "Game Dev",
        image: "/images/images-projects/zombie-mod/call-to-arms-zombie-mod-1.png",
        href: "/projects/game-dev-modding",
    },
];
