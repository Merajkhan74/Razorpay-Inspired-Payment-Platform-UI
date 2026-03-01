import React from 'react'
import icons from '../assets/image-icons/logo.svg'
import flag from '../assets/image-icons/india-flag.svg'
import menu from '../assets/image-icons/menu.png'
import arrow from '../assets/image-icons/arrow_forward.png'
// import arrow from '../assets/image-icons/arrow_forward.png'
const Navbar = () => {
  return (
    <div>
      <nav className='bg-deepBlue'>

    <div className='relative  max-w-[1080px] px-8 mx-auto flex items-center justify-between '>
      <a href="#" className='cursor-pointer py-4 pr-7 mx-auto'>
        <img src={icons} alt="logo-image"width={"125px"} height={"30px"}  />
      </a>

    <ul className='flex  space-x-3 font-family text-[15px] '>
    <li className='text-white  py-5 hover:text-lightBlue  cursor-pointer 
    transition:all duration-200 relative group hidden lg:block'>
      <a href="#">Payment</a>
      <div className='absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
      transition-all duration-200'></div>
    </li>

      <li className='text-white  py-5 hover:text-lightBlue  cursor-pointer 
    transition:all duration-200 relative group hidden lg:block'>
      <a href="#">Banking </a>
      <div className='absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
      transition-all duration-200'></div>
    </li>


    <li className='text-white  py-5 hover:text-lightBlue  cursor-pointer 
    transition:all duration-200 relative group hidden lg:block '>
      <a href="#">Payroll </a>
      <div className='absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
      transition-all duration-200'></div>
    </li>
    <li className='text-white  py-5 hover:text-lightBlue  cursor-pointer 
      transition:all duration-200 relative group hidden lg:block '>
      <a href="#">Partners </a>
      <div className='absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
      transition-all duration-200'></div>
    </li>

    <li className='text-white  py-5 hover:text-lightBlue  cursor-pointer 
      transition:all duration-200 relative group hidden lg:block '>
      <a href="#">Partners </a>
      <div className='absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
      transition-all duration-200'></div>
    </li>

    <li className='text-white  py-5 hover:text-lightBlue  cursor-pointer 
      transition:all duration-200 relative group hidden lg:block '>
      <a href="#">Resources </a>
      <div className='absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
      transition-all duration-200'></div>
    </li>

    <li className='text-white  py-5 hover:text-lightBlue  cursor-pointer
       transition:all duration-200 relative group space-x-2 hidden lg:block'>
       <a href="#">
       Pricing </a>
      <div className='absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block
        transition-all duration-200 '>
      </div>
    </li>
    </ul>
<div className='flex space-x-6  fixe mx-auto' >
  <img src={flag} alt="Indian flag " className='hidden lg:block' />

    <button className='py-2 px-4 text-white font-family
       border-lightBlue border rounded text-[15px] font-bold w-2px'>
      <a href="#">Login </a>
     </button>

      <button className=' font-family px-2 font-bold border rounded bg-white    items-center justify-between
       text-lightBlue300 hover:text-blue-500 transition-all duration-200  -right-[10px] text-[15px] hidden lg:flex '>SingUp <img src={arrow} alt=""  height={4} width={15}/>

      </button>
      <img src={menu} alt=""  className='md:flex lg:hidden transition-all duration-200'/>
     </div>


    </div>
  </nav>
    </div>
  )
}

export default Navbar
