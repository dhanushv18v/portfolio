import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, FileText, ChevronDown } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const titles = [
  "Software Engineer",
  "Full Stack Developer",
  "AI Enthusiast",
  "Problem Solver",
];

export const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center mt-[10px]">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-white/10"
          >
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            <span className="text-sm font-medium tracking-wide text-white/80 uppercase">Available for new opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4"
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan">
              Dhanush V
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-12 md:h-16 flex items-center justify-center mb-8"
          >
            <AnimatePresence mode="wait">
              <motion.h2
                key={titleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-4xl font-light text-white"
              >
                {titles[titleIndex]}
              </motion.h2>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.7 }}
            className="max-w-2xl text-lg text-white/90 mb-10 leading-relaxed"
          >
            Passionate about solving complex problems using Data Structures & Algorithms and building efficient, user-focused software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          >
            <a
              href="#projects"
              className="hover-target group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-transform active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-purple opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </a>
            
            <a
              href="/Dhanush_CV.pdf"
              download="Dhanush_CV.pdf"
              className="hover-target px-8 py-4 glass rounded-full font-semibold text-white border border-white/10 hover:bg-white/10 transition-all active:scale-95 flex items-center gap-2"
            >
              <FileText className="w-5 h-5" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.3, delay: 1.1 }}
            className="flex items-center gap-6 mb-12"
          >
            <SocialLink href="https://github.com/dhanushv18v" icon={<FaGithub className="w-6 h-6" />} />
            <SocialLink href="https://linkedin.com/in/dhanush-v-32b42b292" icon={<FaLinkedin className="w-6 h-6" />} />
            <SocialLink href="https://leetcode.com/dhanushv_0812" icon={<SiLeetcode className="w-6 h-6" />} />
            <SocialLink href="mailto:dhanushv440@gmail.com" icon={<Mail className="w-6 h-6" />} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1.3 }}
            className="flex flex-col items-center gap-2 animate-bounce cursor-pointer z-20 mt-10 md:mt-20"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-xs uppercase tracking-widest text-white/80">Scroll Down</span>
            <ChevronDown className="text-white/80" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover-target p-3 rounded-full glass border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all text-white/70 hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
  >
    {icon}
  </a>
);

// We need to import AnimatePresence, so I'll add it in the final file writing process.
