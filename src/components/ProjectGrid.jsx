import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectGrid = () => {
    const [selectedId, setSelectedId] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Algorithmic Trading Engine",
            subtitle: "Review C++ Architecture",
            description: "Sub-microsecond latency execution system designed for HFT markets.",
            longDescription: "A high-performance trading engine built in C++20 focusing on zero-copy network processing and lock-free data structures. Implements genetic algorithms in Python for strategy optimization before deployment.",
            tags: ["C++", "Python", "Genetic Algos"],
            size: "large",
            stats: "Latency: 400ns | Uptime: 99.999%",
            features: [
                "Kernel bypass networking (DPDK)",
                "Shared memory ring buffers",
                "SIMD optimized matching engine"
            ]
        },
        {
            id: 2,
            title: "Zombie Mod 5",
            subtitle: "View Gameplay & Stats",
            description: "200k+ Active Users.",
            longDescription: "A massive multiplayer mod demonstrating the capacity to handle high concurrency and complex state synchronization. Managed community servers and orchestrated deployment pipelines.",
            tags: ["Game Dev", "Lua"],
            size: "medium",
            stats: "200k Users | 500+ Servers",
            features: [
                "Lag compensation networking",
                "Entity component system architecture",
                "Automated anti-cheat heuristics"
            ]
        },
        {
            id: 3,
            title: "WASM Engine",
            subtitle: "Run in Browser",
            description: "C++ Game Engine on Web.",
            longDescription: "Porting a custom C++ game engine to WebAssembly to demonstrate native performance in the browser. Handles WebGL rendering and multi-threaded physics.",
            tags: ["C++", "WASM", "WebGL"],
            size: "small",
            stats: "60 FPS @ 4K | <5MB Binary",
            features: [
                "Emscripten toolchain optimization",
                "WebGL 2.0 renderer backend",
                "Asset streaming system"
            ]
        },
        {
            id: 4,
            title: "MSc in Engineering",
            subtitle: "View Thesis Details",
            description: "Specialization in Systems Engineering.",
            longDescription: "Focusing on the intersection of biological computing (Genetic Algorithms) and financial market efficiency. Thesis explores fuzzy logic applications in high-frequency order routing.",
            tags: ["Research", "HFT"],
            size: "large",
            stats: "Thesis Phase | Candidate",
            features: [
                "Genetic Algorithms Application",
                "Fuzzy Logic Control Systems",
                "Market Microstructure Analysis"
            ]
        }
    ];

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-6 mb-32">
            {projects.map((project) => (
                <motion.div
                    layoutId={project.id}
                    key={project.id}
                    onClick={() => setSelectedId(project.id)}
                    className={`relative group overflow-hidden bg-[#111] border border-[#222] rounded-xl cursor-pointer hover:border-[#444] transition-colors p-8 flex flex-col justify-between ${project.size === "large" ? "md:col-span-2" : "md:col-span-1"
                        }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <motion.div className="z-10">
                        {project.id === 4 ? (
                            <>
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <motion.h3 className="text-xl font-semibold text-white">MSc in Engineering</motion.h3>
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
                                <motion.h3 className="text-2xl font-semibold text-white mb-2">{project.title}</motion.h3>
                                <motion.p className="text-[#888]">{project.description}</motion.p>
                            </>
                        )}
                    </motion.div>

                    <motion.div className="z-10 flex gap-2 mt-4">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-xs text-[#666] border border-[#333] px-2 py-1 rounded-full">{tag}</span>
                        ))}
                    </motion.div>

                    {/* Hover Overlay */}
                    <motion.div
                        className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]"
                    >
                        <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                            {project.subtitle} ↗
                        </span>
                    </motion.div>

                    {project.id === 4 && (
                        <div className="absolute right-0 bottom-0 text-9xl font-bold text-[#222] opacity-20 -mb-4 -mr-4 select-none">MSc</div>
                    )}
                </motion.div>
            ))}

            <AnimatePresence>
                {selectedId && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" style={{ pointerEvents: 'auto' }}>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />

                        {/* Modal Card */}
                        <motion.div
                            layoutId={selectedId}
                            className="w-full max-w-2xl bg-[#0a0a0a] border border-[#333] rounded-2xl overflow-hidden relative z-10 max-h-[90vh] flex flex-col"
                        >
                            {(() => {
                                const project = projects.find(p => p.id === selectedId);
                                return (
                                    <>
                                        {/* Media Header Area */}
                                        <div className="h-64 bg-[#111] border-b border-[#222] flex items-center justify-center relative group">
                                            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                                            {project.id === 1 ? (
                                                <div className="font-mono text-xs text-green-500 p-8 w-full h-full overflow-hidden opacity-70">
                                                    &gt; initializing execution engine...<br />
                                                    &gt; optimizating routing tables... DONE<br />
                                                    &gt; connecting to market data feed... CONNECTED<br />
                                                    &gt; latency check: 400ns... OK<br />
                                                    <span className="animate-pulse">_</span>
                                                </div>
                                            ) : project.id === 2 ? (
                                                <div className="text-[#333] font-bold text-4xl">VIDEO PLACEHOLDER</div>
                                            ) : (
                                                <div className="text-[#333] font-bold text-4xl">{project.title}</div>
                                            )}

                                            <button
                                                onClick={() => setSelectedId(null)}
                                                className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md transition-colors"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 18 18" /></svg>
                                            </button>
                                        </div>

                                        <div className="p-8 overflow-y-auto">
                                            <div className="flex justify-between items-baseline mb-2">
                                                <motion.h2 className="text-3xl font-bold text-white">{project.title}</motion.h2>
                                                <span className="font-mono text-blue-400 text-sm">{project.stats}</span>
                                            </div>

                                            <p className="text-[#999] mb-8 leading-relaxed">
                                                {project.longDescription}
                                            </p>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                                <div>
                                                    <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">Key Features</h4>
                                                    <ul className="space-y-2">
                                                        {project.features.map(feature => (
                                                            <li key={feature} className="text-[#666] text-sm flex items-center gap-2">
                                                                <span className="w-1.5 h-1.5 bg-blue-500/50 rounded-full"></span> {feature}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">Tech Stack</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.tags.map(tag => (
                                                            <span key={tag} className="text-[#888] text-xs border border-[#333] px-2 py-1 rounded bg-[#111]">{tag}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex gap-4 border-t border-[#222] pt-6">
                                                <button className="flex-1 bg-white text-black font-semibold py-3 rounded-lg hover:bg-[#ccc] transition-colors">
                                                    {project.id === 2 ? "Download Mod" : "View Source"}
                                                </button>
                                                <button className="flex-1 bg-[#111] text-white border border-[#333] font-semibold py-3 rounded-lg hover:bg-[#222] transition-colors">
                                                    Case Study
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                );
                            })()}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProjectGrid;
