"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap, ScrollTrigger } from "./lib/gsap";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import ProjectDetailModal from "./components/ProjectDetailModal";
import { projectsData, Project } from "./data/projectsData";

// Generate categories dynamically
const categoryNames = ["Web Apps", "Mobile", "Dashboard", "E-commerce"];
const categories = [
  { name: "All", count: projectsData.length },
  ...categoryNames
    .map((name) => {
      const lowercaseName = name.toLowerCase();
      const count = projectsData.filter((p) =>
        p.tags?.includes(lowercaseName)
      ).length;
      return { name, count };
    })
    .filter((c) => c.count > 0), // Only show categories with projects
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    // Hero section animations
    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power3.out",
      },
    });

    tl.fromTo(
      ".hero-title",
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2 }
    )
      .fromTo(
        ".hero-subtitle",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.8"
      )
      .fromTo(
        ".filter-tabs",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      );

    // Clean up all ScrollTrigger instances on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger: ScrollTrigger) =>
        trigger.kill()
      );
    };
  }, []);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "All") return true;
    // This logic assumes tags in `projectsData` are lowercase
    return project.tags?.includes(activeCategory.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            Assorted projects for{" "}
            <span className="text-muted-foreground">
              frontend developers and web designers.
            </span>
          </h1>

          <p className="hero-subtitle text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-16">
            Explore curated and handpicked projects that showcase modern web
            development techniques and enhance your understanding of full-stack
            applications.
          </p>

          {/* Filter Tabs */}
          <div className="filter-tabs flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.name
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {category.name}{" "}
                <span
                  className={`ml-1 ${
                    activeCategory === category.name
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onCardClick={handleCardClick}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
