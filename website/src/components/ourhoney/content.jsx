import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Flower, 
  ShoppingCart,
  TreePine,
  Info,
  Heart,
  Droplet,
  Filter,
  X
} from 'lucide-react';

// Mobile-First Color Palette
const honeyPalette = {
  background: "bg-gradient-to-br from-amber-50 to-yellow-100",
  textPrimary: "text-amber-900",
  textSecondary: "text-amber-700",
  cardBackground: "bg-white/70", // Increased opacity for better readability
  buttonPrimary: "bg-amber-500 hover:bg-amber-600",
  buttonSecondary: "border-2 border-amber-700 text-amber-900 hover:bg-amber-100"
};

export const OurHoney = () => {
  const [cart, setCart] = useState([]);
  const [selectedHoney, setSelectedHoney] = useState(null);
  const [filter, setFilter] = useState('all');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const honeyTypes = [
    { 
      name: 'Wildflower Honey', 
      description: 'Collected from diverse wildflower meadows, rich in complex flavors.',
      category: 'wildflower',
      icon: <Flower className="w-8 h-8 md:w-12 md:h-12 text-amber-700" />,
      price: 12.99,
      details: {
        origin: 'Mountain Valley Meadows',
        harvest: 'Summer Solstice',
        flavor: 'Complex, multi-floral',
        benefits: [
          'Rich in antioxidants',
          'Natural energy booster',
          'Supports local ecosystem'
        ]
      },
      image: '/og4.jpg'
    },
    { 
      name: 'Lavender Honey', 
      description: 'Delicate honey with a subtle lavender essence from mountain apiaries.',
      category: 'herbal',
      icon: <TreePine className="w-8 h-8 md:w-12 md:h-12 text-amber-700" />,
      price: 15.99,
      details: {
        origin: 'Alpine Lavender Fields',
        harvest: 'Early Summer',
        flavor: 'Delicate, floral',
        benefits: [
          'Calming properties',
          'Aids sleep',
          'Natural skin care'
        ]
      },
      image: '/og5.webp'
    },
    {
      name: 'Manuka Honey',
      description: 'Rare New Zealand honey known for its exceptional medicinal properties.',
      category: 'medicinal',
      icon: <TreePine className="w-8 h-8 md:w-12 md:h-12 text-amber-700" />,
      price: 29.99,
      details: {
          origin: 'New Zealand Manuka Forests',
          harvest: 'Late Spring',
          flavor: 'Rich, slightly earthy',
          benefits: [
              'Powerful antibacterial properties',
              'Wound healing support',
              'Immune system boost'
          ]
      },
      image: '/og1.jpg'
    },
    {
      name: 'Acacia Honey',
      description: 'Light and clear honey with a delicate, pure sweetness from acacia tree blossoms.',
      category: 'floral',
      icon: <TreePine className="w-8 h-8 md:w-12 md:h-12 text-amber-700" />,
      price: 14.50,
      details: {
          origin: 'European Acacia Forests',
          harvest: 'Spring',
          flavor: 'Mild, nearly transparent',
          benefits: [
              'Low glycemic index',
              'Helps digestive health',
              'Mild and smooth taste'
          ]
      },
      image: '/og2.jpeg'
    },
    {
      name: 'Buckwheat Honey',
      description: 'Dark, robust honey with a strong, molasses-like flavor from wild buckwheat fields.',
      category: 'robust',
      icon: <TreePine className="w-8 h-8 md:w-12 md:h-12 text-amber-700" />,
      price: 13.75,
      details: {
          origin: 'Midwestern Prairie Lands',
          harvest: 'Late Summer',
          flavor: 'Bold, slightly spicy',
          benefits: [
              'High in antioxidants',
              'Natural cough suppressant',
              'Supports heart health'
          ]
      },
      image: '/og3.webp'
  }
  ];

  // Mobile-Optimized Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delayChildren: 0.2,
        staggerChildren: 0.1 // Faster stagger for mobile
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring", // Softer spring animation
        stiffness: 100
      }
    }
  };

  const addToCart = (honey) => {
    setCart(prevCart => {
      // Check if item already in cart to prevent duplicates
      const existingItem = prevCart.find(item => item.name === honey.name);
      return existingItem 
        ? prevCart 
        : [...prevCart, { ...honey, quantity: 1 }];
    });
  };

  const openHoneyDetails = (honey) => {
    setSelectedHoney(honey);
  };

  const closeHoneyDetails = () => {
    setSelectedHoney(null);
  };

  const filteredHoneys = filter === 'all' 
    ? honeyTypes 
    : honeyTypes.filter(honey => honey.category === filter);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`
        min-h-screen ${honeyPalette.background} 
        px-4 py-6 md:py-16 relative overflow-hidden
      `}
    >
      {/* Mobile-Friendly Page Header */}
      <motion.h2 
        variants={itemVariants}
        className={`
          text-2xl md:text-4xl text-center mb-4 md:mb-12 
          ${honeyPalette.textPrimary} font-bold
        `}
      >
        Our Honey Collection 🍯
      </motion.h2>

      {/* Mobile Filter Toggle */}
      <motion.div 
        variants={itemVariants}
        className="flex justify-center mb-4 md:mb-8"
      >
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          className={`
            flex items-center px-4 py-2 rounded-full
            ${honeyPalette.buttonPrimary} text-white
          `}
        >
          <Filter className="mr-2" size={16} />
          Filter Honey
        </motion.button>
      </motion.div>

      {/* Mobile Filter Overlay */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 flex items-end"
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              className="bg-white w-full rounded-t-2xl p-6 max-h-[70vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Filter Honey</h3>
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMobileFilterOpen(false)}
                >
                  <X className="text-gray-600" />
                </motion.button>
              </div>
              <div className="space-y-3">
                {['all', 'wildflower', 'herbal'].map((category) => (
                  <motion.button
                    key={category}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setFilter(category);
                      setIsMobileFilterOpen(false);
                    }}
                    className={`
                      w-full px-4 py-3 rounded-lg capitalize text-center
                      ${filter === category 
                        ? `${honeyPalette.buttonPrimary} text-white` 
                        : 'bg-gray-100 text-gray-700'
                      }
                    `}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Filter (Hidden on Mobile) */}
      <motion.div 
        variants={itemVariants}
        className="hidden md:flex justify-center mb-8 space-x-4"
      >
        {['all', 'wildflower', 'herbal'].map((category) => (
          <motion.button
            key={category}
            whileTap={{ scale: 0.9 }}
            onClick={() => setFilter(category)}
            className={`
              px-4 py-2 rounded-full capitalize 
              ${filter === category 
                ? `${honeyPalette.buttonPrimary} text-white` 
                : honeyPalette.buttonSecondary
              }
            `}
          >
            <Filter className="mr-2 inline-block" size={16} />
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Honey Products Grid - Mobile-First Responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ">
        {filteredHoneys.map((honey) => (
          <motion.div 
            key={honey.name}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }} // Softer hover for mobile
            className={`
              ${honeyPalette.cardBackground} backdrop-blur-sm 
              p-4 md:p-6 rounded-xl flex flex-col items-center text-center shadow-lg
            `}
          >
            <div className="mb-4">{honey.icon}</div>
            <div>
              <h3 className={`text-xl md:text-2xl font-bold ${honeyPalette.textPrimary} mb-2`}>
                {honey.name}
              </h3>
              <p className={`${honeyPalette.textSecondary} opacity-70 mb-4 text-sm md:text-base`}>
                {honey.description}
              </p>
              <div className="flex flex-col items-center space-y-3">
                <span className={`text-lg md:text-xl font-bold ${honeyPalette.textPrimary}`}>
                  ${honey.price.toFixed(2)}
                </span>
                <div className="flex space-x-3">
                  <motion.button 
                    onClick={() => addToCart(honey)}
                    whileTap={{ scale: 0.9 }}
                    className="bg-amber-500 text-white px-4 py-2 rounded-full flex items-center text-sm"
                  >
                    <ShoppingCart className="mr-2 w-4 h-4" /> Add to Cart
                  </motion.button>
                  <motion.button 
                    onClick={() => openHoneyDetails(honey)}
                    whileTap={{ scale: 0.9 }}
                    className="border-2 border-amber-700 text-amber-900 px-4 py-2 rounded-full flex items-center text-sm"
                  >
                    <Info className="mr-2 w-4 h-4" /> Details
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Cart Indicator */}
      {cart.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-4 right-4 bg-white rounded-full shadow-lg p-2 md:p-3 flex items-center"
        >
          <ShoppingCart className="mr-1 md:mr-2 text-amber-700 w-4 h-4 md:w-5 md:h-5" />
          <span className={`${honeyPalette.textPrimary} font-bold text-xs md:text-sm`}>
            {cart.length} Item{cart.length !== 1 && 's'}
          </span>
        </motion.div>
      )}

      {/* Honey Details Modal */}
      <AnimatePresence>
        {selectedHoney && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 shadow-lg"
            onClick={closeHoneyDetails}
          >
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-xl w-full max-w-md md:max-w-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Responsive Modal Layout */}
              <div className="flex flex-col md:flex-row items-center">
                <img 
                  src={selectedHoney.image} 
                  alt={selectedHoney.name} 
                  className="w-full md:w-1/2 rounded-xl mb-4 md:mb-0 md:mr-6"
                />
                <div className="text-center md:text-left">
                  <h3 className={`text-2xl md:text-3xl font-bold ${honeyPalette.textPrimary} mb-4`}>
                    {selectedHoney.name}
                  </h3>
                  <div className="space-y-3">
                    {/* Responsive Details */}
                    <div className="flex items-center justify-center md:justify-start">
                      <Droplet className="mr-2 text-amber-700" />
                      <span>Origin: {selectedHoney.details.origin}</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                      <Heart className="mr-2 text-red-700" />
                      <span>Harvest: {selectedHoney.details.harvest}</span>
                    </div>
                    <div>
                      <h4 className={`${honeyPalette.textPrimary} font-bold mb-2`}>Benefits:</h4>
                      <ul className="list-disc list-inside text-center md:text-left">
                        {selectedHoney.details.benefits.map((benefit, index) => (
                          <li key={index} className={`${honeyPalette.textPrimary} opacity-80`}>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-col md:flex-row justify-center md:justify-end space-y-3 md:space-y-0 md:space-x-3">
                <motion.button 
                  onClick={() => {
                    addToCart(selectedHoney);
                    closeHoneyDetails();
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-amber-500 text-white px-6 py-3 rounded-full flex items-center justify-center"
                >
                  <ShoppingCart className="mr-2" /> Add to Cart
                </motion.button>
                <motion.button 
                  onClick={closeHoneyDetails}
                  whileTap={{ scale: 0.9 }}
                  className="border-2 border-amber-700 text-amber-900 px-6 py-3 rounded-full"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default OurHoney;