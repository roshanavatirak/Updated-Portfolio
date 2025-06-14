import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    title: "Software Engineering Intern",
    company: "Tech Innovations Inc.",
    duration: "June 2023 - August 2023",
    type: "internship",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    description: [
      "Led the development of a real-time analytics dashboard using React and D3.js",
      "Implemented RESTful APIs using Node.js and Express",
      "Optimized MongoDB queries resulting in 40% faster response times",
      "Deployed microservices using Docker and AWS ECS",
      "Collaborated with senior developers on large-scale projects",
      "Participated in code reviews and agile development processes"
    ]
  },
  {
    title: "Machine Learning Research Intern",
    company: "AI Research Lab",
    duration: "January 2023 - April 2023",
    type: "internship",
    technologies: ["Python", "TensorFlow", "PyTorch", "Computer Vision"],
    description: [
      "Developed deep learning models for image classification tasks",
      "Implemented and fine-tuned state-of-the-art architectures",
      "Improved model accuracy by 15% through data augmentation",
      "Created automated pipeline for model training and evaluation",
      "Published research findings in internal technical documentation",
      "Presented results to senior research team"
    ]
  },
  {
    title: "DevOps Engineering Intern",
    company: "Cloud Solutions Ltd.",
    duration: "May 2023 - July 2023",
    type: "internship",
    technologies: ["Docker", "Kubernetes", "Jenkins", "AWS"],
    description: [
      "Set up CI/CD pipelines using Jenkins and GitHub Actions",
      "Managed Kubernetes clusters for microservices deployment",
      "Implemented monitoring solutions using Prometheus and Grafana",
      "Automated infrastructure provisioning using Terraform",
      "Reduced deployment time by 60% through automation",
      "Created documentation for DevOps best practices"
    ]
  }
];