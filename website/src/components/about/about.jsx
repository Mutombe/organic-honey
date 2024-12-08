import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Leaf, Droplet, Clock, Award } from 'lucide-react';

// Enhanced Color Palette Matching Home Page
const honeyPalette = {
  background: "bg-gradient-to-br from-amber-50 to-yellow-100",
  textPrimary: "text-amber-900",
  textSecondary: "text-amber-700",
  cardBackground: "bg-white/40",
  buttonPrimary: "bg-amber-500 hover:bg-amber-600",
  buttonSecondary: "border-2 border-amber-700 text-amber-900 hover:bg-amber-100"
};

export const AboutUs = () => {
  // Animation Configurations (matching Home page)
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

  // Team members data
  const teamMembers = [
    { name: "Mr Tera", role: "Head Beekeeper & CEO", image: "/44.png" },
    { name: "Michael Muchacha", role: "Sustainability Director", image: "/44.png" },
    { name: "Sarah Muhera", role: "Quality Assurance Lead", image: "/44.png" }
  ];

  // Certification data
  const certifications = [
    { name: "Organic Certified", year: 2015 },
    { name: "Sustainable Practices", year: 2018 },
    { name: "Fair Trade Verified", year: 2020 }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`min-h-screen ${honeyPalette.background} py-8 md:py-16 relative overflow-hidden`}
    >
      {/* Background Texture */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "url('/og6.webp')",
          backgroundRepeat: "cover"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          variants={itemVariants}
          className={`text-3xl md:text-4xl text-center mb-8 md:mb-12 ${honeyPalette.textPrimary} font-bold`}
        >
          Our Honey Journey 🐝
        </motion.h2>

        {/* Story and Values Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {/* Our Story Card */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className={`${honeyPalette.cardBackground} backdrop-blur-md rounded-xl p-6 md:p-8 transition-all duration-300 shadow-lg`}
          >
            <h3 className={`text-2xl font-bold ${honeyPalette.textPrimary} mb-4 flex items-center`}>
              <Droplet className="mr-3 text-amber-700" size={32} />
              Our Story
            </h3>
            <p className={`${honeyPalette.textPrimary} opacity-80 leading-relaxed`}>
              Founded in 2010, Organic Honey began with a simple yet profound mission: 
              to produce the purest, most delicious honey while respecting nature's delicate balance. 
              Our family-owned apiaries span across pristine mountain valleys, where generations 
              of beekeeping wisdom meet modern sustainable practices.
            </p>
          </motion.div>

          {/* Our Values Card */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className={`${honeyPalette.cardBackground} backdrop-blur-md rounded-xl p-6 md:p-8 transition-all duration-300 shadow-lg`}
          >
            <h3 className={`text-2xl font-bold ${honeyPalette.textPrimary} mb-4 flex items-center`}>
              <Leaf className="mr-3 text-amber-600" size={32} />
              Our Values
            </h3>
            <ul className={`${honeyPalette.textPrimary} opacity-80 space-y-3`}>
              {["Sustainable Beekeeping", "Local Ecosystem Preservation", "Generational Environmental Commitment"].map((value, index) => (
                <li key={index} className="flex items-center">
                  <MapPin className="mr-2 text-amber-600" size={20} />
                  {value}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div 
          variants={itemVariants}
          className="mb-12"
        >
          <h3 className={`text-2xl md:text-3xl text-center mb-8 ${honeyPalette.textPrimary} font-bold`}>
            Meet Our Passionate Team
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className={`${honeyPalette.cardBackground} backdrop-blur-md rounded-xl p-6 text-center transition-all duration-300 shadow-lg`}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="mx-auto mb-4 rounded-full w-32 h-32 object-cover"
                />
                <h4 className={`${honeyPalette.textPrimary} font-bold text-xl`}>{member.name}</h4>
                <p className={`${honeyPalette.textPrimary} opacity-70`}>{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div variants={itemVariants}>
          <h3 className={`text-2xl md:text-3xl text-center mb-8 ${honeyPalette.textPrimary} font-bold`}>
            Our Recognized Commitment
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className={`${honeyPalette.cardBackground} backdrop-blur-md rounded-xl p-6 text-center flex flex-col items-center justify-center transition-all duration-300 shadow-lg`}
              >
                <Award className={`mb-4 ${honeyPalette.textPrimary}`} size={48} />
                <h4 className={`${honeyPalette.textPrimary} font-bold text-xl mb-2`}>{cert.name}</h4>
                <p className={`${honeyPalette.textPrimary} opacity-70`}>Certified in {cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutUs;