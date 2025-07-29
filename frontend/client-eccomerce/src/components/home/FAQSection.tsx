import { useState } from "react";
import { Icon } from "@iconify/react";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "You can return products within 7 days of delivery for a full refund.",
  },
  {
    question: "How long does delivery take?",
    answer: "Orders typically arrive in 2–5 working days.",
  },
  {
    question: "Do you offer COD?",
    answer: "Yes, Cash on Delivery is available on most orders.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-teal-700">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              className="border border-teal-200 rounded-2xl bg-white shadow-md"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-teal-900 hover:bg-teal-50 transition-all"
              >
                {faq.question}
                <Icon
                  icon={isActive ? "mdi:chevron-up" : "mdi:chevron-down"}
                  width={24}
                  className="text-teal-600"
                />
              </button>

              {/* Collapsible Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 px-6 ${
                  isActive
                    ? "max-h-40 opacity-100 py-2"
                    : "max-h-0 opacity-0 py-0"
                }`}
              >
                <p className="text-teal-700">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export { FAQSection };
