import React from "react";
// Note: You can use Lucide-React or any icon library for the icons.
import { Beaker, HeartHandshake, Smile, Users } from "lucide-react";
import { Link } from "react-router-dom";

const WhyTrustUs = () => {
  const features = [
    {
      title: "Modern IVF Lab",
      description:
        "State-of-the-art laboratories with the latest technology to ensure high success rates.",
      icon: <Beaker className="w-8 h-8 text-pink-500" />,
    },
    {
      title: "Personalized Care",
      description:
        "Every treatment plan is tailored uniquely for each couple's needs and goals.",
      icon: <HeartHandshake className="w-8 h-8 text-pink-500" />,
    },
    {
      title: "Affordable & Transparent",
      description:
        "Clear pricing and ethical practices, ensuring accessibility without hidden costs.",
      icon: <Smile className="w-8 h-8 text-pink-500" />,
    },
    {
      title: "Family-Centered Approach",
      description:
        "We treat you as family, offering emotional support alongside medical expertise.",
      icon: <Users className="w-8 h-8 text-pink-500" />,
    },
  ];

  return (
    <section className="bg-[#FFF5F8] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Content Side */}
        <div className="lg:w-2/5 text-left">
          <h4 className="text-pink-500 font-medium mb-4">
            Why Families Trust Us
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold text-[#D64E8C] leading-tight mb-6">
            Specialized Care With Compassion
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            At Dr Meenu's Clinic, we combine advanced fertility science with
            genuine compassion. Our goal is to make every patient feel cared
            for, supported, and confident throughout their journey.
          </p>
          <Link to="/contact-us">
            <button className="px-8 py-3 border-2 border-pink-400 text-pink-600 font-semibold hover:text-white rounded-lg hover:bg-pink-600 transition-colors">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Right Grid Side */}
        <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-pink-600 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUs;
