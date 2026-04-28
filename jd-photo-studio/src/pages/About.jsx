import React from 'react';
import { motion } from 'framer-motion';
import { Award, Camera, Monitor, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { label: "Years Experience", value: "8+", icon: <Award className="text-primary" /> },
    { label: "Events Covered", value: "500+", icon: <Camera className="text-primary" /> },
    { label: "Happy Clients", value: "1.2k+", icon: <Users className="text-primary" /> },
    { label: "Editing Hours", value: "10k+", icon: <Monitor className="text-primary" /> }
  ];

  const tools = ["Adobe Photoshop", "Adobe Premiere Pro", "CapCut", "Lightroom", "After Effects"];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8">Capturing <span className="text-primary">Soul</span> Behind The Lens</h1>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              JD Photo Studio started as a small passion project in the streets of Vallabh Vidyanagar. Today, it has evolved into a premier destination for cinematic photography and modern visual storytelling.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              Our vision is simple: to capture the raw emotions of your most precious moments and deliver them with a creative edge that stands the test of time. We don't just take photos; we create art.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {tools.map(tool => (
                <span key={tool} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-display uppercase tracking-widest">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-20" />
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 glass-card p-4">
              <img 
                src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&q=80&w=1200" 
                alt="JD Studio Founder" 
                className="w-full h-full object-cover rounded-[2.5rem] grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 glass-card rounded-[2rem]"
            >
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-zinc-500 text-xs uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="bg-primary/5 p-12 md:p-20 rounded-[3rem] text-center border border-primary/10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">"We don't take a photograph, we make it."</h2>
          <p className="text-zinc-400 font-display tracking-[0.2em] uppercase text-sm">- Ansel Adams (Our Inspiration)</p>
        </div>
      </div>
    </div>
  );
};

export default About;
