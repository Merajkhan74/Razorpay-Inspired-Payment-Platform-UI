import React from 'react'
import core_icons from '../assets/image-icons/instant-activation-icon.svg'
import core_icons2 from '../assets/image-icons/easy-integration.svg'
import core_icons3 from '../assets/image-icons/api-driven-icon.svg'
import core_icons4 from '../assets/image-icons/bank.svg'
import core_icons5 from '../assets/image-icons/simple-pricing.svg'
import core_icons6 from '../assets/image-icons/industry-support-icon.svg'
import core_icons7 from '../assets/image-icons/dashboard-reporting-icon.svg'
import core_icons8 from '../assets/image-icons/secure-icon.svg'
const CoreFeatures = () => {
  return (
    <div>
    <section className='bg-[url(./assets/image-icons/core-features-sectionBg.svg)] bg-no-repeat bg-cover w-full relative bg-center coreFuture bg-white '>
  <div className='w-11/12  max-w-[900px] mx-auto pt-4 mt-20'>
    <h2 className='font-family font-bold text-2xl text-white  mx-auto text-center'>Features</h2>
    <div className=' w-6 h-1 bg-green-700 items-center mx-auto mt-4 mb-6'></div>
     <p className='font-family text-center text-white max-w-[450px] mx-auto '>Empower your business with all the right tools to accept online payments and provide the best customer experience</p>
     
     {/* grid  */}
     <div className=' grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4  gap-[3rem] mt-8'>
     {/* car 1 create  */}
        <div>
          <img src={core_icons} alt="" className='h-9 w-10'/>
           <h3 className='font-family font-bold text-lg text-white py-4'>Instant Activation</h3>
          <p className='font-family text-white opacity-70 text-[14px]'>Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation.</p>
        </div>

        {/* card 2  */}
        <div >
          <img src={core_icons2} alt="" className='h-9 w-10'/>
           <h3 className='font-family font-bold text-lg text-white py-4'>Easy Integration</h3>
          <p className='font-family text-white opacity-70 text-[15px]'>With plugins for all major platforms and languages, integrate and go live with Razorpay in less than an hour..</p>
        </div>
        {/* card 3  */}
        <div >
          <img src={core_icons3} alt="" className='h-9 w-10'/>
           <h3 className='font-family font-bold text-lg text-white py-4'>API Driven</h3>
          <p className='font-family text-white opacity-70 text-[15px]'>Build your business for scale with our complete API-driven automation that requires zero manual intervention..</p>
        </div>
        {/* card 4  */}
        <div >
          <img src={core_icons4} alt="" className='h-9 w-10'/>
           <h3 className='font-family font-bold text-lg text-white py-4'>100+ payment modes</h3>
          <p className='font-family text-white opacity-70 text-[15px]'>Offer your customers the luxury of all payment modes including Credit/Debit cards, Netbanking, UPI, Wallets etc..</p>
        </div>
        {/* card 5  */}
        <div >
          <img src={core_icons5} alt="" className='h-9 w-10'/>
           <h3 className='font-family font-bold text-lg text-white py-4'>Simple Pricing</h3>
          <p className='font-family text-white opacity-70 text-[15px]'>Our innovative payment solutions with competitive pricing make payments simpler.</p>
        </div>
        {/* card 6  */}
        <div >
          <img src={core_icons6} alt=""className='h-9 w-10' />
           <h3 className='font-family font-bold text-lg text-white py-4'>Best in Industry Support</h3>
          <p className='font-family text-white opacity-70 text-[15px]'>Always available email, phone and chat based support to help you in your every step..</p>
        </div>
        {/* card 7  */}
        <div >
          <img src={core_icons7} alt=""className='h-9 w-10' />
           <h3 className='font-family font-bold text-lg text-white py-4'>Dashboard Reporting</h3>
          <p className='font-family text-white opacity-70 text-[15px]'>Always available email, phone and chat based support to help you in your every step..</p>
        </div>
        {/* card 8  */}
        <div >
          <img src={core_icons8} alt="" className='h-9 w-10'/>
           <h3 className='font-family font-bold text-lg text-white py-4'>Secure</h3>
          <p className='font-family text-white opacity-70 text-[15px] '>PCI DSS Level 1 compliant solution which removes your burden of regulatory compliance.</p>
        </div>
    </div>

  </div>
  
</section>
    </div>
  )
}

export default CoreFeatures
