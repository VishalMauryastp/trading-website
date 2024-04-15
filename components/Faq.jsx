import React from "react";

const Faq = () => {
  const faqs = [
    {
      id: "01",
      question: "How will I receive the daily PDF?",
      answer:
        "The PDF will be sent to your WhatsApp number every Mon – Fri around 8:30 AM morning.",
    },
    {
      id: "02",
      question: "May I see a sample PDF?",
      answer: "Yes, click the button below to view a sample PDF 👇",
    },
    {
      id: "03",
      question: "Can we request a refund if we change our minds?",
      answer:
        "Yes, you have 3 days after purchase to request a refund. You will receive a 100% refund, no questions asked.",
    },
    {
      id: "04",
      question: "Will my subscription auto-renew after the plan ends?",
      answer:
        "No, we do not auto-renew subscriptions. We will remind you 3 days before your plan ends, and you can choose to purchase again. There will be no automatic deductions.",
    },
    {
      id: "05",
      question: "Is this worth the money?",
      answer:
        "Absolutely! You get daily market updates on WhatsApp for less than the cost of a 🍕Pizza for a YEAR, plus a 100% refund policy and extra FREE Bonuses with every purchase worth more than your payment.",
    },
  ];

  return (
    <section className=" max-w-md  mx-auto px-4 lg:px-4  font-Poppins ">
      <div>
        <h1 className="text-3xl font-Poppins font-bold text-center">
          Most Asked Questions!
        </h1>
        <div className="mt-8">
          {faqs.map((val, i) => {
            return (
              <>
                <div className="mt-8 flex gap-4">
                  <div className="text-xl font-bold">{val.id}</div>
                  <div>
                    <h1 className="text-xl font-bold">{val.question}</h1>
                    <p>{val.answer}</p>
                    {val.id == 2 && (
                      <button className="bg-blue-500 text-white drop-shadow p-2 rounded mt-4">
                        View Sample
                      </button>
                    )}
                  </div>
                </div>
                <hr className="mt-8" />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
