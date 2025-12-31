import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Home = () => {
  return (
    <>
    <div className=' m-6 p-28 '>
      <h1 className=' text-6xl'>Glow brighter every <br /> day with cosmetics <br /> that best in you</h1>
      <p className=' text-3xl'>Elevate your beauty with luxurious cosmetics <br /> crafted to celebrate your natural charm.</p>
      
      <div className=' text-xl'><button>View Collections <GoArrowUpRight /></button></div>
    </div>
    </>
  )
}

export default Home