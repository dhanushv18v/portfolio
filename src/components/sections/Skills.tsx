import { motion } from "framer-motion";
import { 
  SiPython, SiJavascript, SiC, SiHtml5, SiCss, SiReact, 
  SiTailwindcss, SiVite, SiNodedotjs, SiExpress, SiMongodb, 
  SiMysql, SiGit, SiGithub, SiVercel, SiNetlify, SiRender
} from "react-icons/si";
import { FaJava, FaDatabase, FaCodeBranch } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { DiIntellij } from "react-icons/di";
import { BsDiagram3 } from "react-icons/bs";

const categories = [
  {
    name: "Languages",
    color: "from-blue-500/20 to-blue-900/20",
    border: "hover:border-blue-400/50",
    accent: "text-blue-400",
    dot: "bg-blue-400",
    skills: [
      { name: "Java", icon: <FaJava className="text-[#007396]" /> },
      { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
      { name: "C", icon: <SiC className="text-[#A8B9CC]" /> },
    ],
  },
  {
    name: "Frontend",
    color: "from-cyan-500/20 to-cyan-900/20",
    border: "hover:border-cyan-400/50",
    accent: "text-cyan-400",
    dot: "bg-cyan-400",
    skills: [
      { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <SiCss className="text-[#1572B6]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "Vite", icon: <SiVite className="text-[#646CFF]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    ],
  },
  {
    name: "Backend",
    color: "from-green-500/20 to-green-900/20",
    border: "hover:border-green-400/50",
    accent: "text-green-400",
    dot: "bg-green-400",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-white" /> },
      { name: "REST APIs", icon: <BsDiagram3 className="text-[#00E5FF]" /> },
    ],
  },
  {
    name: "Databases",
    color: "from-orange-500/20 to-orange-900/20",
    border: "hover:border-orange-400/50",
    accent: "text-orange-400",
    dot: "bg-orange-400",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
      { name: "SQL", icon: <FaDatabase className="text-[#4479A1]" /> },
      { name: "DBMS", icon: <FaDatabase className="text-[#2196F3]" /> },
    ],
  },
  {
    name: "Tools & Platforms",
    color: "from-purple-500/20 to-purple-900/20",
    border: "hover:border-purple-400/50",
    accent: "text-purple-400",
    dot: "bg-purple-400",
    skills: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
      { name: "VS Code", icon: <VscCode className="text-[#007ACC]" /> },
      { name: "IntelliJ", icon: <DiIntellij className="text-white" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Netlify", icon: <SiNetlify className="text-[#00C7B7]" /> },
      { name: "Render", icon: <SiRender className="text-white" /> },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export const Skills = () => {
  return (
    <section id="skills" className="relative py-16 md:py-20">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center gap-12">

        {/* Header */}
        <div className="w-full max-w-7xl z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white text-left">
              Technical Skills
            </h2>
            <div className="h-[2px] w-16 bg-gradient-to-r from-brand-blue to-brand-cyan mb-8" />
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl text-left">
              A comprehensive toolkit of languages, frameworks, and technologies I use to bring ideas to life.
            </p>
          </motion.div>
        </div>

        {/* Categorized Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              variants={cardVariants}
              className={`glass-card rounded-[2rem] border border-white/10 ${cat.border} transition-all duration-300 p-6 flex flex-col gap-5 group relative overflow-hidden`}
            >
              {/* Gradient glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem]`} />

              {/* Category Header */}
              <div className="relative z-10 flex items-center gap-3">
                <span className={`w-2.5 h-2.5 rounded-full ${cat.dot} shadow-lg`} />
                <h3 className={`text-base font-bold uppercase tracking-widest ${cat.accent}`}>
                  {cat.name}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="relative z-10 flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-200 group/skill cursor-default"
                  >
                    <span className="text-xl group-hover/skill:scale-110 transition-transform duration-200 filter drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]">
                      {skill.icon}
                    </span>
                    <span className="text-sm font-semibold text-white/80 group-hover/skill:text-white transition-colors whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
