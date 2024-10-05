"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Loader, useGLTF } from "@react-three/drei";
import Navbar from "../Components/Navbar";
import Image from 'next/image';
// Fixing unescaped single quotes
const values = [
  {
    title: "Rapid Growth",
    description: "Our application support team is dedicated to assisting you with any inquiries or issues you may encounter. Whether you need help getting started, troubleshooting, or understanding features, we are here to help you make the most of our application.",
    imgSrc: "/images/projects.png",
    altText: "Graphic representing Application Support",
  },
  {
    title: "Grow Network",
    description: "We prioritize your needs and strive to exceed your expectations. Your feedback helps us improve and innovate continuously.",
    imgSrc: "/images/projects.png",
    altText: "Graphic representing Customer Satisfaction",
  },
];
// Component for 3D object
const Model = () => {
  const { scene } = useGLTF("/Models/boat.glb");

  scene.scale.set(0.5, 0.5, 0.5);

  useFrame(() => {
    scene.rotation.y += 0.0005;
  });

  return <primitive object={scene} />;
};

const HomePage = () => {
  const controlsRef = useRef(null);
  const controlsAnimation = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollPercent = scrollY / (document.body.scrollHeight - window.innerHeight);
      controlsAnimation.start({ opacity: 1 - scrollPercent });
    };

    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [controlsAnimation]);

  return (
    <>
      <div>
        <Navbar />
        <div className="relative h-screen bg-black text-white overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <Canvas camera={{ position: [20, 30, 15], fov: 25 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 5, 10]} />
              <Model />
              <OrbitControls ref={controlsRef} />
            </Canvas>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
            <motion.h1
              className="text-5xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Dare to leap!
            </motion.h1>

            <motion.p
              className="text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              aria-live="polite"
            >
              Join us for an exciting journey for an adventure.
            </motion.p>
          </div>

          <div className="absolute bottom-0 left-0 w-full text-center p-8 bg-black bg-opacity-70">
            <motion.div
              className="relative mx-auto w-full max-w-4xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">What's an Opportunity</h2>
                <p>
                  We are a team of passionate individuals who believe in the power of second chances. We are here to help you succeed and thrive in your career's journey.
                </p>
              </div>
            </motion.div>
          </div>

          <Loader />
        </div>
      </div>

      <div>
        <motion.h1
          className="relative mx-auto w-full max-w-4xl text-4xl font-light mb-4 text-ellipsis text-center py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Our Values
        </motion.h1>

        <div className="flex flex-col md:flex-row w-full p-10">
          {[
            {
              title: "Rapid Growth",
              description: "Our application support team is dedicated to assisting you with any inquiries or issues you may encounter. Whether you need help getting started, troubleshooting, or understanding features, we are here to help you make the most of our application.",
              imgSrc: "/images/projects.png",
              altText: "Graphic representing Application Support",
            },
            {
              title: "Grow Network",
              description: "We prioritize your needs and strive to exceed your expectations. Your feedback helps us improve and innovate continuously.",
              imgSrc: "/images/projects.png",
              altText: "Graphic representing Customer Satisfaction",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center w-full max-w-4xl mb-6"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div style={{ position: 'relative', width: '100%', height: '300px' }}>
                <Image
                  src={value.imgSrc}
                  alt={value.altText}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="w-full md:w-1/2 pl-0 md:pl-6">
                <h2 className="text-3xl font-bold mb-2">{value.title}</h2>
                <p>{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center items-center w-full">
          <motion.div
            className="w-full max-w-2xl text-center"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div style={{ position: 'relative', width: '100%', height: '300px' }}>
              <Image
                src="/images/marketer.png"
                alt="Team Work"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h2 className="text-2xl font-bold mt-4">Be in trend</h2>
            <p>
              Collaboration is key to our success. Our dedicated team works together to deliver exceptional results and ensure your satisfaction.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
