"use client";


import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Code, Database, Palette, Brain, Zap, Star,
  ChevronRight, Play, Pause, RotateCcw
} from 'lucide-react';

const EnhancedSkillsShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Mock data - replace with your actual skills
  const skillsData = {
    title: "Skills & Expertise",
    centerText: "DEV",
    categories: [
      {
        title: "Frontend Magic",
        icon: Code,
        color: "#61DAFB",
        skills: [
          { name: "React", level: 95, color: "#61DAFB", projects: 15 },
          { name: "Next.js", level: 90, color: "#000000", projects: 12 },
          { name: "TypeScript", level: 85, color: "#3178C6", projects: 20 },
          { name: "Tailwind CSS", level: 92, color: "#06B6D4", projects: 18 }
        ]
      },
      {
        title: "Backend Power",
        icon: Database,
        color: "#68D391",
        skills: [
          { name: "Node.js", level: 88, color: "#68D391", projects: 10 },
          { name: "MongoDB", level: 82, color: "#47A248", projects: 8 },
          { name: "PostgreSQL", level: 78, color: "#336791", projects: 6 },
          { name: "Express.js", level: 85, color: "#000000", projects: 12 }
        ]
      },
      {
        title: "Creative Tools",
        icon: Palette,
        color: "#F687B3",
        skills: [
          { name: "Figma", level: 87, color: "#F24E1E", projects: 25 },
          { name: "Photoshop", level: 80, color: "#31A8FF", projects: 30 },
          { name: "After Effects", level: 75, color: "#9999FF", projects: 15 },
          { name: "Blender", level: 70, color: "#F5792A", projects: 8 }
        ]
      }
    ],
    techIcons: [
      { name: "React", icon: Code, color: "#61DAFB" },
      { name: "Node.js", icon: Database, color: "#68D391" },
      { name: "MongoDB", icon: Database, color: "#47A248" },
      { name: "TypeScript", icon: Code, color: "#3178C6" },
      { name: "Next.js", icon: Code, color: "#000000" },
      { name: "Tailwind", icon: Palette, color: "#06B6D4" },
      { name: "Figma", icon: Palette, color: "#F24E1E" },
      { name: "Python", icon: Brain, color: "#3776AB" }
    ]
  };

  const radius = 140;

  return (
    <section id="skills" className="py-20 relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Title with Controls */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {/* <Star className="w-8 h-8 text-yellow-400" /> */}
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {skillsData.title}
            </h2>
            <motion.div
              whileHover={{ rotate: -360 }}
              transition={{ duration: 0.5 }}
            >
              {/* <Star className="w-8 h-8 text-yellow-400" /> */}
            </motion.div>
          </div>
          
          {/* Animation Controls */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsAnimating(!isAnimating)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full text-cyan-400 border border-cyan-400/30 hover:bg-cyan-400/10 transition-colors"
            >
              {isAnimating ? <Pause size={16} /> : <Play size={16} />}
              {isAnimating ? 'Pause' : 'Play'} Animation
            </motion.button>
          </div>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Enhanced Circular Tech Icons with Interactive Features */}
        <motion.div
          className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] mx-auto mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Outer glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-cyan-400/20"
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* Spinning orbit with enhanced effects */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{ 
              rotate: isAnimating ? 360 : 0 
            }}
            transition={{ 
              duration: 25, 
              repeat: isAnimating ? Infinity : 0, 
              ease: "linear" 
            }}
          >
            {skillsData.techIcons.map((tech, index) => {
              const angle = (index * 360) / skillsData.techIcons.length;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <motion.div
                  key={tech.name}
                  className="absolute w-16 h-16 flex flex-col items-center justify-center bg-gray-800/80 backdrop-blur-sm rounded-full border-2 border-gray-700 hover:border-cyan-400 transition-all cursor-pointer group"
                  style={{
                    left: `calc(50% + ${x}px - 32px)`,
                    top: `calc(50% + ${y}px - 32px)`,
                  }}
                  initial={{ scale: 0, rotate: -angle }}
                  animate={
                    isInView
                      ? { scale: 1, rotate: -angle }
                      : { scale: 0, rotate: -angle }
                  }
                  transition={{
                    delay: 0.4 + index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.3,
                    backgroundColor: `${tech.color}20`,
                    borderColor: tech.color,
                    zIndex: 10
                  }}
                  onHoverStart={() => setSelectedSkill(tech)}
                  onHoverEnd={() => setSelectedSkill(null)}
                >
                  <tech.icon size={20} color={tech.color} />
                  <motion.span
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                  >
                    {tech.name}
                  </motion.span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Enhanced Center circle with dynamic content */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-full flex items-center justify-center shadow-2xl"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.6, type: "spring" }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.span 
              className="text-white font-bold text-lg md:text-2xl"
              animate={{ 
                rotate: isAnimating ? -360 : 0 
              }}
              transition={{ 
                duration: 25, 
                repeat: isAnimating ? Infinity : 0, 
                ease: "linear" 
              }}
            >
              {skillsData.centerText}
            </motion.span>
          </motion.div>

          {/* Selected skill tooltip */}
          <AnimatePresence>
            {selectedSkill && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg border border-cyan-400/30"
              >
                <div className="text-center">
                  <div className="font-semibold" style={{ color: selectedSkill.color }}>
                    {selectedSkill.name}
                  </div>
                  <div className="text-sm text-gray-300">Hover to explore</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Enhanced Skill Categories with Interactive Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {skillsData.categories.map((category, index) => (
              <motion.button
                key={category.title}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                  activeCategory === index
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon size={18} />
                {category.title}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Enhanced Skill Progress with More Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skillsData.categories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-gray-800/60 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: `0 10px 30px ${skill.color}20`
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                    <span className="text-white font-medium">{skill.name}</span>
                  </div>
                  <span 
                    className="text-sm font-bold"
                    style={{ color: skill.color }}
                  >
                    {skill.level}%
                  </span>
                </div>

                {/* Animated progress bar */}
                <div className="w-full bg-gray-700 rounded-full h-3 mb-4 overflow-hidden">
                  <motion.div
                    className="h-3 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}40, ${skill.color})`
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                  />
                </div>

                {/* Project count */}
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Projects completed</span>
                  <motion.span 
                    className="font-bold text-cyan-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    {skill.projects}+
                  </motion.span>
                </div>

                {/* Hover effect indicator */}
                <motion.div
                  className="w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-4 opacity-0 group-hover:opacity-100"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1.5 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Technologies", value: "20+", color: "#61DAFB" },
              { label: "Projects", value: "50+", color: "#68D391" },
              { label: "Experience", value: "1.5+ Years", color: "#F687B3" },
              { label: "Clients", value: "Happy ∞", color: "#FBD38D" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 1.7 + index * 0.1, type: "spring" }}
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{ color: stat.color }}
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedSkillsShowcase;