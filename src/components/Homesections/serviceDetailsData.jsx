import { useParams } from "react-router-dom";
import { serviceDetailsData } from "../../data/serviceDetailsData";
import { servicesData } from "../../data/servicesData";
import Header from "../Header";
import Footer from "../Footer";

const ServiceDetail = () => {
  const { parentSlug, slug } = useParams();

  const service = servicesData.find(
    (item) => item.slug === slug && item.parentSlug === parentSlug
  );

  const data = serviceDetailsData[slug];

  if (!service || !data) {
    return (
      <>
        <Header />
        <p className="text-center py-20 text-gray-500 text-lg">
          Service not found
        </p>
        <Footer />
      </>
    );
  }

  const [medical, procedure, recovery] = data.sections;

  return (
    <>
      <Header />

      <section className="bg-pink-50 py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* ================= HERO SECTION ================= */}
          <div className="bg-white rounded-3xl shadow-md p-8 md:p-12 grid md:grid-cols-2 gap-10 items-stretch">

            {/* CONTENT */}
            <div className="flex flex-col justify-start h-full">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {data.title}
              </h1>

              <div
                className="text-gray-600 text-lg leading-relaxed mb-4"
                dangerouslySetInnerHTML={{ __html: data.intro }}
              />

              <div
                className="text-gray-700 text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: data.heroExtraText }}
              />
            </div>

            {/* HERO IMAGE */}
            <div className="h-full">
              <img
                src={data.heroImage}
                alt={data.title}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

          </div>


          {/* ================= MEDICAL SECTION ================= */}
          <div className="bg-white rounded-3xl shadow-md p-8 md:p-12 grid md:grid-cols-2 gap-10 items-stretch">

            {/* IMAGE */}
            <div className="h-full order-2 md:order-1">
              <img
                src={medical.image}
                alt={medical.medicalheading}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col justify-start h-full order-1 md:order-2">

              <h2 className="text-3xl font-semibold mb-4">
                {medical.medicalheading}
              </h2>

              <p className="text-gray-600 mb-6">
                {medical.para}
              </p>

              <ul className="space-y-3 text-gray-700">
                {medical.points.map((point, i) => {
                  const [title, description] = point.split(":");
                  return (
                    <li key={i}>
                      <strong>{title}:</strong> {description}
                    </li>
                  );
                })}
              </ul>

            </div>

          </div>


          {/* ================= PROCEDURE SECTION ================= */}
          <div className="bg-white rounded-3xl shadow-md p-8 md:p-12 grid md:grid-cols-2 gap-10 items-stretch">

            {/* IMAGE */}
            <div className="h-full">
              <img
                src={procedure.image}
                alt={procedure.heading}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col justify-start h-full">

              <h2 className="text-3xl font-semibold mb-4">
                {procedure.heading}
              </h2>

              <p className="text-gray-700 mb-5">
                {procedure.description}
              </p>

              <ul className="space-y-3 text-gray-700">
                {procedure.points.map((point, i) => {
                  const [title, description] = point.split("-");
                  return (
                    <li key={i}>
                      <strong>{i + 1}. {title} - </strong>
                      {description}
                    </li>
                  );
                })}
              </ul>

            </div>

          </div>


          {/* ================= RECOVERY SECTION ================= */}
          <div className="bg-white rounded-3xl shadow-md p-8 md:p-12 grid md:grid-cols-2 gap-10 items-stretch">

            {/* CONTENT */}
            <div className="flex flex-col justify-start h-full">

              <h2 className="text-3xl font-semibold mb-4">
                {recovery.heading}
              </h2>

              <p className="text-gray-700 mb-6">
                {recovery.description}
              </p>

              <ul className="space-y-3 text-gray-700">
                {recovery.points.map((point, i) => {
                  const [title, description] = point.split("-");
                  return (
                    <li key={i}>
                      <strong>{title} - </strong>
                      {description}
                    </li>
                  );
                })}
              </ul>

            </div>

            {/* IMAGE */}
            <div className="h-full">
              <img
                src={recovery.image}
                alt={recovery.heading}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

          </div>


          {/* ================= DOCTOR SECTION ================= */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-stretch">

            {/* IMAGE */}
            <div className="h-full">
              <img
                src={data.doctorSection.image}
                alt="Doctor Care"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col justify-start h-full">

              <h2 className="text-3xl font-semibold mb-6">
                {data.doctorSection.heading}
              </h2>

              <p className="text-gray-600 mb-6">
                {data.doctorSection.para}
              </p>

              <ul className="space-y-3 text-gray-700">
                {data.doctorSection.points.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

            </div>

          </div>


        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServiceDetail;
