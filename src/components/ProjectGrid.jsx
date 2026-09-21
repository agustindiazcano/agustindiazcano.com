import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectGrid = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const projects = [
        // ROW 1
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
            ]
        }
    ];

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-6 mb-32">
            {projects.map((project) => (
                <motion.div
                    key={project.id}
                    className={`relative group overflow-hidden bg-[#111] border border-[#222] rounded-xl flex flex-col justify-between p-8 ${project.size === "large" ? "md:col-span-2" : "md:col-span-1"
                        }`}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    {/* Clickable Overlay */}
                    <div
                        className="absolute inset-0 z-20 cursor-pointer"
                        onClick={() => setSelectedId(project.id)}
                    />

                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

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

                    <motion.div className="z-10 flex justify-between items-center mt-4">
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
                                className="text-[#666] hover:text-white transition-colors flex-shrink-0"
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
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.98, y: 10 }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full max-w-2xl bg-[#0a0a0a] border border-[#333] rounded-2xl overflow-hidden relative z-50 max-h-[90vh] flex flex-col shadow-2xl"
                            >
                                {(() => {
                                    const project = projects.find(p => p.id === selectedId);
                                    return (
                                        <>
                                            {/* Media Header Area */}
                                            <div className="bg-[#111] border-b border-[#222] flex items-center justify-between p-5 relative group">
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

                                            <div className="p-8 overflow-y-auto">
                                                <p className="text-[#999] mb-8 leading-relaxed text-sm md:text-base">
                                                    {project.longDescription}
                                                </p>

                                                <div className="mb-8">
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.tags.map(tag => (
                                                            <span key={tag} className="text-[#888] text-xs border border-[#333] px-2 py-1 rounded bg-[#111]">{tag}</span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="flex flex-col sm:flex-row gap-3 border-t border-[#222] pt-6">
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
                                        </>
                                    );
                                })()}
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </div>
    );
};

export default ProjectGrid;
