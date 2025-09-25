"use client";

import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
// import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/layout/Navbar";
// import ScrollProgress from "@/components/ui/ScrollProgress";
import EnhancedSkillsShowcase from "@/components/sections/Skills";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-purple-900/20" />
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* <ScrollProgress /> */}
      <Navbar />

      <main className="relative z-10">
        <section className="min-h-screen">
          <Hero />
        </section>
        <section className="min-h-screen">
          <About />
        </section>
        <section className="min-h-screen">
          <EnhancedSkillsShowcase />
        </section>
        <section className="min-h-screen">
          <Projects />
        </section>
        <section className="min-h-screen">
          <Resume />
        </section>
        <section className="min-h-screen">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
