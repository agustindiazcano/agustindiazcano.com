import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "Project Alpha",
        logo: "🚀",
        description: "Placeholder text for project alpha.",
        url: "/projects#alpha"
    },
    {
        id: 2,
        title: "Project Beta",
        logo: "⚡",
        description: "Placeholder text for project beta.",
        url: "/projects#beta"
    },
    {
        id: 3,
        title: "Project Gamma",
        logo: "🛡️",
        description: "Placeholder text for project gamma.",
        url: "/projects#gamma"
    }
];

export default function ProjectsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % projects.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const project = projects[currentIndex];

    return (
        <a 
            href={project.url} 
            className="block group relative overflow-hidden bg-black/50 border border-[#222] hover:border-[#444] rounded-xl p-5 transition-all duration-300"
        >
            <div className="absolute top-3 right-4 flex items-center gap-1.5 text-xs font-mono text-[#666]">
                <span className="bg-[#111] px-1.5 py-0.5 rounded border border-[#222]">
                    {currentIndex + 1}/{projects.length}
                </span>
            </div>
            
            <div className="flex flex-col items-center justify-center min-h-[120px] text-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center"
                    >
                        <div className="text-3xl mb-3">{project.logo}</div>
                        <h4 className="text-white font-medium text-sm mb-1 group-hover:text-blue-400 transition-colors">
                            {project.title}
                        </h4>
                        <p className="text-[#888] text-xs max-w-[200px]">
                            {project.description}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>
        </a>
    );
}
