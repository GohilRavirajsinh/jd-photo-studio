import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Instagram, Facebook, Youtube } from './SocialIcons';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display font-bold text-2xl tracking-tighter text-white">
              JD<span className="text-primary">STUDIO</span>
            </span>
          </Link>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Premium photography services in Vallabh Vidyanagar. Capturing your most precious moments with a modern and creative touch.
          </p>
          <div className="flex gap-4">
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

        <div>
          <h4 className="text-white font-display font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-zinc-400 text-sm">
            <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
            <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold mb-6">Contact Info</h4>
          <ul className="space-y-4 text-zinc-400 text-sm">
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

        <div>
          <h4 className="text-white font-display font-semibold mb-6">Working Hours</h4>
          <ul className="space-y-4 text-zinc-400 text-sm">
            <li className="flex justify-between">
              <span>Mon - Sat:</span>
              <span>10:00 AM - 8:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday:</span>
              <span>Appointment Only</span>
            </li>
          </ul>
          <Link to="/booking" className="inline-block mt-6 text-primary font-display text-sm font-semibold hover:underline">
            Book a Session →
          </Link>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4">
        <p className="text-zinc-500 text-xs text-center">
          © {new Date().getFullYear()} JD Photo Studio. All rights reserved. Designed with ❤️ for Vidyanagar.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
