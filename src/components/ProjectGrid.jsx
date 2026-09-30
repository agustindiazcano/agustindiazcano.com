import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectGrid = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [mounted, setMounted] = useState(false);
    const [currentChunk, setCurrentChunk] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        setCurrentImageIndex(0);
    }, [selectedId]);

    const carouselItems = ["Hello Auto", "Discouy", "Devotouy", "Geant", "Altix", "Stronger", "Factor MX", "Visma", "Stronger", "Dermalink MX", "Korium", "Toto", "Techo", "Zombie Mod", "HD Mod"];
    const chunkedItems = [];
    for (let i = 0; i < carouselItems.length; i += 5) {
        chunkedItems.push(carouselItems.slice(i, i + 5));
    }

    useEffect(() => {
        setMounted(true);
        const interval = setInterval(() => {
            setCurrentChunk(prev => (prev + 1) % chunkedItems.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [chunkedItems.length]);

    const projects = [
        // ROW 1
        {
            id: 16,
            title: "Multi-Agent Mutation Testing System (MCP)",
            slug: "multi-agent-mutation-testing",
            subtitle: "View Hackathon Project",
            description: (
                <div className="flex flex-col gap-1.5 mt-2">
                    <span className="flex items-start gap-2 text-sm text-[#888]">
                        <span className="w-1 h-1 rounded-full bg-[#555] mt-2 flex-shrink-0"></span>
                        <span>Built from scratch in 48 hours for the IBM AI Hackathon.</span>
                    </span>
                    <span className="flex items-start gap-2 text-sm text-[#888]">
                        <span className="w-1 h-1 rounded-full bg-[#555] mt-2 flex-shrink-0"></span>
                        <span>Full CI/CD, WIF, Terraform, Google Cloud, Full Stack + AI.</span>
                    </span>
                    <span className="flex items-start gap-2 text-sm text-[#888]">
                        <span className="w-1 h-1 rounded-full bg-[#555] mt-2 flex-shrink-0"></span>
                        <span>One of 1,124 successful submissions out of 3,464 teams (15,727 participants) — Top 32%.</span>
                    </span>
                </div>
            ),
            longDescription: (
                <div className="space-y-4">
                    <p>Built from scratch in 48 hours for the IBM AI Hackathon, this project introduces a Multi-Agent Mutation Testing System (MCP).</p>
                    <p>It leverages Full CI/CD, Workload Identity Federation (WIF), Terraform, and Google Cloud, combining Full Stack development with AI capabilities.</p>
                    <p>Out of 3,464 teams and 15,727 participants, this was one of 1,124 successful submissions, placing it in the top 32%.</p>
                </div>
            ),
            tags: ["Hackathon", "IBM", "AI", "Google Cloud", "Terraform", "CI/CD"],
            size: "medium",
            stats: "Top 32%",
            videoUrl: "https://www.youtube.com/embed/m64qdd1axV0",
            imageUrl: "/images/images-projects/test-mind-home.png",
            features: [
                "Built in 48 hours",
                "Full Stack + AI"
            ],
            links: [
                {
                    label: "GitHub Repo",
                    url: "https://github.com/agustindiazcano/ibm-bob-mcp-agent-guard",
                    primary: true,
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    )
                },
                {
                    label: "Live Demo",
                    url: "https://ibm-bob-mcp-agent-guard.vercel.app/",
                    primary: false,
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    )
                },
                {
                    label: "Hackathon",
                    url: "https://lablab.ai/ai-hackathons/ibm-bob-2-hackathon",
                    primary: false
                }
            ]
        },
        {
            id: 15,
            title: "Anti-Fragile Agentic Workflow (AFAW)",
            slug: "afaw",
            subtitle: "View Case Study",
            description: (
                <div className="flex flex-col gap-1.5">
                    <span>A practical methodology and boilerplate for running several coding agents in parallel without collisions.</span>
                    <span className="flex items-center gap-2 text-sm text-[#777]">
                        <span className="w-1 h-1 rounded-full bg-[#555]"></span>
                        AI-Assisted Development framework.
                    </span>
                </div>
            ),
            longDescription: (
                <div className="space-y-4">
                    <p>This is a practical methodology and boilerplate for running several coding agents in parallel on the same repository without them colliding, overwriting shared state, or writing vacuous tests.</p>
                    <p>The core premise: Instead of trying to fully automate everything with a swarm of agents (which tends to burn a lot of tokens and still needs heavy supervision), this workflow keeps a human in the loop. The AI proposes, deterministic tools measure. A human still approves every merge.</p>
                    <p>To make this work, I implemented two main constraints:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><strong>AST Mutation Testing on CI diffs:</strong> CI injects mutants into the modified files. If the agent's test fails to catch the mutation, the PR is automatically blocked.</li>
                        <li><strong>Isolated Context Updates:</strong> Agents are forbidden from editing the same global context files. Each agent writes a separate update file for its task, and CI merges them all together post-PR to prevent git conflicts.</li>
                    </ul>
                </div>
            ),
            tags: ["AI", "CI/CD", "Agents", "Testing"],
            size: "medium",
            stats: "",
            features: [
                "AST Mutation Testing",
                "Isolated Context Updates"
            ],
            links: [
                {
                    label: "View on GitHub",
                    url: "https://github.com/agustindiazcano/anti-fragile-agentic-workflow",
                    primary: true,
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    )
                }
            ]
        },
        {
            id: 9,
            title: "MCP Transactional Agent",
            slug: "mcp-transactional-agent",
            subtitle: "View Case Study",
            description: "Event-driven AI agentic engine. Features MCP tool sandboxing, RabbitMQ asynchronous routing, strict ACID idempotency, and LLM-as-a-Judge guardrails.",
            longDescription: (
                <div className="space-y-4">
                    <p>Event-driven AI agentic engine. Features MCP tool sandboxing, RabbitMQ asynchronous routing, strict ACID idempotency, and LLM-as-a-Judge guardrails.</p>
                    <p>Beyond the core transactional engine, this project explores a second question: how much of an AI system's decision-making can be made deterministic and auditable, instead of purely probabilistic? Phases 2 and 3 extend the engine with a confidence layer (fuzzy logic + rule-based expert system) and a production observability layer (Kalman filtering over quality metrics), moving the system progressively from "trust the LLM's judgment" toward "trust an explicit, inspectable mechanism, and use the LLM only where symbolic reasoning cannot substitute for it."</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Tracing and Real-Time Observability with TruLens</li>
                        <li>Regression Testing and CI/CD with promptfoo</li>
                    </ul>
                </div>
            ),
            tags: ["AI", "LLMs", "PostgreSQL", "FastAPI", "RabbitMQ", "AWS Bedrock", "GCP Vertex AI", "LangGraph", "LangChain", "MCP", "RAG", "Groq", "Docker"],
            size: "medium",
            stats: "",
            features: [
                "Autonomous tool execution",
                "Model Context Protocol integration"
            ],
            links: [
                {
                    label: "View on GitHub",
                    url: "https://github.com/agustindiazcano/mcp-transactional-agent",
                    primary: true,
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    )
                },
                {
                    label: "Deterministic Roadmap",
                    url: "https://github.com/agustindiazcano/mcp-transactional-agent/blob/main/docs/deterministic_guardrails_roadmap.md",
                    primary: false
                },
                {
                    label: "Testing",
                    url: "https://github.com/agustindiazcano/mcp-transactional-agent/tree/main/docs/testing",
                    primary: false
                }
            ]
        },
        {
            id: 14,
            title: "Memory-Constrained LLM Optimization",
            slug: "memory-constrained-llm-optimization",
            subtitle: "View Details",
            description: "Exploration into memory-constrained LLM optimization using OpenAI APIs and parameter golf techniques.",
            longDescription: "An exploration into memory-constrained LLM optimization using OpenAI APIs and parameter golf techniques to minimize footprint while preserving performance.",
            tags: ["AI", "LLMs", "Optimization", "Python"],
            size: "medium",
            stats: "",
            features: [
                "Parameter golf techniques",
                "OpenAI API integration"
            ],
            links: [
                {
                    label: "View on GitHub",
                    url: "https://github.com/agustindiazcano/openai-llm-optimizers-parameter-golf",
                    primary: true,
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    )
                }
            ]
        },
        {
            id: 8,
            title: "Algorithmic Trading Engine",
            slug: "algorithmic-trading-engine",
            subtitle: "View Architecture",
            description: "Automated trading system for financial markets.",
            longDescription: "Developed a high-performance algorithmic trading engine capable of processing market data and executing trades with low latency.",
            tags: ["Fintech", "Python", "Trading"],
            size: "medium",
            stats: "",
            features: [
                "Low latency execution",
                "Real-time data ingestion"
            ],
            links: [
                {
                    label: "View on GitHub",
                    url: "https://github.com/agustindiazcano/algorithmic-trading-engine",
                    primary: true,
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    )
                }
            ]
        },
        {
            id: 10,
            title: "AI & ML Research",
            slug: "ai-ml-research",
            subtitle: "View Experiments",
            description: "A collection of academic experiments and proofs of concept focusing on physics simulations, neural networks, and optimization.",
            longDescription: "A collection of academic experiments and proofs of concept focusing on physics simulations, neural networks, and optimization. Investigated advanced concepts in autonomous agents and complex system modeling.",
            tags: ["AI", "ML", "Neural Networks", "Python"],
            size: "medium",
            stats: "",
            features: [
                "Physics simulations",
                "Deep reinforcement learning"
            ],
            links: [
                {
                    label: "View on GitHub",
                    url: "https://github.com/agustindiazcano/ai-ml-research",
                    primary: true,
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    )
                }
            ]
        },
        // ROW 2
        {
            id: 11,
            title: "Astrophysics Data Simulations",
            slug: "astrophysics-data-simulations",
            subtitle: "View Details",
            description: "Simulations of astrophysical phenomena and data analysis.",
            longDescription: "Developed robust simulations to model complex astrophysics systems, analyzing large datasets for scientific research.",
            tags: ["Data Science", "Physics", "Python"],
            size: "medium",
            stats: "",
            features: [
                "Large scale data processing",
                "High performance computing"
            ],
            links: [
                {
                    label: "View on GitHub",
                    url: "https://github.com/agustindiazcano/astrophysics-data-simulations",
                    primary: true,
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    )
                }
            ]
        },
        {
            id: 6,
            title: "LATAM E-commerce Ecosystem",
            slug: "ecommerce-latam",
            subtitle: "View Case Study",
            description: "E-commerce platform for the Latin American market.",
            longDescription: "Developed a scalable and localized e-commerce solution tailored for LATAM, handling complex payment gateways and shipping logistics.",
            tags: ["Web Dev", "E-commerce", "React"],
            size: "medium",
            stats: "",
            features: [
                "Localized payment integrations",
                "Scalable architecture"
            ]
        },
        {
            id: 7,
            title: "InsurTech Quoting Engine",
            slug: "insurance-quoter",
            subtitle: "View Architecture",
            description: "Dynamic insurance quoting engine and frontend.",
            longDescription: "Built a robust quoting engine and an intuitive user interface for calculating insurance premiums in real-time based on risk factors.",
            tags: ["Fintech", "TypeScript", "React"],
            size: "medium",
            stats: "",
            features: [
                "Real-time calculation engine",
                "Dynamic form generation"
            ]
        },
        {
            id: 13,
            title: "Go Async Order Processor",
            slug: "go-async-order-processor",
            subtitle: "View Architecture",
            description: "High-throughput asynchronous order processing engine built with Go.",
            longDescription: "A concurrent order processing system demonstrating advanced Go patterns, channels, and goroutines to handle high-volume transactional workloads efficiently.",
            tags: ["Backend", "Go", "Concurrency"],
            size: "medium",
            stats: "",
            features: [
                "Goroutine-based concurrency",
                "High-throughput processing"
            ],
            links: [
                {
                    label: "View on GitHub",
                    url: "https://github.com/agustindiazcano/go-async-order-processor",
                    primary: true,
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    )
                }
            ]
        },
        // ROW 3
        {
            id: 2,
            title: "Game Dev: Modding Ecosystem",
            slug: "game-dev-modding",
            subtitle: "View Gameplay & Stats",
            description: "220,000+ Downloads. Combining Zombie Mod and HD Mod across Men of War series.",
            longDescription: "A massive multiplayer mod ecosystem demonstrating the capacity to handle high concurrency and complex state synchronization. Replaces low-resolution assets with HD textures and detailed models while maintaining performance.",
            tags: ["Game Dev", "3D Modeling"],
            size: "large",
            stats: "220k+ Downloads",
            features: [
                "Lag compensation networking",
                "Entity component system architecture",
                "HD Texture replacements"
            ]
        },
        {
            id: 12,
            title: "Alien Survival",
            slug: "alien-survival",
            subtitle: "View Details",
            description: "Survival game focusing on resource management and base building.",
            longDescription: "Created a challenging survival game where players must defend against alien swarms while managing limited resources and building base defenses.",
            tags: ["Game Dev", "C#", "Unity"],
            size: "medium",
            stats: "",
            features: [
                "Dynamic wave generation",
                "Resource management mechanics"
            ],
            links: [
                {
                    label: "View on GitHub",
                    url: "https://github.com/agustindiazcano/biomass",
                    primary: true,
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    )
                }
            ]
        }
    ];

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
            {projects.map((project, index) => (
                <React.Fragment key={project.id}>
                    <motion.div
                        className={`h-[300px] relative group overflow-hidden bg-[#111] border border-[#222] rounded-xl flex flex-col justify-between p-8 ${project.size === "large" ? "md:col-span-2" : "md:col-span-1"
                            }`}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        {/* Clickable Overlay */}
                        <div
                            className="absolute inset-0 z-20 cursor-pointer"
                        onClick={() => setSelectedId(project.id)}
                    />

                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Floating Hover Image */}
                    {project.imageUrl && (
                        <div className="absolute top-6 right-6 w-96 h-60 rounded-lg overflow-hidden border border-[#333] opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100 z-50 shadow-2xl pointer-events-none hidden md:block bg-black">
                            <img src={project.imageUrl} alt="" className="w-full h-full object-contain" />
                        </div>
                    )}

                    <motion.div className="z-10">
                        {project.id === 4 ? (
                            <>
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <motion.h3 className="font-display text-xl font-normal text-white">MSc in Engineering</motion.h3>
                                        <p className="text-[#888] text-sm">Universidad Tecnológica Nacional</p>
                                    </div>
                                    <span className="text-xs font-mono text-white/50 border border-white/10 px-2 py-1 rounded">Thesis Phase</span>
                                </div>

                                <p className="text-[#666] uppercase text-xs tracking-wider font-semibold mb-6">
                                    Specialization in Systems Engineering
                                </p>

                                <div className="space-y-3 text-sm text-[#888]">
                                    <p className="flex items-center gap-3">
                                        <span className="text-lg">🔬</span> <span>Focus: <span className="text-white">Genetic Algorithms</span></span>
                                    </p>
                                </div>
                            </>
                        ) : (
                            <>
                                <motion.h3 className="font-display text-2xl font-normal text-white mb-2">{project.title}</motion.h3>
                                <motion.p className="text-[#888]">{project.description}</motion.p>
                            </>
                        )}
                    </motion.div>

                    <motion.div className="relative z-30 flex justify-between items-center mt-4 pointer-events-none">
                        <div className="flex flex-wrap gap-2 pr-2">
                            {project.tags.slice(0, 3).map(tag => (
                                <span key={tag} className="text-xs text-[#666] border border-[#333] px-2 py-1 rounded-full whitespace-nowrap">{tag}</span>
                            ))}
                            {project.tags.length > 3 && (
                                <span className="text-xs text-[#444] px-1 py-1 whitespace-nowrap">+{project.tags.length - 3}</span>
                            )}
                        </div>
                        {![6, 7, 2, 4].includes(project.id) && (
                            <a
                                href={project.links?.[0]?.url || "https://github.com/agustindiazcano"}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-[#666] hover:text-white transition-colors flex-shrink-0 pointer-events-auto relative after:absolute after:-inset-8"
                                title="View on GitHub"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                            </a>
                        )}
                    </motion.div>

                    {project.id === 4 && (
                        <div className="absolute right-0 bottom-0 text-9xl font-bold text-[#222] opacity-20 -mb-4 -mr-4 select-none">MSc</div>
                    )}
                </motion.div>
                {false && index === 2 && (
                    <div className="md:col-span-3 w-full h-12 flex items-center overflow-hidden bg-[#0a0a0a] border-y border-[#222] relative my-2 px-6">
                        <span className="text-[#555] text-xs uppercase tracking-widest font-semibold mr-8 whitespace-nowrap">Production Projects</span>
                        <div className="flex-1 relative h-full flex items-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentChunk}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="grid grid-cols-5 w-full text-[#888] font-mono text-sm uppercase tracking-wider items-center absolute"
                                >
                                    {chunkedItems[currentChunk]?.map((item, i) => (
                                        <span 
                                            key={i} 
                                            className={`whitespace-nowrap ${i === 0 ? 'text-left' : i === 4 ? 'text-right' : 'text-center'}`}
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                )}
                </React.Fragment>
            ))}

            {mounted && createPortal(
                <AnimatePresence>
                    {selectedId && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center px-4" style={{ pointerEvents: 'auto' }}>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="absolute inset-0 bg-black/95 z-0"
                            />

                            {/* Modal Card */}
                            {(() => {
                                const project = projects.find(p => p.id === selectedId);
                                if (!project) return null;
                                const imagesArray = project.images || (project.imageUrl ? [project.imageUrl] : []);
                                const hasMedia = project.videoUrl || imagesArray.length > 0;

                                return (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.98, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.98, y: 10 }}
                                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                        className={`w-full ${hasMedia ? "max-w-[1200px]" : "max-w-2xl"} bg-[#0a0a0a] border border-[#333] rounded-2xl overflow-hidden relative z-50 max-h-[90vh] flex flex-col md:flex-row shadow-2xl`}
                                    >
                                        {hasMedia && (
                                            <div className="md:w-1/2 bg-[#050505] flex flex-col h-full max-h-[90vh] overflow-y-auto relative border-b md:border-b-0 md:border-r border-[#222]">
                                                {project.videoUrl && (
                                                    <div className="w-full aspect-video border-b border-[#222] flex-shrink-0">
                                                        <iframe width="100%" height="100%" src={project.videoUrl} title="Video Preview" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                    </div>
                                                )}
                                                {imagesArray.length > 0 && (
                                                    <div className="w-full p-4 flex-1 flex items-center justify-center min-h-[300px] relative group/carousel">
                                                        <img src={imagesArray[currentImageIndex] || imagesArray[0]} alt={project.title} className="max-w-full max-h-full object-contain rounded-lg border border-[#222]" />
                                                        {imagesArray.length > 1 && (
                                                            <>
                                                                <button 
                                                                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(prev => prev === 0 ? imagesArray.length - 1 : prev - 1); }}
                                                                    className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-black/90 border border-[#333] rounded-full flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity z-20"
                                                                >
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                                                                </button>
                                                                <button 
                                                                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(prev => (prev + 1) % imagesArray.length); }}
                                                                    className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-black/90 border border-[#333] rounded-full flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity z-20"
                                                                >
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                                                                </button>
                                                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                                                                    {imagesArray.map((_, idx) => (
                                                                        <button 
                                                                            key={idx}
                                                                            onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                                                                            className={`w-2 h-2 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-white' : 'bg-white/30 hover:bg-white/60'}`}
                                                                        />
                                                                    ))}
                                                                </div>
                                                            </>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                        
                                        <div className={`flex flex-col h-full max-h-[90vh] ${hasMedia ? "md:w-1/2" : "w-full"}`}>
                                            {/* Media Header Area */}
                                            <div className="bg-[#111] border-b border-[#222] flex items-center justify-between p-5 relative group flex-shrink-0">
                                                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none"></div>
                                                
                                                <div className="flex flex-col relative z-10 pl-2">
                                                    <motion.h2 className="font-display text-xl font-bold text-white">{project.title}</motion.h2>
                                                    {project.stats && (
                                                        <span className="font-mono text-blue-400 text-xs mt-1">{project.stats}</span>
                                                    )}
                                                </div>

                                                <button
                                                    onClick={() => setSelectedId(null)}
                                                    className="relative z-20 text-[#888] hover:text-white p-2 rounded-full transition-colors flex-shrink-0"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 18 18" /></svg>
                                                </button>
                                            </div>

                                            <div className="p-8 overflow-y-auto flex-1">
                                                <div className="text-[#999] mb-8 leading-relaxed text-sm md:text-base">
                                                    {project.longDescription}
                                                </div>

                                                <div className="mb-8">
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.tags.map(tag => (
                                                            <span key={tag} className="text-[#888] text-xs border border-[#333] px-2 py-1 rounded bg-[#111]">{tag}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="bg-[#111] border-t border-[#222] p-5 flex flex-col sm:flex-row gap-3 flex-shrink-0 mt-auto">
                                                {project.links ? (
                                                    project.links.map((link, idx) => (
                                                        <a
                                                            key={idx}
                                                            href={link.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={`flex-1 flex items-center justify-center gap-2 font-semibold py-3 px-4 rounded-lg transition-colors text-center text-sm ${
                                                                link.primary 
                                                                    ? "bg-white text-black hover:bg-[#ccc]" 
                                                                    : "bg-[#111] text-white border border-[#333] hover:bg-[#222]"
                                                            }`}
                                                        >
                                                            {link.icon && link.icon}
                                                            {link.label}
                                                        </a>
                                                    ))
                                                ) : (
                                                    <>
                                                        <button className="flex-1 bg-white text-black font-semibold py-3 rounded-lg hover:bg-[#ccc] transition-colors text-sm">
                                                            {project.id === 2 ? "Download Mod" : "View Source"}
                                                        </button>
                                                        <a
                                                            href={`/projects/${project.slug}`}
                                                            className="flex-1 bg-[#111] text-white border border-[#333] font-semibold py-3 rounded-lg hover:bg-[#222] transition-colors text-center text-sm"
                                                        >
                                                            View Project
                                                        </a>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })()}
                        </div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </div>
    );
};

export default ProjectGrid;
