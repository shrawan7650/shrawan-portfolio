"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

import { FieldError } from "react-hook-form";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Removed threshold
  const [submitStatus, setSubmitStatus] = useState<any>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit: any = async (data: {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    try {
      setSubmitStatus("loading");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result: {
        success: boolean;
        message?: string;
        error?: string;
      } = await res.json();
      console.log("result", result);

      if (result.success) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }

      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shrawan2401@gmail.com",
      href: "mailto:shrawan2401@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "9905737772",
      href: "tel:9905737772",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dhanbad ,Jharkhnad",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a conversation about technology and
                development. Feel free to reach out through any of the channels
                below.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 bg-gray-800/50 backdrop-blur-lg rounded-lg border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group"
                  initial={{ opacity: 0, x: -30 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                  }
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg group-hover:shadow-lg transition-shadow">
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{info.label}</h4>
                    <p className="text-gray-300 group-hover:text-cyan-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Decorative element */}
            <motion.div
              className="relative mt-12"
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
              }
              transition={{ delay: 0.8 }}
            >
              <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full flex items-center justify-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Mail className="text-white" size={24} />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="text-red-400 text-sm mt-1">
                        {(errors.firstName as FieldError).message || "Error"}
                      </p>
                    )}
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    placeholder="Doe"
                  />
                  {errors.lastName && (
                    <p className="text-red-400 text-sm mt-1">
                      {(errors.lastName as FieldError).message || "Error"}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  placeholder="john.doe@email.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                     {(errors.email as FieldError).message || "Error"}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  {...register("subject", { required: "Subject is required" })}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  placeholder="Project Collaboration"
                />
                {errors.subject && (
                  <p className="text-red-400 text-sm mt-1">
                     {(errors.subject as FieldError).message || "Error"}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  {...register("message", { required: "Message is required" })}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">
                     {(errors.message as FieldError).message || "Error"}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={submitStatus === "loading"}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                whileHover={{ scale: submitStatus === "loading" ? 1 : 1.02 }}
                whileTap={{ scale: submitStatus === "loading" ? 1 : 0.98 }}
              >
                {submitStatus === "loading" ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {/* Success/Error Messages */}
              {submitStatus === "success" && (
                <motion.div
                  className="flex items-center space-x-2 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle size={20} />
                  <span>
                    Message sent successfully! I'll get back to you soon.
                  </span>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  className="flex items-center space-x-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle size={20} />
                  <span>Failed to send message. Please try again.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
