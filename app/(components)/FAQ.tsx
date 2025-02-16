"use client"
import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
   const faqs = [
    {
      heading: "What is Aceternity UI?",
      content:
        "Aceternity UI is a modern component library designed to help developers build beautiful and responsive user interfaces quickly using pre-designed, customizable components.",
    },
    {
      heading: "Is Aceternity UI compatible with Tailwind CSS?",
      content:
        "Yes, Aceternity UI is built with Tailwind CSS at its core, allowing for seamless customization and utility-first styling.",
    },
    {
      heading: "Can I use Aceternity UI with Next.js and React?",
      content:
        "Absolutely! Aceternity UI is designed to work flawlessly with both Next.js and React projects.",
    },
    {
      heading: "Does Aceternity UI support dark mode?",
      content:
        "Yes, Aceternity UI has built-in support for dark mode, making it easy to switch themes with minimal configuration.",
    },
    {
      heading: "Is Aceternity UI open-source?",
      content:
        "Yes, Aceternity UI is open-source and available for the community to contribute and customize as needed.",
    },
    {
      heading: "How can I get started with Aceternity UI?",
      content:
        "To get started, simply install the package via npm or yarn, import the components, and start building. Detailed documentation is available to guide you through the setup process.",
    },
    {
      heading: "Can I customize the components?",
      content:
        "Absolutely! Aceternity UI is built with Tailwind's utility classes, allowing you to easily override or extend styles as per your design needs.",
    },
    {
      heading: "Are there pre-built themes available?",
      content:
        "Yes, Aceternity UI comes with multiple pre-built themes, and you can also create custom themes to match your brand's identity.",
    },
    {
      heading: "Is it free to use?",
      content:
        "Yes, Aceternity UI is completely free to use for both personal and commercial projects.",
    },
    {
      heading: "Where can I find documentation and examples?",
      content:
        "You can find comprehensive documentation and code examples on the official Aceternity UI website and GitHub repository.",
    },
  ];
  

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close on click
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className=" shadow-md rounded-lg">
            <div
              className="p-4 cursor-pointer flex justify-between items-center  rounded-t-lg "
              onClick={() => toggleAnswer(index)}
            >
              <h2 className="text-lg font-semibold">{faq.heading}</h2>
              <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
            </div>
            {openIndex === index && (
              <div className="p-4  rounded-b-lg">
                <p>{faq.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;