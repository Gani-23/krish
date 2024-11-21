"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../Components/Navbar";

const Services = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden pt-20">
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">
              Our Services
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Discover how we can help you achieve your goals with our expert
              services.
            </p>
            <Link href="/contact">
              <span className="inline-block px-8 py-4 text-lg font-semibold bg-white text-black rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
                Get In Touch
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 cursor-pointer flex items-center"
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
            aria-label="Scroll Down"
          >
            <Image
              src="/images/down.png"
              alt="Scroll Down"
              width={40}
              height={40}
              className="animate-bounce"
            />
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
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

      {/* Why Choose Us? Section */}
{/* Why Choose Us? Section */}
{/* Why Choose Us? Section */}
{/* Why Choose Us? Section */}
<section className="py-16 bg-gray-900 text-white pt-20">
  <div className="container mx-auto text-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="max-w-2xl mx-auto mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
        Why Choose Us?
      </h2>
      <p className="text-lg mb-6 leading-relaxed">
        Our commitment to excellence and customer satisfaction sets us apart from the competition.
      </p>
    </motion.div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
      {features.map((feature) => (
        <motion.div
          key={feature.id}
          className="bg-gradient-to-br from-indigo-600 to-purple-800 p-6 rounded-2xl shadow-lg transition-all duration-500 hover:scale-105 transform-gpu hover:shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: feature.delay }}
        >
          <div className="mb-4 flex justify-center items-center">
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: feature.delay }}
              className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 rounded-lg shadow-xl"
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={150} // Adjusted width
                height={150} // Adjusted height
                className="mx-auto transition-all duration-300 transform hover:scale-110"
              />
            </motion.div>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
          <p className="text-gray-300 leading-relaxed">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>



    </>
  );
};

// Sample data for features
const features = [
  {
    id: 1,
    title: "Innovative Solutions",
    description: "Cutting-edge technologies to stay ahead of the competition.",
    icon: "/images/innovation.png",
    delay: 0.1,
  },
  {
    id: 2,
    title: "Customer Support",
    description: "Dedicated support to assist you at every step.",
    icon: "/images/customer.png",
    delay: 0.2,
  },
  {
    id: 3,
    title: "Quality Assurance",
    description: "Rigorous testing to ensure top-notch quality.",
    icon: "/images/Quality.png",
    delay: 0.3,
  },
  {
    id: 4,
    title: "Scalability",
    description: "Solutions that grow with your business.",
    icon: "/images/scalability.png",
    delay: 0.4,
  },
];

export default Services;
