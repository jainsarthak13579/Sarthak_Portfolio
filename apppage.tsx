import { AnimatedBackground } from "@/components/AnimatedBackground";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import SplashLoader from "@/components/SplashLoader";
import data from "@/lib/data.json";

export default function Portfolio() {
  return (
    <main className="relative min-h-screen text-white selection:bg-cyan-500/30">
      <SplashLoader />
      <AnimatedBackground />
      
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-32">
        <Hero basics={data.basics} achievements={data.achievements} />
        
        <section id="experience">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <Experience items={data.experience} />
        </section>

        <section id="skills">
          <Skills skills={data.skills} certs={data.certifications} />
        </section>

        <section id="education" className="pb-20">
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          {data.education.map((edu, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="text-xl font-bold text-cyan-400">{edu.institution}</h3>
              <p className="text-gray-300">{edu.degree}</p>
              <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}