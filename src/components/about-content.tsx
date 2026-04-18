"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb } from "lucide-react";
import Image from "next/image";


export function AboutContent() {
  return (
    <div className="bg-black text-white selection:bg-primary selection:text-white pb-32">
      {/* Cinematic Narrative Hero */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-primary/10 via-transparent to-transparent opacity-40" />
        
        <motion.div
            initial={{ opacity: 0, letterSpacing: "1em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1 }}
            className="text-primary font-black text-xs uppercase mb-8 font-mono"
        >
            [ PROTOCOL_ORIGIN ]
        </motion.div>
        
        <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[14vw] sm:text-[12vw] md:text-[8vw] font-black uppercase leading-[0.85] tracking-tighter mb-8 sm:mb-12 px-2 font-heading italic"
        >
            Crafting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary">The Future</span>
        </motion.h1>
        
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="max-w-2xl text-zinc-500 text-base sm:text-xl font-medium leading-relaxed px-4 font-mono text-sm uppercase"
        >
            <span className="text-primary mr-2">{">>"}</span> Founded on the belief that video isn't just about pixels—it's about the electrical pulse of human emotion and surgical data precision.
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
              <div className="w-full md:w-1/2 relative aspect-square min-h-[280px] sm:min-h-[360px] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl bg-zinc-900/20 backdrop-blur-xl">
                  <Image 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200" 
                    alt="Creative Hub" 
                    fill 
                    className="object-cover opacity-50 contrast-125 grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-primary/20" />
                  <div className="absolute bottom-6 left-6 text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">Core_Archive_01</div>
              </div>
              <div className="w-full md:w-1/2 space-y-12">
                  <div className="space-y-4">
                      <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] font-mono">MISSION // LOGISTICS</span>
                      <h2 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none font-heading italic">The Viosner <span className="text-zinc-800">Syndicate</span></h2>
                      <p className="text-zinc-500 text-xl leading-relaxed font-medium">
                          We recognized that content creators didn't just need cuts and transitions; they needed a partner who understood pace, emotion, and retention at a scale others couldn't replicate.
                      </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="p-8 rounded-[2rem] bg-zinc-950 border border-white/5 hover:border-primary/30 transition-all group overflow-hidden relative">
                          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                          <Target className="relative z-10 w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
                          <h4 className="relative z-10 text-lg font-black uppercase mb-2 font-heading">Our Mission</h4>
                          <p className="relative z-10 text-zinc-500 text-sm font-mono tracking-tight leading-relaxed">EMPOWERING CREATORS WITH CINEMATIC EDGE AND SURGICAL PRECISION SINCE INITIALIZATION.</p>
                      </div>
                      <div className="p-8 rounded-[2rem] bg-zinc-950 border border-white/5 hover:border-primary/30 transition-all group overflow-hidden relative">
                          <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors" />
                          <Lightbulb className="relative z-10 w-8 h-8 text-purple-500 mb-6 group-hover:scale-110 transition-transform" />
                          <h4 className="relative z-10 text-lg font-black uppercase mb-2 font-heading">Our Vision</h4>
                          <p className="relative z-10 text-zinc-500 text-sm font-mono tracking-tight leading-relaxed">SETTING THE GLOBAL GOLD STANDARD FOR REMOTE NEURAL VIDEO PRODUCTION FLOWS.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
}
