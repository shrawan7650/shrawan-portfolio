import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Instagram,
  Heart, 
  ArrowUp, 
  MapPin, 
  Phone, 
  Send,
  Code,
  Coffee,
  Zap,
  Star
} from 'lucide-react';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  // Single consolidated data object
  const footerData = {
    personal: {
      name: "Shrawan Kumar",
      title: "Full Stack Developer",
      tagline: "Crafting digital experiences with passion & precision",
      bio: "Full Stack Developer passionate about creating innovative web solutions with modern technologies and clean, efficient code.",
      location: "Dhanbad, Jharkhand, ER",
      email: "shrawan2401@gmail.com",
      phone: "+91 9905737772",
      availability: "Available for freelance projects"
    },
    social: [
      { 
        icon: Github, 
        href: 'https://github.com/shrawan7650', 
        label: 'GitHub', 
        color: '#333',
        hoverColor: 'hover:text-gray-300 hover:bg-gray-700'
      },
      { 
        icon: Linkedin, 
        href: 'https://linkedin.com/shrawan-kumar-rai', 
        label: 'LinkedIn', 
        color: '#0077B5',
        hoverColor: 'hover:text-blue-400 hover:bg-blue-400/10'
      },
      { 
        icon: Twitter, 
        href: 'https://twitter.com/shrawan', 
        label: 'Twitter', 
        color: '#1DA1F2',
        hoverColor: 'hover:text-cyan-400 hover:bg-cyan-400/10'
      },
      { 
        icon: Instagram, 
        href: 'https://www.instagram.com/inspitech/', 
        label: 'Instagram', 
        color: '#E4405F',
        hoverColor: 'hover:text-pink-400 hover:bg-pink-400/10'
      },
      { 
        icon: Mail, 
        href: 'mailto:shrawan2401@gmail.com', 
        label: 'Email', 
        color: '#EA4335',
        hoverColor: 'hover:text-purple-400 hover:bg-purple-400/10'
      }
    ],
    navigation: {
      main: [
        { href: '#home', label: 'Home', icon: '🏠' },
        { href: '#about', label: 'About', icon: '👨‍💻' },
        { href: '#skills', label: 'Skills', icon: '⚡' },
        { href: '#projects', label: 'Projects', icon: '🚀' },
        { href: '#resume', label: 'Resume', icon: '📄' },
        { href: '#contact', label: 'Contact', icon: '📧' }
      ],
      services: [
        { label: 'Web Development', icon: '🌐' },
        { label: 'Mobile Apps', icon: '📱' },
        { label: 'UI/UX Design', icon: '🎨' },
        { label: 'API Development', icon: '🔌' }
      ]
    },
    tech: {
      frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL'],
      tools: ['AWS', 'Docker', 'Git', 'Figma']
    },
    stats: [
      { label: 'Projects', value: '50+', icon: Code },
      { label: 'Clients', value: '5+', icon: Star },
      { label: 'Coffee Cups', value: '∞', icon: Coffee },
      { label: 'Experience', value: '1.5+', icon: Zap }
    ]
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden" ref={ref}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12"
        >
          {/* Brand & Bio Section - Takes more space */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 space-y-6"
          >
            {/* Brand Header */}
            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {footerData.personal.name}
                  </h2>
                  <p className="text-cyan-400 font-medium">{footerData.personal.title}</p>
                </div>
              </motion.div>
              
              <motion.p 
                className="text-gray-300 text-lg font-medium"
                whileHover={{ color: "#22D3EE" }}
              >
                {footerData.personal.tagline}
              </motion.p>
              
              <p className="text-gray-400 leading-relaxed">
                {footerData.personal.bio}
              </p>
              
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">{footerData.personal.availability}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold">Let's Connect</h4>
              <div className="flex flex-wrap gap-3">
                {footerData.social.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-xl text-gray-400 ${social.hoverColor} transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={18} />
                    <span className="text-sm font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Navigation Section */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span>🧭</span> Navigation
              </h3>
              <ul className="space-y-3">
                {footerData.navigation.main.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 py-1"
                    >
                      <span>{link.icon}</span>
                      <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span>🛠️</span> Services
              </h4>
              <ul className="space-y-2">
                {footerData.navigation.services.map((service, index) => (
                  <motion.li
                    key={service.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-2 text-gray-400 text-sm"
                  >
                    <span>{service.icon}</span>
                    {service.label}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Tech Stack Section */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-3 space-y-6"
          >
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <span>💻</span> Tech Stack
            </h3>
            
            {Object.entries(footerData.tech).map(([category, technologies]) => (
              <div key={category} className="space-y-3">
                <h4 className="text-cyan-400 font-medium capitalize">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-gray-800/60 backdrop-blur-sm text-gray-300 rounded-full text-sm border border-gray-700 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all cursor-default"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: 0.8 + index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact & Stats Section */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <span>📞</span> Contact
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin size={16} className="text-cyan-400 flex-shrink-0" />
                  <span className="text-sm">{footerData.personal.location}</span>
                </div>
                <a 
                  href={`mailto:${footerData.personal.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Mail size={16} className="text-cyan-400 flex-shrink-0" />
                  <span className="text-sm">{footerData.personal.email}</span>
                </a>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone size={16} className="text-cyan-400 flex-shrink-0" />
                  <span className="text-sm">{footerData.personal.phone}</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <span>📊</span> Stats
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {footerData.stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-3 text-center border border-gray-700/50 hover:border-cyan-400/30 transition-colors"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 1 + index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <stat.icon size={20} className="text-cyan-400 mx-auto mb-1" />
                    <div className="text-lg font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="w-full  flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.2 }}
            >
              <ArrowUp size={18} />
              <span>Back to Top</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="border-t border-gray-700/50 pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between md:gap-4">
            <div className="flex items-center gap-1 md:gap-2 text-gray-400">
              <span>Made with</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart size={14} className="text-red-400" />
              </motion.div>
              <span>and lots of</span>
              <Coffee size={14} className="text-yellow-600" />
              <span>by {footerData.personal.name}</span>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-gray-400">© {new Date().getFullYear()} All rights reserved.</span>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-green-400 text-sm">Online</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;