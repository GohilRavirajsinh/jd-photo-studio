import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Get In <span className="text-primary">Touch</span></h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Have a question or want to discuss a project? We're here to help. Reach out through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: <Phone />, title: "Call Us", detail: "+91 98765 43210", color: "text-primary" },
            { icon: <Mail />, title: "Email Us", detail: "hello@jdstudio.com", color: "text-blue-400" },
            { icon: <MapPin />, title: "Visit Us", detail: "Vidyanagar, Anand", color: "text-red-400" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="glass-card p-10 rounded-[2rem] text-center border border-white/5"
            >
              <div className={`w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 ${item.color}`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-zinc-400">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto glass-card p-10 md:p-16 rounded-[3rem]">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 font-display font-semibold">Name</label>
                <input type="text" placeholder="Your full name" className="w-full bg-rich-black border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 font-display font-semibold">Email</label>
                <input type="email" placeholder="Your email address" className="w-full bg-rich-black border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-primary transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-zinc-500 font-display font-semibold">Subject</label>
              <input type="text" placeholder="What's this about?" className="w-full bg-rich-black border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-zinc-500 font-display font-semibold">Message</label>
              <textarea rows="6" placeholder="Your message here..." className="w-full bg-rich-black border border-white/10 rounded-xl p-6 text-white focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
            </div>
            <button className="premium-button-primary w-full py-5 flex items-center justify-center gap-3 text-lg">
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
