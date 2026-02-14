import React from "react";
import familyImg from "../../assets/images/Home/h-1.avif"; 
import doctorImg from "../../assets/images/Home/h-2.avif";

const HealthPrioritySection = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">

        {/* ===== HEADING ===== */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12">
          Your Health, Our Priority
        </h2>

        {/* ===== IMAGES ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-12">
          
          <div className="w-full">
            <img
              src={familyImg}
              alt="Happy family"
              className="rounded-2xl shadow-md w-[500px]  object-cover"
            />
          </div>

          <div className="w-full">
            <img
              src={doctorImg}
              alt="Doctor consultation"
              className="rounded-2xl shadow-md w-[500px]  object-cover"
            />
          </div>

        </div>

        {/* ===== DESCRIPTION ===== */}
        <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed">
          At Dr Meenu’s Clinic, we combine compassion with modern expertise to
          support women through every stage of life. From pregnancy care to
          fertility solutions, we are here to walk this journey with you.
        </p>

      </div>
    </section>
  );
};

export default HealthPrioritySection;
