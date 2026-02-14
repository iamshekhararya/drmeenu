import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/images/obs-gynae/1.jpg";
import img2 from "../assets/images/obs-gynae/2.avif";

const ObsGynaeSection = () => {
  return (
    <div className="w-full">

      {/* ===== Top Section ===== */}
      <section className="bg-[#e6d8dd] py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              Obstetrics & Gynecology (OBS & GYNAE) Care
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed">
              At our clinic, we specialize in providing comprehensive women's
              healthcare — from pregnancy and childbirth to advanced gynecology
              treatments. Our team ensures safe, personalized, and compassionate
              care for every stage of a woman's life.
            </p>

            {/* Book Consultation Button */}
            <button className="mt-8 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-md transition duration-300">
              Book Your Consultation
            </button>
          </div>

          {/* Right Image */}
          <div>
            <img
              src={img1}
              alt="Obstetrics Care"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* ===== Bottom Section ===== */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Image */}
          <div>
            <img
              src={img2}
              alt="Family Care"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Compassionate Care For Every Stage Of Womanhood
            </h3>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Women’s health is a journey that changes with every phase of life — 
              from the teenage years to motherhood and finally, menopause. At our 
              <strong> OBS & GYNAE department</strong>, we ensure women receive the 
              right care at the right time, with a focus on safety, comfort, and 
              emotional support.
            </p>

            <ul className="mt-6 space-y-4 text-gray-700">
              <li>
                <strong>Personalized Care Plans –</strong> Every woman’s body
                responds differently, so we create individualized treatment paths.
              </li>
              <li>
                <strong>Preventive Screenings –</strong> Regular gynecological
                exams, pap smears, and breast health checks help in early detection.
              </li>
              <li>
                <strong>Comfort & Privacy –</strong> We maintain a supportive
                environment where women can openly share their concerns.
              </li>
              <li>
                <strong>Holistic Health –</strong> Guidance on diet, stress
                management, and lifestyle for long-term wellness.
              </li>
            </ul>

            {/* Read More Button */}
            <Link
              to="/obs-gynae"
              className="inline-block mt-8 bg-pink-500 hover:bg-pink-600 text-white 
                         px-6 py-3 rounded-md transition duration-300"
            >
              Read More
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
};

export default ObsGynaeSection;
