// app/page.tsx
'use client';

import { useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Loader, useGLTF } from '@react-three/drei';
import { useEffect } from 'react';

// Component for 3D object
const Model = () => {
  const { scene } = useGLTF('/Models/librarians_room.glb'); // Ensure the path is correct
  return <primitive object={scene} />;
};

const HomePage = () => {
  const controlsRef = useRef(null);
  const controlsAnimation = useAnimation();

  useEffect(() => {
    // Scroll animations
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollPercent = scrollY / (document.body.scrollHeight - window.innerHeight);
      controlsAnimation.start({ opacity: 1 - scrollPercent });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controlsAnimation]);

  return (
    <div className="relative h-screen bg-black text-white overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Model />
          <OrbitControls ref={controlsRef} />
        </Canvas>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Welcome to My Sleek Homepage
        </motion.h1>
        <motion.p
          className="text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Scroll down to see more amazing content.
        </motion.p>
      </div>

      {/* Additional Content */}
      <div className="absolute bottom-0 left-0 w-full text-center p-8 bg-black bg-opacity-70">
        <motion.div
          className="relative mx-auto w-full max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">More Content</h2>
            <p>
              Here you can place additional content, images, or sections. As you scroll, 
              more animations and interactive elements can be added.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Loader for GLB model */}
      <Loader />
    </div>
  );
};

export default HomePage;
