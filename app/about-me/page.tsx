"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowLeft,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import Navbar from "../components/Navbar";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutMePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const content = contentRef.current;

    if (!hero || !content) return;

    // Hero animations
    const tl = gsap.timeline();

    tl.fromTo(
      ".about-hero-image",
      { scale: 0.8, opacity: 0, rotate: -10 },
      { scale: 1, opacity: 1, rotate: 0, duration: 1.2, ease: "power3.out" }
    )
      .fromTo(
        ".about-title",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.8"
      )
      .fromTo(
        ".about-subtitle",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.4"
      );

    // Content sections animation
    gsap.fromTo(
      ".content-section",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: content,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8"
          >
            <Link href="/">
              <motion.button
                whileHover={{ x: -4 }}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                <FiArrowLeft className="w-5 h-5" />
                Back to Home
              </motion.button>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="about-hero-image relative">
              <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl border-8 border-white dark:border-gray-800">
                <Image
                  src="/profile-picture.jpg"
                  alt="Vaibhav's Profile Picture"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bsW+tp0JcGjGEE7k/wBUcOAJSzMpEkJSqnM7h6fFLKNkynl5/K6rRlW70Vwp5OaxYLhrkx3oK7H6eGFhKb6pqO8VcLgP/9k="
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl" />
            </div>

            {/* About Info */}
            <div>
              <h1 className="about-title text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                About <span className="gradient-text">Vaibhav</span>
              </h1>

              <p className="about-subtitle text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Passionate Software Engineer & Full-Stack Developer
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {[
                  {
                    icon: FiGithub,
                    href: "https://github.com/vaibhav",
                    label: "GitHub",
                  },
                  {
                    icon: FiLinkedin,
                    href: "https://linkedin.com/in/vaibhav",
                    label: "LinkedIn",
                  },
                  {
                    icon: FiTwitter,
                    href: "https://twitter.com/vaibhav",
                    label: "Twitter",
                  },
                  {
                    icon: FiMail,
                    href: "mailto:vaibhav@example.com",
                    label: "Email",
                  },
                ].map(({ icon: Icon, href, label }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border border-gray-200 dark:border-gray-700"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section ref={contentRef} className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* About Me */}
          <div className="content-section">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              My Story
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
                Hello! I'm Vaibhav, a passionate software engineer with a love
                for creating digital experiences that make a difference. My
                journey in technology began during my computer science studies,
                where I discovered the power of code to solve real-world
                problems.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
                Over the years, I've had the opportunity to work on diverse
                projects ranging from e-commerce platforms to AI-powered
                applications. I believe in writing clean, maintainable code and
                creating user experiences that are both functional and
                delightful.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                with the developer community.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="content-section">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Skills & Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  category: "Frontend",
                  skills: [
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "Framer Motion",
                    "GSAP",
                  ],
                },
                {
                  category: "Backend",
                  skills: [
                    "Node.js",
                    "Express",
                    "Python",
                    "FastAPI",
                    "PostgreSQL",
                    "MongoDB",
                  ],
                },
                {
                  category: "Tools & Technologies",
                  skills: [
                    "Git",
                    "Docker",
                    "AWS",
                    "Vercel",
                    "Firebase",
                    "WebRTC",
                  ],
                },
                {
                  category: "Design & UX",
                  skills: [
                    "Figma",
                    "Adobe XD",
                    "UI/UX Design",
                    "Responsive Design",
                    "Accessibility",
                  ],
                },
              ].map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="content-section">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Experience
            </h2>
            <div className="space-y-6">
              {[
                {
                  role: "Senior Frontend Developer",
                  company: "Tech Innovations Inc.",
                  period: "2022 - Present",
                  description:
                    "Leading frontend development for multiple high-traffic applications using React, Next.js, and modern web technologies.",
                },
                {
                  role: "Full-Stack Developer",
                  company: "Digital Solutions Co.",
                  period: "2020 - 2022",
                  description:
                    "Developed and maintained full-stack applications using MERN stack, implemented CI/CD pipelines, and mentored junior developers.",
                },
                {
                  role: "Software Engineer",
                  company: "StartupXYZ",
                  period: "2019 - 2020",
                  description:
                    "Built scalable web applications from scratch, collaborated with designers to implement pixel-perfect UIs, and optimized application performance.",
                },
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                    {exp.company}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="content-section text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              I'm always open to discussing new opportunities and interesting
              projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:vaibhav@example.com"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FiMail className="w-5 h-5" />
                Get In Touch
              </motion.a>
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                >
                  View My Work
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
