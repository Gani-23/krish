'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { Suspense, useMemo } from 'react';
import Navbar from '../Components/Navbar';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';

// Create a memoized 3D model component within the file
const CyberpunkModel = React.memo(() => {
  const { scene } = useGLTF("/Models/cyberpunk.glb");

  React.useEffect(() => {
    if (scene) {
      scene.scale.set(0.5, 0.5, 0.5); // Scale the model if needed
    }
  }, [scene]);

  return <primitive object={scene} />;
});

// Ensure the display name is set for better debugging
CyberpunkModel.displayName = 'CyberpunkModel';

const About = () => {
  // Preload the model to avoid any potential loading issues
  useMemo(() => {
    useGLTF.preload("/Models/cyberpunk.glb");
  }, []);

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
            <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-white">Loading 3D Model...</div>}>
              <Canvas className="w-full h-full">
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <PerspectiveCamera position={[-5, 5, 5]} fov={25} makeDefault />
                <OrbitControls />
                <CyberpunkModel />
              </Canvas>
            </Suspense>
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
    </>
  );
};

export default About;