import React from 'react'
import company from '../assets/image-icons/comanies.png'
const CompaniesSection = () => {
  return (
      <section className='bg-gray-200 relative pt-40 pb-12 -mt-[150px] -z-[100] '>
      <div className=' ralative w-11/12 max-w-[1080px] pt-2 mx-auto flex  flex-col md:flex-row'>
        {/* left part */}
          <div className='flex flex-col justify-center w-full md:max-w-[calc(100%-500px)] pr-5'>
            <h2 className='font-bold text-lg font-family   text-deepBlue'>Join the 50,00,000+ busiresses using Razorpay</h2>
            <div className='bg-green-700 w-6 h-1 '></div>

            <p className='font-family opacity-80 mt-6 text-[15px] text-black'>We make it easier for you to focus on building great products while we work on simplifying your payments. Become one of us by joining thousands of our happy       users and simplify the online payment experience for your customers.</p>

            <p className='font-family opacity-80 mt-6 text-[15px] text-black'>Focus on your business while we handle the complexities of payments for you.</p>
          </div>
          {/* right part */}
      <div className="h-[400px] w-[500px] relative overflow-hidden mx-auto">
      {/* top fade */}
      <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-[#f4f8ff] to-transparent z-10"></div>

      {/* image */}
       <img
         src={company} alt="company logos" width={500}
         className="absolute top-0 left-0 h-auto object-cover companiesList"
        />

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-[#f4f8ff] to-transparent z-10"></div>
    </div>


    </div>
   </section>
  )
}

export default CompaniesSection
