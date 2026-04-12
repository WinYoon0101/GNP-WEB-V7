"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function AgeSelectionOverlay() {
  const [isOpen, setIsOpen] = useState(true);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const options = [
    { id: "1", label: "Lớp 1 - 3" },
    { id: "2", label: "Lớp 4 - 6" },
    { id: "3", label: "Lớp 7 - 8" },
  ];

  const handleSelect = (id: string) => {
    // In a real scenario, you might save this selection to state/context or send an event.
    // For now, we just close the modal.
    setTimeout(() => {
      setIsOpen(false);
    }, 200); // Small delay to let the user see the click effect
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 font-sans"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full max-w-md flex flex-col items-center"
          >
            {/* Logo */}
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center p-2 mb-6 shadow-2xl relative overflow-hidden ring-4 ring-white/10">
               <img src="/summer-logo.png" alt="Summer Logo" className="w-full object-contain scale-110" />
            </div>

            {/* Typography */}
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center tracking-tight mb-2">
              Bé đang ở khối lớp nào?
            </h2>
            <p className="text-slate-300 text-sm md:text-base text-center mb-8">
              Chọn một mục để bắt đầu khám phá Khóa học mùa hè.
            </p>

            {/* Options List */}
            <div className="w-full space-y-3 md:space-y-4">
              {options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleSelect(option.id)}
                  className="w-full group flex items-center justify-between p-4 md:p-5 rounded-[1.25rem] border border-white/20 bg-white/5 hover:bg-white/10 active:scale-[0.98] transition-all duration-200"
                >
                  <span className="text-white text-lg font-medium pl-2">
                    {option.label}
                  </span>
                  <div className="w-6 h-6 rounded-full border-2 border-slate-400 group-hover:border-white flex items-center justify-center transition-colors">
                    {/* The circle inside will "fill" on click naturally if we had an active state, but here we just close instantly */}
                  </div>
                </button>
              ))}
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
