"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Instagram, Linkedin, Mail } from "lucide-react";
import Lottie from "lottie-react";
import Link from "next/link";
const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/shrawan7650", // your GitHub profile
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/shrawan-kumar-rai/", // your LinkedIn profile
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:shrawan2401@gmail.com", // your email
    label: "Email",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/inspitech/", // your Instagram
    label: "Instagram",
  },
];
const Hero = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "MERN Stack Developer",
    "Full Stack Engineer",
    "React Specialist",
    "Node.js Expert",
  ];

  useEffect(() => {
    const timer = setTimeout(
      () => {
        const currentText = texts[currentIndex];

        if (isDeleting) {
          setTypewriterText(
            currentText.substring(0, typewriterText.length - 1)
          );
        } else {
          setTypewriterText(
            currentText.substring(0, typewriterText.length + 1)
          );
        }

        if (!isDeleting && typewriterText === currentText) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && typewriterText === "") {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timer);
  }, [typewriterText, isDeleting, currentIndex, texts]);

  const lottieAnimationData = {
    v: "5.5.7",
    meta: { g: "LottieFiles AE ", a: "", k: "", d: "", tc: "" },
    fr: 29.9700012207031,
    ip: 0,
    op: 180,
    w: 1920,
    h: 1080,
    nm: "Comp 1",
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "circle",
        sr: 1,
        ks: {
          o: { a: 0, k: 20, ix: 11 },
          r: {
            a: 1,
            k: [
              {
                i: { x: [0.833], y: [0.833] },
                o: { x: [0.167], y: [0.167] },
                t: 0,
                s: [0],
              },
              { t: 179, s: [360] },
            ],
            ix: 10,
          },
          p: { a: 0, k: [960, 540, 0], ix: 2 },
          a: { a: 0, k: [0, 0, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                d: 1,
                ty: "el",
                s: { a: 0, k: [400, 400], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                nm: "Ellipse Path 1",
                mn: "ADBE Vector Shape - Ellipse",
                hd: false,
              },
              {
                ty: "st",
                c: { a: 0, k: [0.2, 0.6, 1, 1], ix: 3 },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 2, ix: 5 },
                lc: 1,
                lj: 1,
                ml: 4,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false,
              },
              {
                ty: "tr",
                p: { a: 0, k: [0, 0], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
              },
            ],
            nm: "Ellipse 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false,
          },
        ],
        ip: 0,
        op: 180,
        st: 0,
        bm: 0,
      },
    ],
    markers: [],
  };

  return (
    <section
      id="home"
      className="relative min-h-screen  flex items-center justify-center overflow-hidden"
    >
      {/* Lottie Background Animation */}
      <div className="absolute inset-0 opacity-30">
        <Lottie
          animationData={lottieAnimationData}
          loop={true}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating particles */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-20"
          animate={{
            y: [-100, -1000],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="container mx-auto  mt-16 md:mt-0 px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Shrawan Kumar
            </span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300 mb-8 h-16 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="mr-2">I'm a</span>
            <span className="text-cyan-400 border-r-2 border-cyan-400 pr-1 animate-pulse">
              {typewriterText}
            </span>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Passionate about creating innovative web solutions with modern
            technologies. Specialized in React, Node.js, MongoDB, and Express.js
            with 1.5+ years of experience building scalable applications that make
            a difference.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a href="#projects">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
            </a>

            <a href="#contact">
              <motion.button
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </a>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="p-3 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-16 left-1/2  transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-gray-400" size={32} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
