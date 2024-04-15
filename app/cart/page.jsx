"use client";
import React from "react";

import { BsCheckCircleFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  // const navigate = useNavigate();
  const additionalInfo = [
    "FREE bonus worth ₹2999!",
    "100% refund policy valid for 3 days after purchase",
    "Secure payment gateway",
  ];
  return (
    <section className=" max-w-md  md:mx-auto    font-Poppins   ">
      <div className="bg-blue-100 py-16">
        <h1 className="text-2xl lg:px-8 lg:text-2xl font-Poppins font-bold text-center">
          How long do you need our daily PDF report for?{" "}
        </h1>
        <div className="grid grid-cols-2 gap-2  mt-12 mx-8">
          <div
            className="drop-shadow text-white p-4 bg-blue-500 rounded-2xl cursor-pointer"
            onClick={() => {
              router.push("/checkout/399");
            }}
          >
            <h1 className="text-3xl font-bold">For 3 Months</h1>
            <p className="text-xl mt-12">₹399</p>
          </div>
          <div
            className="drop-shadow text-white p-4 bg-blue-500 rounded-2xl cursor-pointer"
            onClick={() => {
              router.push("/checkout/549");
            }}
          >
            <h1 className="text-3xl font-bold">
              For <br /> 1 Year
            </h1>
            <p className="text-xl mt-12">₹549</p>
          </div>
        </div>

        <div className=" border-collapse mx-8  px-4 bg-white mt-8 rounded-2xl drop-shadow">
          <h1 className=" py-4">
            🍕 You get 1 year of our service for less than the price of a Pizza!
          </h1>
          <hr />
          <div className="py-4">
            {additionalInfo.map((val, i) => {
              return (
                <div key={i} className="flex items-center gap-2  ">
                  <BsCheckCircleFill className="min-w-[20px] text-blue-500 font-extrabold" />
                  <p> {val}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <p className="px-8 mt-8 text-sm">
            Note: There is no automatic deduction; this is just a one-time
            payment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page;
