"use client";
import Bonus from "@/components/Bonus";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import HowWorks from "@/components/HowWorks";
import Reviews from "@/components/Reviews";
import Thanks from "@/components/Thanks";
import WhatInclude from "@/components/WhatInclude";
import Why from "@/components/Why";
import React from "react";

import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <section className="">
      <Hero />
      <Thanks />
      <HowWorks />
      <WhatInclude />
      <Why />
      <Reviews />
      <Faq />
      <Bonus />
      <button
        onClick={() => router.push("/cart")}
        className="py-4 px-4 text-center block w-full sticky drop-shadow-2xl bottom-4 z-[10] font-bold md:w-[448px] text-white  bg-blue-500  mx-auto"
      >
        Make Payment
      </button>
    </section>
  );
};

export default Page;
