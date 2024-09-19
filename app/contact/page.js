// components/ContactUs.jsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image'; // For optimized image handling
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // For icons
import Navbar from '../Components/Navbar';

const ContactUs = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Background Decoration
      <div className="absolute inset-0">
        <Image
          src="/images/contact-bg.jpg" // Replace with your background image path
          alt="Contact Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-50"
        />
      </div> */}
      <Navbar />

      <div className="relative z-10 container mx-auto px-6 py-16 flex flex-col items-center">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Get in Touch
            <motion.div
              className="w-24 h-1 bg-blue-500 mt-4 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            We’re eager to hear from you! Whether you have questions, feedback, or just want to say hi, drop us a line, and we’ll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="w-full max-w-3xl bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-xl p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <form
            className="flex flex-col space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              // Handle form submission
              alert('Form submitted!');
            }}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="flex-1 bg-gray-700 text-white border border-gray-600 rounded-lg py-3 px-4 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition duration-300"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 bg-gray-700 text-white border border-gray-600 rounded-lg py-3 px-4 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition duration-300"
                required
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="bg-gray-700 text-white border border-gray-600 rounded-lg py-3 px-4 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition duration-300"
              rows="6"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Our Office</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 flex items-start space-x-4">
              <FaMapMarkerAlt className="text-blue-500 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Address</h3>
                <p className="text-lg">123 Business Rd, Suite 456</p>
                <p className="text-lg">City, Country 78901</p>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 flex items-start space-x-4">
              <FaPhoneAlt className="text-blue-500 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-lg">+1 (123) 456-7890</p>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 flex items-start space-x-4">
              <FaEnvelope className="text-blue-500 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-lg">contact@yourdomain.com</p>
              </div>
            </div>
          </div>
         
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
