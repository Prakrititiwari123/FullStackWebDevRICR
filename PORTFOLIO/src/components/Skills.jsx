import React from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/assets";

const Skills = () => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <div id="skills" className="py-16 md:py-20 relative z-10">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-12 md:mb-16"
        >
          <span className=" inline-block px-4 py-2 glass dark:glass rounded-full text-neo-secondary font-medium mb-4">
            TECHNICAL EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">My Skills</span>
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam,
            nisi.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              key={skill.id}
              className="p-4 md:p-6 rounded glass dark:glass border border-neo-primary/20 hover:border-neo-primary/50 transition-all duration-300 group text-center"
            >
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                className="w-12 h-12 md:w-16 mx-auto mb-3 md:mb-4 flex items-center justify-center bg-neo-primary/10 rounded-lg md:rounded-xl transition-colors duration-300"
              >
                <skill.icon className="w-8 h-8 text-neo-primary" />
              </motion.div>
              <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
                {skill.title}
              </h3>
              <p className="text-xs md:text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
