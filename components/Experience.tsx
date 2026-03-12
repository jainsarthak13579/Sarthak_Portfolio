"use client";
import { motion } from "framer-motion";
import { ChevronRight, Target } from "lucide-react";

export default function Experience({ items }: { items: any[] }) {
  return (
    <div className="space-y-12">
      {items.map((job, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative pl-8 border-l border-white/10"
        >
          <div className="absolute -left-1.5 top-2 w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_10px_#06b6d4]" />
          
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl hover:border-cyan-500/50 transition-colors group">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {job.company || job.roles?.[0].title}
                </h3>
                <p className="text-cyan-500/80 font-medium">{job.duration || job.date}</p>
                <p className="text-sm text-gray-500">{job.location}</p>
              </div>
            </div>

            {/* If roles exist (Cognizant structure) */}
            {job.roles ? job.roles.map((role: any, rIdx: number) => (
              <div key={rIdx} className="mt-6 first:mt-0">
                <h4 className="text-lg font-semibold text-gray-200">{role.title}</h4>
                <p className="text-sm text-gray-500 mb-4">{role.date}</p>
                <ul className="space-y-3">
                  {role.bullets.map((bullet: string, bIdx: number) => (
                    <li key={bIdx} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-cyan-500 shrink-0 mt-1" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            )) : (
              <ul className="space-y-3">
                {job.bullets.map((bullet: string, bIdx: number) => (
                  <li key={bIdx} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                    <Target className="w-4 h-4 text-cyan-500 shrink-0 mt-1" />
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}