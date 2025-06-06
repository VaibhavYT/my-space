"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "../data/projectsData";

interface ProjectCardProps {
  project: Project;
  onCardClick: (project: Project) => void;
  index: number; // Keep index for potential keying or staggered animations from parent
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const ProjectCard = ({ project, onCardClick, index }: ProjectCardProps) => {
  return (
    <motion.div
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      custom={index}
      whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onCardClick(project)}
      className="group cursor-pointer bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-200/50 dark:border-gray-700/50 will-change-transform"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bsW+tp0JcGjGEE7k/wBUcOAJSzMpEkJSqnM7h6fFLKNkynl5/K6rRlW70Vwp5OaxYLhrkx3oK7H6eGFhKb6pqO8VcLgP/9k="
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:gradient-text transition-all duration-300">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full font-medium">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        {/* View Project Indicator */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
            View Details
          </span>
          <motion.div
            className="w-6 h-6 text-blue-600 dark:text-blue-400"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5-5 5M6 12h12"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
