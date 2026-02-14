import React from "react";

const CTASection = ({
  title,
  highlight,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="bg-[#e9dde2] py-16 px-4">
      <div className="max-w-6xl mx-auto bg-[#f3e9ed] p-10 md:p-14 relative rounded-2xl shadow-xl">

        {/* Left Pink Border */}
        <div className="absolute left-0 top-0 h-full w-1 bg-pink-500 rounded-l-2xl"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10">

          {/* Left Content (Wider) */}
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6 leading-snug">
              {title}{" "}
              <span className="text-pink-500">{highlight}</span>
            </h2>

            <p className="text-gray-700 leading-relaxed text-[15px] max-w-2xl">
              {description}
            </p>
          </div>

          {/* Right Button */}
          <div className="flex md:justify-end md:col-span-1">
            <a
              href={buttonLink}
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-sm md:text-base transition duration-300 shadow-md hover:shadow-lg"
            >
              {buttonText}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
