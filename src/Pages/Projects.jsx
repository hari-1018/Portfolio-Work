import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaArrowRight, FaTimes, FaChevronLeft, FaChevronRight, FaEye } from 'react-icons/fa';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: '01.',
      title: 'High Clouds Analysis Dashboard',
      description: "An interactive Excel based dashboard providing in-depth insights into airline operations. This project visualizes key performance indicators such as passenger count, freight, mail, payload and departures to support data driven decision-making in the aviation industry.",
      image: "/Excel.jpeg",
      githubLink: "https://github.com/NainuFathima/High-Clouds-Analysis-Dashboard.git",
      category: "Excel",
    },
    {
      id: '02.',
      title: 'Airline Performance BI',
      description: "An interactive Power BI project designed to analyze and visualize airline performance metrics across multiple dimensions such as passengers, load factor, and operational KPIs. This project is ideal for stakeholders looking to leverage data for strategic decision making in the aviation industry.",
      image: "/PowerBIHome.jpeg",
      githubLink: "https://github.com/NainuFathima/Airline-Performance-BI.git",
      category: "Power BI",
      hasMoreContent: true,
      additionalImages: [
        "/PowerBIHome.jpeg",
        "/PowerBIOverview.jpeg",
        "/PowerBIPassengers.jpeg",
        "/PowerBILoad.jpeg"
      ],
      detailedDescription: "This comprehensive Power BI project features multiple interactive dashboards that provide deep insights into airline operations. The overview dashboard showcases high-level trends in operations, flights and efficiency. The next passengers dashboard showcases trends in passengers numbers, seasonality and flow. Finally the load factor dashboard showcases mail, freight and payload distribution insights."
    },
    {
      id: '03.',
      title: 'Adventure Work Insights',
      description: "An interactive Tableau dashboard analyzing the Adventure Works Cycles dataset. This project highlights key business metrices such as sales, profit, customer distribution, and product performance across various time periods and regions.",
      image: "/Adventure.jpeg",
      githubLink: "https://github.com/NainuFathima/Adventure-Works-Insights-Dashboard.git",
      category: "Tableau",
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.additionalImages) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.additionalImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.additionalImages) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.additionalImages.length - 1 : prev - 1
      );
    }
  };

  return (
    <div id="projects" className="min-h-screen bg-white text-gray-900 px-4 py-20 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Projects highlighting insights, visual analytics, and data-informed decisions
          </p>
            <motion.div
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-8 rounded-full"
            /> 
        </div>

        {/* Projects */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 lg:gap-16 items-center`}>
                
                {/* Image Section */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="relative overflow-hidden rounded-3xl bg-gray-50 shadow-2xl">
                    {/* Image container */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-64 lg:h-80 object-cover transition-all duration-700 ${
                          hoveredProject === index ? 'scale-105' : 'scale-100'
                        }`}
                      />
                      {/* View More Overlay for projects with additional content */}
                      {project.hasMoreContent && (
                        <div className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
                          hoveredProject === index ? 'opacity-100' : 'opacity-0'
                        }`}>
                          <button
                            onClick={() => openModal(project)}
                            className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-all duration-300"
                          >
                            <FaEye size={16} />
                            <span>View More</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Floating number */}
                  <div className="absolute -top-8 -right-0 lg:-right-12">
                    <div className={`w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg transition-all duration-500 ${
                      hoveredProject === index ? 'scale-110 shadow-2xl' : ''
                    }`}>
                      <span className="text-white font-black text-xl lg:text-2xl">
                        {project.id.replace('.', '')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 space-y-5">
                  {/* Category */}
                  <div className="inline-block">
                    <span className={`px-4 py-2 text-sm font-semibold text-white bg-purple-600 rounded-full`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-lg text-justify md:text-left">
                    {project.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 group/btn font-medium"
                    >
                      <FaGithub size={18} />
                      <span>View Code</span>
                      <FaArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </a>
                    
                    {project.hasMoreContent && (
                      <button
                        onClick={() => openModal(project)}
                        className="flex items-center gap-3 px-6 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 group/btn font-medium"
                      >
                        <FaEye size={18} />
                        <span>View Details</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to see more?
            </h3>
            <p className="text-gray-600 mb-6">
              Check out my GitHub for additional projects and contributions
            </p>
            <a
              href="https://github.com/hari-1018"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-medium"
            >
              <FaGithub size={20} />
              <span>Visit GitHub</span>
              <FaArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Modal for detailed project view */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto scrollbar-hide"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitScrollbar: { display: 'none' }
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h3>
                  <span className="px-3 py-1 text-sm font-semibold text-white bg-purple-600 rounded-full mt-2 inline-block">
                    {selectedProject.category}
                  </span>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <FaTimes size={20} className="text-gray-600" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Image Gallery */}
                {selectedProject.additionalImages && (
                  <div className="mb-8">
                    <div className="relative">
                      <img
                        src={selectedProject.additionalImages[currentImageIndex]}
                        alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                        className="w-full h-80 object-contain rounded-2xl"
                      />
                      
                      {/* Navigation buttons */}
                      {selectedProject.additionalImages.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full shadow-lg transition-all duration-200"
                          >
                            <FaChevronLeft size={16} className="text-gray-700" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full shadow-lg transition-all duration-200"
                          >
                            <FaChevronRight size={16} className="text-gray-700" />
                          </button>
                        </>
                      )}
                    </div>

                    {/* Image indicators */}
                    {selectedProject.additionalImages.length > 1 && (
                      <div className="flex justify-center mt-4 space-x-2">
                        {selectedProject.additionalImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${
                              index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Detailed Description */}
                <div className="prose prose-lg max-w-none">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Project Overview</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProject.detailedDescription || selectedProject.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-8 pt-6 border-t border-gray-200">
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 font-medium"
                  >
                    <FaGithub size={18} />
                    <span>View Code</span>
                    <FaArrowRight size={14} />
                  </a>
                  <button
                    onClick={closeModal}
                    className="flex items-center gap-3 px-6 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-all duration-300 font-medium"
                  >
                    <span>Close</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;