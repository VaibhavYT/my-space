"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { gsap, ScrollTrigger } from "../../lib/gsap";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowLeft,
  FiGithub,
  FiExternalLink,
  FiUser,
  FiCode,
} from "react-icons/fi";
import { projectsData, Project } from "../../data/projectsData";
import Navbar from "../../components/Navbar";

export default function ProjectDetailPage() {
  const params = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (params.id) {
      const foundProject = projectsData.find((p) => p.id === params.id);
      setProject(foundProject || null);
    }
  }, [params.id]);

  useEffect(() => {
    if (!project) return;

    const hero = heroRef.current;
    const content = contentRef.current;

    if (!hero || !content) return;

    // Hero animations
    const tl = gsap.timeline();

    tl.fromTo(
      ".project-hero-image",
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
    )
      .fromTo(
        ".project-title",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=1"
      )
      .fromTo(
        ".project-subtitle",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      );

    // Content animations
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
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <Navbar />
        <div className="text-center pt-20">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Project Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors"
            >
              Back to Home
            </motion.button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
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
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <FiArrowLeft className="w-5 h-5" />
                Back to Projects
              </motion.button>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project Image */}
            <div className="project-hero-image relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bsW+tp0JcGjGEE7k/wBUcOAJSzMpEkJSqnM7h6fFLKNkynl5/K6rRlW70Vwp5OaxYLhrkx3oK7H6eGFhKb6pqO8VcLgP/9k="
              />
            </div>

            {/* Project Info */}
            <div>
              <h1 className="project-title text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {project.title}
              </h1>

              <p className="project-subtitle text-xl text-muted-foreground mb-8 leading-relaxed">
                {project.shortDescription}
              </p>

              {/* Project Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                {project.liveDemoUrl && (
                  <motion.a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-gradient-start to-gradient-end text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <FiExternalLink className="w-5 h-5" />
                    Live Demo
                  </motion.a>
                )}

                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 border-2 border-border text-foreground font-semibold rounded-xl hover:bg-secondary transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <FiGithub className="w-5 h-5" />
                    View Code
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Technologies Used */}
          <div className="content-section mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <FiCode className="w-8 h-8 text-accent" />
              Technologies Used
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {project.techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-card text-card-foreground rounded-xl shadow-md border"
                >
                  <span className="font-semibold text-card-foreground">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="content-section mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <FiUser className="w-8 h-8 text-accent" />
              Project Details
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="bg-card text-card-foreground rounded-2xl p-8 shadow-lg border">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.detailedDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="content-section mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.keyFeatures?.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-card text-card-foreground rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border"
                >
                  <div className="flex-shrink-0 w-3 h-3 bg-accent rounded-full" />
                  <span className="font-medium text-card-foreground">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Back to Projects */}
          <div className="content-section text-center">
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors shadow-lg"
              >
                View More Projects
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
