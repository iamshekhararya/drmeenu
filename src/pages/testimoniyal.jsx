import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const testimonials = [
  {
    name: "ROHAN MEHTA",
    role: "Software Engineer",
    text: "Dr. Meenu's team made the entire process smooth and reassuring. The staff was attentive, and the diagnostic lab reports were quick and accurate. I felt well-informed at every step, which really eased my stress."
  },
  {
    name: "PRIYA SHARMA",
    role: "Teacher",
    text: "The level of care and professionalism at the clinic is exceptional. From the first consultation to the follow-ups, everything was handled with patience and precision. I finally feel hopeful about starting my family."
  },
  {
    name: "AMIT KHANNA",
    role: "Entrepreneur",
    text: "The IVF treatment was explained in detail, and all my doubts were addressed. The staff ensured comfort and confidence throughout the process. Thanks to them, we are now expecting our first child!"
  },
  {
    name: "SNEHA REDDY",
    role: "Homemaker",
    text: "I was nervous about undergoing fertility treatment, but Dr. Meenu Singh and her team made me feel at ease. The care, attention, and encouragement I received were outstanding."
  },
  {
    name: "MEGHA RAO",
    role: "Corporate Professional",
    text: "From diagnostics to treatment, the clinic offered professional and compassionate care. The results were timely, and the guidance helped me make informed decisions."
  },
  {
    name: "NEHA GUPTA",
    role: "Fashion Designer",
    text: "The staff was empathetic and extremely supportive throughout my fertility journey. Every visit felt personal, and the team explained each step clearly. Our dream is finally coming true."
  }
];

const TestimonialSection = () => {
  return (
    <>
    {<Header/>}
    <section className="bg-[#e8dce1] py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-left">
        
        {/* Heading */}
        <h2 className="text-6xl font-bold mb-16 text-black ">
          Testimonial
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-black shadow-sm hover:shadow-md transition duration-300 text-left"
            >
              {/* Stars */}
              <div className="text-yellow-400 mb-4 text-lg">
                ★★★★★
              </div>

              {/* Text */}
              <p className="text-black text-lg font-semibold leading-relaxed mb-6">
                {item.text}
              </p>

              {/* Name */}
              <h4 className="text-sm font-semibold tracking-wide">
                {item.name}
              </h4>

              <p className="text-xs text-gray-500">
                {item.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
    {<Footer/>}
    </>
  );
};

export default TestimonialSection;
