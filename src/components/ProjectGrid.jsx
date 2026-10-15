import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectGrid = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [mounted, setMounted] = useState(false);
    const [currentChunk, setCurrentChunk] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeTab, setActiveTab] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [viewMode, setViewMode] = useState('cards');
    const [categoryFilter, setCategoryFilter] = useState('all');

    useEffect(() => {
        try {
            const saved = localStorage.getItem('projectViewMode');
            if (saved === 'list' || saved === 'cards') setViewMode(saved);
        } catch (e) {}
    }, []);

    const changeViewMode = (mode) => {
        setViewMode(mode);
        try { localStorage.setItem('projectViewMode', mode); } catch (e) {}
    };
    const isList = viewMode === 'list';

    useEffect(() => {
        setCurrentImageIndex(0);
        setActiveTab(0);
        setIsLightboxOpen(false);
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
            imageUrl: "/images/images-projects/1-mcp.png",
            images: [
                "/images/images-projects/1-mcp.png",
                "/images/images-projects/2-mcp.png",
                "/images/images-projects/3-mcp.png"
            ],
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
            id: 17,
            title: "Argentina 2056: Data Visualization, 3D Visualization and Economic Analysis",
            slug: "argentina-2056",
            subtitle: "View Details",
            description: "Interactive data visualization of the Crossing of the Andes (1817), Argentina's current economy, and a projection towards 2056 with the impact of AI on the economy.",
            longDescription: (
                <div className="space-y-4">
                    <p><strong>Overview.</strong> Argentina 2056 is an interactive data visualization and storytelling platform that approaches Argentina's history and economic future from two complementary angles: the logistical feat of the Crossing of the Andes (1817), rendered in 3D, and a rigorous analysis of real macroeconomic series from 1960 with international projections toward 2056. The whole project follows open-data principles, source traceability with no artificial interpolation of missing data, and end-to-end reproducibility.</p>
                    <p><strong>Project architecture</strong></p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>The Crossing of the Andes (1817):</strong> 3D geospatial and tactical viewer with real topography, column trajectories, a camera system, an interactive timeline, an elevation profile and a recreation of the Battle of Chacabuco.</li>
                        <li><strong>Towards 2056 (14 data chapters):</strong> Interactive analysis of historical real GDP series (constant 2015 USD), global ranking evolution, productivity, exports by complex, provincial distribution, hydrocarbons and mining. Includes a mathematical growth-rate simulator (log-linear regression, point-to-point rates and exact GDP doubling time) contrasted with fast-growth cases (South Korea, China, India) and developed economies (USA).</li>
                        <li><strong>Open Data Explorer (/data):</strong> Auditable catalog with direct access to the tables behind each visualization, CSV download and source metadata.</li>
                    </ul>
                    <p><strong>Engineering and tech stack</strong></p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Frontend and visualization (strict TypeScript):</strong> Built with React 19, Vite, Zustand and GSAP. Hybrid graphics rendering combining Three.js (3D scenes), ECharts (dynamic statistical charts on linear and logarithmic scales) and MapLibre GL (2D/3D vector cartography). Every chart ships with an alternative data table and full keyboard navigation.</li>
                        <li><strong>Data pipeline (Python 3.12):</strong> Pure-adapter architecture built on the Python standard library, NumPy (cohort-based demographic modeling) and jsonschema. The pipeline ingests raw data (World Bank, IMF, OECD, UN, INDEC, the Energy and Mining Secretariats, USGS), records every file with a cryptographic hash, date and origin, validates data contracts and compiles reproducible static outputs without relying on heavy libraries.</li>
                        <li><strong>Statistical engine (pure TypeScript):</strong> Decoupled module of side-effect-free functions for exact doubling-time calculation, log-linear regressions (R² and residual analysis) and rolling windows.</li>
                        <li><strong>Quality, testing and CI/CD:</strong> Developed under TDD. Unit tests in Python (pytest) and TypeScript (Vitest), E2E and automated accessibility tests with Playwright + axe-core, strict linting (Ruff and ESLint), bundle performance budgets, and continuous integration on GitHub Actions with deployment to Vercel.</li>
                    </ul>
                </div>
            ),
            tags: ["TypeScript", "Python", "React 19", "Three.js", "ECharts", "MapLibre GL", "Zustand", "NumPy", "Pytest", "Vitest", "Playwright", "GitHub Actions"],
            size: "medium",
            stats: "",
            features: [
                "3D reconstruction of the Crossing of the Andes",
                "Reproducible macroeconomic analysis with SHA-256 source traceability"
            ],
            links: [
                {
                    label: "View on GitHub",
                    url: "https://github.com/agustindiazcano/arg-2056-udesa",
                    primary: true,
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    )
                },
                {
                    label: "Live Site",
                    url: "https://argentina2056.vercel.app/",
                    primary: false
                }
            ]
        },
        {
            id: 18,
            title: "Wind Farm Optimization on Quantum Computing",
            slug: "wind-farm-quantum-optimization",
            subtitle: "View Details",
            description: "Constraint-preserving quantum optimization (XY-mixer QAOA) that minimizes wake losses during wind farm curtailment, validated on IonQ Forte 1 trapped-ion hardware.",
            longDescription: (
                <div className="space-y-4">
                    <p><strong>Overview.</strong> When a wind farm must temporarily reduce its output because of grid limits or maintenance (curtailment), shutting down the wrong combination of turbines wastes energy because of the wake effect: the cone of slow, turbulent air that every active turbine leaves behind it. Choosing exactly K active turbines out of N positions is a combinatorial optimization problem whose search space scales as C(N, K).</p>
                    <p>QWind tackles this problem by formulating a cost Hamiltonian based on wake physics and solving it with a variational quantum circuit (QAOA) designed to preserve, by symmetry, the exact number of active turbines. It comes with a reproducible experimental protocol that compares its performance against classical methods and strict statistical controls, including a run on the IonQ Forte 1 trapped-ion quantum computer. Built for the Qollab x IonQ Global Quantum Hackathon (Professional Track, UNICEN Node).</p>
                    <p><strong>Physical, mathematical and quantum architecture</strong></p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Physical modeling and QUBO / Ising formulation:</strong> Implementation of the analytical Jensen/Park (top-hat) velocity deficit model, weighted by 16-sector wind roses (frequency and direction). Pairwise turbine losses are mapped to a QUBO matrix, <code>{"E(x) = sum_i h_i x_i + sum_(i<j) J_ij x_i x_j + lambda (sum_i x_i - K)^2"}</code>, and transformed exactly into a sparse Pauli operator (SparsePauliOp) through the Ising mapping <code>{"x_i = (1 - Z_i) / 2"}</code>.</li>
                        <li><strong>Constraint-preserving quantum ansatz (XY-QAOA + Dicke state):</strong> Standard quantum approaches add a quadratic penalty term (lambda) that pollutes the energy spectrum and wastes between 36% and 74% of measurements on invalid configurations. QWind builds the circuit in Qiskit starting from a Dicke state (a uniform superposition of all states with exact Hamming weight K), coupled to an XY mixer (swaps between adjacent or all qubit pairs) and a ramp initialization inspired by quantum annealing. By algebraic construction, the circuit evolves exclusively inside the feasible subspace: 100% of the samples in noise-free simulation are valid plans, multiplying the probability of sampling the optimal layout by 3.4x to 17.1x compared with the penalty formulation, and by 3x to 7.5x compared with random valid sampling.</li>
                        <li><strong>Real quantum hardware execution (IonQ Forte 1):</strong> The optimized circuit was compiled and run on the 36-qubit IonQ Forte 1 QPU through Qollab (N=6, K=3, p=1, 997 shots, compiled to 123 single-qubit and 78 two-qubit gates). Beyond improving the optimization, the hard constraint works as free error detection on noisy hardware: the 21.7% of readouts that left the K=3 subspace because of gate noise were discarded automatically. On the remaining valid samples, the hardware reached a success probability of 0.1665 against an ideal 0.1784 (93% functional fidelity) and found the exact global optimum.</li>
                        <li><strong>Experimental protocol and scientific rigor (qwind-v1):</strong> Evaluation on 6 datasets: real turbine positions and measured SCADA data from the operating Penmanshiel (14 turbines, Scotland) and Kelmarsh (6 turbines, England) wind farms, ERA5 climate reanalysis series for Chubut and Bahia Blanca (Argentina), and controlled synthetic grids. Benchmarked against exact enumeration (ground truth), Simulated Annealing, greedy search with local swaps, a penalty weight sweep and a uniform distribution over feasible states. The pipeline is 100% automated in GitHub Actions, with no table or metric in the repository edited by hand (<code>scripts/make_results_tables.py</code>), backed by more than 150 unit tests in pytest that verify exact equivalence between the QUBO energy, the Ising Hamiltonian and brute force.</li>
                    </ul>
                    <p><strong>Tech stack</strong></p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Languages and core:</strong> Python (3.12 / 3.14), JavaScript, HTML5, CSS3</li>
                        <li><strong>Quantum computing and math:</strong> Qiskit 2.5 (SparsePauliOp, StatevectorEstimator, StatevectorSampler, StatePreparation), IonQ Forte 1 (QPU), QAOA, QUBO, Ising Hamiltonians, NumPy, SciPy (COBYLA)</li>
                        <li><strong>Quality, data and CI/CD:</strong> Pytest (150+ tests), GitHub Actions, ERA5 / Open-Meteo API, SCADA wind datasets (Zenodo)</li>
                    </ul>
                </div>
            ),
            tags: ["Python", "Qiskit", "QAOA", "QUBO", "IonQ Forte 1", "NumPy", "SciPy", "Pytest", "GitHub Actions"],
            size: "medium",
            stats: "",
            videoUrl: "https://www.youtube.com/embed/UGVkgYGXkF4",
            features: [
                "Constraint-preserving XY-mixer QAOA with Dicke initial state",
                "Executed on IonQ Forte 1 trapped-ion hardware"
            ],
            links: [
                {
                    label: "View on GitHub",
                    url: "https://github.com/agustindiazcano/qwind-qaoa-windfarm",
                    primary: true,
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    )
                },
                {
                    label: "Live Site",
                    url: "https://agustindiazcano.github.io/qwind-qaoa-windfarm/",
                    primary: false
                },
                {
                    label: "Qollab",
                    url: "https://qollab.xyz/u/agustindiazcano/qwind",
                    primary: false
                }
            ]
        },
        {
            id: 16,
            title: "Multi-Agent Mutation Testing System (MCP)",
            slug: "multi-agent-mutation-testing",
            subtitle: "View Hackathon Project",
            description: (
                <div className="flex flex-col gap-1.5 mt-2">
                    <span className="flex items-start gap-2 text-sm text-[#888]">
                        <span className="w-1 h-1 rounded-full bg-[#555] mt-2 flex-shrink-0"></span>
                        <span><strong className="text-[#aaa]">Top 32%:</strong> One of 1,124 successful submissions out of 3,464 teams</span>
                    </span>
                    <span className="flex items-start gap-2 text-sm text-[#888]">
                        <span className="w-1 h-1 rounded-full bg-[#555] mt-2 flex-shrink-0"></span>
                        <span>Built from scratch in 48 hours for the IBM AI Hackathon.</span>
                    </span>
                    <span className="flex items-start gap-2 text-sm text-[#888]">
                        <span className="w-1 h-1 rounded-full bg-[#555] mt-2 flex-shrink-0"></span>
                        <span>Full CI/CD, WIF, Terraform, Google Cloud, Full Stack + AI.</span>
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
            tags: ["IBM", "AI", "Google Cloud", "Terraform", "CI/CD"],
            size: "medium",
            stats: "Top 32%",
            videoUrl: "https://www.youtube.com/embed/m64qdd1axV0",
            imageUrl: "/images/images-projects/test-mind-home.png",
            images: [
                "/images/images-projects/test-mind-home.png",
                "/images/images-projects/test-mind-2.png",
                "/images/images-projects/test-mind-3.png"
            ],
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
            imageUrl: "/images/images-projects/1-afaw.png",
            images: [
                "/images/images-projects/1-afaw.png",
                "/images/images-projects/2-afaw.png",
                "/images/images-projects/3-afaw.png"
            ],
            features: [
                "AST Mutation Testing",
                "Isolated Context Updates"
            ],
            links: [
                {
                    label: "View on GitHub",
                    url: "https://github.com/agustindiazcano/afaw-anti-fragile-agentic-workflow",
                    primary: true,
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    )
                },
                {
                    label: "Whitepaper",
                    url: "https://www.researchgate.net/publication/414988226_AFAW_Anti-Fragile_Agentic_Workflow_Anti-Fragile_Agentic_Workflow_AFAW_A_deterministic_multi-agent_methodology_for_AI-assisted_software_development",
                    primary: false,
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                    )
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
            imageUrl: "/images/images-projects/llm-optimization.png",
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
            title: "AI Crypto Trading Agent",
            slug: "algorithmic-trading-engine",
            subtitle: "View Architecture",
            description: "A quantitative trading system for Binance evolving from rule-based scripts into a service-oriented decision-making agent.",
            longDescription: "A quantitative trading system for Binance evolving from rule-based scripts into a service-oriented decision-making agent: real-time market ingestion, technical-signal scoring (MACD/DEA, Bollinger, ADX, RSI, ATR), risk management, and order execution.",
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
            title: "M.Sc. Thesis AI/ML",
            slug: "ai-ml-research",
            subtitle: "View Thesis",
            description: "LLM-Guided Reinforcement Learning for Legged Robot Navigation, UTN MSc, Jan 2026 - Present.",
            longDescription: "Investigating a hierarchical neuro-symbolic architecture for quadruped robots: an RBF-based perceptual layer generates interpretable concept activations, and an LLM resolves navigation decisions only in ambiguous cases where multiple concepts compete, analogous to the hierarchical escalation approach used by NVIDIA. Currently in the experimental phase, benchmarking RBF vs. MLP policies (curriculum learning, grid-based navigation) prior to full integration in MuJoCo.",
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
        /*
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
        */
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
        /*
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
        */
        // ROW 3
        {
            id: 2,
            title: "Game Dev: Modding Ecosystem",
            slug: "game-dev-modding",
            subtitle: "View Gameplay & Stats",
            description: "220,000+ Downloads. Combining Zombie Mod and HD Mod across Men of War series.",
            tabs: [
                {
                    label: "Zombie Mod",
                    videoUrl: "https://www.youtube.com/embed/3P-1hHL5S8U",
                    content: (
                        <div className="flex flex-col gap-4">
                            <p><strong>Zombie mod.</strong> The first full modern zombie modification for the Men of War series (Men of War, Assault Squad 2, CTA Gates of Hell), with an original story. Resist waves of zombies to complete missions by combining teams of units in RTS. In development since 2011.</p>
                            
                            <div>
                                <h4 className="text-white font-semibold mb-2">Features:</h4>
                                <ul className="list-disc pl-5 mb-3 flex flex-col gap-2">
                                    <li><strong>Zombies:</strong> Integrates special units with customized AI designed for zombie behavior. They will relentlessly attack the player without following traditional game AI patterns.</li>
                                    <li><strong>Infection System:</strong> A contagion mechanic triggered upon contact with special zombie units.</li>
                                    <li><strong>Survival:</strong> Endure increasingly larger waves and hordes across various maps. The gameplay focus is on survival and objective completion.</li>
                                    <li><strong>Zombie Classes:</strong> Including walkers, infectors, runners, bosses, and mini-bosses.</li>
                                </ul>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-8">
                                <div>
                                    <h4 className="text-white font-semibold mb-2 uppercase text-sm tracking-wider">Game Modes</h4>
                                    <ul className="list-disc pl-5 flex flex-col gap-1">
                                        <li>Campaign</li>
                                        <li>Timed Wave Survival</li>
                                        <li>Cooperative Multiplayer</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-2 uppercase text-sm tracking-wider">Planned versions</h4>
                                    <ul className="list-disc pl-5 flex flex-col gap-1">
                                        <li>Men of War</li>
                                        <li>Assault Squad 2</li>
                                        <li>CTA: Gates of Hell</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ),
                    images: [
                        "/images/images-projects/zombie-mod/call-to-arms-zombie-mod-1.png",
                        "/images/images-projects/zombie-mod/call-to-arms-zombie-mod-2.png",
                        "/images/images-projects/zombie-mod/call-to-arms-zombie-mod-3.jpg",
                        "/images/images-projects/zombie-mod/call-to-arms-zombie-mod-4.jpg",
                        "/images/images-projects/zombie-mod/call-to-arms-zombie-mod-5.jpg",
                        "/images/images-projects/zombie-mod/call-to-arms-zombie-mod-6.jpg",
                        "/images/images-projects/zombie-mod/call-to-arms-zombie-mod-7.png",
                        "/images/images-projects/zombie-mod/call-to-arms-zombie-mod-8.png",
                        "/images/images-projects/zombie-mod/call-to-arms-zombie-mod-9.png",
                        "/images/images-projects/zombie-mod/call-to-arms-zombie-mod-10.png"
                    ],
                    links: [
                        { label: "Zombie Mod", url: "https://www.moddb.com/mods/zombie-mod5", primary: true },
                        { label: "Zombie Assault", url: "https://www.moddb.com/mods/men-of-war-zombie-mod", primary: false }
                    ]
                },
                {
                    label: "HD Mod",
                    videoUrl: "https://www.youtube.com/embed/OqOEpmcCkec",
                    content: (
                        <div className="flex flex-col gap-4">
                            <div>
                                <h4 className="text-white font-semibold mb-2">Project Overview</h4>
                                <p>Large-scale modification for Men of War that enhanced visual fidelity and gameplay balance across both singleplayer and multiplayer modes. The project required deep understanding of the game's asset pipeline, texture formats, and multiplayer synchronization protocols.</p>
                            </div>
                            <div>
                                <h4 className="text-white font-semibold mb-2">Technical Implementation</h4>
                                <h5 className="text-[#ccc] font-medium mb-1 mt-3">Asset Replacement Pipeline:</h5>
                                <ul className="list-disc pl-5 mb-3 flex flex-col gap-1">
                                    <li>Completely replaced infantry textures and 3D models for multiple factions (Russia, USA, Germany, Britain)</li>
                                    <li>Redesigned uniform and helmet systems with period-accurate historical detail</li>
                                    <li>Integrated new audio assets for weapons and ambient sound</li>
                                    <li>Implemented custom music tracks for both campaign and multiplayer sessions</li>
                                </ul>
                                
                                <h5 className="text-[#ccc] font-medium mb-1 mt-3">Multiplayer Balance & Economy:</h5>
                                <ul className="list-disc pl-5 flex flex-col gap-1">
                                    <li>Rebalanced command point economy and resource distribution systems</li>
                                    <li>Modified map scripts for historical scenarios (Omaha Beach, Hill 400, Reichstag)</li>
                                    <li>Optimized network synchronization for texture-heavy assets to maintain performance in 8+ player lobbies</li>
                                </ul>
                            </div>
                        </div>
                    ),
                    images: [
                        "/images/images-projects/hd-mod/men-of-war-hd-mod-1.jpg",
                        "/images/images-projects/hd-mod/men-of-war-hd-mod-2.jpg",
                        "/images/images-projects/hd-mod/men-of-war-hd-mod-3.jpg",
                        "/images/images-projects/hd-mod/men-of-war-hd-mod-4.jpg",
                        "/images/images-projects/hd-mod/men-of-war-hd-mod-5.jpg",
                        "/images/images-projects/hd-mod/men-of-war-hd-mod-6.jpg",
                        "/images/images-projects/hd-mod/men-of-war-hd-mod-7.png",
                        "/images/images-projects/hd-mod/men-of-war-hd-mod-8.png"
                    ],
                    links: [
                        { label: "HD Mod", url: "https://www.moddb.com/mods/hd-mod", primary: true }
                    ]
                }
            ],
            longDescription: "A massive multiplayer mod ecosystem demonstrating the capacity to handle high concurrency and complex state synchronization. Replaces low-resolution assets with HD textures and detailed models while maintaining performance.",
            tags: ["Game Dev", "3D Modeling"],
            size: "medium",
            stats: "220k+ Downloads",
            imageUrl: "/images/images-projects/zombie-mod/call-to-arms-zombie-mod-1.png",
            features: [
                "Lag compensation networking",
                "Entity component system architecture",
                "HD Texture replacements"
            ]
        },
        {
            id: 12,
            title: "Zombie Horde Survivors: Hybrid 3D Squad Shooter & Real-Time Strategy Game",
            slug: "zombie-horde-survivors",
            subtitle: "View Details",
            description: "Zero-backend 3D web game blending direct squad control (top-down, third and first person) with real-time strategy command against dynamic waves of enemies and bosses.",
            longDescription: (
                <div className="space-y-4">
                    <p>Zero-backend 3D web game that combines tactical action (direct control in top-down, third-person and first-person views) with real-time strategy (RTS) command. Players lead a squad of 4 soldiers and a support drone against dynamic waves of enemies and bosses, with a drag-and-drop inventory system featuring real-time 3D viewers, an Aliens-inspired motion tracker radar, perk progression, a between-wave shop, and full support for desktop and mobile devices (touch controls, gyroscope/vibration and an adaptive layout).</p>
                    <p>Built on a decoupled architecture where the entire mathematical simulation of the game (<code>src/sim</code>) is pure TypeScript, 100% free of rendering dependencies (enforced by ESLint rules and unit tests in Vitest). It is connected to a Three.js graphics engine through a fixed-timestep loop with frame interpolation, and 3D asset licenses are verified automatically (<code>assets.toml</code>) in CI/CD.</p>
                </div>
            ),
            tags: ["TypeScript", "Three.js", "Vite", "Vitest", "WebGL", "HTML5 Canvas", "Web Audio API", "GitHub Actions"],
            size: "medium",
            stats: "",
            features: [
                "Hybrid tactical shooter and real-time strategy gameplay",
                "Pure TypeScript simulation decoupled from the Three.js renderer"
            ],
            links: [
                {
                    label: "View on GitHub",
                    url: "https://github.com/agustindiazcano/zombie-horde-survivors",
                    primary: true,
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    )
                },
                {
                    label: "Play Online",
                    url: "https://agustindiazcano.github.io/zombie-horde-survivors/",
                    primary: false
                }
            ]
        }
    ];

    // Rendered inside the header nav row (#view-toggle-slot) so it sits level with the nav buttons
    const viewToggleSlot = mounted ? document.getElementById('view-toggle-slot') : null;
    const viewToggle = (
                <div className="inline-flex items-center gap-1 p-1 bg-[#111] border border-[#222] rounded-full" role="group" aria-label="Project view mode">
                    {[
                        { mode: 'cards', label: 'Card view', icon: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></> },
                        { mode: 'list', label: 'List view', icon: <><path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/></> }
                    ].map(({ mode, label, icon }) => (
                        <button
                            key={mode}
                            type="button"
                            onClick={() => changeViewMode(mode)}
                            aria-label={label}
                            aria-pressed={viewMode === mode}
                            title={label}
                            className={`p-1.5 rounded-full cursor-pointer transition-colors ${viewMode === mode ? 'bg-[#222] text-white' : 'text-[#666] hover:text-white'}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                        </button>
                    ))}
                </div>
    );

    // Quick links shown next to the GitHub icon on each card
    const toWatchUrl = (url) => url.replace('youtube.com/embed/', 'youtube.com/watch?v=');
    const getVideoLink = (project) => {
        const embedded = project.videoUrl || project.tabs?.find((tab) => tab.videoUrl)?.videoUrl;
        if (embedded) return toWatchUrl(embedded);
        return project.links?.find((link) => /youtube\.com|youtu\.be/.test(link.url))?.url;
    };
    const getLiveLink = (project) => project.links?.find((link) => /^(live|play)\b/i.test(link.label))?.url;

    const productionIds = [6, 7];
    const visibleProjects = projects.filter((p) => {
        if (categoryFilter === 'all') return true;
        const isProduction = productionIds.includes(p.id);
        return categoryFilter === 'production' ? isProduction : !isProduction;
    });

    const categoryFilterControl = (
        <div className="inline-flex items-center gap-1 p-1 bg-[#111] border border-[#222] rounded-full" role="group" aria-label="Project category">
            {[
                { value: 'all', label: 'All' },
                { value: 'personal', label: 'Personal' },
                { value: 'production', label: 'Production' }
            ].map(({ value, label }) => (
                <button
                    key={value}
                    type="button"
                    onClick={() => setCategoryFilter(value)}
                    aria-pressed={categoryFilter === value}
                    className={`px-3 py-1 rounded-full text-sm font-medium cursor-pointer transition-colors ${categoryFilter === value ? 'bg-[#222] text-white' : 'text-[#666] hover:text-white'}`}
                >
                    {label}
                </button>
            ))}
        </div>
    );

    const headerControls = (
        <>
            {viewToggle}
            {categoryFilterControl}
        </>
    );

    // Column where each card starts in the 3-col grid, to open the hover preview towards free space
    const startsInLeftColumn = {};
    let gridCol = 0;
    visibleProjects.forEach((p) => {
        const span = p.size === "large" ? 2 : 1;
        if (gridCol + span > 3) gridCol = 0;
        startsInLeftColumn[p.id] = gridCol === 0;
        gridCol = (gridCol + span) % 3;
    });

    return (
        <div className="w-full mb-32">
            {mounted && (viewToggleSlot
                ? createPortal(headerControls, viewToggleSlot)
                : <div className="flex justify-end gap-2 mb-4">{headerControls}</div>
            )}
            <div className={`grid ${isList ? 'grid-cols-1 gap-2' : 'grid-cols-1 md:grid-cols-3 gap-6'}`}>
            {visibleProjects.map((project, index) => (
                <React.Fragment key={project.id}>
                    <motion.div
                        className={`relative group hover:z-50 bg-[#111] border border-[#222] rounded-xl flex ${isList
                            ? "flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 py-2.5 px-4 md:px-5"
                            : `h-[300px] flex-col justify-between p-8 ${project.size === "large" ? "md:col-span-2" : "md:col-span-1"}`
                            }`}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        {/* Clickable Overlay */}
                        <div
                            className="absolute inset-0 z-20 cursor-pointer rounded-xl"
                        onClick={() => setSelectedId(project.id)}
                    />

                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />

                    {/* Floating Hover Image */}
                    {project.imageUrl && !isList && (
                        <div className={`absolute top-1/2 -translate-y-1/2 ${startsInLeftColumn[project.id] ? 'left-[calc(100%+24px)]' : 'right-[calc(100%+24px)]'} w-96 h-60 rounded-lg overflow-hidden border border-[#333] opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100 z-50 shadow-2xl pointer-events-none hidden md:block bg-black`}>
                            <img src={project.imageUrl} alt="Built by Agustin Diaz-Cano" loading="lazy" className="w-full h-full object-contain" />
                        </div>
                    )}

                    <motion.div className={`z-10 ${isList ? 'flex-1 min-w-0' : ''}`}>
                        {project.id === 4 && !isList ? (
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
                                <motion.h3 className={`font-display font-normal text-white ${isList ? 'text-sm mb-0.5' : 'text-2xl mb-2'}`}>{project.title}</motion.h3>
                                <motion.div className={`text-[#888] ${isList ? 'text-xs line-clamp-1' : ''}`}>{project.description}</motion.div>
                            </>
                        )}
                    </motion.div>

                    <motion.div className={`relative z-30 flex justify-between items-center pointer-events-none ${isList ? 'md:max-w-[45%] gap-4' : 'mt-4'}`}>
                        <div className="flex flex-wrap gap-2 pr-2">
                            {project.tags.slice(0, 3).map(tag => (
                                <span key={tag} className={`text-[#666] border border-[#333] rounded-full whitespace-nowrap ${isList ? 'text-[10px] px-1.5 py-0.5' : 'text-xs px-2 py-1'}`}>{tag}</span>
                            ))}
                            {project.tags.length > 3 && (
                                <span className={`text-[#444] whitespace-nowrap ${isList ? 'text-[10px]' : 'text-xs px-1 py-1'}`}>+{project.tags.length - 3}</span>
                            )}
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                            {getLiveLink(project) && (
                                <a
                                    href={getLiveLink(project)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="text-xs font-mono font-semibold text-red-500 hover:text-red-400 transition-colors pointer-events-auto relative after:absolute after:-inset-3"
                                    title="Live demo"
                                >
                                    Live
                                </a>
                            )}
                            {getVideoLink(project) && (
                                <a
                                    href={getVideoLink(project)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="text-[#666] hover:text-white transition-colors pointer-events-auto relative after:absolute after:-inset-3"
                                    title="Watch on YouTube"
                                    aria-label="Watch on YouTube"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                                </a>
                            )}
                            {![6, 7, 2, 4].includes(project.id) && (
                                <a
                                    href={project.links?.[0]?.url || "https://github.com/agustindiazcano"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="text-[#666] hover:text-white transition-colors pointer-events-auto relative after:absolute after:-inset-3"
                                    title="View on GitHub"
                                    aria-label="View on GitHub"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                                </a>
                            )}
                        </div>
                    </motion.div>

                    {project.id === 4 && !isList && (
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
            </div>

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
                                
                                const activeTabData = project.tabs ? project.tabs[activeTab] : null;
                                const displayVideoUrl = activeTabData?.videoUrl || project.videoUrl;
                                const displayContent = activeTabData?.content || project.longDescription;
                                const displayLinks = activeTabData?.links || project.links;
                                
                                const imagesArray = activeTabData?.images || project.images || (project.imageUrl ? [project.imageUrl] : []);
                                const hasMedia = displayVideoUrl || imagesArray.length > 0;

                                return (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.98, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.98, y: 10 }}
                                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                        className="w-full max-w-[1300px] h-[90vh] bg-[#0a0a0a] border border-[#333] rounded-2xl overflow-hidden relative z-50 flex flex-col md:flex-row shadow-2xl"
                                    >
                                        {hasMedia && (
                                            <div className="md:w-[45%] flex-shrink-0 bg-[#050505] flex flex-col h-full overflow-y-auto relative border-b md:border-b-0 md:border-r border-[#222]">
                                                {displayVideoUrl && (
                                                    <div className="w-full aspect-video border-b border-[#222] flex-shrink-0">
                                                        <iframe width="100%" height="100%" src={displayVideoUrl} title="Video Preview" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                    </div>
                                                )}
                                                {imagesArray.length > 0 && (
                                                    <div className="w-full p-4 flex-1 flex items-center justify-center min-h-[300px] relative group/carousel">
                                                        <img 
                                                            src={imagesArray[currentImageIndex] || imagesArray[0]} 
                                                            alt="Built by Agustin Diaz-Cano" 
                                                            loading="lazy" 
                                                            onClick={() => setIsLightboxOpen(true)}
                                                            className="max-w-full max-h-full object-contain rounded-lg border border-[#222] cursor-pointer hover:border-[#444] transition-colors" 
                                                        />
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
                                        
                                        <div className={`flex flex-col h-full flex-1 flex-shrink-0 min-w-[300px]`}>
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
                                                {project.tabs && (
                                                    <div className="flex gap-4 mb-6 border-b border-[#222]">
                                                        {project.tabs.map((tab, idx) => (
                                                            <button
                                                                key={idx}
                                                                onClick={() => setActiveTab(idx)}
                                                                className={`pb-2 text-sm font-semibold transition-all ${activeTab === idx ? "text-white border-b-2 border-white" : "text-[#777] hover:text-[#ccc] border-b-2 border-transparent"}`}
                                                            >
                                                                {tab.label}
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                                <div className="text-[#999] mb-8 leading-relaxed text-sm md:text-base">
                                                    {displayContent}
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
                                                {displayLinks ? (
                                                    displayLinks.map((link, idx) => (
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
                                        
                                        {/* Projects Sidebar */}
                                        <div className="md:w-64 bg-[#0a0a0a] border-t md:border-t-0 md:border-l border-[#222] flex flex-col h-full flex-shrink-0 hidden md:flex">
                                            <div className="p-4 border-b border-[#222] sticky top-0 bg-[#0a0a0a] z-10 flex-shrink-0">
                                                <h3 className="text-white font-display font-semibold text-xs tracking-widest uppercase">Other Projects</h3>
                                            </div>
                                            <div className="flex flex-col p-2 gap-1 overflow-y-auto flex-1 custom-scrollbar">
                                                {projects.filter(p => ![11, 13].includes(p.id)).map((p) => (
                                                    <button
                                                        key={p.id}
                                                        onClick={() => setSelectedId(p.id)}
                                                        className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${p.id === selectedId ? "bg-[#222] text-white font-medium" : "text-[#777] hover:bg-[#111] hover:text-[#ccc]"}`}
                                                    >
                                                        {p.title}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Lightbox Overlay */}
                                        <AnimatePresence>
                                            {isLightboxOpen && imagesArray.length > 0 && (
                                                <motion.div 
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center"
                                                >
                                                    <div className="absolute top-4 right-4 z-50 flex gap-2">
                                                        <div className="bg-black/50 text-[#aaa] font-mono text-sm px-4 py-2 rounded-full border border-[#222]">
                                                            {currentImageIndex + 1} / {imagesArray.length}
                                                        </div>
                                                        <button 
                                                            onClick={() => setIsLightboxOpen(false)}
                                                            className="w-10 h-10 bg-black/50 hover:bg-black/80 hover:text-white text-[#aaa] border border-[#222] rounded-full flex items-center justify-center transition-colors"
                                                            title="Close Image Viewer"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 18 18" /></svg>
                                                        </button>
                                                    </div>
                                                    
                                                    <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-12">
                                                        <img 
                                                            src={imagesArray[currentImageIndex]} 
                                                            alt="Built by Agustin Diaz-Cano - Fullscreen" 
                                                            loading="lazy" 
                                                            className="max-w-full max-h-full object-contain select-none"
                                                        />
                                                        
                                                        {imagesArray.length > 1 && (
                                                            <>
                                                                <button 
                                                                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(prev => prev === 0 ? imagesArray.length - 1 : prev - 1); }}
                                                                    className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/80 border border-[#333] rounded-full flex items-center justify-center text-white transition-all z-20"
                                                                >
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                                                                </button>
                                                                <button 
                                                                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(prev => (prev + 1) % imagesArray.length); }}
                                                                    className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/80 border border-[#333] rounded-full flex items-center justify-center text-white transition-all z-20"
                                                                >
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                                                                </button>
                                                            </>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

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
