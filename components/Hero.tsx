"use client";
import { motion } from "framer-motion";
import { ArrowDownCircle, FileText } from "lucide-react";

export default function Hero({ basics }: { basics: any }) {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2 }}
      >
        <h2 className="text-cyan-500 font-mono mb-4">Hello, I am</h2>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-white via-slate-400 to-slate-600 bg-clip-text text-transparent">
          {basics.name}
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed mb-10">
          {basics.summary}
        </p>
        
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => document.getElementById('experience')?.scrollIntoView()}
            className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-black font-bold rounded-full transition-all flex items-center gap-2"
          >
            View Experience <ArrowDownCircle size={20} />
          </button>
          <button className="px-8 py-4 border border-slate-700 hover:bg-slate-800 text-white font-bold rounded-full transition-all flex items-center gap-2">
            Download Resume <FileText size={20} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}