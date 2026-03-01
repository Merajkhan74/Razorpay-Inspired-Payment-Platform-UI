import React from 'react'
import hero from '../assets/image-icons/hero-illustration.jpg'

import hreoShape from "../assets/image-icons/hero-shape2.svg"
const Hero = () => {
  return (
    <div>
    <section className='relative bg-deepBlue  '>

    <div className=' w-10/13 flex flex-col lg:flex-row items-center  max-w-[1080px] justify-between mx-auto  ' >
    
      <div className='space-y-6' >
          {/* left text content  */}
          <h1 className='text-white font-bold text-[20px] leading-[1.2] font-family pt-2'>
         Power Your Finance , Grow your Business </h1>

          <div className='w-6 h-1 bg-green-300 '>
          </div>

            <p className=' flex font-family text-[15px] text-white leading-7 opacity-70'>Accept Payment form Customer. Automate Payouts to vendors & Employee . Naver Run out of working capital </p>
       
            <button className=' border text-white font-family font-bold rounded-md 
             hover:bg-lightBlue500 transition-all duration-200  px-[8px] h-9 w-[125px]'> Sign Up Now </ button>
      </div>

        {/* right image container  */}
        <img src={hero} alt="" className=' w-[500px] max-w-[500px] pr-[3rem] pl-[2rem] ' />
  
    </div>
       {/* shape hero  footer part  */}
      <div className=' absolute left-0 right-0 w-full'>
        {/* <img src={heroShape1} alt="" className='' /> */}
          <img src={hreoShape} alt="shape hero " className='w-full items-center justify-center h-full  bg-white' />
      </div>
   </section>
    </div>
  )
}

export default Hero
