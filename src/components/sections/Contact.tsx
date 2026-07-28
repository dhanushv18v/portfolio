import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSubmitStatus("success");
          form.current?.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          setSubmitStatus("error");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="relative py-16 md:py-20">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center gap-12">
        
        {/* Header */}
        <div className="w-full max-w-5xl z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white text-left">
              Get In Touch
            </h2>
            <div className="h-[2px] w-16 bg-gradient-to-r from-brand-blue to-brand-cyan mb-8" />
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl text-left">
              I'm currently looking for new opportunities. Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="mt-8 flex flex-row flex-wrap justify-start gap-4">
              <a href="mailto:dhanushv440@gmail.com" className="flex items-center gap-4 text-white/70 hover:text-brand-cyan transition-colors group">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:border-brand-cyan/30 transition-all">
                  <Mail className="w-6 h-6" />
                </div>
              </a>
              <a href="https://linkedin.com/in/dhanush-v" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/70 hover:text-brand-blue transition-colors group">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:border-brand-blue/30 transition-all">
                  <FaLinkedin className="w-6 h-6" />
                </div>
              </a>
              <a href="https://github.com/dhanushv18v" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:border-white/30 transition-all">
                  <FaGithub className="w-6 h-6" />
                </div>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="glass-card p-8 md:p-10 rounded-[2rem] border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none group-hover:bg-brand-blue/20 transition-colors" />
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="user_name" className="text-sm font-medium text-white/70 ml-1">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="user_email" className="text-sm font-medium text-white/70 ml-1">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white/70 ml-1">Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={5}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-purple/50 focus:border-transparent transition-all resize-none"
                  placeholder="Hello Dhanush, I'd like to discuss..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-brand-cyan hover:text-white transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group/btn relative overflow-hidden"
              >
                <span className="relative z-10">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
                <Send className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-cyan opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              </button>

              {submitStatus === "success" && (
                <p className="text-brand-cyan text-sm font-medium text-center bg-brand-cyan/10 py-3 rounded-xl border border-brand-cyan/20">Message sent successfully! I'll get back to you soon.</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-400 text-sm font-medium text-center bg-red-400/10 py-3 rounded-xl border border-red-400/20">Oops! Something went wrong. Please try again or email me directly.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
