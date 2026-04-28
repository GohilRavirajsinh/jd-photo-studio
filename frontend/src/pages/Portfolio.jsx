import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { setActiveCategory } from '../store/slices/portfolioSlice';

const Portfolio = () => {
  const { categories, activeCategory, items } = useSelector(state => state.portfolio);
  const dispatch = useDispatch();

  const filteredItems = activeCategory === 'All' 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Our <span className="text-primary">Portfolio</span></h1>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => dispatch(setActiveCategory(cat))}
                className={`px-6 py-2 rounded-full font-display text-sm tracking-widest uppercase transition-all duration-300 border ${
                  activeCategory === cat 
                    ? 'bg-primary border-primary text-rich-black' 
                    : 'bg-transparent border-white/10 text-zinc-400 hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <motion.div 
          layout
          className="responsive-grid responsive-grid-3"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden glass-card"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-primary text-xs font-display tracking-widest uppercase mb-2">{item.category}</span>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-zinc-500 text-xl">No masterpieces in this category yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
