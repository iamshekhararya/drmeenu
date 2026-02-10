import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../../data/servicesData";

const ObsGynae = () => {
  const pregnancyServices = servicesData.filter(
    (item) => item.category === "pregnancy"
  );

  const gynecologyServices = servicesData.filter(
    (item) => item.category === "gynecology"
  );

  const Card = ({ item }) => {
    const Icon = item.icon;

    return (
      <div className="bg-white rounded-2xl shadow-md p-8 text-center">
        <div className="flex justify-center text-pink-500 mb-4">
          <Icon size={40} />
        </div>

        <h4 className="text-lg font-semibold text-pink-500 mb-3">
          {item.title}
        </h4>

        <p className="text-gray-600 text-sm mb-6">
          {item.shortDescription}
        </p>

        <Link
          to={`/services/${item.parentSlug}/${item.slug}`}
          className="text-pink-500 font-medium hover:underline"
        >
          Read More →
        </Link>
      </div>
    );
  };

  return (
    <section className="bg-pink-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-center text-3xl font-bold text-pink-500 mb-4">
          OBS & GYNAE
        </h2>

        <p className="text-center max-w-3xl mx-auto text-gray-600 mb-12">
          Advanced Obstetrics & Gynecology care for every stage of life.
        </p>

        <div className="flex items-center gap-3 mb-10">
          <span className="w-1 h-8 bg-pink-500"></span>
          <h3 className="text-2xl font-semibold">Pregnancy Care</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pregnancyServices.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

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

export default ObsGynae;
