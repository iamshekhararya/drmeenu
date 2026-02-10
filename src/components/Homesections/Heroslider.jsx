import React from "react";
import doctorImage from "../../assets/images/Home/doctor.jpeg";
const HeroSection = () => {
  return (
    <section className="
      bg-pink-100
      min-h-[600px]
      flex items-center
      px-6 md:px-16 lg:px-24
    ">
      {/* CARD */}
      <div className="
        bg-white
        w-full
        rounded-2xl
        shadow-xl
        p-8 md:p-12 lg:p-16
        flex flex-col lg:flex-row
        items-center
        gap-12
      ">
        {/* Left Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-pink-500 font-medium mb-3">
            Compassionate Care. Advanced Treatment.
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pink-500 mb-5">
            Gynecology & Fertility Clinic
          </h1>

          <p className="text-gray-700 mb-8 max-w-xl">
            At our clinic, we understand that the journey to parenthood is deeply
            personal. With compassion, advanced fertility treatments, and
            personalized care, we’re committed to helping you achieve the family
            you’ve always dreamed of.
          </p>

          <div className="flex justify-center lg:justify-start gap-5">
            <button className="px-8 py-3 border border-pink-500 text-pink-500 rounded-lg hover:bg-pink-500 hover:text-white transition">
              Consult Now
            </button>
            <button className="px-8 py-3 border border-pink-500 text-pink-500 rounded-lg hover:bg-pink-500 hover:text-white transition">
              Read More
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 flex flex-col items-center">
          <img
            src={doctorImage}
            alt="Doctor"
            className="rounded-xl shadow-md w-full h-[320px] max-w-md object-cover"
          />
          <p className="mt-5 text-pink-500 font-semibold text-center max-w-md">
            MBBS, DGO, PGDS, Fellowship in Reproductive Medicine & Advanced
            Laparoscopy
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
