"use client";
import React from "react";
import { useParams } from "next/navigation";

const CheckoutForm = () => {
  const { id } = useParams();
  return (
    <div className="font-Poppins">
      <div className="p-4 md:p-8 bg-blue-200  ">
        <div>
          <h1> Payment Details</h1>
          <hr className="w-[40px] bg-blue-600 h-[5px] mt-2" />
        </div>
        <div className="mt-8">
          <div className="flex gap-2 items-center">
            <label
              className="w-[40%] block text-[14px] font-medium"
              for="price"
            >
              Price:{" "}
            </label>
            <input
              className="w-[70%]  px-2 py-2 rounded"
              type="text"
              id="price"
              name="price"
              value={id == 399 ? 399.0 : 549.0}
              readonly
            />
          </div>
          <div className="flex gap-2 items-center mt-3">
            <label
              className="w-[40%] block text-[14px] font-medium"
              for="whatsapp"
            >
              WhatsApp Number:{" "}
            </label>
            <input
              className="w-[70%] px-2 py-2 rounded"
              type="text"
              id="whatsapp"
              name="whatsapp"
            />
          </div>

          <div className="flex gap-2 items-center mt-3">
            <label
              className="w-[40%] block text-[14px] font-medium"
              for="email"
            >
              Email:{" "}
            </label>
            <input
              className="w-[70%] px-2 py-2 rounded"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="flex gap-2 items-center mt-3">
            <label className="w-[40%] block text-[14px] font-medium" for="name">
              Name:{" "}
            </label>
            <input
              className="w-[70%] px-2 py-2 rounded"
              type="text"
              id="name"
              name="name"
            />
          </div>
          <div className="flex gap-2 items-center mt-3">
            <label
              className="w-[40%] block text-[14px] font-medium"
              for="optional"
            >
              Optional:{" "}
            </label>
            <input
              className="w-[70%] px-2 py-2 rounded"
              type="text"
              id="optional"
              name="optional"
            />
          </div>
        </div>
      </div>
      <div className="bg-white shadow-2xl  flex items-center justify-between">
        <img className="w-[200px]  px-4" src="/pay.png" alt="" />
        <button className="px-8 py-4 bg-blue-500 text-white" type="submit">
          Pay ₹399
        </button>
      </div>
    </div>
  );
};

export default CheckoutForm;
