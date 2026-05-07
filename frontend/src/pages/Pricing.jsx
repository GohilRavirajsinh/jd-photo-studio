import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Crown, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const tiers = [
    {
      name: "Basic",
      price: "₹9,999",
      icon: <Star className="text-zinc-400" />,
      features: [
        "4 Hours Session",
        "30 Edited Photos",
        "Online Gallery (3 Months)",
        "Single Location",
        "15 Minute Reels Edit"
      ],
      recommended: false
    },
    {
      name: "Standard",
      price: "₹24,999",
      icon: <Zap className="text-primary" />,
      features: [
        "Full Day Session",
        "100 Edited Photos",
        "Premium Photo Album",
        "AI Retouching Included",
        "Cinematic Video (3-5 mins)",
        "Multiple Locations"
      ],
      recommended: true
    },
    {
      name: "Premium",
      price: "₹49,999",
      icon: <Crown className="text-amber-400" />,
      features: [
        "2 Day Event Coverage",
        "Unlimited Edited Photos",
        "Luxury Hardcover Album",
        "High-End AI Editing",
        "Drone Shots Included",
        "Raw Footage Delivery",
        "24/7 Priority Support"
      ],
      recommended: false
    }
  ];

  return (
    <div className="pt-32 pb-24">
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto mobile-px">
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8">Transparent <span className="text-primary">Pricing</span></h1>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
=======
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Transparent <span className="text-primary">Pricing</span></h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
>>>>>>> 564b3243acf62f481f1015f4696b9f36e4bd6bf8
            No hidden costs. We believe in building trust through transparency. Choose a plan that fits your vision.
          </p>
        </div>

<<<<<<< HEAD

        <div className="responsive-grid responsive-grid-3 gap-8 sm:gap-6 lg:gap-8">
=======
        <div className="responsive-grid responsive-grid-3">
>>>>>>> 564b3243acf62f481f1015f4696b9f36e4bd6bf8
          {tiers.map((tier, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
<<<<<<< HEAD
              className={`relative p-6 sm:p-8 lg:p-10 rounded-[2rem] sm:rounded-[2.5rem] border transition-all duration-500 flex flex-col h-full ${
                tier.recommended 
                  ? 'bg-zinc-900 border-primary/50 shadow-[0_20px_50px_rgba(212,175,55,0.1)] scale-100 lg:scale-105 z-10' 
=======
              className={`relative p-10 rounded-[2.5rem] border transition-all duration-500 flex flex-col h-full ${
                tier.recommended 
                  ? 'bg-zinc-900 border-primary/50 shadow-[0_20px_50px_rgba(212,175,55,0.1)] scale-105 z-10' 
>>>>>>> 564b3243acf62f481f1015f4696b9f36e4bd6bf8
                  : 'bg-zinc-deep/50 border-white/5 hover:border-white/20'
              }`}
            >
              {tier.recommended && (
<<<<<<< HEAD
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-rich-black px-4 sm:px-6 py-1 rounded-full text-[10px] sm:text-xs font-display font-bold uppercase tracking-widest whitespace-nowrap">
=======
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-rich-black px-6 py-1 rounded-full text-xs font-display font-bold uppercase tracking-widest">
>>>>>>> 564b3243acf62f481f1015f4696b9f36e4bd6bf8
                  Most Popular
                </div>
              )}

<<<<<<< HEAD
              <div className="mb-6 sm:mb-8 flex justify-between items-start">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{tier.name}</h3>
                  <div className="text-3xl sm:text-4xl font-bold text-white">{tier.price}<span className="text-xs sm:text-sm text-zinc-500 font-normal"> / start</span></div>
                </div>
                <div className="p-2 sm:p-3 rounded-2xl bg-white/5">{React.cloneElement(tier.icon, { size: 20 })}</div>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-12 flex-grow">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-zinc-400 text-xs sm:text-sm">
                    <Check size={16} className="text-primary shrink-0" />
=======
              <div className="mb-8 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-white">{tier.price}<span className="text-sm text-zinc-500 font-normal"> / start</span></div>
                </div>
                <div className="p-3 rounded-2xl bg-white/5">{tier.icon}</div>
              </div>

              <ul className="space-y-4 mb-12 flex-grow">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-zinc-400 text-sm">
                    <Check size={18} className="text-primary shrink-0" />
>>>>>>> 564b3243acf62f481f1015f4696b9f36e4bd6bf8
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                to="/booking" 
<<<<<<< HEAD
                className={`w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl font-display font-bold text-sm sm:text-base text-center transition-all ${
=======
                className={`w-full py-4 rounded-2xl font-display font-bold text-center transition-all ${
>>>>>>> 564b3243acf62f481f1015f4696b9f36e4bd6bf8
                  tier.recommended 
                    ? 'bg-primary text-rich-black hover:bg-primary/90' 
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                Choose {tier.name}
              </Link>
            </motion.div>
          ))}
        </div>

<<<<<<< HEAD

        <div className="mt-16 sm:mt-20 text-center glass-card p-8 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem]">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Need a custom package?</h2>
          <p className="text-zinc-400 text-sm sm:text-base mb-8">We offer bespoke solutions for unique events, corporate branding, and large-scale projects.</p>
          <a href="tel:+919876543210" className="premium-button-outline inline-flex items-center gap-2 px-8 py-3">
            Contact us for Custom Quote
          </a>
        </div>

=======
        <div className="mt-20 text-center glass-card p-12 rounded-[2.5rem]">
          <h2 className="text-3xl font-bold mb-4">Need a custom package?</h2>
          <p className="text-zinc-400 mb-8">We offer bespoke solutions for unique events, corporate branding, and large-scale projects.</p>
          <a href="tel:+919876543210" className="premium-button-outline inline-flex items-center gap-2">
            Contact us for Custom Quote
          </a>
        </div>
>>>>>>> 564b3243acf62f481f1015f4696b9f36e4bd6bf8
      </div>
    </div>
  );
};

export default Pricing;
