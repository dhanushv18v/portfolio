import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X, ZoomIn } from "lucide-react";

const certifications = [
  {
    title: "Oracle Generative AI Professional",
    issuer: "Oracle",
    image: "/oracle.jpg",
    color: "from-red-500/20 to-red-900/20",
    border: "group-hover:border-red-500/50"
  },
  {
    title: "Generative AI Prompt Engineering Basics",
    issuer: "IBM Coursera",
    image: "/Coursera.jpg",
    color: "from-blue-500/20 to-blue-900/20",
    border: "group-hover:border-blue-500/50"
  },
  {
    title: "The Complete Full-Stack Web Development Bootcamp",
    issuer: "Udemy",
    image: "/udemy.jpg",
    color: "from-purple-500/20 to-purple-900/20",
    border: "group-hover:border-purple-500/50"
  }
];

export const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="certifications" className="relative py-16 md:py-20">
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
              Certifications
            </h2>
            <div className="h-[2px] w-16 bg-gradient-to-r from-brand-blue to-brand-cyan mb-8" />
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto text-center">
              Professional credentials and specialized training from industry leaders.
            </p>
          </motion.div>
        </div>

        {/* 3-Column Left-to-Right Layout */}
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                onClick={() => setSelectedImage(cert.image)}
                className="glass-card p-0 rounded-[2rem] border border-white/10 hover:border-brand-cyan/40 transition-all flex flex-col group relative overflow-hidden cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0`} />
                
                {/* Image Top Half */}
                <div className="relative w-full h-56 overflow-hidden rounded-t-[2rem] bg-black z-10">
                  {cert.image ? (
                    <>
                      <img 
                        src={cert.image} 
                        alt={cert.issuer} 
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-700 ease-out" 
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                        <ZoomIn className="w-10 h-10 text-white drop-shadow-lg" />
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-white/5">
                      <Award className="w-16 h-16 text-brand-blue" />
                    </div>
                  )}
                </div>

                {/* Content Bottom Half */}
                <div className="p-8 flex-grow flex flex-col relative z-10 bg-gradient-to-b from-black/40 to-transparent">
                  <span className="px-4 py-1.5 bg-white/10 rounded-full text-white/90 text-xs font-semibold tracking-wide uppercase border border-white/20 w-fit mb-4">
                    {cert.issuer}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight group-hover:text-brand-cyan transition-colors">
                    {cert.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-sm cursor-zoom-out"
          >
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-3 rounded-full bg-black hover:bg-black/80 border border-white/20 text-white transition-colors z-[110] shadow-xl"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Certification View"
              className="max-w-full max-h-[85vh] object-contain rounded-xl border border-white/20 shadow-2xl mt-8"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
