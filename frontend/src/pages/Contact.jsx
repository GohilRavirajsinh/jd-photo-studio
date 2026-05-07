import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto mobile-px">
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8">Get In <span className="text-primary">Touch</span></h1>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
            Have a question or want to discuss a project? We're here to help. Reach out through any of the channels below.
          </p>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {[
            { icon: <Phone />, title: "Call Us", detail: "+91 98765 43210", color: "text-primary" },
            { icon: <Mail />, title: "Email Us", detail: "hello@jdstudio.com", color: "text-blue-400" },
            { icon: <MapPin />, title: "Visit Us", detail: "Vidyanagar, Anand", color: "text-red-400" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="glass-card p-8 sm:p-10 rounded-[2rem] text-center border border-white/5"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 ${item.color}`}>
                {React.cloneElement(item.icon, { size: 24 })}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-zinc-400 text-sm sm:text-base">{item.detail}</p>
            </motion.div>
          ))}
        </div>


        <div className="max-w-4xl mx-auto glass-card p-8 sm:p-10 md:p-16 rounded-[2rem] sm:rounded-[3rem]">
          <form className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-2">
                <label className="text-[10px] sm:text-xs uppercase tracking-widest text-zinc-500 font-display font-semibold">Name</label>
                <input type="text" placeholder="Your full name" className="w-full bg-rich-black border border-white/10 rounded-xl py-3 sm:py-4 px-5 sm:px-6 text-sm sm:text-base text-white focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] sm:text-xs uppercase tracking-widest text-zinc-500 font-display font-semibold">Email</label>
                <input type="email" placeholder="Your email address" className="w-full bg-rich-black border border-white/10 rounded-xl py-3 sm:py-4 px-5 sm:px-6 text-sm sm:text-base text-white focus:outline-none focus:border-primary transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] sm:text-xs uppercase tracking-widest text-zinc-500 font-display font-semibold">Subject</label>
              <input type="text" placeholder="What's this about?" className="w-full bg-rich-black border border-white/10 rounded-xl py-3 sm:py-4 px-5 sm:px-6 text-sm sm:text-base text-white focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] sm:text-xs uppercase tracking-widest text-zinc-500 font-display font-semibold">Message</label>
              <textarea rows="5 sm:6" placeholder="Your message here..." className="w-full bg-rich-black border border-white/10 rounded-xl p-5 sm:p-6 text-sm sm:text-base text-white focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
            </div>
            <button className="premium-button-primary w-full py-4 sm:py-5 flex items-center justify-center gap-3 text-base sm:text-lg">
              Send Message
              <Send size={20} />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
