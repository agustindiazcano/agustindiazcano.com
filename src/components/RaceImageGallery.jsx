import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RaceImageGallery = ({ images, title }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!images || images.length === 0) return null;

    return (
        <>
            {/* Thumbnail */}
            <div 
                className="w-full md:w-64 shrink-0 rounded-xl overflow-hidden border border-[#222] bg-[#111] cursor-pointer group"
                onClick={() => setIsOpen(true)}
            >
                <div className="relative w-full h-full aspect-video md:aspect-square">
                    <img 
                        src={images[0]} 
                        alt={`Agustin Diaz-Cano - ${title}`} 
                        loading="lazy"
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300" 
                    />
                    {images.length > 1 && (
                        <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-md text-xs text-white font-mono border border-white/10 flex items-center gap-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                            +{images.length - 1} photos
                        </div>
                    )}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-5xl max-h-[90vh] bg-[#0a0a0a] border border-[#222] rounded-2xl overflow-hidden z-10 flex flex-col shadow-2xl shadow-black/50"
                        >
                            <div className="flex items-center justify-between p-4 border-b border-[#222] bg-[#111]">
                                <h3 className="text-white font-semibold text-lg">{title}</h3>
                                <button 
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-[#222] rounded-full transition-colors text-[#888] hover:text-white"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 18"/></svg>
                                </button>
                            </div>

                            <div className="p-4 md:p-6 overflow-y-auto">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {images.map((img, idx) => (
                                        <div key={idx} className="rounded-xl overflow-hidden border border-[#222] bg-[#111]">
                                            <img 
                                                src={img} 
                                                alt={`Agustin Diaz-Cano - ${title} - Photo ${idx + 1}`} 
                                                loading="lazy"
                                                className="w-full h-auto object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default RaceImageGallery;
