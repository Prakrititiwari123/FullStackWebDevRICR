import React from "react";
import { motion } from "framer-motion";
import { projects } from "../assets/assets";
import { FaArrowRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

const Work = () => {
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

  const linkVariants = {
    hover: { x: 6, transition: { type: "spring", stiffness: 300 } },
  };

  const buttonVariants = {
    hover: { scale: 1.06, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <section id="work" className="py-16 md:py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-12 md:mb-16"
        >
          <span className=" inline-block px-4 py-2 glass dark:glass rounded-full text-neo-secondary font-medium mb-4">
            SELECTED WORK
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Innovative Projects</span>
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">
            Cutting-edge digital experiences that push boundaries and deliver
            results.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <motion.div
            variants={cardVariants}
            whileHover={{scale:1.03}}
              key={project.id}
              className="group relative h-80 md:h-96 rounded-2xl md:rounded-3xl overflow-hidden glass dark:glass transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-linear-to-br from-black/70 dark:from-black/70 to-neo-${project.color}/30 z-10`}>
              </div>
              <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={{scale:1.12}}
              transition={{duration:0.6}}
              />

              <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-8 transition-all duration-500 group-hover:pb-10 md:group-hover:pb-12">
                <span className={`inline-block px-3 py-1 border border-white text-sm font-bold rounded-full mb-3`}>{project.category}</span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/80 mb-3 md:mb-4 text-sm md:text-base ">{project.description}</p>
                <motion.a href={project.link}
                variants={linkVariants}
                whileHover="hover"
                className="inline-flex items-center text-neo-secondary font-medium"
                >
                  View Case Study
                  <FaArrowRight className="ml-2"/>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>


        <motion.div
        initial={{opacity:0, y:40}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6, delay:0.2}}
        viewport={{once:false}}
        className="text-center mt-12 md:mt-16"
        >
          <motion.a
          href="#"
          variants={buttonVariants}
          whileHover="hover"
          className="inline-flex items-center px-8 py-4 rounded-full glass dark:glass border border-neo-primary/30 hover:border-neo-primary/60 font-bold transition-all duration-300"
          >
            <span>View All Projects</span>
            <FaChevronDown className="ml-3"/>
          </motion.a>

        </motion.div>


      </div>
    </section>
  );
};

export default Work;
