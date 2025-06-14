import type { Certificate } from '../types';

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialUrl: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=1000",
    skills: ["AWS", "Cloud Architecture", "Security", "Scalability"]
  },
  {
    id: 2,
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2023",
    credentialUrl: "https://www.tensorflow.org/certificate",
    image: "https://images.unsplash.com/photo-1677442135036-07723e8acf8b?auto=format&fit=crop&q=80&w=1000",
    skills: ["Machine Learning", "Deep Learning", "Python", "TensorFlow"]
  },
  {
    id: 3,
    title: "Meta Frontend Developer",
    issuer: "Meta",
    date: "2023",
    credentialUrl: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
    image: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?auto=format&fit=crop&q=80&w=1000",
    skills: ["React", "JavaScript", "CSS", "Web Development"]
  },
  {
    id: 4,
    title: "Blockchain Specialization",
    issuer: "Coursera",
    date: "2024",
    credentialUrl: "https://www.coursera.org/specializations/blockchain",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000",
    skills: ["Blockchain", "Smart Contracts", "Web3", "DApp Development"]
  }
];