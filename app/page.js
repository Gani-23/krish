// pages/index.jsx
'use client';
import Navbar from './Components/Navbar';
import { motion } from 'framer-motion';
import Head from 'next/head'; // For additional styles if needed
import HomeContent from './Components/HomeContent';

const Home = () => {
  return (
    <>
      <Head>
        <title>Welcome Page</title>
        <meta name="description" content="Welcome to our site!" />
        <link rel="icon" href="/public/images/favicons.ico" />
      </Head>
      <Navbar />
      <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <div className="absolute inset-0 bg-black" />
        </motion.div>
        <motion.div
          className="relative flex flex-col items-center justify-center text-center text-white z-10 px-4 sm:px-8 lg:px-16"
          initial={{ opacity: 0, y: 50, scale: 1.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">Krish.</h1>
          <p className="text-lg sm:text-xl lg:text-2xl mt-4">Startup, Second Opportunity, For Everyone!</p>
        </motion.div>
        <ChineseCharacters />
      
      </div>
    
    </>
  );
};


const ChineseCharacters = () => {
  return (
    <>
      <motion.div
        className="absolute bottom-1/2 right-0 transform -translate-x-1/2 translate-y-1/2 px-4"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-4xl font-bold text-white">欢</p>
        <p className="text-4xl font-bold text-white">迎</p>
        <p className="text-4xl font-bold text-white">你</p>
        <p className="text-4xl font-bold text-white">来</p>
        <p className="text-4xl font-bold text-white">到</p>
        <p className="text-4xl font-bold text-white">这</p>
        <p className="text-4xl font-bold text-white">里</p>
      </motion.div>
      
      <motion.div
        className="absolute top-1/2 left-0 transform translate-x-1/2 -translate-y-1/2 px-4"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-4xl font-bold text-white">欢</p>
        <p className="text-4xl font-bold text-white">迎</p>
        <p className="text-4xl font-bold text-white">你</p>
        <p className="text-4xl font-bold text-white">来</p>
        <p className="text-4xl font-bold text-white">到</p>
        <p className="text-4xl font-bold text-white">这</p>
        <p className="text-4xl font-bold text-white">里</p>
      </motion.div>
    </>
  );
};


export default Home;
