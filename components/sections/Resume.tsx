"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Download,
  FileText,
  Star,
  Award,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { experiences, education, certifications } from "../../data/resume/resumeData";

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });



  return (
    <section id="resume" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Resume & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            My professional journey and qualifications in software development.
          </p>

          <motion.a
            href="\Resume_SHRAWAN.pdf" // points to the PDF in public
            download // forces download
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
          >
            <Download size={20} />
            <span>Download Resume</span>
          </motion.a>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Briefcase className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Work Experience</h3>
            </div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-gray-700 last:border-l-0 last:pb-0"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: 0.6 + index * 0.2 }}
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>

                <div className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6 border border-gray-700 hover:border-cyan-400/50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-xl font-semibold text-white">
                      {exp.title}
                    </h4>
                    <span className="text-sm text-cyan-400 font-medium bg-cyan-400/10 px-3 py-1 rounded">
                      {exp.period}
                    </span>
                  </div>

                  <h5 className="text-lg text-purple-400 font-medium mb-3">
                    {exp.company}
                  </h5>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Star
                          size={12}
                          className="text-cyan-400 flex-shrink-0"
                        />
                        <span className="text-gray-300 text-sm">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.6 }}
          >
            {/* Education */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>

              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6 border border-gray-700 hover:border-cyan-400/50 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {edu.degree}
                  </h4>
                  <h5 className="text-purple-400 font-medium mb-2">
                    {edu.school}
                  </h5>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-cyan-400">{edu.period}</span>
                    <span className="text-sm text-gray-300">
                      GPA: {edu.gpa}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Certifications
                </h3>
              </div>

              <motion.div
                className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6 border border-gray-700"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: 1 }}
              >
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ delay: 1.2 + index * 0.1 }}
                    >
                      <FileText size={16} className="text-cyan-400" />
                      <span className="text-gray-300 text-sm">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
