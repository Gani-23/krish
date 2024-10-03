"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../Components/Navbar";
import HomeContent from "../Components/HomeContent";

const Services = () => {
  return (
    <>
      <Navbar />
      <section className="relative bg-black text-white overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/services-bg.jpg"
            alt="Services Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="opacity-50"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">Our Services</h1>
            <p className="text-lg md:text-xl mb-6">
              Discover how we can help you achieve your goals with our expert services.
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
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
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

      <HomeContent />

      {/* Features Section */}
      <section className="py-16 bg-gray-900 text-white pt-20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Why Choose Us?</h2>
            <p className="text-lg mb-6">
              Our commitment to excellence and customer satisfaction sets us apart from the competition.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 transform-gpu hover:bg-gradient-to-br from-purple-500 to-blue-500"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: feature.delay }}
              >
                <div className="mb-4 flex justify-center">
                  <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: feature.delay }}
                  >
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={150}
                      height={150}
                      className="mx-auto"
                    />
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
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
    icon: "/images/scalability-icon.png",
    delay: 0.4,
  },
];

export default Services;
