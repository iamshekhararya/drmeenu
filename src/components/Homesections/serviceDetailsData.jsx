import { useParams } from "react-router-dom";
import { serviceDetailsData } from "../../data/serviceDetailsData";
import { servicesData } from "../../data/servicesData";

const ServiceDetail = () => {
  const { parentSlug, slug } = useParams();

  // validate service
  const service = servicesData.find(
    (item) => item.slug === slug && item.parentSlug === parentSlug
  );

  // get service detail
  const data = serviceDetailsData[slug];

  if (!service || !data) {
    return (
      <p className="text-center py-20 text-gray-500">
        Service not found
      </p>
    );
  }

  return (
    <section className="bg-pink-50 py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* ================= PAGE TITLE ================= */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-pink-600">
            {data.title}
          </h1>
          <p className="text-gray-700 leading-relaxed max-w-4xl">
            {data.intro}
          </p>
        </div>

        {/* ================= CONTENT SECTIONS ================= */}
        {data.sections.map((section, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* IMAGE */}
            {section.image && (
              <div className={`${index % 2 !== 0 ? "md:order-2" : "md:order-1"}`}>
                <img
                  src={section.image}
                  alt={section.heading}
                  className="rounded-2xl shadow-lg w-full object-cover"
                />
              </div>
            )}

            {/* TEXT */}
            <div className={`${index % 2 !== 0 ? "md:order-1" : "md:order-2"}`}>
              <h2 className="text-2xl font-semibold text-pink-600 mb-4">
                {section.heading}
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                {section.description}
              </p>

              <ul className="space-y-3 text-gray-700">
                {section.points.map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* ================= DOCTOR CTA SECTION ================= */}
        <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <img
            src={data.doctorSection.image}
            alt="Doctor"
            className="rounded-2xl w-full object-cover"
          />

          <div>
            <h2 className="text-2xl font-semibold text-pink-600 mb-5">
              {data.doctorSection.heading}
            </h2>

            <ul className="space-y-4 text-gray-700">
              {data.doctorSection.points.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-pink-500 font-bold">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceDetail;
