// pages/about.jsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image'; // For optimized image handling
import Link from 'next/link';
import Navbar from '../Components/Navbar';

const About = () => {
  return (
    <>
        <Navbar />
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
        </div>
        <div className="relative z-10 flex items-center justify-center min-h-screen text-center px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-lg md:text-xl mb-6">
                We are a team of passionate individuals who believe in the power of second chances. We are here to help you succeed and thrive in your career
            </p>
            <Link href="/">
              <span className="inline-block px-6 py-3 text-lg font-semibold bg-white text-black rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 cursor-pointer">
                Learn More
              </span>
            </Link>
          </motion.div>
          
        </div>
      </section>

      <section className="py-16 px-6 bg-black text-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg">
                To provide a platform for individuals to learn, grow, and succeed in their careers.
            </p>
          </motion.div>

          <div className="flex flex-wrap -mx-4">
            {teamMembers.map(member => (
              <motion.div
                key={member.id}
                className="w-full md:w-1/3 px-4 mb-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: member.delay }}
              >
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-black">{member.name}</h3>
                  <p className="text-gray-700">{member.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-16 px-6 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg mb-6">
              Integrity, Innovation, and Excellence are the core values that drive us to deliver exceptional results.
            </p>
            <Link href="/">
              <span className="inline-block px-6 py-3 text-lg font-semibold bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 cursor-pointer">
                Discover More
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

// Sample data for team members
const teamMembers = [
  {
    id: 1,
    name: 'Saiganesh Angadi',
    position: 'CEO',
    image: '/images/founders/gani.png', // Replace with actual image path
    delay: 0.1
  },
  {
    id: 2,
    name: 'Karegowdra Gopi Krishna',
    position: 'CTO',
    image: '/images/bob.jpg', // Replace with actual image path
    delay: 0.2
  },
  {
    id: 3,
    name: 'Sunil Naik',
    position: 'CFO',
    image: '/images/charlie.jpg', // Replace with actual image path
    delay: 0.3
  }
];

export default About;
