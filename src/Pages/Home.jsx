import { ArrowRight, Download } from 'lucide-react';
import { FaWhatsapp, FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex gap-3 justify-center md:justify-start text-blue-600 font-medium text-xl">
                <span>Hello, I'm</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight text-center md:text-start">
                Nainu
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Fathima
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl text-center md:text-start">
                A detail oriented and analytical Data Analyst with a B.Tech in Computer Science & Engineering. 
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex justify-center items-center gap-2">
                View My Works <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-6 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex justify-center items-center gap-2">
                <Download className="w-5 h-5" /> Download CV
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110">
                <FaLinkedinIn className="w-6 h-6" />
              </a>
              <a href="https://github.com/NainuFathima" className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center text-white hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300 transform hover:scale-110">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://wa.me/8111958611" className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110">
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center text-white hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-110">
                <FaEnvelope className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-20 animate-pulse"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-8xl">👨‍💻</div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Nainu Fathima</h3>
                  <p className="text-gray-600">Data Analyst</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Home