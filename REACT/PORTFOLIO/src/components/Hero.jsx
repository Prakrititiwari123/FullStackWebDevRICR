import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id='home' className='min-h-screen relative z-10 flex items-center pt-16'>
      <div className=' max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          <div className='order-2 lg:order-1 text-center lg:text-left'>
            <motion.span
            initial={{ opacity:0, y:20}}
            whileInView={{ opacity:1, y:0}}
            transition={{ duration: 0.8}}
            viewport={{ once:false, amount:0.3}}

            
            className=' inline-block px-4 py-2 glass dark:glass rounded-full text-neo-secondary font-medium mb-4'>
              FUTURE-FOCUSED DESIGNER
            </motion.span>
            <motion.h1
            initial={{ opacity:0, y:40}}
            whileInView={{ opacity:1, y:0}}
            transition={{duration:0.8}}
            viewport={{once:false,amount:0.3}}
            
            className='text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6'>
            <span className=' gradient-text'>Crafting Digital</span>
            <span className=' block'>Experiences</span>
            </motion.h1>

            <motion.p
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{delay: 0.2, duration:0.8}}
            viewport={{once:false, amount:0.3}}
            className=' text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-8'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, reprehenderit.
            </motion.p>


            <motion.div>
              <motion.a>
                View My Work
              </motion.a>
            </motion.div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Hero