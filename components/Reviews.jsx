import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const Reviews = () => {
  const feedbackArray = [
    {
      name: "Aditya Aggarwal",
      location: "Rajkot",
      feedback:
        "Sir, appki pdf bahut kaam ki hai…main ab roz subah dekhta hoon..jo ek overall idea deta hai…Dhanyavaad sir…achhi service 😊😊 👍",
    },
    {
      name: "Shridhar Devaraj",
      location: "Meerut",
      feedback:
        "Loved ur service 👌 totally worth the money…btw my friend wants to sub to ur group too…his number is 91xxxxxxxx",
    },
    {
      name: "Vipul Mavani",
      location: "Nagpur",
      feedback:
        "Hey, I’ve been getting your PDFs from my friend for the past 3 days and they’re really cool 😊. Even I want to join… How do I do that? Can you send me the link?",
    },
  ];

  return (
    <section className=" max-w-md mx-2 md:mx-auto sm:px-1 lg:px-0  py-16   ">
      <div className="">
        <h1 className="text-3xl font-Poppins font-bold text-center">
          Some Positive Vibes on WhatsApp 😊
        </h1>

        <div className=" flex flex-col gap-4 font-Poppins mt-12 ">
          {feedbackArray.map((val, i) => {
            return (
              <div className="bg-blue-200 rounded-2xl p-8 drop-shadow">
                <div className="p-8 bg-white rounded-2xl drop-shadow">
                  <p>{val.feedback}</p>
                </div>
                <div>
                  <div className=" mt-8 flex gap-3">
                    {/* <img src={val.img} alt="" /> */}
                    <FaRegUserCircle className="text-5xl drop-shadow" />
                    <div className="">
                      <h1 className="font-semibold">{val.name}</h1>
                      <p className="text-sm">{val.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
