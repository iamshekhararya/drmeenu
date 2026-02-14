import React from "react";
import aboutImage from "../../assets/images/Home/aboutsection.jpg";
import { Link } from "react-router-dom";
// ↑ image path apne project ke according change kar lena

const AboutSection = () => {
  return (
    <section className="bg-pink-100 py-20 px-6 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
        {/* Left Image */}
        <div className="flex-1">
          <img
            src={aboutImage}
            alt="Baby Care"
            className="w-full h-[380px] object-cover rounded-3xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-500 mb-6">
            About Dr Meenu’s Gynecology & Fertility Clinic
          </h2>

          <p className="text-gray-700 mb-5 leading-relaxed">
            At Dr Meenu’s Clinic, we believe every individual and couple
            deserves a chance to experience the joy of parenthood. With over 18
            years of experience in gynecology and fertility care, we bring
            together compassion, cutting-edge technology, and personalized
            treatment plans to support you every step of the way.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Our clinic is equipped with modern labs, expert specialists, and a
            caring environment where your well-being is our priority. If you're
            looking for guidance, support, and effective fertility solutions, we
            are here for you. Let us walk this journey together.
          </p>
          <Link to="/about-us">
            <button className="bg-pink-500 text-white px-8 py-3 rounded-xl font-medium hover:bg-pink-600 transition">
              Read More About Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
