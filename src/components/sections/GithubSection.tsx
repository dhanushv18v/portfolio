import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";

export const GithubSection = () => {
  const username = "dhanushv18v";

  return (
    <section id="github" className="relative py-16 md:py-20">
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
              GitHub Contributions
            </h2>
            <div className="h-[2px] w-16 bg-gradient-to-r from-brand-blue to-brand-cyan mb-8" />
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto text-center">
              A visual representation of my daily coding streak and development consistency.
            </p>
          </motion.div>
        </div>

        {/* Content */}
        <div className="w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
            className="glass-card p-8 md:p-12 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.1)] flex flex-col items-center justify-center min-h-[300px] relative bg-gradient-to-br from-white/5 via-transparent to-brand-blue/5"
          >
            {/* Small Subtle Background Bubbles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -40, 0],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 1.5,
                }}
                className={`absolute rounded-full pointer-events-none ${i % 2 === 0 ? 'bg-brand-cyan' : 'bg-brand-blue'}`}
                style={{
                  width: `${20 + i * 10}px`,
                  height: `${20 + i * 10}px`,
                  left: `${15 + i * 12}%`,
                  top: `${20 + (i % 3) * 25}%`,
                  filter: "blur(8px)",
                }}
              />
            ))}
            
            <div className="w-full flex justify-center text-white/90 relative z-10 p-2 overflow-x-auto">
              <div className="min-w-max bg-black/40 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <GitHubCalendar 
                  username={username}
                  colorScheme="dark"
                  theme={{
                    dark: ['#1e293b', '#164e63', '#0891b2', '#06b6d4', '#22d3ee']
                  }}
                  blockSize={14}
                  blockMargin={5}
                  fontSize={14}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
