import { motion } from "framer-motion";
import { ExternalLink, FileText, FileSearch, Bus, GraduationCap } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { 
  SiReact, SiNodedotjs, SiExpress, SiFastapi, SiPython, 
  SiOpencv, SiMongodb, SiTailwindcss, SiVite, SiJavascript 
} from "react-icons/si";

const projects = [
  {
    title: "Validoc AI",
    subtitle: "AI Powered Document Verification System",
    description: "An AI-powered document verification platform to detect tampered and suspicious documents. Integrated OCR for text extraction and automated document analysis, and built REST APIs for secure file upload and AI processing.",
    tech: ["React.js", "Node.js", "Express.js", "FastAPI", "Python", "OpenCV", "OCR"],
    github: "https://github.com/dhanushv18v",
    demo: "#",
    featured: true,
    // Custom icon panel config
    iconBg: "from-violet-900/60 via-indigo-900/60 to-slate-900",
    iconGlow: "rgba(139,92,246,0.35)",
    iconAccent: "text-violet-300",
    renderIcon: () => (
      <FileSearch className="w-20 h-20 text-violet-300 drop-shadow-[0_0_22px_rgba(139,92,246,0.85)]" strokeWidth={1.2} />
    ),
  },
  {
    title: "EduERP",
    subtitle: "Full Stack College ERP System",
    description: "A full-stack ERP system supporting Student, Faculty, and Admin portals. Implemented JWT authentication, attendance management, dashboards, and role-based access control with a responsive interface and data visualization.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Vite"],
    github: "https://github.com/dhanushv18v/EduERP",
    demo: "https://edu-erp-iota.vercel.app/login",
    featured: true,
    // Custom icon panel config
    iconBg: "from-blue-900/60 via-sky-900/60 to-slate-900",
    iconGlow: "rgba(14,165,233,0.35)",
    iconAccent: "text-sky-300",
    renderIcon: () => (
      <GraduationCap className="w-20 h-20 text-sky-300 drop-shadow-[0_0_22px_rgba(14,165,233,0.85)]" strokeWidth={1.2} />
    ),
  },
  {
    title: "Online Bus Ticket Booking System",
    subtitle: "Full-Stack Reservation Platform",
    description: "A full-stack bus ticket booking platform with authentication, seat reservation, fare calculation, and booking management. Developed REST APIs and integrated MongoDB for efficient data storage and retrieval.",
    tech: ["Node.js", "Express.js", "MongoDB", "JavaScript"],
    github: "https://github.com/dhanushv18v",
    demo: "#",
    featured: false,
    // Custom icon panel config
    iconBg: "from-emerald-900/60 via-teal-900/60 to-slate-900",
    iconGlow: "rgba(16,185,129,0.35)",
    iconAccent: "text-emerald-300",
    renderIcon: () => (
      <div className="relative flex items-center justify-center">
        <Bus className="w-20 h-20 text-emerald-300 drop-shadow-[0_0_22px_rgba(16,185,129,0.85)]" strokeWidth={1.2} />
      </div>
    ),
  }
];

const getTechIcon = (tech: string) => {
  switch (tech.toLowerCase()) {
    case 'react.js': return <SiReact className="w-3.5 h-3.5 text-[#61DAFB]" />;
    case 'node.js': return <SiNodedotjs className="w-3.5 h-3.5 text-[#339933]" />;
    case 'express.js': return <SiExpress className="w-3.5 h-3.5" />;
    case 'fastapi': return <SiFastapi className="w-3.5 h-3.5 text-[#009688]" />;
    case 'python': return <SiPython className="w-3.5 h-3.5 text-[#3776AB]" />;
    case 'opencv': return <SiOpencv className="w-3.5 h-3.5 text-[#5C3EE8]" />;
    case 'ocr': return <FileText className="w-3.5 h-3.5 text-white/70" />;
    case 'mongodb': return <SiMongodb className="w-3.5 h-3.5 text-[#47A248]" />;
    case 'tailwind css': return <SiTailwindcss className="w-3.5 h-3.5 text-[#06B6D4]" />;
    case 'vite': return <SiVite className="w-3.5 h-3.5 text-[#646CFF]" />;
    case 'javascript': return <SiJavascript className="w-3.5 h-3.5 text-[#F7DF1E]" />;
    default: return null;
  }
};

export const Projects = () => {
  return (
    <section id="projects" className="relative py-16 md:py-20">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center gap-12">
        
        {/* Header */}
        <div className="w-full max-w-7xl z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white text-left">
              Featured Projects
            </h2>
            <div className="h-[2px] w-16 bg-gradient-to-r from-brand-blue to-brand-cyan mb-8" />
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl text-left">
              A collection of my recent work, showcasing my ability to build scalable, full-stack applications.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, delay: idx * 0.15 }}
                className={`glass-card p-0 rounded-[2rem] border border-white/10 hover:border-brand-blue/30 transition-all flex flex-col group relative overflow-hidden ${idx === 1 ? 'md:mt-12' : ''}`}
              >
                {/* Icon Banner */}
                <div className={`relative h-48 overflow-hidden rounded-t-[2rem] bg-gradient-to-br ${project.iconBg} flex items-center justify-center`}>
                  {/* Subtle radial glow */}
                  <div
                    className="absolute inset-0 rounded-t-[2rem]"
                    style={{
                      background: `radial-gradient(ellipse at center, ${project.iconGlow} 0%, transparent 70%)`,
                    }}
                  />
                  {/* Dot grid pattern */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                  {/* Icons */}
                  <div className="relative z-10 group-hover:scale-110 transition-transform duration-500">
                    {project.renderIcon()}
                  </div>

                  {/* Hover overlay with links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/60 backdrop-blur-sm rounded-t-[2rem]">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 hover:bg-white text-white hover:text-black rounded-full transition-colors"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-brand-blue hover:bg-brand-cyan text-white rounded-full transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow relative bg-gradient-to-b from-transparent to-black/40">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                  
                  {project.featured && (
                    <div className="text-brand-cyan text-xs font-mono tracking-wider mb-2">
                      Featured Project
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-blue transition-colors">
                    {project.title}
                  </h3>
                  <h4 className="text-white/70 text-sm font-medium mb-4">
                    {project.subtitle}
                  </h4>
                  
                  <p className="text-white/80 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-2.5 py-1 text-[11px] font-mono text-white/80 bg-white/5 border border-white/10 rounded-md flex items-center gap-1.5"
                      >
                        {getTechIcon(tech)}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
