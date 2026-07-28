import { motion } from "framer-motion";
import { GraduationCap, Code2, Users, RefreshCw, Clock, Terminal, Brain } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="relative py-16 md:py-20">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center gap-12">
        
        {/* Header */}
        <div className="w-full max-w-6xl z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white text-left">
              About Me
            </h2>
            <div className="h-[2px] w-16 bg-gradient-to-r from-brand-blue to-brand-cyan mb-8" />
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto text-center">
              A brief introduction about my journey, what I do, and what drives my passion for technology.
            </p>
          </motion.div>
        </div>

        {/* Bento Content */}
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[minmax(180px,auto)]">
            
            {/* Intro Text Card (Spans 2 columns on tablet/desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0 }}
              className="md:col-span-2 glass-card p-8 md:p-10 rounded-3xl border border-white/10 hover:border-white/20 transition-all flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none group-hover:bg-brand-blue/20 transition-colors duration-700" />
              
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.1)] relative z-10 flex-shrink-0">
                <img
                  src="/dhanush.png"
                  alt="Dhanush V"
                  className="w-full h-full object-cover object-center scale-110"
                />
              </div>

              <div className="space-y-6 text-lg md:text-xl text-white/90 leading-relaxed relative z-10">
                <p>
                  I am an aspiring Software Engineer with a strong foundation in Full-Stack Web Development, scalable backend systems, and AI-powered applications. My passion lies in solving complex, real-world problems using efficient algorithms and thoughtful design.
                </p>
                <p>
                  Currently, I am pursuing my B.Tech in Information Technology at K S Rangasamy College of Technology. I am driven by the desire to build user-focused software and contribute to innovative product development.
                </p>
              </div>
            </motion.div>

            {/* Education Journey Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.2 }}
              className="glass-card p-8 rounded-3xl border border-white/10 hover:border-brand-cyan/30 transition-all flex flex-col group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 bg-brand-cyan/10 rounded-2xl">
                  <GraduationCap className="w-8 h-8 text-brand-cyan" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>

              <div className="relative pl-8 border-l-2 border-white/10 flex-grow flex flex-col justify-center relative z-10 space-y-3">
                <span className="absolute -left-[9px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand-cyan shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
                <h4 className="text-xl md:text-2xl font-bold text-white mb-1">B.Tech - IT</h4>
                <p className="text-white/80 font-medium text-base md:text-lg mb-2">K S Rangasamy College of Technology</p>
                <p className="text-sm md:text-base text-brand-cyan/90 font-mono">2023 – 2027</p>
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 w-fit mt-2">
                  <span className="font-mono font-bold text-white text-base md:text-lg">CGPA: 7.87/10</span>
                </div>
              </div>
            </motion.div>

            {/* Core Strengths Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.3 }}
              className="glass-card p-8 rounded-3xl border border-white/10 hover:border-brand-purple/30 transition-all flex flex-col group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tl from-brand-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="p-3 bg-brand-purple/10 rounded-2xl">
                  <Brain className="w-8 h-8 text-brand-purple" />
                </div>
                <h3 className="text-2xl font-bold text-white">Strengths</h3>
              </div>

              <div className="flex flex-wrap gap-3 mt-auto relative z-10">
                {[
                  { text: "Problem Solving", color: "hover:border-brand-blue hover:text-brand-blue" },
                  { text: "Analytical Thinking", color: "hover:border-brand-purple hover:text-brand-purple" },
                  { text: "Team Collaboration", color: "hover:border-brand-cyan hover:text-brand-cyan" },
                  { text: "Adaptability", color: "hover:border-brand-blue hover:text-brand-blue" },
                  { text: "Continuous Learning", color: "hover:border-brand-purple hover:text-brand-purple" },
                  { text: "Time Management", color: "hover:border-brand-cyan hover:text-brand-cyan" }
                ].map((item, idx) => (
                  <span key={idx} className={`text-sm md:text-base font-semibold text-white/80 bg-white/5 border border-white/20 rounded-full px-4 py-2 transition-colors cursor-default ${item.color}`}>
                    {item.text}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
