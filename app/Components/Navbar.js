// components/Navbar.jsx
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black shadow-lg z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          className="text-white text-2xl font-bold"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link href="/">Logo</Link>
        </motion.div>
        <div className="hidden md:flex space-x-6">
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <motion.div
              key={item}
              className="relative group"
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link href={`/${item.toLowerCase()}`} className="text-white text-lg">
                {item}
              </Link>
              <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-white"
                layoutId={hoveredItem === item ? `underline-${item}` : undefined}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{ scaleX: hoveredItem === item ? 1 : 0 }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredItem === item ? 1 : 0 }}
                originX={0}
              />
            </motion.div>
          ))}
        </div>
        <button className="md:hidden text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
