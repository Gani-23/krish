'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // state to track mobile menu visibility

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // toggle mobile menu visibility
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black shadow-lg z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          className="text-white font-bold"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link href="/">
            <Image 
              src="/images/logo.png" 
              alt="logo" 
              width={150} // default width for large screens
              height={100} // default height for large screens
              className="w-24 h-auto sm:w-32 md:w-40 lg:w-48" // Responsive sizes for different screens
            />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {['About', 'Services', 'Contact'].map((item) => (
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
                transformOrigin="left"
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={handleMobileMenuToggle}>
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black p-6 space-y-4">
          {[ 'About', 'Services', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-white text-lg block"
              onClick={() => setIsMobileMenuOpen(false)} // close menu on link click
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
