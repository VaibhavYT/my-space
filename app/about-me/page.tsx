"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap, ScrollTrigger } from "../lib/gsap";
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
        "-=0.6" // Adjusted timing slightly for smoother flow
      )
      .fromTo(
        ".about-social-links > *", // Target individual links for stagger
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.1 },
        "-=0.4" // Stagger social links after subtitle
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
      ScrollTrigger.getAll().forEach((trigger: ScrollTrigger) =>
        trigger.kill()
      );
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-sky-900/30 text-gray-800 dark:text-gray-200">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-24 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }} // Earlier delay
            className="mb-10"
          >
            <Link href="/">
              <motion.button
                whileHover={{ x: -4, color: "#2563eb" }} // Example: blue-600
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-sky-400 transition-colors duration-300 group"
              >
                <FiArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
                Back to Home
              </motion.button>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <div className="about-hero-image relative">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700">
                <Image
                  src="/project-images/image.jpg"
                  alt="Vaibhav's Profile Picture"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bsW+tp0JcGjGEE7k/wBUcOAJSzMpEkJSqnM7h6fFLKNkynl5/K6rRlW70Vwp5OaxYLhrkx3oK7H6eGFhKb6pqO8VcLgP/9k="
                  sizes="(max-width: 640px) 18rem, 20rem"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-28 h-28 bg-sky-400/10 dark:bg-sky-500/20 rounded-full blur-2xl opacity-70"
                animate={{ scale: [1, 1.03, 1], rotate: [0, 3, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-36 h-36 bg-purple-400/10 dark:bg-purple-500/20 rounded-full blur-2xl opacity-70"
                animate={{ scale: [1, 1.05, 1], rotate: [0, -4, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* About Info */}
            <div className="text-center lg:text-left">
              <h1 className="about-title text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                  Vaibhav
                </span>
              </h1>

              <p className="about-subtitle text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                Innovative Software Engineer & Full-Stack Developer
              </p>

              {/* Social Links */}
              <div className="about-social-links flex gap-4 justify-center lg:justify-start">
                {[
                  {
                    icon: FiGithub,
                    href: "https://github.com/vaibhav",
                    label: "GitHub",
                    color: "hover:text-gray-900 dark:hover:text-white",
                  },
                  {
                    icon: FiLinkedin,
                    href: "https://linkedin.com/in/vaibhav",
                    label: "LinkedIn",
                    color: "hover:text-blue-700 dark:hover:text-blue-500",
                  },
                  {
                    icon: FiTwitter,
                    href: "https://twitter.com/vaibhav",
                    label: "Twitter",
                    color: "hover:text-sky-500 dark:hover:text-sky-400",
                  },
                  {
                    icon: FiMail,
                    href: "mailto:vaibhav@example.com",
                    label: "Email",
                    color: "hover:text-red-600 dark:hover:text-red-500",
                  },
                ].map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    // GSAP now handles initial animation for these
                    className={`w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center text-gray-500 dark:text-gray-400 ${color} transition-colors duration-300 border border-gray-200 dark:border-slate-700`}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section ref={contentRef} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* About Me */}
          <div className="content-section">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-10 tracking-tight text-center lg:text-left">
              My Story
            </h2>
            <motion.div
              className="bg-white dark:bg-slate-800/70 rounded-2xl p-8 sm:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-out border border-gray-200 dark:border-slate-700 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
                Hello! I&apos;m Vaibhav, a passionate software engineer with a
                love for creating digital experiences that make a difference. My
                journey in technology began during my computer science studies,
                where I discovered the power of code to solve real-world
                problems.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
                Over the years, I&lsquo;ve had the opportunity to work on
                diverse projects ranging from e-commerce platforms to AI-powered
                applications. I believe in writing clean, maintainable code and
                creating user experiences that are both functional and
                delightful.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                When I&lsquo;m not coding, you can find me exploring new
                technologies, contributing to open-source projects, diving into
                AI research, or sharing my knowledge with the developer
                community.
              </p>
            </motion.div>
          </div>

          {/* Skills */}
          <div className="content-section">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-10 tracking-tight text-center lg:text-left">
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
                    "JavaScript (ESNext)",
                    "HTML5",
                    "CSS3 / SASS",
                    "Tailwind CSS",
                    "Framer Motion",
                    "GSAP",
                  ],
                },
                {
                  category: "Backend",
                  skills: [
                    "Node.js",
                    "Express.js",
                    "Python",
                    "FastAPI",
                    "Django",
                    "PostgreSQL",
                    "MongoDB",
                    "GraphQL",
                    "REST APIs",
                  ],
                },
                {
                  category: "AI & Machine Learning",
                  skills: [
                    "TensorFlow",
                    "PyTorch",
                    "Scikit-learn",
                    "LangChain & LLMs",
                    "OpenCV",
                    "NLP",
                    "Data Analysis",
                    "Prompt Engineering",
                  ],
                },
                {
                  category: "Tools & Platforms",
                  skills: [
                    "Git & GitHub",
                    "Docker",
                    "Kubernetes",
                    "AWS",
                    "Google Cloud (GCP)",
                    "Vercel",
                    "Firebase",
                    "CI/CD Pipelines",
                  ],
                },
                {
                  category: "Design & UX",
                  skills: [
                    "Figma",
                    "Adobe XD",
                    "UI/UX Principles",
                    "Responsive Design",
                    "Accessibility (A11Y)",
                    "Prototyping",
                  ],
                },
                {
                  category: "Methodologies",
                  skills: [
                    "Agile & Scrum",
                    "Test-Driven Development (TDD)",
                    "Microservices",
                    "System Design",
                  ],
                },
              ].map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800/70 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-out border border-gray-200 dark:border-slate-700 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-5">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                        }}
                        className="px-3 py-1.5 bg-sky-100 dark:bg-sky-700/30 text-sky-700 dark:text-sky-300 text-sm rounded-full font-medium cursor-default transition-all duration-200"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="content-section">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-10 tracking-tight text-center lg:text-left">
              Experience
            </h2>
            <div className="space-y-8">
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
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="bg-white dark:bg-slate-800/70 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-out border border-gray-200 dark:border-slate-700 backdrop-blur-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-blue-600 dark:text-sky-400 font-medium mt-1 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-medium mb-4">
                    {exp.company}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="content-section text-center pt-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-6 tracking-tight">
              Let&apos;s Create Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Amazing
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
              I&apos;m passionate about leveraging technology to solve complex
              problems and build impactful digital experiences. If you have a
              project in mind or just want to connect, feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <motion.a
                href="mailto:vaibhav@example.com"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 10px 20px -5px rgba(59, 130, 246, 0.4)",
                }} // blue-500
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-out flex items-center justify-center gap-3 text-lg"
              >
                <FiMail className="w-5 h-5" />
                Get In Touch
              </motion.a>
              <Link href="/projects">
                {" "}
                {/* Assuming you have a projects page */}
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    boxShadow:
                      "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-3.5 border-2 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-300 ease-out text-lg"
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
