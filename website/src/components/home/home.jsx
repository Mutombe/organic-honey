import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Droplet, 
  Leaf, 
  Sun, 
  Wind, 
  ShoppingCart, 
  Play,
  Heart,
  Archive,
  Award,
  Globe
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Enhanced Color Palette with More Depth
const honeyPalette = {
  background: "bg-gradient-to-br from-amber-50 to-yellow-100",
  textPrimary: "text-amber-900",
  textSecondary: "text-amber-700",
  cardBackground: "bg-white/40",
  buttonPrimary: "bg-amber-500 hover:bg-amber-600",
  buttonSecondary: "border-2 border-amber-700 text-amber-900 hover:bg-amber-100"
};

export const Home = () => {
  
  const navigate = useNavigate();
  const productSections = [
    {
      id: 'story',
      title: 'Our Honey Journey',
      icon: <Heart className="text-yellow-600" size={48} />,
      content: [
        "Born from generations of beekeeping wisdom",
        "Every jar tells a story of mountain landscapes",
        "Sustainable practices that honor tradition"
      ],
      backgroundImage: "/api/placeholder/1200/800?text=Beekeeping+Tradition",
      overlayColor: "bg-amber-500/30"
    },
    {
      id: 'process',
      title: 'Honey Production',
      icon: <Archive className="text-amber-700" size={48} />,
      content: [
        "Hand-selected wildflower locations",
        "Ethical bee farming techniques",
        "Cold-extracted to preserve nutrients"
      ],
      backgroundImage: "/api/placeholder/1200/800?text=Honey+Production",
      overlayColor: "bg-green-500/30"
    },
    {
      id: 'quality',
      title: 'Quality Commitment',
      icon: <Award className="text-yellow-600" size={48} />,
      content: [
        "Certified organic practices",
        "Third-party quality testing",
        "Supporting local ecosystems"
      ],
      backgroundImage: "/api/placeholder/1200/800?text=Quality+Assurance",
      overlayColor: "bg-blue-500/30"
    }
  ];

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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`min-h-screen ${honeyPalette.background} flex flex-col relative overflow-hidden`}
    >
      {/* Hero Section with Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ 
          backgroundImage: "url('/api/placeholder/1920/1080?text=Honey+Meadows')",
          filter: "brightness(0.7) contrast(1.2)"
        }}
      />
      
      <div className="container mx-auto px-4 pt-16 text-center relative z-10">
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
          
          <h1 className={`text-4xl md:text-5xl font-extrabold ${honeyPalette.textPrimary} mb-4 relative z-10`}>
            Organic Honey Co. 🍯
          </h1>
          <p className={`text-xl md:text-2xl ${honeyPalette.textSecondary} mb-8 opacity-90 relative z-10`}>
            Nature's Sweetest Gift
          </p>
          
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 relative z-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={()=> navigate("/honey")}
              className={`${honeyPalette.buttonPrimary} text-white px-6 py-3 rounded-full shadow-lg transition flex items-center justify-center`}
            >
              <ShoppingCart className="mr-2" size={20} />
              Shop Our Honey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={()=> navigate("/honey")}
              className={`${honeyPalette.buttonSecondary} px-6 py-3 rounded-full transition flex items-center justify-center`}
            >
              <Play className="mr-2" size={20} />
              Watch Our Story
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Interactive Product Sections with Background Images */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {productSections.map((section) => (
            <motion.div 
              key={section.id}
              whileHover={{ scale: 1.05 }}
              className="relative group rounded-xl overflow-hidden shadow-lg"
            >
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url('${section.backgroundImage}')`,
                  filter: "brightness(0.6) contrast(1.2)"
                }}
              />
              <div 
                className={`absolute inset-0 ${section.overlayColor} mix-blend-multiply`}
              />
              
              <div 
                className={`relative z-10 ${honeyPalette.cardBackground} backdrop-blur-sm rounded-xl p-6 text-center`}
              >
                <div className="flex justify-center mb-4 relative z-20">
                  {section.icon}
                </div>
                <h3 className={`text-2xl font-bold ${honeyPalette.textPrimary} mb-4 relative z-20`}>
                  {section.title}
                </h3>
                <div className="mb-4">
                  {section.content.map((item, index) => (
                    <p 
                      key={index} 
                      className={`${honeyPalette.textPrimary} opacity-90 mb-2 relative z-20`}
                    >
                      {item}
                    </p>
                  ))}
                </div>
                <div className="flex justify-center space-x-4 mt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={()=> navigate("/honey")}
                    className={`${honeyPalette.buttonSecondary} px-4 py-2 rounded-full text-sm transition relative z-20`}
                  >
                    Learn More
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={()=> navigate("/honey")}
                    className={`${honeyPalette.buttonPrimary} text-white px-4 py-2 rounded-full text-sm transition relative z-20`}
                  >
                    Buy Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Global Impact Section with Textured Background */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          variants={itemVariants}
          className={`${honeyPalette.cardBackground} backdrop-blur-sm rounded-xl p-8 text-center relative overflow-hidden`}
        >
          {/* Subtle Honeycomb Background Texture */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: "url('/og4.jpg')",
              backgroundRepeat: "repeat"
            }}
          />
          
          <div className="flex justify-center mb-6 relative z-10">
          </div>
          <h2 className={`text-3xl font-bold ${honeyPalette.textPrimary} mb-4 relative z-10`}>
            <strong>Beyond Honey,</strong> Our Global Promise
          </h2>
          <p className={`${honeyPalette.textPrimary} opacity-80 max-w-2xl mx-auto mb-6 relative z-10`}>
            With every jar, we support sustainable beekeeping, protect endangered pollinators, 
            and contribute to ecosystem conservation across mountain regions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={()=> navigate("/about")}
            className={`${honeyPalette.buttonPrimary} text-white px-6 py-3 rounded-full transition relative z-10`}
          >
            Explore Our Mission
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;