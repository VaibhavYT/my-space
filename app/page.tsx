"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import ProjectDetailModal from "./components/ProjectDetailModal";
import { projectsData, Project } from "./data/projectsData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Project categories with counts
const categories = [
  { name: "All", count: projectsData.length },
  { name: "Web Apps", count: 3 },
  { name: "Mobile", count: 1 },
  { name: "Dashboard", count: 1 },
  { name: "E-commerce", count: 1 },
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    // Hero section animations
    const tl = gsap.timeline();

    tl.fromTo(
      ".hero-title",
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    )
      .fromTo(
        ".hero-subtitle",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .fromTo(
        ".filter-tabs",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      );

    // Projects grid animation
    gsap.fromTo(
      ".project-card",
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
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
    // You can add more filtering logic based on project categories
    return project.tags?.includes(activeCategory.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            Assorted projects for{" "}
            <span className="text-gray-400">
              frontend developers and web designers.
            </span>
          </h1>

          <p className="hero-subtitle text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-16">
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
                    ? "bg-white text-gray-900"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {category.name}{" "}
                <span
                  className={`ml-1 ${
                    activeCategory === category.name
                      ? "text-gray-600"
                      : "text-gray-500"
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
          <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="project-card">
                <ProjectCard
                  project={project}
                  onCardClick={handleCardClick}
                  index={index}
                />
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
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
