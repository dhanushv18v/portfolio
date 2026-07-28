import { motion } from "framer-motion";
import { Trophy, Star, Target, Zap } from "lucide-react";

const achievements = [
  {
    title: "Google Internship",
    description: "Successfully completed the Google for Developers Android Virtual Internship through AICTE EduSkills.",
    icon: <Trophy className="w-6 h-6 text-yellow-400" />,
    color: "from-yellow-500/10 to-transparent",
  },
  {
    title: "Full-Stack Development",
    description: "Built multiple full-stack web applications using the MERN stack and modern development tools.",
    icon: <Star className="w-6 h-6 text-brand-blue" />,
    color: "from-brand-blue/10 to-transparent",
  },
  {
    title: "AI-Powered Projects",
    description: "Developed AI-powered and enterprise-level academic projects using modern software engineering practices.",
    icon: <Zap className="w-6 h-6 text-brand-purple" />,
    color: "from-brand-purple/10 to-transparent",
  },
  {
    title: "Industry Certifications",
    description: "Earned industry-recognized certifications in Full-Stack Development and Generative AI.",
    icon: <Target className="w-6 h-6 text-brand-cyan" />,
    color: "from-brand-cyan/10 to-transparent",
  }
];

export const Achievements = () => {
  return (
    <section id="achievements" className="relative py-16 md:py-20">
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
              Achievements
            </h2>
            <div className="h-[2px] w-16 bg-gradient-to-r from-brand-blue to-brand-cyan mb-8" />
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto text-center">
              Milestones and recognitions demonstrating my commitment to excellence and problem-solving.
            </p>
          </motion.div>
        </div>

        {/* Content */}
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-3xl border border-white/10 hover:border-brand-purple/30 transition-all flex flex-col h-full group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:bg-brand-purple/20 transition-colors" />
                
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:border-brand-purple/30 transition-colors w-fit mb-6 relative z-10">
                  <div className="[&>svg]:w-8 [&>svg]:h-8">
                    {achievement.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-purple transition-colors relative z-10">{achievement.title}</h3>
                
                <p className="text-white/70 text-sm leading-relaxed mb-6 flex-grow relative z-10">
                  {achievement.description}
                </p>
                

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
