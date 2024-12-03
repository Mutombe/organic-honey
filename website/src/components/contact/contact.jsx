import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Mail, Phone, 
  Send,
  Globe,
  Heart
} from 'lucide-react';

// Reuse the Honey Palette from Home Page
const honeyPalette = {
  background: "bg-gradient-to-br from-amber-50 to-yellow-100",
  textPrimary: "text-amber-900",
  textSecondary: "text-amber-700",
  cardBackground: "bg-white/40",
  buttonPrimary: "bg-amber-500 hover:bg-amber-600",
  buttonSecondary: "border-2 border-amber-700 text-amber-900 hover:bg-amber-100"
};

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Animation Configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delayChildren: 0.3,
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1 
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`min-h-screen ${honeyPalette.background} flex flex-col relative overflow-hidden`}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ 
          backgroundImage: "url('/api/placeholder/1920/1080?text=Honey+Landscape')",
          filter: "brightness(0.7) contrast(1.2)"
        }}
      />
      
      <div className="container mx-auto px-4 pt-16 pb-16 relative z-10">
        <motion.div 
          variants={itemVariants}
          className={`${honeyPalette.cardBackground} backdrop-blur-md rounded-xl p-6 md:p-10 shadow-2xl border border-white/30 relative overflow-hidden`}
        >
          {/* Subtle Background Texture */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: "url('/og3.webp')",
              backgroundRepeat: "repeat"
            }}
          />
          
          <h1 className={`text-4xl md:text-5xl font-extrabold ${honeyPalette.textPrimary} mb-4 text-center relative z-10`}>
            Contact Mountain Meadow Honey 🐝
          </h1>
          <p className={`text-xl md:text-2xl ${honeyPalette.textSecondary} mb-8 opacity-90 text-center relative z-10`}>
            We're Here to Sweeten Your Day
          </p>

          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            {/* Contact Information Section */}
            <div className="space-y-6 bg-white/20 p-6 rounded-xl">
              <div className="flex items-center">
                <MapPin className={`mr-4 w-8 h-8 ${honeyPalette.textPrimary}`} />
                <span className={honeyPalette.textPrimary}>
                401/6 Mavhonde road, Cranborne Ave W, Harare
                </span>
              </div>
              <div className="flex items-center">
                <Phone className={`mr-4 w-8 h-8 ${honeyPalette.textPrimary}`} />
                <span className={honeyPalette.textPrimary}>
                +263 77 963 8318
                </span>
              </div>
              <div className="flex items-center">
                <Mail className={`mr-4 w-8 h-8 ${honeyPalette.textPrimary}`} />
                <span className={honeyPalette.textPrimary}>
                  hello@organichoney.com
                </span>
              </div>
            </div>

            {/* Contact Form Section */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name" 
                className={`w-full p-3 rounded-lg border-2 ${honeyPalette.textPrimary} border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500`}
                required
              />
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email" 
                className={`w-full p-3 rounded-lg border-2 ${honeyPalette.textPrimary} border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500`}
                required
              />
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message" 
                className={`w-full p-3 rounded-lg border-2 ${honeyPalette.textPrimary} border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 h-32`}
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${honeyPalette.buttonPrimary} text-white px-6 py-3 rounded-full shadow-lg transition flex items-center justify-center w-full`}
              >
                <Send className="mr-2" size={20} />
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Global Community Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          variants={itemVariants}
          className={`${honeyPalette.cardBackground} backdrop-blur-sm rounded-xl p-8 text-center relative overflow-hidden`}
        >
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: "url('/og4.jpg')",
              backgroundRepeat: "repeat"
            }}
          />
          
          <div className="flex justify-center mb-6 relative z-10">
            <Heart className="text-amber-700" size={64} />
          </div>
          <h2 className={`text-3xl font-bold ${honeyPalette.textPrimary} mb-4 relative z-10`}>
            Join Our Honey Community
          </h2>
          <p className={`${honeyPalette.textPrimary} opacity-80 max-w-2xl mx-auto mb-6 relative z-10`}>
            Connect with bee enthusiasts, learn about sustainable practices, 
            and be part of our mission to protect pollinators worldwide.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${honeyPalette.buttonSecondary} px-6 py-3 rounded-full transition relative z-10`}
          >
            Join Our Community
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
  