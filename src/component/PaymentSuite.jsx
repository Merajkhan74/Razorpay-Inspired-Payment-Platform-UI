import React from "react";
import dottedrows from "../assets/image-icons/feature-section1-dottedrows.png";
import arrow from "../assets/image-icons/arrow_forward.png";
import Payment from "../assets/image-icons/payment-suite.png";
import payment_icons from "../assets/image-icons/payment-link-icon (1).svg";
import payment_icons2 from "../assets/image-icons/payment-pages-icon.svg";
import payment_icons3 from "../assets/image-icons/payment-buttons-icon.svg";
import payment_icons4 from "../assets/image-icons/subscriptions-icon.svg";
import payment_icons5 from "../assets/image-icons/route-icon.svg";
import payment_icons6 from "../assets/image-icons/smart-collect-icon.svg";
const PaymentSuite = () => {
  return (
    <section className="relative  overflow-hidden bg-white  mt-[150px] ">
    {/* <section className="relative overflow-hidden bg-white mt-10 "> */}
      <img
        src={dottedrows}
        alt=""
        loading="lazy"
        height={10}
        width={230}
        className="absolute -top-[20rem] left-[10px] right-[3rem]  inline-block -z-10 bottom-0  "
      />

      <img
        src={dottedrows}
        alt=""
        loading="lazy"
        height={10}
        width={180}
        className="absolute -top-[3rem] right-0 inline-block rotate-180 mt-0"
      />

      <div className="relative w-11/12 max-w-[1080px] pt-4 mx-auto   ">
        {/* heading  */}
        <h1 className=" font-family text-[18px] text-center text-black  font-bold leading[1.1]  hidden md:block ">
          Accept Payment with Razorpay Payment suite
        </h1>
        <h1 className=" font-family text-2xl text-center  font-bold leading[1.1]  md:hidden">
          Explore Razorpay Payment suite
        </h1>
        <div className="h-1 w-6 bg-green-400 items-center mx-auto mt-4 mb-6 "></div>

        {/* content box  */}
        <div className="flex max-w-[800px]  mx-auto bg-white relative p-5 py-6 rounded-md border ">
          {/* left box */}
          <div className="flex flex-col  justify-between border   w-full ">
            <h3 className=" font-family leading-7  font-bold text-[20px]  -bottom-5  h-25 text-black">
              {" "}
              Supercharge your business with the all - <br /> Powerful{" "}
              <span className="text-lightBlue">Payment Geteway</span>
            </h3>
            <ul className="space-y-2  leading-5 text-[15px]   text-black">
              <li className="font-family flex items-center space-x-2">
                <span> &#9989; 100+ Payment Methods </span>
              </li>
              <li className="font-family flex items-center space-x-2">
                <span>&#9989; Industry Leading Success Rate </span>
              </li>
              <li className="font-family flex items-center space-x-2">
                <span> &#9989; Superior checkout Exprience </span>
              </li>
              <li className="font-family flex items-center space-x-2">
                <span> &#9989; Easy to Integrate</span>
              </li>
              <li className="font-family flex items-center space-x-2">
                <span> &#9989;Instant settlements from day 1</span>
              </li>
              <li className="font-family flex items-center space-x-2">
                <span> &#9989; In-depth Reporting and Insights </span>
              </li>
            </ul>

            <div className="flex flex-col-reverse md:flex-row items-center space-x-3 mt-6 relative">
              <button
                className=" py-2 px-3 w-full md:w-fit  font-bold border rounded font-family text-white flex items-center justify-center
       bg-lightBlue300 hover:text-blue-500 transition-all duration-200 bg "
              >
                SingUp <img src={arrow} alt="" />{" "}
              </button>

              {/* hyper link  */}
              <div className="felx self-start md:self-center  cursor-pointer group">
                <a
                  href="#"
                  className="  font-family font-bold text-lightBlue  group-hover:text-grayBlue  transition-all duration-200 w-15 h-10"
                >
                  Know More &#10095;
                </a>
              </div>
            </div>
          </div>
          <img
            src={Payment}
            alt=""
            className="absolute max-w-[450px]  top-0  right-0 bottom-0  mt-8  pr-9  object-contain  hidden  md:max-w-[400px] lg:max-w-[450px] md:block lg:block "
          />
        </div>

        {/* box  section */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 mt-6 max-w-[800px] mx-auto ">
          {/* box 1 */}
          <div className="  cursor-pointer relative mx-auto ">
            {/* box-shape  */}
            <div class="relative w-auto bg-white rounded-2xl shadow-md p-3  hover:bg-deepwhite transition-all duration-200 hover:scale-105 ">
              <img
                src={payment_icons}
                alt=""
                className="bg-lightBlue absolute right-3 top-3 w- h-9 rounded-full z-[8] transition-all duration-200 "
              />

              <div className="z-[100] relative  w-full h-full flex flex-col justify-between pl-2 py-3 pr-4  ">
                {/* text container  */}
                <div className="pt-4 ">
                  {/* text area  */}
                  <h3 className=" font-family font-bold text-deepBlueHead h-7 -pt-6 leading-[1.2]">
                    Payments Links{" "}
                  </h3>

                  <p className="text-gray-700 font-family text-[15px] ">
                    Share Payment link via an email , SMS, Message chatbot etc
                    and get paid immediately
                  </p>
                </div>
              </div>
              <div className="felx items-center cursor-pointer group">
                <a
                  href="#"
                  className="  font-family font-bold text-lightBlue  group-hover:text-grayBlue  transition-all duration-200 w-15 h-10 pl-5"
                >
                  Know More &#10095;
                </a>
              </div>
            </div>

            {/* </div> */}
          </div>

          {/* box 2  */}
          <div className="  cursor-pointer relative mx-auto">
            {/* box-shape  */}
            <div class="relative w-auto bg-white rounded-2xl shadow-md p-3 hover:bg-deepwhite transition-all duration-200 hover:scale-105  ">
              <img
                src={payment_icons2}
                alt=""
                className="bg-lightBlue absolute right-3 top-3 w- h-9 rounded-full  z-[8] transition-all duration-200"
              />

              <div className="z-[100] relative  w-full h-full flex flex-col justify-between pl-2 py-3 pr-4  ">
                {/* text container  */}
                <div>
                  {/* text area  */}
                  <h3 className=" font-family font-bold text-deepBlueHead h-7 leading-[1.2]">
                    Payments Page{" "}
                  </h3>

                  <p className="text-gray-700 font-family text-[15px] h-auto ">
                    Take your store online instantly with zero coding. Accept
                    international & domestic payments
                  </p>
                </div>
              </div>
              <div className="felx items-center cursor-pointer group  ">
                <a
                  href="#"
                  className="  font-family font-bold text-lightBlue  group-hover:text-grayBlue  transition-all duration-200 w-15 h-10  pl-5 "
                >
                  Know More &#10095;
                </a>
              </div>
            </div>
          </div>

          {/* box 3 */}

          <div className="  cursor-pointer relative mx-auto">
            {/* box-shape  */}
            <div class="relative w-auto bg-white rounded-2xl shadow-md p-3 hover:bg-deepwhite transition-all duration-200 hover:scale-105 ">
              <img
                src={payment_icons3}
                alt=""
                className="bg-lightBlue absolute right-3 top-3 w- h-9 rounded-full z-[8] transition-all duration-200"
              />

              <div className="z-[100] relative  w-full h-full flex flex-col justify-between pl-2 py-3 pr-4 ">
                {/* text container  */}
                <div>
                  {/* text area  */}
                  <h3 className=" font-family font-bold text-deepBlueHead h-7 leading-[1.2]">
                    Payments Buttons{" "}
                  </h3>

                  <p className="text-gray-700 font-family text-[15px] -mt-1">
                    Create, Copy & Collect With Payment Button. Collect one time
                    or subscription payments & more
                  </p>
                </div>
              </div>
              <div className="felx items-center cursor-pointer group">
                <a
                  href="#"
                  className="  font-family font-bold text-lightBlue  group-hover:text-grayBlue  transition-all duration-200 w-15 h-10 pl-5"
                >
                  Know More &#10095;
                </a>
              </div>
            </div>

            {/* box no 4 */}
          </div>

          <div className="  cursor-pointer relative mx-auto">
            {/* box-shape  */}
            <div class="relative w-auto bg-white rounded-2xl shadow-md p-3 hover:bg-deepwhite transition-all duration-200 hover:scale-105 ">
              <img
                src={payment_icons4}
                alt=""
                className="bg-lightBlue absolute right-3 top-3 w- h-9 rounded-full z-[8] transition-all duration-200"
              />

              <div className="z-[100] relative  w-full h-full flex flex-col justify-between pl-2 py-3 pr-4 ">
                {/* text container  */}
                <div>
                  {/* text area  */}
                  <h3 className=" font-family font-bold text-deepBlueHead h-7 leading-[1.2]">
                    subscriptions{" "}
                  </h3>

                  <p className="text-gray-700 font-family text-[15px] ">
                    Subscription plans with automated recurring transactions on
                    various payment modes.
                  </p>
                </div>
              </div>
              <div className="felx items-center cursor-pointer group">
                <a
                  href="#"
                  className="  font-family font-bold text-lightBlue  group-hover:text-grayBlue  transition-all duration-200 w-15 h-10 pl-5"
                >
                  Know More &#10095;
                </a>
              </div>
            </div>
          </div>
          {/* box no 5  */}

          <div className="  cursor-pointer relative mx-auto">
            {/* box-shape  */}
            <div class="relative w-auto bg-white rounded-2xl shadow-md p-3 hover:bg-deepwhite transition-all duration-200 hover:scale-105 ">
              <img
                src={payment_icons5}
                alt=""
                className="bg-lightBlue absolute right-3 top-3 w- h-9 rounded-full z-[8] transition-all duration-200"
              />

              <div className="z-[100] relative  w-full h-full flex flex-col justify-between pl-2 py-3 pr-4 ">
                {/* text container  */}
                <div>
                  {/* text area  */}
                  <h3 className=" font-family font-bold text-deepBlueHead h-7 leading-[1.2]">
                    Route{" "}
                  </h3>

                  <p className="text-gray-700 font-family text-[15px]  ">
                    Split incoming payments auto- matically to vendor's
                    accounts, manage marketplace money flow
                  </p>
                </div>
              </div>
              <div className="felx items-center cursor-pointer group">
                <a
                  href="#"
                  className="  font-family font-bold text-lightBlue  group-hover:text-grayBlue  transition-all duration-200 w-15 h-10 pl-5"
                >
                  Know More &#10095;
                </a>
              </div>
            </div>
          </div>
          {/* box number 6  */}
          <div className="  cursor-pointer relative mx-auto">
            {/* box-shape  */}
            <div class="relative w-auto bg-white rounded-2xl shadow-md p-3 hover:bg-deepwhite transition-all duration-200 hover:scale-105 ">
              <img
                src={payment_icons6}
                alt=""
                className="bg-lightBlue absolute right-3 top-3 w- h-9 rounded-full z-[100] transition-all duration-200"
              />

              <div className="z-[100] relative  w-full h-full flex flex-col justify-between pl-2 py-3 pr-4 ">
                {/* text container  */}
                <div>
                  {/* text area  */}
                  <h3 className=" font-family font-bold text-deepBlueHead h-7 leading-[1.2]">
                    Smart collect{" "}
                  </h3>

                  <p className="text-gray-700 font-family text-[15px] ">
                    Automatically reconcile incoming NEFT, RTGS, IMPS, UPI
                    payments using Virtual Accounts & UPI-IDs
                  </p>
                </div>
              </div>
              <div className="felx items-center cursor-pointer group ">
                <a
                  href="#"
                  className="  font-family font-bold text-lightBlue  group-hover:text-grayBlue  transition-all duration-200 w-15 h-10 pl-5"
                >
                  Know More &#10095;
                </a>
              </div>
            </div>

            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSuite;
