import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Droplet, 
  ShoppingCart,
  Filter,
  X,
  Info
} from 'lucide-react';

// Mobile-First Color Palette
const honeyPalette = {
  background: "bg-gradient-to-br from-amber-50 to-yellow-100",
  textPrimary: "text-amber-900",
  textSecondary: "text-amber-700",
  cardBackground: "bg-white/70",
  buttonPrimary: "bg-amber-500 hover:bg-amber-600",
  buttonSecondary: "border-2 border-amber-700 text-amber-900 hover:bg-amber-100"
};

export const OurHoney = () => {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filter, setFilter] = useState('all');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const productTypes = [
    // Bottled Honey Products
    { 
      name: 'Wildflower Bottled Honey', 
      category: 'honey',
      type: 'bottled',
      weight: '500g',
      price: 4.00,
      description: 'Pure wildflower honey, locally sourced and carefully bottled.',
      image: '/og6.webp',
      inStock: true
    },
    { 
      name: 'Wildflower Combed Honey', 
      category: 'honey',
      type: 'combed',
      weight: '500g',
      price: 3.00,
      description: 'Natural combed honey with honeycomb intact, straight from the hive.',
      image: '/comb4.webp',
      inStock: true
    },
    // Wholesale Honey Options
    { 
      name: 'Wholesale Wildflower Honey (5kg)', 
      category: 'wholesale',
      type: 'bottled',
      weight: '5kg',
      price: 35.00,
      description: 'Bulk honey for businesses and large-scale consumers.',
      image: '/bulk.jpg',
      inStock: true
    },
    // Beeswax Products
    { 
      name: 'Raw Beeswax Blocks', 
      category: 'beeswax',
      type: 'raw',
      weight: '250g',
      price: 6.50,
      description: 'Pure, unprocessed beeswax blocks for crafting and cosmetics.',
      image: '/wax1.webp',
      inStock: true
    },
    { 
      name: 'Beeswax Candle Making Kit', 
      category: 'beeswax',
      type: 'kit',
      weight: '500g',
      price: 15.00,
      description: 'Complete kit with beeswax and supplies for making your own candles.',
      image: '/kit.webp',
      inStock: true
    },
    { 
      name: 'Cosmetic Grade Beeswax', 
      category: 'beeswax',
      type: 'refined',
      weight: '100g',
      price: 8.00,
      description: 'Highly refined beeswax perfect for skincare and cosmetic formulations.',
      image: '/cosm.webp',
      inStock: true
    }
  ];

  // Animation configurations remain the same as in previous component
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.name === product.name);
      return existingItem 
        ? prevCart 
        : [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  // Filtering logic with multiple filter options
  const filteredProducts = productTypes.filter(product => 
    filter === 'all' || product.category === filter
  );

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
      {/* Page Header */}
      <motion.h2 
        variants={itemVariants}
        className={`
          text-2xl md:text-4xl text-center mb-4 md:mb-12 
          ${honeyPalette.textPrimary} font-bold
        `}
      >
        Our Organic Honey & Beeswax 🍯
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
          Filter Products
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
                <h3 className="text-xl font-bold">Filter Products</h3>
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMobileFilterOpen(false)}
                >
                  <X className="text-gray-600" />
                </motion.button>
              </div>
              <div className="space-y-3">
                {['all', 'honey', 'beeswax', 'wholesale'].map((category) => (
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

      {/* Desktop Filter */}
      <motion.div 
        variants={itemVariants}
        className="hidden md:flex justify-center mb-8 space-x-4"
      >
        {['all', 'honey', 'beeswax', 'wholesale'].map((category) => (
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

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filteredProducts.map((product) => (
          <motion.div 
            key={product.name}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className={`
              ${honeyPalette.cardBackground} backdrop-blur-sm 
              p-4 md:p-6 rounded-xl flex flex-col items-center text-center shadow-lg
            `}
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <div>
              <h3 className={`text-xl md:text-2xl font-bold ${honeyPalette.textPrimary} mb-2`}>
                {product.name}
              </h3>
              <p className={`${honeyPalette.textSecondary} opacity-70 mb-4 text-sm md:text-base`}>
                {product.description}
              </p>
              <div className="flex flex-col items-center space-y-3">
                <div className="flex items-center space-x-2">
                  <span className={`text-lg md:text-xl font-bold ${honeyPalette.textPrimary}`}>
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-500">({product.weight})</span>
                </div>
                <div className="flex space-x-3">
                  <motion.button 
                    onClick={() => addToCart(product)}
                    whileTap={{ scale: 0.9 }}
                    className="bg-amber-500 text-white px-4 py-2 rounded-full flex items-center text-sm"
                  >
                    <ShoppingCart className="mr-2 w-4 h-4" /> Add to Cart
                  </motion.button>
                  <motion.button 
                    onClick={() => openProductDetails(product)}
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

      {/* Product Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 shadow-lg"
            onClick={closeProductDetails}
          >
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-xl w-full max-w-md md:max-w-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row items-center">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full md:w-1/2 rounded-xl mb-4 md:mb-0 md:mr-6"
                />
                <div className="text-center md:text-left">
                  <h3 className={`text-2xl md:text-3xl font-bold ${honeyPalette.textPrimary} mb-4`}>
                    {selectedProduct.name}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center md:justify-start">
                      <Droplet className="mr-2 text-amber-700" />
                      <span>Weight: {selectedProduct.weight}</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                      <ShoppingCart className="mr-2 text-amber-700" />
                      <span>Price: ${selectedProduct.price.toFixed(2)}</span>
                    </div>
                    <div className="mt-4">
                      <p className={`${honeyPalette.textPrimary} opacity-80`}>
                        {selectedProduct.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

          <div className="mt-6 flex flex-col md:flex-row justify-center md:justify-end space-y-3 md:space-y-0 md:space-x-3">
                <motion.button 
                  onClick={() => {
                    addToCart(selectedProduct);
                    closeProductDetails();
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-amber-500 text-white px-6 py-3 rounded-full flex items-center justify-center"
                >
                  <ShoppingCart className="mr-2" /> Add to Cart
                </motion.button>
                <motion.button 
                  onClick={closeProductDetails}
                  whileTap={{ scale: 0.9 }}
                  className="border-2 border-amber-700 text-amber-900 px-6 py-3 rounded-full flex items-center justify-center"
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