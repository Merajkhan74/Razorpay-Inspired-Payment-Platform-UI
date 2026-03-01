import React from "react";
import footerImg from "../assets/image-icons/footer-certificate-1.png";
import footerImg2 from "../assets/image-icons/footer-certificate-2.jpg";
import facebookIcons from "../assets/image-icons/facebook-icon.svg";
import twitterIcons from "../assets/image-icons/twitter-icon.svg";
import instaIcons from "../assets/image-icons/instagram-icon copy.svg";
import githubIcons from "../assets/image-icons/github-icon.svg";
import linkedIcons from "../assets/image-icons/linkedin-icon.svg";
import footer_icons from "../assets/image-icons/logo-dark.svg";
import arrow from "../assets/image-icons/arrow_forward.png";
const Footer = () => {
  return (
    <footer className="bg-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-11/12 max-w-[1080px] relative pr-[2rem] pl-[2rem]   mx-auto  ">
        <div className="mt-[3rem] max-w-[250px] mx-auto ">
          <img src={footer_icons} alt="" className="w-[100px] " />
          <p className="font-family pt-5 pb-4 text-[15px] text-black">
            {" "}
            Razorpay is tHe only payments solution in India that allows
            businesses to accept, process and disburse payments with its product
            suite. It gives you access to all payment modes including credit
            card, debit card, netbanking, UPI and popular wallets including
            JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money and PayZapp.
          </p>

          <p className="font-family pt-5 pb-4 text-[15px] text-black">
            {" "}
            RazorpayX supercharges your business banking experience, bringing
            effectiveness, efficiency, and excellence to all financial
            processes. With RazorpayX, businesses can get access to
            fully-functional current accounts, supercharge their payouts and
            automate payroll compliance.
          </p>

          <p className="font-family pt-5 pb-4 text-[15px] text-black">
            Manage your marketplace, automate bank transfers, collect recurring
            payments, share invoices with customers and avail working capital
            loans - all from a single platform. Fast forward your business with
            Razorpay.
          </p>

          <p className="font-family pt-5 pb-4 opacity-65 text-[15px] text-black">
            {" "}
            Disclaimer: The RazorpayX powered Current Account and VISA corporate
            credit card are provided by RBI licensed banks. Your RazorpayX
            powered account is provided by our partner bank, in accordance with
            RBI regulations. RazorpayX itself is not a bank and doesn't hold or
            claim to hold a banking license.
          </p>

          <h3 className="font-family font-bold mx-auto opacity-65 text-black">
            SUBSCRIBE TO OUR NEWSLETTER
          </h3>

          {/* input button  */}
          <div className="flex flex-row justify-evenly items-centern bg-white relative rounded  w-full mb-3 mt-2 gap-2  ">
            <input
              type="text"
              placeholder=" email address "
              className="outline-none text-gray-700 h-10 max-w-[110px]"
            />

            <button className="flex flex-row  justify-center items-center font-bold text-[16px] text-lightBlue500 ">
              Subsrcibe
              <img src={arrow} alt="" className="text-lightBlue" />
            </button>
          </div>

          <div className="flex  gap-5">
            <img src={footerImg} alt="" className="w-[100px] h-[50px] pb-1.5 hover:scale-110 transition-transform duration-200" />
            <img src={footerImg2} alt="" className="w-[100px] h-[70px] mb-7" />
          </div>
        </div>

        {/* second footer  */}
        <div className=" mt-[3rem] max-w-[250px] mx-auto ">
          <ul className="font-family pl-[60px] leading-7">
            <h3 className="font-bold text-black ">BANKING PLUS</h3>
            <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200">
              <a href="#">RazorpayX </a>
            </li>
            <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200">
              <a href="#">Current Accounts</a>
            </li>
            <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200">
              <a href="#">Payouts</a>
            </li>
            <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200">
              <a href="#">Payout Links</a>
            </li>
            <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200">
              <a href="#">Corporate Credit Card</a>
            </li>
            <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200">
              <a href="#">
                View Live Demo{" "}
                <span className="bg-green-600 text-white p-0.5">New</span>
              </a>
            </li>
            <div>
              <h3 className="font-bold text-black ">LENDING</h3>
              <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200">
                <a href="#">Razorpay Capital </a>
              </li>
              <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200">
                <a href="#">Instant Settlements</a>
              </li>
              <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200">
                <a href="#">Working Capital Loans</a>
              </li>
              <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
                <a href="#">Marketplace Instant Settlements</a>
              </li>
            </div>

            <div>
              <h3 className="font-bold text-black ">RISK & FRAUD</h3>
              <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
                <a href="#">Thirdwatch </a>
              </li>
              <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
                <a href="#">
                  PrePay CoD{" "}
                  <span className="bg-green-600 text-white p-0.5">New</span>
                </a>
              </li>
            </div>
            {/* 4 section */}
            <div>
              <h3 className="font-bold text-black ">BECOME A PARTNER</h3>
              <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200">
                <a href="#">Refer and Earnh </a>
              </li>
              <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200">
                <a href="#">Onboarding APIs </a>
              </li>
            </div>
            {/* 5 section  */}
            <div>
              <h3 className="font-bold text-black ">MORE</h3>
              <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
                <a href="#">Route </a>
              </li>
              <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
                <a href="#">Invoices </a>
              </li>
              <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
                <a href="#">Freelancer Payments </a>
              </li>
              <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
                <a href="#">International </a>
              </li>
              <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
                <a href="#">Flash Checkout </a>
              </li>
              <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
                <a href="#">UPI </a>
              </li>
              <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
                <a href="#">ePOS </a>
              </li>
              <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
                <a href="#">Checkout Demo </a>
              </li>
              <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
                <a href="#">RazorpayX Payroll </a>
              </li>
            </div>
          </ul>
        </div>

        {/* 3 ROW SECTION  */}
        <div className=" mt-[3rem] max-w-[250px] mx-auto ">
          <ul className="font-family pl-[60px] leading-7">
            <h3 className="font-bold text-black ">ACCEPT PAYMENTS</h3>
            <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
              <a href="#">Payment Gateway </a>
            </li>
            <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
              <a href="#">Payment Pages</a>
            </li>
            <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
              <a href="#">Payment Links</a>
            </li>
            <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
              <a href="#">QR Codes</a>
            </li>
            <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
              <a href="#">Subscriptions</a>
            </li>
            <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
              <a href="#">Smart Collect </a>
            </li>

            {/* 3.1 section  */}
            <div>
              <h3 className="font-bold text-black ">DEVELOPERS</h3>
              <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
                <a href="#">Docs </a>
              </li>
              <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
                <a href="#">Integrations</a>
              </li>
              <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
                <a href="#">Integrations</a>
              </li>
            </div>

            {/* 3.2 section  */}
            <div>
              <h3 className="font-bold text-black ">RESOURCES</h3>
              <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
                <a href="#">Blog</a>
              </li>
              <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
                <a href="#">Customer Stories</a>
              </li>
              <li className=" text-lightBlue500 text-[15px] hover:text-grayBlue transition-all duration-200 ">
                <a href="#">Events</a>
              </li>
              <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
                <a href="#">Chargeback Guide</a>
              </li>
              <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
                <a href="#">Settlement Guide</a>
              </li>
            </div>

            {/* 3.3 section  */}
            <div>
              <h3 className="font-bold text-black ">SOLUTIONS</h3>
              <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
                <a href="#">Education</a>
              </li>
              <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
                <a href="#">E-commerce</a>
              </li>
              <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
                <a href="#">Saas</a>
              </li>
              <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
                <a href="#">BFSI</a>
              </li>
            </div>

            {/* 3.4 section  */}
            <div>
              <h3 className="font-bold text-black ">FREE TOOLS</h3>
              <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
                <a href="#">GST Calculator</a>
              </li>
              <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
                <a href="#">Online TDS Payment</a>
              </li>
              <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
                <a href="#">
                  CST Number Seareh{" "}
                  <span className="bg-green-600 text-white  p-0.5">New</span>
                </a>
              </li>
            </div>
          </ul>
        </div>

        {/* 4 ROW SECTION  */}
        <div className=" mt-[3rem] max-w-[250px] mx-auto ">
          <ul className="font-family pl-[60px] leading-7">
            <h3 className="font-bold text-black ">COMPANY</h3>
            <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
              <a href="#">About Us </a>
            </li>
            <li className=" text-lightBlue500 text-[15px] hover:text-grayBlue transition-all duration-200 ">
              <a href="#">Payment Pages</a>
            </li>
            <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
              <a href="#">
                Careers{" "}
                <span className="bg-green-600 text-white p-0.5">
                  We're hiring!
                </span>
              </a>
            </li>
            <li className=" text-lightBlue500 text-[15px] hover:text-grayBlue transition-all duration-200 ">
              <a href="#">Terms of Use</a>
            </li>
            <li className=" text-lightBlue500 text-[15px]  ">
              <a href="#">Privacy Policy</a>
            </li>
            <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
              <a href="#">Grievance Redressal </a>
            </li>
            <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
              <a href="#">Responsible Disclosure </a>
            </li>
            <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
              <a href="#">Partners </a>
            </li>
            <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
              <a href="#">White Papers </a>
            </li>
            <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
              <a href="#">Corporate Information</a>
            </li>

            {/* 4.1 row section    */}
            <h3 className="font-bold text-black ">HELP & SUPPORT</h3>
            <li className=" text-lightBlue500 text-[15px]  hover:text-grayBlue transition-all duration-200 ">
              <a href="#">Support </a>
            </li>
            <li className=" text-lightBlue500 text-[15px] hover:text-grayBlue transition-all duration-200 ">
              <a href="#">Knowledge base</a>
            </li>

            {/* 4.2 icon section  */}
            <div>
              <h3 className="font-bold text-black "> FIND US ONLINE </h3>
              <div className="flex flex-row space-x-2 mt-3 mb-1.5">
                <span>
                  {" "}
                  <img className="hover:scale-120 transition-transform duration-400"
                  src={facebookIcons} alt="" />
                </span>
                <span>
                  {" "}
                  <img className="hover:scale-120 transition-transform duration-200"
                  src={twitterIcons} alt="" />
                </span>
                <span>
                  {" "}
                  <img
                  className="hover:scale-120 transition-transform duration-200"
                  src={instaIcons} alt="" />
                </span>
                <span>
                  {" "}
                  <img 
                  className="hover:scale-120 transition-transform duration-200"
                  src={githubIcons} alt="" />
                </span>
                <span>
                  {" "}

                  <img
                  className="hover:scale-120 transition-transform duration-200"
                  src={linkedIcons} alt="" />
                </span>
              </div>
            </div>

            {/* 4.3 icon section  */}
            <div className="opacity-80">
              <p className="font-family pt-4 pb-3 text-[15px] text-black font-family ">
                REGD. OFFICE ADDRESS
              </p>
              <p className="font-family pt-4 pb-3 text-[15px] text-black">
                Razorpay Software Private Limited, 1st Floor, SJR Cyber, 22
                Laskar Hosur Road, Adugodi, Bengaluru, 560030 Karnataka, India
                CIN: U72200KA2013PTC097389{" "}
              </p>
              <p className="font-family pt-4 pb-3 text-[15px] text-black">
                {" "}
                <span>&#169;</span> Razorpay 2022 All Rights Reserved
              </p>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
