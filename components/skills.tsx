"use client";
import { motion } from "framer-motion";

export default function Skills({ skills, certs }: { skills: any, certs: string[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 glass p-8 rounded-3xl">
        <h3 className="text-2xl font-bold mb-6">Technical Arsenal</h3>
        <div className="flex flex-wrap gap-3">
          {[...skills.top_skills, ...skills.technical].map((skill, i) => (
            <span key={i} className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-sm text-slate-300 hover:border-cyan-500 transition-colors">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="glass p-8 rounded-3xl bg-gradient-to-br from-cyan-900/20 to-transparent">
        <h3 className="text-2xl font-bold mb-6">Certifications</h3>
        <ul className="space-y-4">
          {certs.map((cert, i) => (
            <li key={i} className="text-sm text-slate-400 border-b border-slate-800 pb-2">
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}