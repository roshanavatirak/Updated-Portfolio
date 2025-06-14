import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { Certificate } from '../types';

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-xl font-bold">{certificate.title}</h3>
          <p className="text-gray-200 text-sm">{certificate.issuer}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-blue-600 dark:text-blue-400 font-medium">{certificate.date}</span>
          <motion.a
            href={certificate.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            whileHover={{ scale: 1.1 }}
          >
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </div>
        <div className="flex flex-wrap gap-2">
          {certificate.skills.map((skill, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1 }}
              className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};