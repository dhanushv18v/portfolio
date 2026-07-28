import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="relative py-16 md:py-20">
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
              Experience
            </h2>
            <div className="h-[2px] w-16 bg-gradient-to-r from-brand-blue to-brand-cyan mb-8" />
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto text-center">
              My professional journey and hands-on industry experience building scalable software.
            </p>
          </motion.div>
        </div>

        {/* Experience Content */}
        <div className="w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 30 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
            className="w-full relative"
          >
            {/* Timeline track for desktop */}
            <div className="hidden lg:block absolute left-[-40px] top-10 bottom-0 w-[2px] bg-gradient-to-b from-brand-blue/50 via-brand-purple/20 to-transparent" />

            <div className="glass-card p-8 md:p-12 rounded-[2rem] border border-white/10 hover:border-brand-blue/30 transition-all group flex flex-col relative overflow-hidden bg-gradient-to-br from-white/5 to-transparent">
              {/* Timeline Dot */}
              <div className="hidden lg:block absolute -left-[45px] top-[45px] w-4 h-4 rounded-full bg-black border-2 border-brand-blue shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10" />

              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[100px] -mr-64 -mt-64 pointer-events-none group-hover:bg-brand-blue/20 transition-colors duration-700" />
              
              <div className="relative z-10 w-full flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Left side: Roles & Dates */}
                <div className="lg:w-1/3 flex flex-col">
                  <div className="flex items-center gap-3 text-brand-cyan mb-4">
                    <div className="p-2 bg-brand-cyan/10 rounded-xl">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <span className="font-semibold tracking-wider text-sm uppercase">Internship</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-white/70 text-sm font-mono mb-4 bg-white/5 w-fit px-3 py-1.5 rounded-lg border border-white/10">
                    <Calendar className="w-4 h-4 text-brand-blue" />
                    Jul 2025 – Sep 2025
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">Android Developer Virtual Intern</h3>
                  <h4 className="text-brand-purple font-medium mb-6">AICTE EduSkills (Google for Developers)</h4>
                </div>

                {/* Right side: Responsibilities */}
                <div className="lg:w-2/3">
                  <div className="space-y-6 text-white/80">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-brand-cyan/10 flex items-center justify-center shrink-0">
                        <span className="text-brand-cyan text-lg font-bold">1</span>
                      </div>
                      <p className="pt-1 leading-relaxed">
                        Developed functional Android application modules using modern Android development fundamentals and best practices.
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                        <span className="text-brand-blue text-lg font-bold">2</span>
                      </div>
                      <p className="pt-1 leading-relaxed">
                        Collaborated with cross-functional team members to implement responsive, intuitive, and user-friendly UI components.
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-brand-purple/10 flex items-center justify-center shrink-0">
                        <span className="text-brand-purple text-lg font-bold">3</span>
                      </div>
                      <p className="pt-1 leading-relaxed">
                        Completed comprehensive hands-on labs and projects focused on modern Android architecture patterns (MVVM) and robust software design.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
