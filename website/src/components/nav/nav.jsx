import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

// Constants
const honeyYellow = "bg-gradient-to-r from-amber-300 to-yellow-500";
const honeyTextColor = "text-amber-900";

// Navigation Component
export const Navigation = React.memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: "🏡" },
    { name: "Our Honey", path: "/honey", icon: "🍯" },
    { name: "About Us", path: "/about", icon: "🌿" },
    { name: "Contact", path: "/contact", icon: "📞" },
  ];

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const menuVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  }; {/*🐝*/}

  return (
    <nav className="sticky top-0 z-50 bg-amber-200 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo Area */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div
            className={`text-2xl font-bold ${honeyTextColor} flex items-center`}
          >
            <img src="/ohlogo.png" alt="" className="h-10 w-15"/>
          </div>
        </Link>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 rounded transition hover:bg-amber-400 flex items-center ${
                location.pathname === item.path
                  ? "bg-amber-500 text-white"
                  : honeyTextColor
              }`}
            >
              <span className="mr-2">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="fixed inset-0 bg-amber-100 z-40 md:hidden"
          >
            {/* Close Button at the Top */}
            <div className="absolute top-4 right-4">
              <button
                onClick={closeMenu}
                className="flex items-center space-x-2 text-amber-900 hover:text-amber-700 focus:outline-none"
              >
                <X className="w-6 h-6" />
                <span className="font-semibold">Close</span>
              </button>
            </div>

            <div className="flex flex-col items-start justify-center h-full space-y-6">
              {navItems.map((item) => (
                <div key={item.path} className="w-full flex justify-center">
                  <Link
                    to={item.path}
                    onClick={closeMenu}
                    className={`text-3xl font-bold flex items-center ${
                      location.pathname === item.path
                        ? "text-amber-600"
                        : honeyTextColor
                    }`}
                  >
                    <span className="mr-4 text-4xl">{item.icon}</span>
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
});

// Ensure component has a display name for debugging
Navigation.displayName = "Navigation";
