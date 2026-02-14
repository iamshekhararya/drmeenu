import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";

const Obsp = () => {
  const pregnancyServices = servicesData.filter(
    (item) => item.category === "pregnancy"
  );

  const gynecologyServices = servicesData.filter(
    (item) => item.category === "gynecology"
  );

  const Card = ({ item }) => {
    const Icon = item.icon;

    return (
      <div
        className="bg-white rounded-2xl shadow-md p-8 text-center
                   transform transition-all duration-700 ease-out
                   hover:-translate-y-6 hover:shadow-2xl hover:shadow-pink-200/60
                   group cursor-pointer flex flex-col justify-between h-full"
      >
        {/* Top Content */}
        <div>
          {/* Icon */}
          <div
            className="flex justify-center text-pink-500 mb-4
                       transition-transform duration-700
                       group-hover:scale-110 group-hover:rotate-6"
          >
            <Icon size={40} />
          </div>

          {/* Title */}
          <h4
            className="text-lg font-semibold text-black mb-3
                       transition-colors duration-300
                       group-hover:text-pink-600"
          >
            {item.title}
          </h4>

          {/* Description */}
          <p
            className="text-gray-600 text-sm mb-6
                       transition-colors duration-300
                       group-hover:text-gray-800"
          >
            {item.shortDescription}
          </p>
        </div>

        {/* Read More Button */}
        <Link
          to={`/obs-gynae/${item.parentSlug}/${item.slug}`}
          className="inline-block bg-pink-500 text-white font-medium
                     px-6 py-2 rounded-md
                     transition-all duration-300
                     hover:bg-pink-600 hover:shadow-lg hover:-translate-y-1"
        >
          Read More
        </Link>
      </div>
    );
  };

  return (
    <section className="bg-pink-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-black mb-4">
          Comprehensive Women’s Health & Pregnancy Care
        </h2>

        {/* Description */}
        <p className="text-center max-w-3xl mx-auto text-gray-600 mb-12">
          We provide advanced Obstetrics & Gynecology care to support women
          through every stage of life. From pregnancy to reproductive health, we
          ensure personalized treatment, compassion, and expert care.
        </p>

        {/* Pregnancy Section */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-1 h-8 bg-pink-500"></span>
          <h3 className="text-2xl font-semibold">Pregnancy Care</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pregnancyServices.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

        {/* Gynecology Section */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-1 h-8 bg-pink-500"></span>
          <h3 className="text-2xl font-semibold">Gynecology</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gynecologyServices.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Obsp;
