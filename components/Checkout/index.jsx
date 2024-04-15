'use client'
import React from "react";
import { FaFacebook, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";
import CheckoutForm from "./CheckoutForm";
import { useParams } from 'next/navigation'

const index = () => {
  const { id } = useParams();
 
  return (
    <section className=" py-4 lg:py-16 ">
      <div className="max-w-screen-lg mx-3 lg:mx-auto ">
        <div className="">
          <img className="w-[200px]" src="/logo.png" alt="" />
        </div>
        <div className=" flex max-lg:flex-col gap-8">
          <div className="font-Poppins  lg:w-[50%]">
            <h1 className="mt-8 text-2xl font-[500]">Checkout</h1>
            <hr className="w-[40px] bg-blue-600 h-[5px] mt-2" />
            <div>
              <div className="drop-shadow text-white p-8 bg-blue-500 rounded-2xl mt-8">
                <h1 className="text-3xl font-bold">
                  {id == 399 ? " For 3 Months" : "For 1 Year"}
                </h1>
                <p className="text-xl mt-12">
                  {id == "399" ? "₹399" : " ₹549"}
                </p>
              </div>
              <h1 className="text-xl font-bold text-center mt-4">
                Choose 1 year plan and get <br className="md:hidden" />
                <span className="text-red-500">66% OFF</span>
              </h1>
            </div>
            <div className="mt-4 lg:hidden">
              <CheckoutForm />
            </div>
            <div className="mt-8">
              <h1>Share this on:</h1>
              <div className="grid grid-cols-3 gap-4 text-2xl w-fit  mt-6">
                <FaFacebook className="text-blue-500 cursor-pointer hover:drop-shadow-2xl " />
                <IoLogoWhatsapp className="text-green-500 cursor-pointer hover:drop-shadow-2xl " />
                <FaTwitter className="text-blue-400 cursor-pointer hover:drop-shadow-2xl" />
              </div>
            </div>
            <div className="mt-8">
              <h1>Contact Us</h1>
              <div className="flex items-center gap-2 text-sm mt-6">
                <IoMdMail className="text-xl" />
                <p>example@gmail.com</p>
              </div>
              <div className="flex items-center gap-2 text-sm mt-2">
                <FaPhoneAlt className="text-xl" />
                <p>example@gmail.com</p>
              </div>
            </div>
            <div className="mt-6">
              <h1>Terms & Conditions: </h1>
              <p className="text-sm mt-4 ">
                You agree to share information entered on this page with
                Pre-Market Pulse (owner of this page) and Razorpay, adhering to
                applicable laws.
              </p>
            </div>
          </div>
          <div className="max-lg:hidden lg:w-[50%]">
            <CheckoutForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
