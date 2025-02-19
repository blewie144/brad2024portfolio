"use client";

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-background border-b border-foreground/10 z-40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-end items-center h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white/70 hover:text-white transition">
              Home
            </Link>
            <Link href="#contact" className="text-white/70 hover:text-white transition">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white/70 hover:text-white transition"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background border-b border-foreground/10"
          >
            <div className="px-4 py-4 space-y-4">
              <Link 
                href="/" 
                className="block text-white/70 hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/projects" 
                className="block text-white/70 hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="/contact" 
                className="block text-white/70 hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 