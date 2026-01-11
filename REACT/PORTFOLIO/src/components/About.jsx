import React from "react";
import Lottie from "react-lottie-player";
import { motion } from "framer-motion";
import lottieJson from "../lottie.json";

const About = () => {
  return (
    <div id="about" className="py-16 md:py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
        initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount:0.2 }}
        
        className=" flex flex-col lg:flex-row gap-8 md:gap-12 items-center">

          <motion.div
            className="lg:w-1/2"
            variants={{
              hidden: { opacity: 0, x: -50 },
              show: { opacity: 1, transition: { duration: 0.8 } },
            }}
          >
            <div className=" holographic rounded-2xl md:rounded-3xl overflow-hidden p-6 md:-8 glass dark:glass border border-neo-primary/20">
              <div className="relative aspect-square">
                <Lottie
                  className="bg-transparent"
                  loop
                  animationData={lottieJson}
                  play
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            variants={{
              hidden: { opacity: 0, x:50 },
              show: { opacity: 1, transition: { duration: 0.8 } },
            }}
          >
            <span className=" inline-block px-4 py-2 glass dark:glass rounded-full text-neo-secondary font-medium mb-4" >MY JOURNEY</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
            <p className="text-lg md:text-xl mb-4 md:mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptate adipisci architecto aliquid nam doloremque at a quibusdam, recusandae natus?</p>
            <p className="text-lg md:text-xl mb-6 md:mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat suscipit sequi iste quasi? Lorem ipsum dolor sit amet consectetur.</p>
            <p className="text-lg md:text-xl mb-4 md:mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptate adipisci architecto aliquid nam doloremque at a quibusdam, recusandae natus?</p>
            <p className="text-lg md:text-xl mb-6 md:mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat suscipit sequi iste quasi? Lorem ipsum dolor sit amet consectetur.</p>


          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default About;
