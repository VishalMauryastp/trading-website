import React from "react";

const Bonus = () => {
  const img = [
    "/image-5.webp",
    "/image-6.webp",
    "/image-4.webp",
    "/book3.webp",
    "/book.webp",
    "/book2.webp",
  ];
  return (
    <section className=" max-w-md mx-2 md:mx-auto px-2 lg:px-0  py-16  font-Poppins ">
      <h1 className="text-3xl font-Poppins font-bold text-center">
        FREE Bonus worth ₹2999!
      </h1>
      <div className="grid grid-cols-2 mt-12">
        {img.map((val,i) => {
          return (
            <div key={i} className="p-4 ">
              <img className="mx-auto" src={val} alt="loading..." />
            </div>
          );
        })}
      </div>
      <p>
        Just share the screenshot of the payment on WhatsApp to receive the FREE
        bonus.
      </p>
    </section>
  );
};

export default Bonus;
