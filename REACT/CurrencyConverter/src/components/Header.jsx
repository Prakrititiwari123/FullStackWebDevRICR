import React from 'react'
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { HiCurrencyRupee } from "react-icons/hi2";
import { HiCurrencyPound } from "react-icons/hi2";
import { HiCurrencyEuro } from "react-icons/hi2";

const Header = () => {
  return (
    <>
    <div className='bg-blue-500 px-4 py-2 text-white text-center flex items-center text-3xl '>
    <HiMiniCurrencyDollar className='animate-bounce'/>
    <HiCurrencyRupee className='animate-bounce'/>
    <span className='font-bold'>Currecy converter</span>
    <HiCurrencyPound className='animate-bounce' />
    <HiCurrencyEuro className='animate-bounce' />
    </div>
    
    
    </>
  )
}

export default Header