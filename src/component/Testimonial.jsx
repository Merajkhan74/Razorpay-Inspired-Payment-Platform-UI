import React from "react";
import arrow_forward from "../assets/image-icons/arrow-right.png";
import dottedrows from "../assets/image-icons/feature-section1-dottedrows.png";

import tesimonial from "../assets/image-icons/testimonial.jpg";
import quotest from "../assets/image-icons/quotes.svg";
import fake_Company from "../assets/image-icons/fake-company-logo.png";
const Testimonial = () => {
  return (
    <section className="relative bg-white text-black ">
      <div className="w-11/12 max-w-[1000px] relative mx-auto pt-3 ">
        <img
          src={dottedrows}
          alt=""
          className=" absolute w-[200px] -top-[4rem] left-[2rem] -z-10"
        />
        <h2 className="font-bold font-family text-lg text-center  text-deepBlue">
          {" "}
          An Experience <br /> People Love to Talk About{" "}
        </h2>
        <div className="h-1 w-6 bg-green-700 mx-auto my-4"></div>

        {/* left button  */}
        <button className="w-[90px] h-[90px] bg-[#f4f8ff] rounded-full  absolute left-0 top-1/2 flex items-center justify-center ">
          <div className="w-[60%] h-[60%] bg-[#f4f8ff] rounded-full   left-0 top-1/2 flex items-center justify-center mix-blend-multiply">
            <img
              src={arrow_forward}
              alt=""
              className=" items-center  opacity-50"
            />
          </div>
        </button>

        {/* right buttion  */}
        <button className="w-[90px] h-[90px] bg-[#f4f8ff] rounded-full  absolute right-0 top-1/2 flex items-center justify-center ">
          <div className="w-[60%] h-[60%] bg-[#f4f8ff] rounded-full   left-0 top-1/2 flex items-center justify-center mix-blend-multiply">
            <img
              src={arrow_forward}
              alt=""
              className=" items-center  opacity-50"
            />
          </div>
        </button>

        {/* content section  */}
        <div className="flex flex-col lg:flex-row max-w-[960px] items-center mx-auto my-2 justify-evenly">
          {/* left part  */}
          <img
            src={tesimonial}
            alt=""
            loading="lazy"
            className="w-[270px] h-[270px] rounded-xl "
          />

          {/* right part  */}
          <div className="max-w-[350px] flex flex-col   ">
            <img
              src={quotest}
              alt=""
              className="w-[35px] h-[40px] -mb-2 max-2xl:-order-1"
            />
            <p className="font-family text-2xl  font-extralight opacity-90 xl:order-1">
              {" "}
              Readymade Closed Wallet Solution For Quick Refunds
            </p>
            <a href="#" className="text-gray-500 underline italic xl:order-1">
              Learn More
            </a>
            <h3 className="font-family font-extrabold  text-2xl  max-md:-order-1  ">
              Lorem Ipsum
            </h3>
            <p className="font-family  font-medium xl:order-1">
              CEO, XYZ Engineering Company
            </p>
            <img
              src={fake_Company}
              alt=""
              className="w-[80px] h-[40px] xl:order-1 bg-white"
            />
          </div>
        </div>

        {/* 6 dot wala section  */}
        <div className="flex flex-row mx-auto space-x-2.5 justify-center ">
          {/* dot 1 */}
          <div className="h-[10px] w-[10px] bg-gray-300 rounded-full "> </div>
          {/* dot 2 */}
          <div className="h-[10px] w-[10px] bg-lightBlue rounded-full "> </div>
          {/* dot 3 */}
          <div className="h-[10px] w-[10px] bg-gray-300 rounded-full "> </div>
          {/* dot 4 */}
          <div className="h-[10px] w-[10px] bg-gray-300 rounded-full "> </div>
          {/* dot 5 */}
          <div className="h-[10px] w-[10px] bg-gray-300 rounded-full "> </div>
          {/* dot 6 */}
          <div className="h-[10px] w-[10px] bg-gray-300 rounded-full "> </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
