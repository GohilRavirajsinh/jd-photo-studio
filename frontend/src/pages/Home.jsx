// File: src/pages/Home.jsx
import { motion } from 'framer-motion';
import { Camera, Heart, Zap, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[600px] sm:min-h-screen bg-rich-black flex flex-col justify-center pt-32 pb-20 overflow-hidden">
        {/* Background Image with Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-rich-black/70 via-rich-black/30 to-rich-black z-10" />
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=2000"
            alt="Photography Hero"
            className="w-full h-full object-cover object-[center_25%]"
          />
        </div>

        <div className="max-w-7xl mx-auto mobile-px relative z-20 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] sm:text-xs font-display tracking-widest uppercase mb-6 backdrop-blur-sm">
              <Camera size={14} />
              Capturing Moments since 2015
            </motion.div>

            <motion.h1 variants={itemVariants} className="hero-title font-bold mb-6 sm:mb-8 text-white">
              JD Photo Studio <span className="text-gradient"> Premium Photography</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-zinc-300 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl leading-relaxed">
              From cinematic wedding reels to high-end AI editing, we bring a modern edge to your memories.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link to="/booking" className="premium-button-primary">
                Book Your Shoot
              </Link>
              <Link to="/portfolio" className="premium-button-outline">
                View Portfolio
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Local Focus Section */}
      <section className="section-py bg-rich-black relative">
        <div className="max-w-7xl mx-auto mobile-px">
          <div className="responsive-grid responsive-grid-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold"><span className="text-primary">Serving</span> Vidyanagar</h2>
              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
                We are more than just a studio. We are part of the Vidyanagar community, specializing in student portfolios, local events, and the most stunning weddings in the region.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: <MapPin className="text-primary" />, text: "Hyper-Local: Right in the heart of Vidyanagar" },
                  { icon: <Heart className="text-primary" />, text: "Trusted by 500+ local clients" },
                  { icon: <Zap className="text-primary" />, text: "Express Delivery for Passport Photos" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-zinc-300 text-sm sm:text-base">
                    <span className="p-2 rounded-lg bg-white/5">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="relative mt-8 lg:mt-0">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-30" />
              <div className="glass-card p-3 sm:p-4 rounded-3xl relative overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1200"
                  alt="Local Studio"
                  className="rounded-2xl group-hover:scale-105 transition-all duration-700 w-full aspect-square object-cover grayscale hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-py relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="max-w-5xl mx-auto mobile-px relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8">Ready to create <span className="text-primary">magic</span> together?</h2>
          <p className="text-zinc-400 text-base sm:text-xl mb-8 sm:mb-12">Click below to chat on WhatsApp and get a custom quote instantly.</p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="premium-button-primary inline-flex items-center gap-3 text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5"
          >
            Chat on WhatsApp
            <ArrowRight size={24} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;

