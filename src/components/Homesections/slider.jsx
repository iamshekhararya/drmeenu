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
    objectPosition: "center center",
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
  const [isHovered, setIsHovered] = useState(false);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  // ✅ Auto Slide with setInterval
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] mx-auto overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: slide.objectPosition }}
          />

          <div className="absolute bottom-6 left-6">
            <p
              className="text-3xl md:text-5xl lg:text-6xl font-bold"
              style={{
                color: "white",
                WebkitTextStroke: "2px black",
              }}
            >
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-pink-500 text-white px-3 py-1 rounded-full z-10"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-pink-500 text-white px-3 py-1 rounded-full z-10"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-pink-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
