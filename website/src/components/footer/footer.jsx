import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Leaf,
  Shield,
  Award,
} from "lucide-react";

// Reuse the Honey Palette from Previous Components
const honeyPalette = {
  background: "bg-gradient-to-br from-amber-50 to-yellow-100",
  textPrimary: "text-amber-900",
  textSecondary: "text-amber-700",
  cardBackground: "bg-white/40",
  buttonPrimary: "bg-amber-500 hover:bg-amber-600",
  buttonSecondary:
    "border-2 border-amber-700 text-amber-900 hover:bg-amber-100",
};

export const Footer = () => {
  const footerLinks = [
    {
      title: "Explore",
      links: [
        { name: "Home", href: "/" },
        { name: "Our Story", href: "/about" },
        { name: "Honey Collection", href: "/honey" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "FAQ", href: "/faq" },
        { name: "Shipping", href: "/shipping" },
        { name: "Returns", href: "/returns" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
  ];

  return (
    <footer className={`bg-amber-200  py-16`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-6">
              <img src="/ohlogo.png" alt="" className="h-10 w-15"/>
              <h3 className={`text-2xl font-bold ${honeyPalette.textPrimary}`}>
              </h3>
            </div>
            <p className={`${honeyPalette.textSecondary} mb-4`}>
              Crafting pure, sustainable honey while preserving mountain
              ecosystems.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin
                  className={`mr-2 ${honeyPalette.textPrimary}`}
                  size={20}
                />
                <span className={honeyPalette.textSecondary}>
                  401/6 Mavhonde road, Cranborne Ave W, Harare
                </span>
              </div>
              <div className="flex items-center">
                <Phone
                  className={`mr-2 ${honeyPalette.textPrimary}`}
                  size={20}
                />
                <span className={honeyPalette.textSecondary}>
                  +263 77 963 8318
                </span>
              </div>
              <div className="flex items-center">
                <Mail
                  className={`mr-2 ${honeyPalette.textPrimary}`}
                  size={20}
                />
                <span className={honeyPalette.textSecondary}>
                  hello@organichoney.com
                </span>
              </div>
            </div>
          </div>

          {/* Footer Navigation */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4
                className={`text-xl font-semibold mb-4 ${honeyPalette.textPrimary}`}
              >
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`${honeyPalette.textSecondary} hover:text-amber-600 transition`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter and Social */}
          <div>
            <h4
              className={`text-xl font-semibold mb-4 ${honeyPalette.textPrimary}`}
            >
              Stay Connected
            </h4>
            <div className="mb-4">
              <p className={`${honeyPalette.textSecondary} mb-2`}>
                Subscribe to our newsletter for honey updates and conservation
                news.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full p-2 rounded-l-lg border border-amber-300 focus:outline-amber-500"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${honeyPalette.buttonPrimary} text-white px-4 rounded-r-lg`}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2 }}
                  className={`${honeyPalette.textPrimary} hover:text-amber-600`}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-amber-200 mt-8 pt-6 text-center">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <Shield className={`${honeyPalette.textPrimary}`} size={24} />
            <Award className={`${honeyPalette.textPrimary}`} size={24} />
            <Heart className={`${honeyPalette.textPrimary}`} size={24} />
          </div>
          <p className={`${honeyPalette.textSecondary} text-sm`}>
            © 2024 Organic Honey Co. All Rights Reserved.
          </p>
          <div className="mt-2 space-x-4">
            <a
              href="/privacy"
              className={`${honeyPalette.textSecondary} text-sm hover:text-amber-600`}
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className={`${honeyPalette.textSecondary} text-sm hover:text-amber-600`}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
