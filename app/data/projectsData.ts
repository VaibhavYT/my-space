export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  imageUrl: string;
  techStack: string[];
  detailedDescription: string;
  githubUrl?: string;
  liveDemoUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    shortDescription:
      "A modern, full-stack e-commerce solution with real-time inventory management",
    imageUrl: "/project-images/ecommerce.jpg",
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
    githubUrl: "https://github.com/vaibhav/ecommerce-platform",
    liveDemoUrl: "https://ecommerce-demo.vercel.app",
  },
  {
    id: "2",
    title: "AI-Powered Task Manager",
    shortDescription:
      "Smart productivity app with AI-driven task prioritization and scheduling",
    imageUrl: "/project-images/task-manager.jpg",
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
    githubUrl: "https://github.com/vaibhav/ai-task-manager",
    liveDemoUrl: "https://smart-tasks.netlify.app",
  },
  {
    id: "3",
    title: "Real-Time Chat Application",
    shortDescription:
      "Scalable messaging platform with video calls and file sharing capabilities",
    imageUrl: "/project-images/chat-app.jpg",
    techStack: ["React", "Socket.io", "Node.js", "Redis", "WebRTC", "AWS S3"],
    detailedDescription:
      "Created a high-performance real-time chat application supporting text messaging, voice/video calls, file sharing, and group conversations. Implemented features like message encryption, typing indicators, read receipts, emoji reactions, and message search. The backend uses Redis for session management and horizontal scaling to support thousands of concurrent connections.",
    githubUrl: "https://github.com/vaibhav/realtime-chat",
    liveDemoUrl: "https://chat-app-demo.herokuapp.com",
  },
  {
    id: "4",
    title: "Data Visualization Dashboard",
    shortDescription:
      "Interactive analytics dashboard with real-time data processing and beautiful charts",
    imageUrl: "/project-images/dashboard.jpg",
    techStack: ["React", "D3.js", "Chart.js", "Python", "FastAPI", "Docker"],
    detailedDescription:
      "Built a comprehensive data visualization dashboard that processes large datasets in real-time and presents insights through interactive charts, graphs, and maps. Features include customizable dashboards, data filtering, export functionality, and automated report generation. The backend uses Python with FastAPI for high-performance data processing and includes data pipeline automation.",
    githubUrl: "https://github.com/vaibhav/data-dashboard",
    liveDemoUrl: "https://analytics-dashboard.netlify.app",
  },
  {
    id: "5",
    title: "Fitness Tracking Mobile App",
    shortDescription:
      "Cross-platform fitness app with workout planning and progress tracking",
    imageUrl: "/project-images/fitness-app.jpg",
    techStack: [
      "React Native",
      "Expo",
      "Firebase",
      "TypeScript",
      "Redux Toolkit",
    ],
    detailedDescription:
      "Developed a comprehensive fitness tracking application for iOS and Android platforms. Features include workout planning, exercise library with video demonstrations, progress tracking with charts, social features for sharing achievements, and integration with wearable devices. Implemented offline functionality for uninterrupted workout sessions and cloud sync for data backup.",
    githubUrl: "https://github.com/vaibhav/fitness-tracker",
    liveDemoUrl: "https://fitness-app-preview.netlify.app",
  },
];
