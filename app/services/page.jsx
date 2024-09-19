// pages/services.jsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image'; // For optimized image handling
import Link from 'next/link';
import Navbar from '../Components/Navbar';

const Services = () => {
  return (
    <>
      <Navbar />
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services-bg.jpg" // Replace with your image path
            alt="Services Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="opacity-50"
          />
        </div>
        <div className="relative z-10 flex items-center justify-center min-h-screen text-center px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
            <p className="text-lg md:text-xl mb-6">
              Discover how we can help you achieve your goals with our expert services.
            </p>
            <Link href="/contact">
              <span className="inline-block px-6 py-3 text-lg font-semibold bg-white text-black rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 cursor-pointer">
                Get In Touch
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-black text-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Offer</h2>
            <p className="text-lg md:text-xl">
              Our services are designed to provide comprehensive solutions tailored to your needs.
            </p>
          </motion.div>

          <div className="flex flex-wrap -mx-4">
            {services.map(service => (
              <motion.div
                key={service.id}
                className="w-full md:w-1/3 px-4 mb-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: service.delay }}
              >
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                  <div className="mb-4">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={80}
                      height={80}
                      className="mx-auto"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-black text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-lg mb-6">
              Our commitment to excellence and customer satisfaction sets us apart from the competition.
            </p>
            <div className="flex flex-wrap justify-center">
              {features.map(feature => (
                <motion.div
                  key={feature.id}
                  className="w-full md:w-1/4 px-4 mb-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: feature.delay }}
                >
                  <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                    <div className="mb-4">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={60}
                        height={60}
                        className="mx-auto"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

// Sample data for services
const services = [
  {
    id: 1,
    title: 'Consulting',
    description: 'Expert advice to help you navigate complex challenges.',
    icon: '/images/consulting-icon.png', // Replace with actual icon path
    delay: 0.1
  },
  {
    id: 2,
    title: 'Development',
    description: 'Custom development solutions tailored to your needs.',
    icon: '/images/development-icon.png', // Replace with actual icon path
    delay: 0.2
  },
  {
    id: 3,
    title: 'Design',
    description: 'Creative design services to make your brand stand out.',
    icon: '/images/design-icon.png', // Replace with actual icon path
    delay: 0.3
  }
];

// Sample data for features
const features = [
  {
    id: 1,
    title: 'Innovative Solutions',
    description: 'Cutting-edge technologies to stay ahead of the competition.',
    icon: '/images/innovation-icon.png', // Replace with actual icon path
    delay: 0.1
  },
  {
    id: 2,
    title: 'Customer Support',
    description: 'Dedicated support to assist you at every step.',
    icon: '/images/support-icon.png', // Replace with actual icon path
    delay: 0.2
  },
  {
    id: 3,
    title: 'Quality Assurance',
    description: 'Rigorous testing to ensure top-notch quality.',
    icon: '/images/quality-icon.png', // Replace with actual icon path
    delay: 0.3
  },
  {
    id: 4,
    title: 'Scalability',
    description: 'Solutions that grow with your business.',
    icon: '/images/scalability-icon.png', // Replace with actual icon path
    delay: 0.4
  }
];

export default Services;
