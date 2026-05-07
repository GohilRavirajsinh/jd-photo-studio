// File: src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Instagram, Facebook, Youtube } from './SocialIcons';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 section-py pb-10">
      <div className="max-w-7xl mx-auto mobile-px grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col items-center sm:items-start space-y-6 text-center sm:text-left">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display font-bold text-2xl tracking-tighter text-white">
              JD<span className="text-primary">STUDIO</span>
            </span>
          </Link>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
            Premium photography services in Vallabh Vidyanagar. Capturing your most precious moments with a modern and creative touch.
          </p>
          <div className="flex gap-4 justify-center sm:justify-start">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-rich-black transition-all duration-300">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-rich-black transition-all duration-300">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-rich-black transition-all duration-300">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        <div className="text-center sm:text-left">
          <h4 className="text-white font-display font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-zinc-400 text-sm">
            <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
            <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h4 className="text-white font-display font-semibold mb-6">Contact Info</h4>
          <ul className="space-y-4 text-zinc-400 text-sm flex flex-col items-center sm:items-start">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-primary shrink-0" />
              <span>Vallabh Vidyanagar, Anand, Gujarat</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-primary shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-primary shrink-0" />
              <span>hello@jdstudio.com</span>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h4 className="text-white font-display font-semibold mb-6">Working Hours</h4>
          <ul className="space-y-4 text-zinc-400 text-sm max-w-[240px] mx-auto sm:mx-0">
            <li className="flex justify-between gap-4">
              <span>Mon - Sat:</span>
              <span>10:00 AM - 8:00 PM</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Sunday:</span>
              <span>Appointment Only</span>
            </li>
          </ul>
          <Link to="/booking" className="inline-block mt-6 text-primary font-display text-sm font-semibold hover:underline">
            Book a Session →
          </Link>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mobile-px mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-500 text-xs text-center md:text-left">
          © {new Date().getFullYear()} JD Photo Studio. All rights reserved. Designed with ❤️ for Vidyanagar.
        </p>
      </div>
    </footer>

  );
};

export default Footer;
