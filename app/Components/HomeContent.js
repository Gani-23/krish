import React from 'react';
import { motion } from 'framer-motion';

const HomeContent = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-10 p-2 bg-black text-white">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 relative text-center">
        Our Expertise
      </h1>

      {/* First Section: Photo on the left and content on the right */}
      <motion.div
        className="flex flex-col md:flex-row items-center w-full max-w-4xl space-y-6 md:space-y-0"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src="/images/projects.png"
          alt="Application Support"
          className="w-full md:w-1/2 rounded-lg"
          whileHover={{ scale: 1.05, rotate: 2 }} // Jitter on hover
        />
        <div className="w-full md:w-1/2 md:pl-6 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Application Support</h2>
          <p>
            Our application support team is dedicated to assisting you with any inquiries or issues you may encounter. Whether you need help getting started, troubleshooting, or understanding features, we are here to help you make the most of our application.
          </p>
        </div>
      </motion.div>

      {/* Second Section: Photo on the right and content on the left */}
      <motion.div
        className="flex flex-col-reverse md:flex-row items-center w-full max-w-4xl space-y-6 md:space-y-0 md:space-x-6"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-full md:w-1/2 md:pr-6 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Artificial Enhancements</h2>
          <p>
            Discover how artificial enhancements can transform your experience. Our solutions leverage the latest technologies to deliver unparalleled results.
          </p>
        </div>
        <motion.img
          src="/images/Ai.png"
          alt="Artificial Enhancements"
          className="w-full md:w-1/2 rounded-lg"
          whileHover={{ scale: 1.05, rotate: -2 }} // Jitter on hover
        />
      </motion.div>

      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Our Strengths</h2>

      {/* Single Div with Photo */}
      <motion.div
        className="w-full max-w-2xl text-center"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.img
          src="/images/marketer.png"
          alt="Team Work"
          className="w-full rounded-lg"
          whileHover={{ scale: 1.05, rotate: 2 }} // Jitter on hover
        />
        <h2 className="text-xl sm:text-2xl font-bold mt-4">Team Work</h2>
        <p>
          Collaboration is key to our success. Our dedicated team works together to deliver exceptional results and ensure your satisfaction.
        </p>
      </motion.div>
    </div>
  );
};

export default HomeContent;