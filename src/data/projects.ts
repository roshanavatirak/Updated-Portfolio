import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with user authentication, product catalog, cart functionality, and payment integration.",
    longDescription: "This comprehensive e-commerce platform features user authentication, product management, shopping cart functionality, secure checkout with Stripe integration, order history, and an admin dashboard for inventory management. Built with React, Node.js, Express, and MongoDB, it demonstrates my ability to create complex, production-ready applications.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "Redis", "Docker"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://ecommerce-platform.com",
    category: "Web Development",
    learnings: [
      "Implemented advanced state management patterns",
      "Optimized database queries for better performance",
      "Integrated real-time inventory updates",
      "Implemented secure payment processing",
      "Developed responsive UI components"
    ],
    contributions: [
      "Designed and implemented the entire backend architecture",
      "Created reusable React components",
      "Implemented Redis caching for improved performance",
      "Set up CI/CD pipeline with GitHub Actions",
      "Implemented comprehensive test coverage"
    ]
  },
  {
    id: 2,
    title: "AI Image Generator",
    description: "An AI-powered image generation platform using stable diffusion models.",
    longDescription: "A cutting-edge AI image generation platform that leverages stable diffusion models to create high-quality images from text descriptions. Features include style transfer, image editing, and batch processing capabilities.",
    technologies: ["Python", "PyTorch", "FastAPI", "React", "Docker", "AWS"],
    image: "https://images.unsplash.com/photo-1677442135136-760c813a743d?auto=format&fit=crop&q=80&w=1000",
    githubUrl: "https://github.com/yourusername/ai-image-generator",
    liveUrl: "https://ai-image-generator.com",
    category: "AI/ML",
    learnings: [
      "Deep learning model deployment",
      "GPU optimization techniques",
      "Scalable API design",
      "Real-time processing pipelines",
      "Model fine-tuning strategies"
    ],
    contributions: [
      "Implemented the stable diffusion model pipeline",
      "Optimized inference performance",
      "Created user-friendly UI for image generation",
      "Set up AWS infrastructure for GPU computing",
      "Implemented image processing pipeline"
    ]
  },
  {
    id: 3,
    title: "Kubernetes Monitoring Dashboard",
    description: "A real-time monitoring dashboard for Kubernetes clusters with alerting capabilities.",
    longDescription: "A comprehensive monitoring solution for Kubernetes clusters that provides real-time metrics, alerts, and visualization of cluster health. Features include custom metric collection, alert configuration, and integration with popular notification platforms.",
    technologies: ["Go", "Prometheus", "Grafana", "Kubernetes", "Docker", "React"],
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=1000",
    githubUrl: "https://github.com/yourusername/k8s-monitor",
    category: "DevOps",
    learnings: [
      "Kubernetes operator patterns",
      "Metrics collection and aggregation",
      "Distributed systems monitoring",
      "Alert management systems",
      "High-availability deployment strategies"
    ],
    contributions: [
      "Designed custom metrics collection system",
      "Implemented Kubernetes operator in Go",
      "Created dashboard UI with React",
      "Set up automated deployment pipeline",
      "Implemented alert management system"
    ]
  },
  {
    id: 4,
    title: "DeFi Lending Platform",
    description: "A decentralized lending platform built on Ethereum with smart contracts.",
    longDescription: "A decentralized finance platform that enables users to lend and borrow cryptocurrencies through smart contracts. Features include automated interest rate adjustment, collateral management, and liquidation mechanisms.",
    technologies: ["Solidity", "Web3.js", "React", "Hardhat", "OpenZeppelin"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000",
    githubUrl: "https://github.com/yourusername/defi-lending",
    category: "Web3",
    learnings: [
      "Smart contract security patterns",
      "DeFi protocol design",
      "Gas optimization techniques",
      "Web3 integration patterns",
      "Blockchain development best practices"
    ],
    contributions: [
      "Developed and audited smart contracts",
      "Implemented lending pool mechanics",
      "Created user interface for lending platform",
      "Set up testing infrastructure",
      "Implemented oracle integration"
    ]
  }
];