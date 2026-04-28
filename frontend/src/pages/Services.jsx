import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Sparkles, Video, Users, Image as ImageIcon, CreditCard, Palette } from 'lucide-react';
import { Instagram } from '../components/SocialIcons';
import { Link } from 'react-router-dom';

const Services = () => {
  const coreServices = [
    {
      title: "Wedding Photography",
      desc: "Cinematic storytelling for your big day. We capture emotions, not just poses.",
      icon: <Camera className="text-primary" size={32} />,
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Pre-Wedding Shoots",
      desc: "Romantic and creative concepts in the most beautiful locations around Gujarat.",
      icon: <Sparkles className="text-primary" size={32} />,
      image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Event Coverage",
      desc: "From college fests in Vidyanagar to corporate launches in Anand.",
      icon: <Users className="text-primary" size={32} />,
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Portrait / Portfolio",
      desc: "High-end student portfolios and professional headshots for career growth.",
      icon: <ImageIcon className="text-primary" size={32} />,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const modernAddons = [
    { title: "AI Photo Editing", icon: <Palette className="text-primary" />, desc: "Next-gen skin retouching and background manipulation." },
    { title: "Instagram Reels", icon: <Instagram className="text-primary" />, desc: "Professional editing for viral cinematic content." },
    { title: "Passport Photos", icon: <CreditCard className="text-primary" />, desc: "Fast delivery (under 15 mins) with digital copies." },
    { title: "Branding Shoots", icon: <Video className="text-primary" />, desc: "Visual storytelling for local businesses and startups." }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Our <span className="text-primary">Services</span>
          </motion.h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Blending traditional excellence with modern technology. We offer a range of services tailored for the digital age.
          </p>
        </div>

        {/* Core Services Grid */}
        <div className="responsive-grid responsive-grid-2 mb-32">
          {coreServices.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card group rounded-3xl overflow-hidden flex flex-col md:flex-row h-full"
            >
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">{service.desc}</p>
                <Link to="/booking" className="text-primary font-display text-sm font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Inquire Now →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modern Add-ons */}
        <div className="bg-zinc-deep/50 rounded-[3rem] p-12 md:p-20 border border-white/5">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Modern <span className="text-primary">Add-ons</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {modernAddons.map((addon, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-rich-black/50 border border-white/5 hover:border-primary/30 transition-all text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  {addon.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{addon.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{addon.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
