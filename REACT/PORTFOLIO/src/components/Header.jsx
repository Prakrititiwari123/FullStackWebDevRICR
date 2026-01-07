import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <>
    <motion.nav 
    initial={{ y:-50, opacity:0, backdropFilter:"blur(0px)"}}
    animate={{y:0, opacity:1, backdropFilter:"blur(20px)"}}
    transition={{
      duration: 0.6,
      ease: "easeInOut"
    }
    } 
    className='fixed w-full z-50 shadow-xl bg-white/10 dark:bg-black/10'
    >

    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>

    </div>

    </motion.nav>
    
    </>
  )
}

export default Header