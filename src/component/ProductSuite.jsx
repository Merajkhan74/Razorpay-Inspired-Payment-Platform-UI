import React from "react";
import dottedrows from "../assets/image-icons/feature-section1-dottedrows.png";
import X_CROSS from "../assets/image-icons/razorpayXicon.svg";
const ProductSuite = () => {
  return (
    <section className="bg-white relative">
      <div className="relative w-11/12 max-w-[1080px] pt-4 mx-auto text-black  ">
        <img
          src={dottedrows}
          alt=""
          loading="lazy"
          className="absolute w-[233px] left-[300px] -top-[6rem] z-10"
        />
        <img
          src={dottedrows}
          alt=""
          loading="lazy"
          className="absolute w-[233px] right-[3.5rem] -top-[6rem] z-10"
        />

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-y-10 gap-x-4 z-100 relative ">
          {/* item 1  */}
          <div className="relative  flex items-center">
            <h2 className="text-4xl font-bold  font-family text-deepBlue leading-[3.2rem]z-0">
              New in the <span className="text-lightBlue"> Razorpay </span>{" "}
              <br /> Product Suite{" "}
            </h2>
          </div>
          {/* box 1   */}
          <div className=" bg-[url(./assets/image-icons/instant-settlement-bghover.svg)] w-full max-h-[300px] bg-no-repeat cursor-pointer #f2f2f2 hover:scale-105 transition-all duration-200 hover:bg-[url(./assets/image-icons/instant-settlement-bghover.svg)] p-5  ">
            <img src={X_CROSS} alt="" />
            <h3 className="font-family font-bold text-lg pt-4">
              {" "}
              UPI AutoPay{" "}
            </h3>
            <p className="  font-family opacity-70 py-3 text-[15px]">
              Simplify your recurring, international Allow customers to set up
              recurring and team expenses with savings on every spend.
            </p>

            <div className="flex-row cursor-pointer  items-center group">
              <a
                href="#"
                className=" font-family font-bold text-lightBlue500 group-hover:text-lightBlue transition-all duration-200"
              >
                Know More &#10095;
              </a>
            </div>
          </div>

          {/* box 2   */}
          <div className=" bg-[url(./assets/image-icons/instant-settlement-bghover.svg)] w-full max-h-[300px] bg-no-repeat cursor-pointer bg-white hover:scale-105 transition-all duration-200 hover:bg-[url(./assets/image-icons/instant-settlement-bghover.svg)] p-5  text-black">
            <img src={X_CROSS} alt="" />
            <h3 className="relative font-family font-bold text-lg pt-4">
              {" "}
              UPI AutoPay
            </h3>
            <p className="  font-family opacity-70 py-3 text-[15px]">
              {" "}
              Allow customers to set up recurring payments using UPI Apps. .
            </p>

            <div className="flex flex-row cursor-pointer  items-center group">
              <a
                href="#"
                className=" font-family font-bold text-lightBlue500 group-hover:text-lightBlue transition-all duration-200 pt-[3.4rem] "
              >
                Know More &#10095;
              </a>
            </div>
          </div>
          {/* box 3   */}
          <div className=" bg-[url(./assets/image-icons/instant-settlement-bghover.svg)] w-full max-h-[300px] bg-no-repeat cursor-pointer hover:scale-105 transition-all duration-200 hover:bg-[url(./assets/image-icons/instant-settlement-bghover.svg)] p-5  bg-white">
            <img src={X_CROSS} alt="" />
            <h3 className="relative font-family font-bold text-lg pt-4">
              {" "}
              Magic Checkout{" "}
            </h3>
            <p className="  font-family opacity-70 py-3 text-[15px]">
              {" "}
              Improve your order conversion rates & reduce return-to-origins.
              Boost your business by 20% .
            </p>

            <div className="flex flex-row cursor-pointer  items-center group">
              <a
                href="#"
                className=" font-family font-bold text-lightBlue500 group-hover:text-lightBlue transition-all duration-200"
              >
                Know More &#10095;
              </a>
            </div>
          </div>
          {/* box 4   */}
          <div className=" bg-[url(./assets/image-icons/instant-settlement-bghover.svg)] w-full max-h-[300px] bg-no-repeat cursor-pointer bg-white hover:scale-105 transition-all duration-200 hover:bg-[url(./assets/image-icons/instant-settlement-bghover.svg)] p-5 ">
            <img src={X_CROSS} alt="" />
            <h3 className="relative font-family font-bold text-lg pt-4">
              {" "}
              Payment Button{" "}
            </h3>
            <p className="  font-family opacity-70 text-[15px] py-3">
              {" "}
              Accept payments on your website, in less than 5 minutes. No
              developer needed..
            </p>

            <div className="flex flex-row cursor-pointer  items-center group">
              <a
                href="#"
                className=" font-family font-bold text-lightBlue500 group-hover:text-lightBlue transition-all duration-200"
              >
                Know More &#10095;
              </a>
            </div>
          </div>
          {/* box 5   */}
          <div className=" bg-[url(./assets/image-icons/instant-settlement-bghover.svg)] w-full max-h-[300px] bg-no-repeat cursor-pointer bg-white hover:scale-105 transition-all duration-200 hover:bg-[url(./assets/image-icons/instant-settlement-bghover.svg)] p-5 ">
            <img src={X_CROSS} alt="" />
            <h3 className="relative font-family font-bold text-lg pt-4">
              {" "}
              Payment Button
            </h3>
            <p className="  font-family opacity-70 text-[15px] py-3">
              Accept payments on your website, in less than 5 minutes. No
              developer needed. .
            </p>

            <div className="flex flex-row cursor-pointer  items-center group">
              <a
                href="#"
                className=" font-family font-bold text-lightBlue500 group-hover:text-lightBlue transition-all duration-200"
              >
                Know More &#10095;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSuite;
