// File: src/pages/Booking.jsx
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { updateField } from '../store/slices/bookingSlice';
import { Phone, MessageSquare, Calendar, User, Send } from 'lucide-react';

const Booking = () => {
  const { services, formData } = useSelector(state => state.booking);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this to a server
    // For now, let's open WhatsApp with pre-filled text
    const message = `Hello JD Studio! I'd like to book a session.%0A%0A*Name:* ${formData.name}%0A*Service:* ${formData.service}%0A*Date:* ${formData.date}%0A*Note:* ${formData.message}`;
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto mobile-px">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8">Secure Your <span className="text-primary">Spot</span></h1>
            <p className="text-zinc-400 text-base sm:text-lg mb-8 sm:mb-12 leading-relaxed">
              Ready to create something beautiful? Fill out the form or reach out directly via WhatsApp or Call. Our team will get back to you within 24 hours.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <a href="tel:+919876543210" className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone size={20} className="text-primary group-hover:text-rich-black" />
                </div>
                <div>
                  <div className="text-zinc-500 text-[10px] sm:text-xs uppercase tracking-widest mb-1">Call for Instant Booking</div>
                  <div className="text-lg sm:text-xl font-bold text-white">+91 98765 43210</div>
                </div>
              </a>

              <a href="https://wa.me/919876543210" className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/30 transition-all group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:bg-green-500 transition-colors">
                  <MessageSquare size={20} className="text-green-500 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-zinc-500 text-[10px] sm:text-xs uppercase tracking-widest mb-1">WhatsApp Message</div>
                  <div className="text-lg sm:text-xl font-bold text-white">Chat on WhatsApp</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] mt-12 lg:mt-0"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] sm:text-xs uppercase tracking-widest text-zinc-500 font-display font-semibold">Your Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name" 
                    className="w-full bg-rich-black border border-white/10 rounded-xl py-3 sm:py-4 pl-12 pr-4 text-sm sm:text-base text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] sm:text-xs uppercase tracking-widest text-zinc-500 font-display font-semibold">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                    <input 
                      type="date" 
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full bg-rich-black border border-white/10 rounded-xl py-3 sm:py-4 pl-12 pr-4 text-sm sm:text-base text-white focus:outline-none focus:border-primary transition-colors [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] sm:text-xs uppercase tracking-widest text-zinc-500 font-display font-semibold">Service</label>
                  <select 
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full bg-rich-black border border-white/10 rounded-xl py-3 sm:py-4 px-4 text-sm sm:text-base text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="">Select a service</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] sm:text-xs uppercase tracking-widest text-zinc-500 font-display font-semibold">Message / Details</label>
                <textarea 
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your shoot requirements..." 
                  className="w-full bg-rich-black border border-white/10 rounded-xl p-4 text-sm sm:text-base text-white focus:outline-none focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full premium-button-primary py-4 sm:py-5 text-base sm:text-lg flex items-center justify-center gap-3"
              >
                Request Booking
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};


export default Booking;
