'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Project {
  id: number;
  title: string;
  description: string;
  sketchImage: string;
  actualImage: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "CRN24691",
    description: "1200 sq.ft. G + 1 Classic",
    sketchImage: "/L1.png",
    actualImage: "/R1.jpeg",
    category: "Residential"
  },
  {
    id: 2,
    title: "CRN40115",
    description: "123 sq.ft. G + 1 Classic",
    sketchImage: "/L2.png",
    actualImage: "/R2.jpg",
    category: "Residential"
  },
  {
    id: 3,
    title: "CRN5911",
    description: "1087 sq.ft. G + 1 Classic",
    sketchImage: "/L3.png",
    actualImage: "/R3.jpeg",
    category: "Residential"
  },
  {
    id: 4,
    title: "CRN11011",
    description: "3691 sq.ft. G + 3 Classic",
    sketchImage: "/L4.png",
    actualImage: "/R4.webp",
    category: "Residential"
  },
  {
    id: 5,
    title: "CRN10607",
    description: "1930 sq.ft. G + 0 Classic",
    sketchImage: "/L5.png",
    actualImage: "/R5.jpeg",
    category: "Residential"
  },
  {
    id: 6,
    title: "CRN4508",
    description: "123 sq.ft. G + 1 Classic",
    sketchImage: "/L6.png",
    actualImage: "/R6.jpeg",
    category: "Residential"
  }
];

export default function Portfolio() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="relative pt-24 pb-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-200 via-amber-200 to-orange-100 opacity-20 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.h2 
          className="flex items-center justify-center text-sm font-semibold text-[#866458] uppercase mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="w-16 border-t border-[#866458]"></span>
          <span className="px-4 tracking-widest">O U R &nbsp; P R O J E C T S</span>
          <span className="w-16 border-t border-[#866458]"></span>
        </motion.h2>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-white rounded-lg overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedProject(project)}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.95 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut"
                  }
                }
              }}
              whileHover={{ 
                y: -8,
                scale: 1.01,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              style={{
                boxShadow: hoveredCard === project.id 
                  ? "0 20px 40px rgba(251, 146, 60, 0.25), 0 10px 25px rgba(251, 146, 60, 0.15)" 
                  : "0 8px 25px rgba(251, 146, 60, 0.1), 0 4px 15px rgba(0, 0, 0, 0.08)",
                border: "1px solid #e5e7eb"
              }}
            >
              {/* Side by Side Images Container */}
              <div className="relative w-full flex">
                {/* 3D Render Image - Left Side */}
                <div className="relative w-1/2 aspect-[4/3] overflow-hidden">
                  <img
                    src={project.sketchImage}
                    alt={`${project.title} - 3D Render`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                    3D Render
                  </div>
                </div>

                {/* Actual Photo - Right Side */}
                <div className="relative w-1/2 aspect-[4/3] overflow-hidden">
                  <img
                    src={project.actualImage}
                    alt={`${project.title} - Actual Photo`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Project Info Section */}
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <h3 className="font-bold text-lg mb-1 font-serif" style={{ color: 'rgb(180, 83, 9)' }}>
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm font-serif">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-bold font-serif" style={{ color: 'rgb(180, 83, 9)' }}>
                  {selectedProject.title}
                </h2>
                <p className="text-gray-600 font-serif mt-1">
                  {selectedProject.description}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-orange-50 rounded-full transition-colors duration-200 group"
              >
                <svg
                  className="w-6 h-6 text-orange-600 group-hover:text-orange-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Images */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* 3D Render */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-800 font-serif">
                    3D Architectural Render
                  </h3>
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={selectedProject.sketchImage}
                      alt={`${selectedProject.title} - 3D Render`}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      3D Render
                    </div>
                  </div>
                </div>

                {/* Actual Photo */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-800 font-serif">
                    Completed Construction
                  </h3>
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={selectedProject.actualImage}
                      alt={`${selectedProject.title} - Completed`}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Completed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
