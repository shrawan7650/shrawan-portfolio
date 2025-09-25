"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Coffee, Lightbulb, Users } from "lucide-react";

import { aboutConfig } from "../../data/about/aboutData";
// Single config object

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // BEGIN: Fix for threshold issue

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {aboutConfig.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Description & Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              {aboutConfig.subtitle}
            </h3>

            {aboutConfig.description.map((desc, i) => (
              <p key={i} className="text-gray-300 leading-relaxed">
                {desc}
              </p>
            ))}

            <div className="flex flex-wrap gap-3">
              {aboutConfig.skills.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-gray-800 text-cyan-400 rounded-full text-sm font-medium border border-cyan-400/30"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0 }
                  }
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(34, 211, 238, 0.1)",
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Experience Bubble */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-30"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-8 bg-gray-800 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    className="text-4xl font-bold text-white mb-2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.6, type: "spring" }}
                  >
                    {aboutConfig.experience.years}
                  </motion.div>
                  <div className="text-cyan-400 font-medium">
                    {aboutConfig.experience.label}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {aboutConfig.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 group-hover:shadow-lg transition-shadow"
                whileHover={{ rotate: 5 }}
              >
                {stat.icon === "Code" && (
                  <Code className="text-white" size={32} />
                )}
                {stat.icon === "Coffee" && (
                  <Coffee className="text-white" size={32} />
                )}
                {stat.icon === "Lightbulb" && (
                  <Lightbulb className="text-white" size={32} />
                )}
                {stat.icon === "Users" && (
                  <Users className="text-white" size={32} />
                )}
              </motion.div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
