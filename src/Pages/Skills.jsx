
import { Table2, ChartNoAxesColumnIncreasing, Grid2x2Plus, DatabaseZap, Code, Braces } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    { name: 'Advanced Microsoft Excel', color: 'from-blue-400 to-cyan-400', icon: <Table2 className="w-6 h-6" /> },
    { name: 'Microsoft Power BI', color: 'from-purple-400 to-pink-400', icon: <ChartNoAxesColumnIncreasing className="w-6 h-6" /> },
    { name: 'Tableau', color: 'from-green-400 to-emerald-400', icon: <Grid2x2Plus className="w-6 h-6" /> },
    { name: 'MySQL', color: 'from-orange-400 to-red-400', icon: <DatabaseZap className="w-6 h-6" /> },
    { name: 'Python', color: 'from-cyan-400 to-purple-400', icon: <Code className="w-6 h-6" /> },
    { name: 'R Programming Language', color: 'from-pink-400 to-red-400', icon: <Braces className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">

      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Skills & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized in modern technologies and frameworks to deliver cutting-edge solutions
            </p> 
            <motion.div
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-8 rounded-full"
            /> 
          </div>
          
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-100/50 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <div className="relative flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-4">
                    <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-full opacity-20`}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                      <div className={`bg-gradient-to-r ${skill.color} p-3 rounded-full text-white`}>
                        {skill.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{skill.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}