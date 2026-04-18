"use client";

import { motion, type Variants } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LenisProvider } from "@/components/home/lenis-provider";
import { Check, ArrowRight, Zap, Film, Mic, Image as ImageIcon, Play, BarChart3, Palette } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  {
    icon: Film,
    title: "YouTube Video Editing",
    price: "₹2,999",
    desc: "Full long-form YouTube video editing — cuts, b-roll, color grade, motion graphics, subtitles, and thumbnail-ready thumbnail frame extraction.",
    features: ["Up to 30-min video", "Color grading", "Custom motion graphics", "Subtitles/captions", "2 revision rounds"],
    badge: "Most Popular",
    color: "from-violet-500/20 to-indigo-500/20",
    border: "border-violet-500/30",
    iconColor: "text-violet-400"
  },
  {
    icon: Play,
    title: "Short-form Reels & Shorts",
    price: "₹999",
    desc: "High-retention vertical video edits optimized for Instagram Reels, YouTube Shorts and TikTok with hook-first structure and viral pacing.",
    features: ["Up to 60 seconds", "Trending audio sync", "On-screen text/captions", "Aspect ratio export (9:16)", "Unlimited reels packs available"],
    badge: "Fast Delivery",
    color: "from-rose-500/20 to-pink-500/20",
    border: "border-rose-500/30",
    iconColor: "text-rose-400"
  },
  {
    icon: Mic,
    title: "Podcast Editing",
    price: "₹1,499",
    desc: "Professional podcast audio cleanup with noise removal, EQ, leveling, and an optional video version with waveform animation for YouTube.",
    features: ["Noise removal & EQ", "Intro/Outro music", "Chapter markers", "Transcript (optional)", "MP3 + WAV export"],
    badge: null,
    color: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/30",
    iconColor: "text-amber-400"
  },
  {
    icon: Palette,
    title: "Thumbnail Design",
    price: "₹499",
    desc: "Click-bait worthy, brand-consistent thumbnails designed from scratch using psychology-backed composition and bold typography.",
    features: ["Custom designed", "Face prominence layout", "Bold contrast", "PNG + PSD source file", "Turnaround: 12 hrs"],
    badge: "Quick",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30",
    iconColor: "text-emerald-400"
  },
  {
    icon: BarChart3,
    title: "Bulk Editing Plan",
    price: "₹9,999/mo",
    desc: "Dedicated editor assigned to your channel. Deliver up to 20 videos per month with consistent style, branding, and zero communication lag.",
    features: ["20 videos/month", "Dedicated editor", "Same-day revisions", "Brand kit integration", "Monthly analytics report"],
    badge: "Best Value",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
    iconColor: "text-blue-400"
  },
  {
    icon: ImageIcon,
    title: "Scriptwriting",
    price: "₹1,999",
    desc: "SEO-optimised, retention-engineered scripts written for your niche and voice — ready to record in under 24 hours.",
    features: ["Up to 2,000 words", "Hook + CTA included", "SEO keyword research", "2 revisions", "Script + outline file"],
    badge: null,
    color: "from-purple-500/20 to-fuchsia-500/20",
    border: "border-purple-500/30",
    iconColor: "text-purple-400"
  },
];

const FAQS = [
  { q: "How many revisions are included?", a: "Each individual project comes with 2 revision rounds. Our bulk plans offer unlimited revisions to ensure your content is perfect." },
  { q: "What is your turnaround time?", a: "Most projects are delivered within 48-72 hours. Thumbnails and short-form video packs can be delivered in as little as 24 hours." },
  { q: "What formats do you accept?", a: "We accept all major formats — MP4, MOV, AVI, MKV, HEVC. Simply upload via our secure platform after placing an order." },
  { q: "Do you work with international clients?", a: "Yes! We work with creators worldwide. Payments can be made via card, PayPal, or UPI. All prices are in INR by default but we take USD/GBP too." },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function ServicesPage() {
  return (
    <LenisProvider>
      <main className="bg-black text-zinc-100 overflow-x-hidden min-h-screen">
        <Navbar />

        {/* Hero */}
        <section className="relative pt-40 pb-24 px-4 sm:px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(91,93,250,0.2) 0%, transparent 65%)" }} />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8">
              <Zap className="w-3.5 h-3.5 text-primary" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-primary/80 font-bold font-mono">Precision · Performance · Power</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-8xl font-bold text-white leading-tight mb-6 font-heading tracking-tighter">
              Services <span className="text-zinc-600">&</span> Pricing
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
              className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
              Expert post-production solutions for the next generation of digital storytellers. Fast, high-retention, and aesthetic.
            </motion.p>
          </div>
        </section>

        {/* Pricing Grid */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div 
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {SERVICES.map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp}
                className="group relative h-full flex flex-col justify-between p-8 rounded-[2rem] bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-all duration-500 backdrop-blur-md"
              >
                {item.badge && (
                  <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] uppercase font-bold tracking-[0.2em] text-zinc-400">
                    {item.badge}
                  </div>
                )}
                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} border border-white/5 flex items-center justify-center mb-12`}>
                    <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-heading tracking-tight">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-8 font-sans">{item.desc}</p>
                  
                  <div className="space-y-4 mb-10 font-sans">
                    {item.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-3 text-sm text-zinc-400">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary/40 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-bold font-mono">Base Rate</span>
                    <span className="text-3xl font-bold text-white font-mono tracking-tighter">{item.price}</span>
                  </div>
                  <Link 
                    href="/contact"
                    className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-4 sm:px-6 bg-black border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16 font-heading tracking-tight underline decoration-primary/30 decoration-4 underline-offset-8">Support & Logistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {FAQS.map((faq, i) => (
                <div key={i} className="group p-6 rounded-2xl hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/5">
                  <h4 className="text-lg font-bold text-zinc-200 mb-4 flex gap-3 font-heading">
                    <span className="text-primary font-mono opacity-50">0{i+1}/</span>
                    {faq.q}
                  </h4>
                  <p className="text-zinc-500 text-sm leading-relaxed font-sans">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </LenisProvider>
  );
}
