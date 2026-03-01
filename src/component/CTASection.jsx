import React from 'react'
import laptopImage from '../assets/image-icons/ctaImg.svg'
import arrow from '../assets/image-icons/arrow_forward.png'
const CTASection = () => {
  return (
    <section 
    className='bg-[url(./assets/image-icons/CTABg.svg)] bg-no-repeat bg-cover cursor-pointer w-full h-full relative catSection bg-white '>
    <div className='w-11/12 max-w-[1080px] flex flex-row relative  mt-10 justify-center mx-auto'>
     
      {/* left side  */}
      <div className=' flex flex-col gap-5 max-w-[500px]'>

      <h2 className='font-family font-bold text-lg text-white mt-[2rem] '>Supercharge your business with Razorpay</h2>
      <div className='h-1 w-6 bg-green-600 p-1 '></div>
      <p  className='font-family  text-white text-[15px] '>Sign up now to experience the future of payments and offer your customers the best checkout experience.</p>
      <ul className='font-family flex flex-wrap relative gap-6 gap-y-2.5 text-white text-[15px] max-w-[400px'>
        <li> &#9989; Quick Onboarding</li>
        <li> <span>&#9989;</span>Access to entire product suite</li>
       <li> <span>&#9989;</span>API access</li>
        <li> <span>&#9989;</span>24x7 support</li>
      </ul>

      <button className=' py-2 px-3  font-bold border rounded  text-white flex items-center justify-between font-family
       bg-lightBlue300 hover:text-blue-500 transition-all duration-200 place-self-start '>SingUp <img src={arrow} alt="" /> </button>
      {/* right side  */}
    </div>
      <img src={laptopImage} alt="Laptop Image " width={200} height={20} className='mt-[2rem] hidden lg:block'  />
    </div>

  </section>
  
  )
}

export default CTASection
