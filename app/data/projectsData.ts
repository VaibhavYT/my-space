export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  imageUrl: string;
  techStack: string[];
  detailedDescription: string;
  keyFeatures: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  tags?: string[];
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    shortDescription:
      "A modern, full-stack e-commerce solution with real-time inventory management",
    imageUrl: "/project-images/image.jpg",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    detailedDescription:
      "Built a comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment integration with Stripe, admin dashboard, and real-time inventory tracking. Implemented advanced features like product recommendations, order tracking, and responsive design. The platform handles thousands of concurrent users with optimized database queries and caching strategies.",
    keyFeatures: [
      "User Authentication (JWT)",
      "Stripe Payment Integration",
      "Admin Dashboard",
      "Real-time Inventory Tracking",
      "Product Recommendations",
      "Optimized for Performance",
    ],
    githubUrl: "https://github.com/vaibhav/ecommerce-platform",
    liveDemoUrl: "https://ecommerce-demo.vercel.app",
    tags: ["web apps", "e-commerce"],
  },
  {
    id: "2",
    title: "AI-Powered Task Manager",
    shortDescription:
      "Smart productivity app with AI-driven task prioritization and scheduling",
    imageUrl: "/project-images/image.jpg",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI API",
      "Socket.io",
    ],
    detailedDescription:
      "Developed an intelligent task management application that uses machine learning to automatically prioritize tasks, suggest optimal scheduling, and provide productivity insights. Features include real-time collaboration, smart notifications, time tracking, and integration with popular calendar apps. The AI component analyzes user behavior patterns to continuously improve recommendations.",
    keyFeatures: [
      "AI Task Prioritization",
      "Real-time Collaboration",
      "Smart Notifications",
      "Calendar Integration",
      "User Behavior Analysis",
      "Time Tracking",
    ],
    githubUrl: "https://github.com/vaibhav/ai-task-manager",
    liveDemoUrl: "https://smart-tasks.netlify.app",
    tags: ["web apps"],
  },
  {
    id: "3",
    title: "Real-Time Chat Application",
    shortDescription:
      "Scalable messaging platform with video calls and file sharing capabilities",
    imageUrl: "/project-images/image.jpg",
    techStack: ["React", "Socket.io", "Node.js", "Redis", "WebRTC", "AWS S3"],
    detailedDescription:
      "Created a high-performance real-time chat application supporting text messaging, voice/video calls, file sharing, and group conversations. Implemented features like message encryption, typing indicators, read receipts, emoji reactions, and message search. The backend uses Redis for session management and horizontal scaling to support thousands of concurrent connections.",
    keyFeatures: [
      "Secure Text & Video Chat",
      "Group Conversations",
      "End-to-End Encryption",
      "Scalable with Redis",
      "File Sharing (AWS S3)",
      "Typing Indicators & Read Receipts",
    ],
    githubUrl: "https://github.com/vaibhav/realtime-chat",
    liveDemoUrl: "https://chat-app-demo.herokuapp.com",
    tags: ["web apps"],
  },
  {
    id: "4",
    title: "Data Visualization Dashboard",
    shortDescription:
      "Interactive analytics dashboard with real-time data processing and beautiful charts",
    imageUrl: "/project-images/image.jpg",
    techStack: ["React", "D3.js", "Chart.js", "Python", "FastAPI", "Docker"],
    detailedDescription:
      "Built a comprehensive data visualization dashboard that processes large datasets in real-time and presents insights through interactive charts, graphs, and maps. Features include customizable dashboards, data filtering, export functionality, and automated report generation. The backend uses Python with FastAPI for high-performance data processing and includes data pipeline automation.",
    keyFeatures: [
      "Real-time Data Processing",
      "Interactive D3.js Charts",
      "Customizable Dashboards",
      "High-performance FastAPI Backend",
      "Data Exporting",
      "Automated Reporting",
    ],
    githubUrl: "https://github.com/vaibhav/data-dashboard",
    liveDemoUrl: "https://analytics-dashboard.netlify.app",
    tags: ["dashboard"],
  },
  {
    id: "5",
    title: "Fitness Tracking Mobile App",
    shortDescription:
      "Cross-platform fitness app with workout planning and progress tracking",
    imageUrl: "/project-images/image.jpg",
    techStack: [
      "React Native",
      "Expo",
      "Firebase",
      "TypeScript",
      "Redux Toolkit",
    ],
    detailedDescription:
      "Developed a comprehensive fitness tracking application for iOS and Android platforms. Features include workout planning, exercise library with video demonstrations, progress tracking with charts, social features for sharing achievements, and integration with wearable devices. Implemented offline functionality for uninterrupted workout sessions and cloud sync for data backup.",
    keyFeatures: [
      "Cross-Platform (iOS & Android)",
      "Custom Workout Planning",
      "Exercise Video Library",
      "Progress Tracking Charts",
      "Wearable Device Integration",
      "Offline Mode & Cloud Sync",
    ],
    githubUrl: "https://github.com/vaibhav/fitness-tracker",
    liveDemoUrl: "https://fitness-app-preview.netlify.app",
    tags: ["mobile"],
  },
  {
    id: "6",
    title: "Fitness Tracking Mobile App",
    shortDescription:
      "Cross-platform fitness app with workout planning and progress tracking",
    imageUrl: "/project-images/image.jpg",
    techStack: [
      "React Native",
      "Expo",
      "Firebase",
      "TypeScript",
      "Redux Toolkit",
    ],
    detailedDescription:
      "Developed a comprehensive fitness tracking application for iOS and Android platforms. Features include workout planning, exercise library with video demonstrations, progress tracking with charts, social features for sharing achievements, and integration with wearable devices. Implemented offline functionality for uninterrupted workout sessions and cloud sync for data backup.",
    keyFeatures: [
      "Cross-Platform (iOS & Android)",
      "Custom Workout Planning",
      "Exercise Video Library",
      "Progress Tracking Charts",
      "Wearable Device Integration",
      "Offline Mode & Cloud Sync",
    ],
    githubUrl: "https://github.com/vaibhav/fitness-tracker",
    liveDemoUrl: "https://fitness-app-preview.netlify.app",
    tags: ["mobile"],
  },
  {
    id: "7",
    title: "Fitness Tracking Mobile App",
    shortDescription:
      "Cross-platform fitness app with workout planning and progress tracking",
    imageUrl: "/project-images/image.jpg",
    techStack: [
      "React Native",
      "Expo",
      "Firebase",
      "TypeScript",
      "Redux Toolkit",
    ],
    detailedDescription:
      "Developed a comprehensive fitness tracking application for iOS and Android platforms. Features include workout planning, exercise library with video demonstrations, progress tracking with charts, social features for sharing achievements, and integration with wearable devices. Implemented offline functionality for uninterrupted workout sessions and cloud sync for data backup.",
    keyFeatures: [
      "Cross-Platform (iOS & Android)",
      "Custom Workout Planning",
      "Exercise Video Library",
      "Progress Tracking Charts",
      "Wearable Device Integration",
      "Offline Mode & Cloud Sync",
    ],
    githubUrl: "https://github.com/vaibhav/fitness-tracker",
    liveDemoUrl: "https://fitness-app-preview.netlify.app",
    tags: ["mobile"],
  },
  {
    id: "8",
    title: "Fitness Tracking Mobile App",
    shortDescription:
      "Cross-platform fitness app with workout planning and progress tracking",
    imageUrl: "/project-images/image.jpg",
    techStack: [
      "React Native",
      "Expo",
      "Firebase",
      "TypeScript",
      "Redux Toolkit",
    ],
    detailedDescription:
      "Developed a comprehensive fitness tracking application for iOS and Android platforms. Features include workout planning, exercise library with video demonstrations, progress tracking with charts, social features for sharing achievements, and integration with wearable devices. Implemented offline functionality for uninterrupted workout sessions and cloud sync for data backup.",
    keyFeatures: [
      "Cross-Platform (iOS & Android)",
      "Custom Workout Planning",
      "Exercise Video Library",
      "Progress Tracking Charts",
      "Wearable Device Integration",
      "Offline Mode & Cloud Sync",
    ],
    githubUrl: "https://github.com/vaibhav/fitness-tracker",
    liveDemoUrl: "https://fitness-app-preview.netlify.app",
    tags: ["mobile"],
  },
  {
    id: "9",
    title: "Fitness Tracking Mobile App",
    shortDescription:
      "Cross-platform fitness app with workout planning and progress tracking",
    imageUrl: "/project-images/image.jpg",
    techStack: [
      "React Native",
      "Expo",
      "Firebase",
      "TypeScript",
      "Redux Toolkit",
    ],
    detailedDescription:
      "Developed a comprehensive fitness tracking application for iOS and Android platforms. Features include workout planning, exercise library with video demonstrations, progress tracking with charts, social features for sharing achievements, and integration with wearable devices. Implemented offline functionality for uninterrupted workout sessions and cloud sync for data backup.",
    keyFeatures: [
      "Cross-Platform (iOS & Android)",
      "Custom Workout Planning",
      "Exercise Video Library",
      "Progress Tracking Charts",
      "Wearable Device Integration",
      "Offline Mode & Cloud Sync",
    ],
    githubUrl: "https://github.com/vaibhav/fitness-tracker",
    liveDemoUrl: "https://fitness-app-preview.netlify.app",
    tags: ["mobile"],
  },
  {
    id: "10",
    title: "Fitness Tracking Mobile App",
    shortDescription:
      "Cross-platform fitness app with workout planning and progress tracking",
    imageUrl: "/project-images/image.jpg",
    techStack: [
      "React Native",
      "Expo",
      "Firebase",
      "TypeScript",
      "Redux Toolkit",
    ],
    detailedDescription:
      "Developed a comprehensive fitness tracking application for iOS and Android platforms. Features include workout planning, exercise library with video demonstrations, progress tracking with charts, social features for sharing achievements, and integration with wearable devices. Implemented offline functionality for uninterrupted workout sessions and cloud sync for data backup.",
    keyFeatures: [
      "Cross-Platform (iOS & Android)",
      "Custom Workout Planning",
      "Exercise Video Library",
      "Progress Tracking Charts",
      "Wearable Device Integration",
      "Offline Mode & Cloud Sync",
    ],
    githubUrl: "https://github.com/vaibhav/fitness-tracker",
    liveDemoUrl: "https://fitness-app-preview.netlify.app",
    tags: ["mobile"],
  },
  {
    id: "11",
    title: "Fitness Tracking Mobile App",
    shortDescription:
      "Cross-platform fitness app with workout planning and progress tracking",
    imageUrl: "/project-images/image.jpg",
    techStack: [
      "React Native",
      "Expo",
      "Firebase",
      "TypeScript",
      "Redux Toolkit",
    ],
    detailedDescription:
      "Developed a comprehensive fitness tracking application for iOS and Android platforms. Features include workout planning, exercise library with video demonstrations, progress tracking with charts, social features for sharing achievements, and integration with wearable devices. Implemented offline functionality for uninterrupted workout sessions and cloud sync for data backup.",
    keyFeatures: [
      "Cross-Platform (iOS & Android)",
      "Custom Workout Planning",
      "Exercise Video Library",
      "Progress Tracking Charts",
      "Wearable Device Integration",
      "Offline Mode & Cloud Sync",
    ],
    githubUrl: "https://github.com/vaibhav/fitness-tracker",
    liveDemoUrl: "https://fitness-app-preview.netlify.app",
    tags: ["mobile"],
  },
  {
    id: "12",
    title: "Fitness Tracking Mobile App",
    shortDescription:
      "Cross-platform fitness app with workout planning and progress tracking",
    imageUrl: "/project-images/image.jpg",
    techStack: [
      "React Native",
      "Expo",
      "Firebase",
      "TypeScript",
      "Redux Toolkit",
    ],
    detailedDescription:
      "Developed a comprehensive fitness tracking application for iOS and Android platforms. Features include workout planning, exercise library with video demonstrations, progress tracking with charts, social features for sharing achievements, and integration with wearable devices. Implemented offline functionality for uninterrupted workout sessions and cloud sync for data backup.",
    keyFeatures: [
      "Cross-Platform (iOS & Android)",
      "Custom Workout Planning",
      "Exercise Video Library",
      "Progress Tracking Charts",
      "Wearable Device Integration",
      "Offline Mode & Cloud Sync",
    ],
    githubUrl: "https://github.com/vaibhav/fitness-tracker",
    liveDemoUrl: "https://fitness-app-preview.netlify.app",
    tags: ["mobile"],
  },
  {
    id: "13",
    title: "Fitness Tracking Mobile App",
    shortDescription:
      "Cross-platform fitness app with workout planning and progress tracking",
    imageUrl: "/project-images/image.jpg",
    techStack: [
      "React Native",
      "Expo",
      "Firebase",
      "TypeScript",
      "Redux Toolkit",
    ],
    detailedDescription:
      "Developed a comprehensive fitness tracking application for iOS and Android platforms. Features include workout planning, exercise library with video demonstrations, progress tracking with charts, social features for sharing achievements, and integration with wearable devices. Implemented offline functionality for uninterrupted workout sessions and cloud sync for data backup.",
    keyFeatures: [
      "Cross-Platform (iOS & Android)",
      "Custom Workout Planning",
      "Exercise Video Library",
      "Progress Tracking Charts",
      "Wearable Device Integration",
      "Offline Mode & Cloud Sync",
    ],
    githubUrl: "https://github.com/vaibhav/fitness-tracker",
    liveDemoUrl: "https://fitness-app-preview.netlify.app",
    tags: ["mobile"],
  },
  {
    id: "14",
    title: "Fitness Tracking Mobile App",
    shortDescription:
      "Cross-platform fitness app with workout planning and progress tracking",
    imageUrl: "/project-images/image.jpg",
    techStack: [
      "React Native",
      "Expo",
      "Firebase",
      "TypeScript",
      "Redux Toolkit",
    ],
    detailedDescription:
      "Developed a comprehensive fitness tracking application for iOS and Android platforms. Features include workout planning, exercise library with video demonstrations, progress tracking with charts, social features for sharing achievements, and integration with wearable devices. Implemented offline functionality for uninterrupted workout sessions and cloud sync for data backup.",
    keyFeatures: [
      "Cross-Platform (iOS & Android)",
      "Custom Workout Planning",
      "Exercise Video Library",
      "Progress Tracking Charts",
      "Wearable Device Integration",
      "Offline Mode & Cloud Sync",
    ],
    githubUrl: "https://github.com/vaibhav/fitness-tracker",
    liveDemoUrl: "https://fitness-app-preview.netlify.app",
    tags: ["mobile"],
  },
  {
    id: "15",
    title: "Fitness Tracking Mobile App",
    shortDescription:
      "Cross-platform fitness app with workout planning and progress tracking",
    imageUrl: "/project-images/image.jpg",
    techStack: [
      "React Native",
      "Expo",
      "Firebase",
      "TypeScript",
      "Redux Toolkit",
    ],
    detailedDescription:
      "Developed a comprehensive fitness tracking application for iOS and Android platforms. Features include workout planning, exercise library with video demonstrations, progress tracking with charts, social features for sharing achievements, and integration with wearable devices. Implemented offline functionality for uninterrupted workout sessions and cloud sync for data backup.",
    keyFeatures: [
      "Cross-Platform (iOS & Android)",
      "Custom Workout Planning",
      "Exercise Video Library",
      "Progress Tracking Charts",
      "Wearable Device Integration",
      "Offline Mode & Cloud Sync",
    ],
    githubUrl: "https://github.com/vaibhav/fitness-tracker",
    liveDemoUrl: "https://fitness-app-preview.netlify.app",
    tags: ["mobile"],
  },
];
