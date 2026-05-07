// File: src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Camera, Menu, X } from 'lucide-react';
import { Instagram, Facebook, Youtube } from './SocialIcons';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Booking', path: '/booking' },
  ];

  const menuVariants = {
    closed: { opacity: 0, x: "100%", transition: { duration: 0.5, ease: "easeInOut" } },
    open: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + i * 0.1, duration: 0.5 }
    })
  };

  return (
<<<<<<< HEAD
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-rich-black/90 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl' : 'bg-transparent py-6'
      }`}>
      <div className="max-w-7xl mx-auto mobile-px flex justify-between items-center relative z-[70]">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-1.5 sm:p-2 rounded-lg group-hover:rotate-12 transition-transform duration-500">
            <Camera className="text-rich-black" size={20} />
          </div>
          <span className="font-display font-bold text-xl sm:text-2xl tracking-tighter text-white">
=======
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-rich-black/90 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group z-50">
          <div className="bg-primary p-2 rounded-lg group-hover:rotate-12 transition-transform duration-500">
            <Camera className="text-rich-black" size={24} />
          </div>
          <span className="font-display font-bold text-2xl tracking-tighter text-white">
>>>>>>> 564b3243acf62f481f1015f4696b9f36e4bd6bf8
            JD<span className="text-primary">STUDIO</span>
          </span>
        </Link>

<<<<<<< HEAD

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">

=======
        {/* Desktop Nav */}
        <div className="nav-desktop">
>>>>>>> 564b3243acf62f481f1015f4696b9f36e4bd6bf8
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `
                font-display text-sm tracking-widest uppercase transition-all duration-300
                ${isActive ? 'text-primary' : 'text-zinc-400 hover:text-white'}
              `}
            >
              {link.name}
            </NavLink>
          ))}
          <Link to="/booking" className="premium-button-primary scale-90 text-center">
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
<<<<<<< HEAD
        <button
          className="lg:hidden text-white p-2 relative z-[70]"

          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>


      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
=======
        <button 
          type="button"
          aria-label="Toggle navigation menu"
          className="nav-mobile-toggle text-white z-50 p-2"
          onClick={() => setIsMobileMenuOpen((current) => !current)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
>>>>>>> 564b3243acf62f481f1015f4696b9f36e4bd6bf8
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
<<<<<<< HEAD
            className="fixed inset-0 bg-rich-black z-[60] flex flex-col items-center justify-center gap-6 lg:hidden h-[100dvh] w-screen"
          >
            <div className="absolute inset-0 bg-zinc-950" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-30" />

            <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8">
              {navLinks.map((link, i) => (
                <motion.div key={link.name} custom={i} variants={linkVariants}>
                  <NavLink
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) => `
                      font-display text-2xl sm:text-3xl tracking-[0.2em] uppercase transition-all
                      ${isActive ? 'text-primary' : 'text-white/70 hover:text-white'}
                    `}
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div custom={navLinks.length} variants={linkVariants}>
                <Link
                  to="/booking"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="premium-button-primary mt-4 sm:mt-8 px-10 sm:px-12 py-3 sm:py-4 text-center min-w-[180px] sm:min-w-[200px]"
                >
                  Book Now
                </Link>
              </motion.div>

              {/* Social Links in Mobile Menu */}
              <motion.div
                custom={navLinks.length + 1}
                variants={linkVariants}
                className="flex gap-8 mt-8 sm:mt-12 text-zinc-500"
              >
                <Instagram size={24} className="hover:text-primary transition-colors cursor-pointer" />
                <Facebook size={24} className="hover:text-primary transition-colors cursor-pointer" />
                <Youtube size={24} className="hover:text-primary transition-colors cursor-pointer" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>

=======
            className="fixed inset-0 bg-rich-black z-40 flex flex-col items-center justify-center gap-8 p-6 md:hidden mobile-menu-drawer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50" />
            
            {navLinks.map((link, i) => (
              <motion.div key={link.name} custom={i} variants={linkVariants}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) => `
                    font-display text-2xl sm:text-3xl tracking-[0.25em] uppercase transition-all
                    ${isActive ? 'text-primary' : 'text-white/80 hover:text-white'}
                  `}
                >
                  {link.name}
                </NavLink>
              </motion.div>
            ))}
            
            <motion.div custom={navLinks.length} variants={linkVariants}>
              <Link 
                to="/booking" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="premium-button-primary mt-8 px-12 py-4 text-center min-w-[200px]"
              >
                Book Now
              </Link>
            </motion.div>

            {/* Social Links in Mobile Menu */}
            <motion.div 
              custom={navLinks.length + 1} 
              variants={linkVariants}
              className="flex gap-8 mt-12 text-zinc-500"
            >
              <Instagram size={24} className="hover:text-primary transition-colors cursor-pointer" />
              <Facebook size={24} className="hover:text-primary transition-colors cursor-pointer" />
              <Youtube size={24} className="hover:text-primary transition-colors cursor-pointer" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
>>>>>>> 564b3243acf62f481f1015f4696b9f36e4bd6bf8
  );
};

export default Navbar;
