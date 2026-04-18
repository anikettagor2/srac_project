"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { ArrowRight, Star, Zap, Clock, ThumbsUp } from "lucide-react";

/* ─── helpers ─────────────────────────────────────────────── */
const WORDS = ["Creators", "Brands", "Podcasters", "Agencies", "YouTubers"];

function SplitText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 40, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.4 + i * 0.035,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          style={{ transformOrigin: "bottom center" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

function CyclingWord() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((p) => (p + 1) % WORDS.length), 2200);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-block overflow-hidden align-bottom h-[1.15em]" style={{ minWidth: 260 }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={WORDS[index]}
          className="absolute left-0 bottom-0 text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-400 to-primary"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function Particles() {
  const count = 28;
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => {
        const size = Math.random() * 3 + 1;
        const x = Math.random() * 100;
        const duration = Math.random() * 14 + 8;
        const delay = Math.random() * 10;
        const opacity = Math.random() * 0.35 + 0.05;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary"
            style={{ width: size, height: size, left: `${x}%`, bottom: -10, opacity }}
            animate={{ y: [0, -920], opacity: [opacity, 0] }}
            transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
          />
        );
      })}
    </div>
  );
}

/* ─── main component ──────────────────────────────────────── */
export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], [0, 120]);
  const contentY = useTransform(scrollY, [0, 400], [0, 80]);
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  const stats = [
    { icon: Zap, value: "10K+", label: "Videos Delivered" },
    { icon: Clock, value: "24hr", label: "Avg. Turnaround" },
    { icon: ThumbsUp, value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#080A0F] pt-24 pb-20"
    >
      {/* ── Ambient gradient orbs ── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Main orb */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.22) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Accent orb left */}
        <motion.div
          animate={{ x: [-20, 20, -20], y: [-10, 15, -10], opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[-5%] w-[450px] h-[450px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Accent orb right */}
        <motion.div
          animate={{ x: [15, -15, 15], y: [10, -10, 10], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[25%] right-[-5%] w-[380px] h-[380px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(79,70,229,0.2) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        {/* Bottom glow */}
        <div
          className="absolute bottom-0 inset-x-0 h-64"
          style={{ background: "linear-gradient(to top, #080A0F, transparent)" }}
        />
      </motion.div>

      {/* ── Grid noise overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── Floating particles ── */}
      <Particles />

      {/* ── Scan line ── */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent pointer-events-none"
        animate={{ top: ["10%", "90%", "10%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />

      {/* ── Content ── */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center"
      >
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/25 bg-primary/8 backdrop-blur-md mb-10"
        >
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              </motion.div>
            ))}
          </div>
          <span className="text-xs text-zinc-300 font-medium tracking-wide">Trusted by 500+ creators</span>
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-green-400"
          />
        </motion.div>

        {/* Headline – character reveal */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] mb-4 tracking-tight perspective-1000">
          <SplitText text="Professional video" />
          <br />
          <SplitText text="editing for" className="mr-3" />
          <CyclingWord />
        </h1>

        {/* Gradient underline */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          className="w-48 h-0.5 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent mt-4 mb-8"
        />

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg text-zinc-400 max-w-2xl mb-10 leading-relaxed"
        >
          From raw footage to publish-ready content. We handle{" "}
          <span className="text-zinc-200 font-medium">YouTube videos</span>,{" "}
          <span className="text-zinc-200 font-medium">Instagram Reels</span>, podcasts, and more — with{" "}
          <span className="text-primary font-medium">fast turnaround</span> and clear revision cycles.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto mb-16"
        >
          {/* Primary CTA – shimmer effect */}
          <Link href="/signup" className="w-full sm:w-auto">
            <button className="relative group overflow-hidden flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-primary text-white font-semibold rounded-xl transition-all shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_50px_rgba(99,102,241,0.6)] hover:scale-[1.02] active:scale-[0.98]">
              {/* shimmer sweep */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                animate={{ x: ["-120%", "140%"] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
              />
              <span className="relative">Start Your Project</span>
              <motion.div
                className="relative"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </button>
          </Link>

          {/* Secondary CTA */}
          <Link href="/portfolio" className="w-full sm:w-auto">
            <button className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/25 transition-all backdrop-blur-sm">
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 rounded-full bg-primary"
              />
              View Our Work
            </button>
          </Link>
        </motion.div>

        {/* Stats ── floating glass cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-2xl"
        >
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.12 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="relative group flex flex-col items-center gap-1.5 py-5 px-2 sm:px-4 rounded-2xl border border-white/8 bg-white/4 backdrop-blur-md overflow-hidden"
            >
              {/* card glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-primary/10 to-transparent" />
              <Icon className="relative w-4 h-4 text-primary mb-1" />
              <motion.span
                className="relative text-xl sm:text-2xl md:text-3xl font-bold text-white"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              >
                {value}
              </motion.span>
              <span className="relative text-[10px] sm:text-xs text-zinc-400 text-center">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.span
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-medium"
        >
          Scroll
        </motion.span>
        <div className="w-px h-10 overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary/60 to-transparent"
            animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
