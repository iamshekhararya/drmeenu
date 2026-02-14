import React from "react";
import { useParams, Link } from "react-router-dom";
import { infertilityDetails } from "../../data/FemaleInfertilityDetail";
import Header from "../Header";
import Footer from "../Footer";

const FemaleInfertilityDetail = () => {
  const { slug } = useParams();
  const data = infertilityDetails.find((item) => item.slug === slug);

  if (!data) {
    return (
      <>
        <Header />
        <section className="py-20 bg-pink-50 text-center px-4">
          <h2 className="text-3xl font-semibold text-pink-500 mb-4">
            Content Coming Soon
          </h2>
          <p className="text-gray-600 mb-6">
            This treatment page is under development.
          </p>
          <Link
            to="/female-infertility"
            className="text-pink-500 font-medium no-underline hover:text-gray-800"
          >
            ← Back to Female Infertility
          </Link>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <section className="bg-pink-50 py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto space-y-10">

          {/* ===== HERO CARD ===== */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 grid md:grid-cols-2 gap-8 items-stretch">

            {/* CONTENT */}
            <div className="h-full flex flex-col justify-start">
              <h1 className="text-3xl md:text-4xl font-semibold mb-4">
                {data.title}
              </h1>

              <div
                className="text-gray-700 text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: data.introduction }}
              />
            </div>

            {/* IMAGE */}
            <div className="h-full">
              <img
                src={data.heroImage}
                alt={data.title}
                className="rounded-xl w-full h-full object-cover"
              />
            </div>

          </div>


          {/* ===== PROCESS CARD ===== */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 grid md:grid-cols-2 gap-8 items-stretch">

            {/* IMAGE */}
            <div className="h-full">
              <img
                src={data.processImage}
                alt="Process"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>

            {/* CONTENT */}
            <div className="h-full flex flex-col justify-start">

              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                {data.processTitle}
              </h2>

              <div className="space-y-6">
                {data.processSteps?.map((step, index) => (
                  <div key={index} className="flex gap-4 items-start">

                    <div className="min-w-[42px] h-[42px] flex items-center justify-center rounded-full bg-pink-100 text-pink-600 font-bold">
                      {index + 1}
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">
                        {step.title}
                      </h3>

                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>

                  </div>
                ))}
              </div>

            </div>

          </div>


          {/* ===== RECOMMENDED CARD ===== */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 grid md:grid-cols-2 gap-8 items-stretch">

            {/* CONTENT */}
            <div className="h-full flex flex-col justify-start">

              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                {data.recommendedTitle}
              </h2>

              {data.recommendedpara && (
                <p className="mb-4 text-gray-700">
                  {data.recommendedpara}
                </p>
              )}

              <ul className="space-y-3 text-gray-700">
                {data.recommendedFor?.map((item, index) => {
                  const parts = item.split(/\s*–\s*/);
                  const title = parts[0];
                  const description = parts.slice(1).join(" – ");

                  return (
                    <li key={index}>
                      <strong>{title} – </strong>
                      {description}
                    </li>
                  );
                })}
              </ul>

            </div>

            {/* IMAGE */}
            <div className="h-full">
              <img
                src={data.recommendedImage}
                alt="Recommended"
                className="rounded-xl w-full h-full object-cover"
              />
            </div>

          </div>


          {/* ===== BENEFITS CARD ===== */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 grid md:grid-cols-2 gap-8 items-stretch">

            {/* IMAGE */}
            <div className="h-full order-2 md:order-1">
              <img
                src={data.benefitsImage}
                alt="Benefits"
                className="rounded-xl w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="h-full flex flex-col justify-start order-1 md:order-2">

              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                {data.fourthheading}
              </h2>

              <ul className="list-disc list-inside space-y-3 text-gray-700">
                {data.benefits?.map((benefit, index) => (
                  <li
                    key={index}
                    dangerouslySetInnerHTML={{ __html: benefit }}
                  />
                ))}
              </ul>

            </div>

          </div>


          {/* ===== EXPERTISE CARD ===== */}
          {data.expertise && data.expertiseImage && (
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 grid md:grid-cols-2 gap-8 items-stretch">

              {/* CONTENT */}
              <div className="h-full flex flex-col justify-start">

                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  {data.expertiseTitle || "Our Expertise"}
                </h2>

                <ul className="list-disc list-inside space-y-3 text-gray-700">
                  {data.expertise.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

              </div>

              {/* IMAGE */}
              <div className="h-full">
                <img
                  src={data.expertiseImage}
                  alt="Expertise"
                  className="rounded-xl w-full h-full object-cover"
                />
              </div>

            </div>
          )}

        </div>
      </section>

      <Footer />
    </>
  );
};

export default FemaleInfertilityDetail;
