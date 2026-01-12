import React from "react";
import { motion } from "framer-motion";
import { navItems, socialPlatforms } from "../assets/assets";

const Footer = () => {
  return (
    <div className=" py-8 md:py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-xl md:text-2xl font-bold gradient-text cursor-pointer">
              PRAKRITI-PORTFOLIO
            </span>
          </motion.div>
          <div className=" flex flex-wrap justify-center gap-4 md:gap-6">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className=" hover:text-neo-secondary transition-colors duration-300 text-sm md:text-base"
                whileHover={{ scale: 1.1 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
          <div className=" flex gap-3 md:gap-4">
            {socialPlatforms.map((platform, index) => (
              <motion.a
                key={index}
                href={platform.href}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full glass dark:glass flex items-center justify-center text-neo-primary hover:bg-neo-primary/30 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <platform.icon />
              </motion.a>
            ))}
          </div>
        </div>
        <motion.div className="mt-6 md:mt-8 text-center text-xs md:text-sm text-neo-secondary"
        initial={{ opacity: 0}}
            whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
            viewport={{ once: false }}
        >
          @ 2026 The Prakriti-Codes. All Right Reserved.
        </motion.div>


      </div>
    </div>
  );
};

export default Footer;
