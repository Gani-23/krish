'use client';
import { motion } from 'framer-motion';
import Image from 'next/image'; // For optimized image handling
import Link from 'next/link';
import React from 'react';
import Navbar from '../Components/Navbar';
import { Canvas } from '@react-three/fiber'; // For 3D rendering
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei'; // Additional helpers

const About = () => {
  const { scene } = useGLTF('/Models/cyberpunk.glb'); // Reference to the GLB model file
  const cameraRef = React.useRef(null); // To reference the camera

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-opacity-60"></div>
        <div className="relative z-10 flex items-center justify-center min-h-screen text-center px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
              About Us
            </h1>
            <p className="text-lg md:text-xl mb-6">
              We are a team of passionate individuals who believe in the power of second chances. We are here to help you succeed and thrive in your career.
            </p>
            <Link href="/">
              <span className="inline-block px-6 py-3 text-lg font-semibold bg-white text-black rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 cursor-pointer">
                Learn More
              </span>
            </Link>
          </motion.div>   
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 bg-black text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="mb-12"
          >
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Our Mission
            </h2>
            <p className="text-lg">
              To provide a platform for individuals to learn, grow, and succeed in their careers.
            </p>
          </motion.div>
        </div>

        {/* 3D Model and Text Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* 3D Asset on the left */}
          <div className="w-full md:w-1/2 h-80 md:h-[500px]">
            <Canvas className="w-full h-full">
              {/* Set camera perspective */}
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              
              {/* Make sure the camera is referenced */}
              <PerspectiveCamera ref={cameraRef} position={[-5, 5, 5]} fov={30} makeDefault />
              <OrbitControls /> {/* Allow user to rotate the model */}
              <primitive object={scene} /> {/* This is how you render the scene */}
            </Canvas>
          </div>

          {/* Text content on the right */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4">
              We Believe in Learning and Growth
            </h3>
            <p className="text-lg mb-6">
              Our mission is to create a space where individuals can learn valuable skills, connect with mentors, and thrive in their careers. We are committed to helping people develop the tools and mindset they need to succeed.
            </p>
            <Link href="/">
              <span className="inline-block px-6 py-3 text-lg font-semibold bg-white text-black rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 cursor-pointer">
                Join Us Today
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-black py-16 px-6 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Our Founder
            </h2>
            <p className="text-lg mb-6">
              Meet the visionary behind our platform, driving us towards excellence and success.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
              <Image
                src="/images/founders/gani.png"
                alt="Saiganesh Angadi"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2 text-black">Saiganesh Angadi</h3>
              <p className="text-gray-700">Founder & CEO</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-black py-16 px-6 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Our Values
            </h2>
            <p className="text-lg mb-6">
              We believe in the power of second chances, continuous learning, and fostering growth. Our values inspire us to build a better future for our community.
            </p>
            <Link href="/">
              <span className="inline-block px-6 py-3 text-lg font-semibold bg-white text-black rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 cursor-pointer">
                Discover More
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
