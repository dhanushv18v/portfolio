import { useEffect } from 'react';
import Lenis from 'lenis';
import { ParticleNetwork } from '@/components/ui/ParticleNetwork';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { Navbar } from '@/components/ui/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Certifications } from '@/components/sections/Certifications';
import { Achievements } from '@/components/sections/Achievements';
import { GithubSection } from '@/components/sections/GithubSection';
import { Contact } from '@/components/sections/Contact';

function App() {
  // Initialize Lenis and Scroll to top on refresh
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const lenis = new Lenis({
      lerp: 0.05,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <ParticleNetwork>
        <CustomCursor />
        <Navbar />
        
        <main className="w-full flex flex-col">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Achievements />
          <GithubSection />
          <Contact />
        </main>
        
        <footer className="w-full py-8 border-t border-white/10 text-center text-white/50 text-sm relative z-10 glass">
          <p>© {new Date().getFullYear()} Dhanush V. All rights reserved.</p>
        </footer>
      </ParticleNetwork>
    </>
  );
}

export default App;
