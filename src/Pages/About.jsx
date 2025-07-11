import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaGraduationCap, FaBriefcase, FaDownload, FaMapMarkerAlt, FaEnvelope, FaPhone, FaCalendarAlt, FaRocket, FaHeart, FaCoffee, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const SkillBar = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        <span className="text-sm text-gray-500">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
          className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
        />
      </div>
    </motion.div>
  );



  return (
    <section id="about" className="min-h-screen bg-white py-16 px-4 relative overflow-hidden mt-10">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-100 to-orange-100 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-purple-600 text-transparent bg-clip-text">
              Me
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Transforming raw data into clear insights with precision, purpose & passion.
          </p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-8 rounded-full"
          />
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 sticky top-8">
              {/* Profile Image Placeholder */}
              <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <FaLaptopCode className="text-white text-4xl" />
              </div>
              
              <div className="text-center mb-4">
                <h2 className="text-2xl font-bold text-black mb-2">Nainu Fathima V.M</h2>
                <p className="text-indigo-600 font-medium mb-2 text-lg">Data Analyst</p>
                <div className="flex items-center justify-center text-gray-600 text-sm font-semibold">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>Kerala, India</span>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                  <FaEnvelope className="mr-3 text-indigo-500" />
                  <span className="text-md">nainufathima@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                  <FaPhone className="mr-3 text-indigo-500" />
                  <span className="text-md">+91 8111958611</span>
                </div>
              </div>

              {/* Download Resume */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <FaDownload />
                <span>Download Resume</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Main Content Area */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-8"
          >
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {['overview', 'experience'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white/80 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                      <FaCode className="mr-3 text-indigo-600" />
                      My Journey
                    </h3>
                    <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
                      <p>
                        I'm Nainu Fathima, a highly motivated and detail-oriented Data Analyst with a B.Tech in Computer Science and Engineering. With a strong analytical mindset and a passion for data-driven decision-making, I specialize in uncovering meaningful insights from complex and diverse datasets to drive strategic business outcomes.
                      </p>
                      <p>
                        My technical proficiency spans across key data analytics tools and technologies, including Microsoft Excel, Power BI, Tableau, MySQL, Python, R Programming, and Business Statistics. These skills enable me to perform efficient data cleaning, exploratory data analysis, and create impactful dashboards that translate raw data into clear, actionable intelligence.
                      </p>
                      <p>
                        I am passionate about turning raw data into clear, actionable insights and continuously enhancing my skills to stay ahead in the evolving world of data analytics.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              
{activeTab === 'experience' && (
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/20">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                      <FaBriefcase className="mr-3 text-indigo-600" />
                      Experience
                    </h3>
                    <div className="relative">
                      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-600"></div>
                      <div className="relative pl-12 mb-8">
                        <div className="absolute left-0 top-0 w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                          <FaLaptopCode className="text-white text-sm" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800">Data Analyst Intern</h4>
                        <p className="text-indigo-600 font-medium mb-2">Excelr • Aug 2024 - Present</p>
                        <ul className="text-gray-600 list-disc list-outside">
                          <li>Gained hands on experience in Microsoft Excel, MySQL, Microsoft Power BI, and Tableau to vizualize data effectively.</li>
                          <li>Enhancing programming skills in Python and R, applying statistical concepts for data-driven decision making.</li>
                          <li>Worked on real-world datasets to develop actionable insights and created interactive dashboards.</li>
                          <li>Strengthened expertise in data manipulation, visualization, and business intelligence tools.</li>
                          
                        </ul>
                      </div>
                      <div className="relative pl-12">
                        <div className="absolute left-0 top-0 w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                          <FaLaptopCode className="text-white text-sm" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800">Data Science Intern</h4>
                        <p className="text-indigo-600 font-medium mb-2">TechByHeart • May 2023</p>
                        <ul className="text-gray-600 list-disc list-outside">
                          <li>Explored the advanced data analytics and data science applications to life sciences.</li>
                          <li>Basic knowledge about programming language Python and data management including big data management.</li>
                          <li>Assisted in cleaning and organizing data using python, merged and transformed datasets from multiple sources for unified analysis.</li>
                          <li>Created simple visualizations in Tableau and Power BI to support business insights.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                      <FaGraduationCap className="mr-3 text-indigo-600" />
                      Education
                    </h3>
                    <div className="relative">
                      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-600"></div>
                      <div className="relative pl-12">
                        <div className="absolute left-0 top-0 w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                          <FaGraduationCap className="text-white text-sm" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800">B.Tech in Computer Science</h4>
                        <p className="text-indigo-600 font-medium mb-2">APJ Abdul Kalam Technical University • 2020 - 2024</p>
                        <ul className="text-gray-600 list-disc list-outside">
                          <li>Graduated with strong fundamentals in computer science and software engineering.</li>
                          <li>Completed coursework in data structures, algorithms, and database systems.</li>
                          <li>Developed projects in web development.</li>
                          <li>Received academic honors for consistent performance.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-4">Let’s Transform Data Together</h3>
          <p className="text-lg md:text-xl mb-6 opacity-90">
            Need clear insights from complex data? I’m passionate about helping businesses make smarter decisions through data analytics.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;