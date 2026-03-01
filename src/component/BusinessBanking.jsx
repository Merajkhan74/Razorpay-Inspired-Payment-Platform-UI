import React from 'react'

import arrow from '../assets/image-icons/arrow_forward.png'
import xframe from '../assets/image-icons/x-flame-1.png'
import xframe2 from '../assets/image-icons/x-flame-2.png'
import buisness from '../assets/image-icons/buisness-banking.png'
import bankimage from '../assets/image-icons/bank-icon.svg'
import fimage from '../assets/image-icons/capital-credit-icon.svg'
import fimage2 from '../assets/image-icons/payouts-icon.svg'
import logo from '../assets/image-icons/razorpayX.svg'

const BusinessBanking= () => {
  return (
     <section 
    className="bg-[url(./assets/image-icons/feature-section-2BG.svg)] bg-no-repeat bg-cover pb-[270px]  pt-16 bg-white" >
      <div className='w-11/12 max-w-[1080px] mx-auto pt-4 relative '>

        <h2 className='font-family text-2xl leading-[2] font-bold text-white text-center '> Explore Razorpay Business Banking  </h2>
        <div className='h-1 w-6 bg-green-700  mx-auto mt-4 mb-5 '></div>

 {/* main future box  */}
        

        {/* --------------------------- */}
         <div id="futureBox2" className='flex  max-w-[900px]  mx-auto relative p-5 py-6 border-red-300 rounded-md h-full  '>
        {/* left box */}
        <div className='flex flex-col justify-between relative w-[500px] gap-12 '>
              <img src={xframe} alt="" loading='lazy' className='absolute -top-[120px] -left-[140px] w-[120px]  '  />
             <img src={xframe2} alt="" loading='lazy' className='absolute top-[140px] -right-[500px] w-[122px] z-0'  />
            {/* left side  */}
             <h3 className=' text-[20px] text-white font-family font-bold'>Manage your company's finances with <img src={logo} alt="" loading='lazy' width={150} height={32}  className='inline'/><span className='text-lightBlue'> Business Banking </span></h3>


             <ul className='space-y-3  leading-5 text-[15px]  text-white mt-4   '>
                 <li className='font-family flex items-center space-x-2'>
                  <span> &#9989; Open a fully digital current account </span>
                  </li>
                 <li className='font-family flex items-center space-x-2'>
                  <span>&#9989; Automate payables & compliment payments </span>
                  </li>
               
                <li className='font-family flex items-center space-x-2'>
                   <span> &#9989; Simplify and track spends with Corporat cards</span>
                   </li>
               
                <li className='font-family flex items-center space-x-2'>
                  <span> &#9989; View financial insights at a glances </span>
                  </li>
             </ul>


        <div className='flex flex-col-reverse md:flex-row items-center space-x-3 mt-6 relative w-full'>
            <button className=' relative py-2 px-3  font-bold border rounded font-family text-white flex items-center md:justify-start
       bg-lightBlue300 hover:text-blue-500 transition-all duration-200 self-stretch md:pr-[50px]  '>SingUp 
       <div className= 'bg-lime-700 w-9 absolute h-[41px] right-2 skew-x-[20deg]'>  <img src={arrow} alt="" className='-skew-x-[20deg] mt-2 ml-1 w-7' /></div>
       </button>

              {/* hyper link  */}
            <div className='felx items-center justify-center self-start md:self-center  cursor-pointer group'>
              <a href="#" className='  font-family font-bold text-white  group-hover:text-lightBlue  transition-all duration-200 w-15 h-10 '>Know More &#10095;</a>
            </div>
        </div>
       </div>
         <img src={buisness} alt=""loading='lazy'  className='absolute max-w-[450px]  right-0 bottom-0  object-contain pr-3  hidden md:max-w-[350px] lg:max-w-[450px] md:block lg:block '/>

    </div>
  </div>
   

{/* footer  box section   */}
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4  max-w-[900px] mx-auto mt-10'>
    {/* start box 1 */}
      <div className='  cursor-pointer relative mx-auto'>
      <div class="relative w-auto  bg-deepBlue rounded-2xl shadow-md p-3  hover:scale-105 transition-all duration-200  ">
      <img src={bankimage} alt=""  className='bg-lightBlue absolute right-3 top-3  h-9 rounded-full z-[8] transition-all duration-200' ></img>
       <div className='z-[100] relative  w-full h-full flex flex-col justify-between pl-2 py-3 pr-4 '>
      {/* text container  */}
     <div className=''>
      {/* text area  */}
       <h3 className=' font-family font-bold text-white h-7 leading-[1.2] text-[20px] '>Current Account  </h3>

        <p className=' font-family text-[15px]  text-white opacity-60  '>Current accounts for fast-growing businesses, supported by the best-in- class technology</p>
     </div>

    </div>
     <div className='felx items-center cursor-pointer group'>
              <a href="#" className='  font-family font-bold text-lightBlue  group-hover:text-grayBlue  transition-all duration-200 w-15 h-10 pl-5'>Know More &#10095;</a>
       </div>
      </div>
      </div>
    {/* end box 1 */}

    {/* box 2 start  */}
   
       <div className='  cursor-pointer relative mx-auto'>
      <div class="relative w-auto bg-deepBlue rounded-2xl shadow-md p-3  hover:scale-105 transition-all duration-200  ">
      <img src={fimage} alt=""  className='bg-lightBlue absolute right-3 top-3 w- h-9 rounded-full z-[8] transition-all duration-200' ></img>
       <div className='z-[100] relative  w-full h-full flex flex-col justify-between pl-2 py-3 pr-4 '>
      {/* text container  */}
     <div>
      {/* text area  */}
       <h3 className=' font-family font-bold  h-7 leading-[1.2]  text-white text-[20px]'>Capital & Credit </h3>

        <p className=' font-family text-[15px] text-white opacity-60 '>Instant additional cash and corporatecards designed for growing businesses</p>
     </div>

    </div>
     <div className='felx items-center cursor-pointer group'>
              <a href="#" className='  font-family font-bold text-lightBlue  group-hover:text-grayBlue  transition-all duration-200 w-15 h-10 pl-5'>Know More &#10095;</a>
       </div>
      </div>
      </div>
      {/* box 3 start  */}
      <div className='  cursor-pointer relative mx-auto '>
      <div class="relative w-auto bg-deepBlue rounded-2xl shadow-md p-3  hover:scale-105 transition-all duration-200 ">
      <img src={fimage2} alt=""  className='bg-lightBlue absolute right-3 top-3 w- h-9 rounded-full z-[8] transition-all duration-200 ' ></img>
       <div className='z-[100] relative  w-full h-full flex flex-col justify-between pl-2 py-3 pr-4 '>
      {/* text container  */}
     <div>
      {/* text area  */}
       <h3 className=' font-family font-bold text-white h-7 leading-[1.2] text-[20px]'>Payouts</h3>

        <p className=' font-family text-[15px] text-white opacity-60  '>Make simple, reliable & secure payouts 
          to bank accounts, UPI IDs or wallets</p>
     </div>

    </div>
     <div className='felx items-center cursor-pointer group'>
              <a href="#" className='  font-family font-bold text-lightBlue  group-hover:text-grayBlue  transition-all duration-200 w-15 h-10 pl-5'>Know More &#10095;</a>
       </div>
      </div>
      </div>
  </div>

    {/* demo section  */}
    <div className=' flex-row justify-evenly items-center mx-auto border w-[900px] border-b-slate-500 mb-24 gap-y-6 p-3  mt-10 relative rounded-md hidden md:flex-col lg:flex-row md:block lg:flex'>
      <p className='font[15px] font-family  text-white '>Check out the live demo to learn how RazorpayX works. 
        <span className='font-bold gap-1 justify-center self-center items-center '>No sign-up required!</span>
      </p>
       <button className=' relative py-2 px-3  font-bold border rounded font-family text-white flex items-center justify-between 
       bg-lightBlue300 hover:text-blue-500 transition-all duration-200  md:pr-[50px] '>Check Out Demo 
       <div className= 'bg-lime-700 w-9 absolute h-[41px] right-2 skew-x-[20deg]'>  <img src={arrow} alt="" className='-skew-x-[20deg] mt-2 ml-1 w-7' /></div>
       </button> 
      
    </div>
    </section>
  )
}

export default BusinessBanking