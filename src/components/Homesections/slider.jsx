import React, { useState, useEffect } from "react";
import img1 from "../../assets/images/Home/slider1.jpeg";
import img2 from "../../assets/images/Home/slider2.jpeg";
import img3 from "../../assets/images/Home/slider3.jpeg";

const slides = [
  {
    id: 1,
    image: img1,
    title: "",
    subtitle: "Dr Meenu’s Gynecology & Fertility Clinic",
    objectPosition: "center center", // control image position
  },
  {
    id: 2,
    image: img2,
    title: "",
    subtitle: "Dr Meenu’s Gynecology & Fertility Clinic",
    objectPosition: "top center",
  },
  {
    id: 3,
    image: img3,
    title: "",
    subtitle: "Dr Meenu’s Gynecology & Fertility Clinic",
    objectPosition: "bottom center",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // Auto-slide every 5 seconds, pause on hover
  useEffect(() => {
    if (!isHovered) {
      const timer = setTimeout(nextSlide, 5000);
      return () => clearTimeout(timer);
    }
  }, [current, isHovered]);

  return (
    <div
      className="relative w-full max-w-8xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] mx-auto overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${index === current ? "block" : "hidden"} w-full h-full relative`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover transition-all duration-700"
            style={{ objectPosition: slide.objectPosition }}
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-10 p-3 rounded">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
              {slide.title}
            </h2>
            <p
              className="text-4xl sm:text-base md:text-6xl lg:text-7xl"
              style={{
                color: "white", // inner text color
                WebkitTextStroke: "2px black", // stronger black border
                textStroke: "2px black", // fallback for other browsers
              }}
            >
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Prev / Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-pink-500 text-white px-3 py-1 rounded-full opacity-80 hover:opacity-100 z-10"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-pink-500 text-white px-3 py-1 rounded-full opacity-80 hover:opacity-100 z-10"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-pink-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
