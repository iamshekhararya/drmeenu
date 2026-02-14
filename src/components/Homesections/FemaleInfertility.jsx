import React from "react";
import { Link } from "react-router-dom";
import { Infertility } from "../../data/FemaleInfertility";

const FemaleInfertility = () => {
  // 🔹 Filter only female infertility services
  const infertilityServices = Infertility.filter(
    (item) => item.category === "female-infertility",
  );

  const Card = ({ item }) => {
    const Icon = item.icon;

    return (
      <div
        className="bg-white rounded-2xl shadow-md p-8 text-center max-w-sm w-full
                   transform transition duration-300 hover:scale-105 hover:shadow-xl"
      >
        {/* Icon */}
        <div className="flex justify-center text-pink-500 mb-4">
          <Icon size={36} />
        </div>

        {/* Title */}
        <h4 className="text-lg font-semibold text-pink-500 mb-3">
          {item.title}
        </h4>

        {/* Short Description */}
        <p className="text-gray-600 text-sm mb-6">{item.shortDescription}</p>

        {/* Read More Button */}
        <Link
          to={`/female-infertility/${item.slug}`}
          className="inline-block bg-pink-500 text-white text-sm font-medium px-5 py-2 rounded-md
             transition duration-300 hover:bg-pink-600 hover:shadow-md"
        >
          Read More →
        </Link>
      </div>
    );
  };

  return (
    <section className="bg-pink-50 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-pink-500 mb-4">
          Female Infertility
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-gray-700 mb-14">
          Our infertility treatments combine advanced medical techniques with
          personalized care to help women achieve their dream of motherhood. We
          offer safe, effective, and compassionate solutions for various
          fertility challenges.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {infertilityServices.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FemaleInfertility;
