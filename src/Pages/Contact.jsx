import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import {
  IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp,
  IoIosSend, IoMdMail, IoIosPhonePortrait
} from "react-icons/io";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_nczzi5v',
      'template_psqfuc2',
      formRef.current,
      'bmdJ8ed4yAmHuL8NW'
    ).then(
      (result) => {
        console.log('Email sent:', result.text);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => setIsSubmitted(false), 3000);
      },
      (error) => {
        console.error('Email send error:', error.text);
      }
    );
  };

  const currentYear = new Date().getFullYear();

  return (
    <div id="contact" className="min-h-screen bg-white flex flex-col justify-center items-center px-4 py-20 md:px-8">
      <div className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Form Section */}
          <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Get In Touch</h2>

            {isSubmitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                <span className="block sm:inline">Thank you for your message!</span>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Your Name..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your E-mail..."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">How can I help?</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto flex font-semibold items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
              >
                Get In Touch
                <IoIosSend size={16} />
              </button>
            </form>

            <div className="mt-6 flex space-x-4 justify-center md:justify-start">
              <a href="https://github.com/NainuFathima" className="text-gray-600 hover:text-gray-900 bg-gray-200 p-2 rounded-full transition-colors">
                <IoLogoGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/nainu-fathima-26a525219/" className="text-gray-600 hover:text-gray-900 bg-gray-200 p-2 rounded-full transition-colors">
                <IoLogoLinkedin size={20} />
              </a>
              <a href="https://wa.me/+918111958611?text=Hello%20I%20have%20a%20question" className="text-gray-600 hover:text-gray-900 bg-gray-200 p-2 rounded-full transition-colors">
                <IoLogoWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Info Section */}
          <div className="w-full md:w-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 md:p-8 lg:p-10 flex flex-col justify-center">
            <h1 className="text-2xl md:text-5xl font-bold mb-4 text-center">Let's Connect</h1>
            <p className="mb-8 text-gray-300 text-base md:text-lg text-center">
              Let's Talk for Something Special
            </p>

            <div className="space-y-3 text-lg text-center">
              <p className="flex items-center justify-center gap-2">
                <IoMdMail size={20} />
                <span>nainufathima1@gmail.com</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <IoIosPhonePortrait size={24} />
                <span>8111958611</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full max-w-6xl mx-auto mt-6 text-center text-gray-600 text-sm">
        <p>© {currentYear}. All rights reserved.</p>
      </div>
    </div>
  );
}