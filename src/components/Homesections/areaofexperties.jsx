import React from "react";
import expertiseImg from "../../assets/images/Home/slider1.jpeg"; 
// ↑ image path apne project ke according change kar lena

const AreasOfExpertise = () => {
  return (
    <section className="bg-pink-50 py-20 px-6 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">

        {/* Top Image */}
        <div className="flex justify-center mb-10">
          <img
            src={expertiseImg}
            alt="Expertise"
            className="rounded-2xl shadow-lg w-full max-w-lg object-cover"
          />
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-pink-500 text-center mb-14">
          Areas Of Expertise
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-pink-500">
            <h3 className="text-lg font-semibold text-pink-500 mb-3">
              Obstetrics & Gynecology
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Comprehensive care for women across all stages of life, from
              adolescence to menopause. Expertise in managing normal and
              high-risk pregnancies, preventive gynecology, and holistic
              women’s health.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-pink-500">
            <h3 className="text-lg font-semibold text-pink-500 mb-3">
              Assisted Reproductive Technology (ART)
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Specialized in IVF, ICSI, and IUI with proven success rates.
              Combines advanced medical technology with personalized care for
              couples facing infertility challenges.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-pink-500">
            <h3 className="text-lg font-semibold text-pink-500 mb-3">
              Preventive Oncology
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Focuses on early detection and prevention of gynecological cancers
              with advanced screening, counseling, and minimally invasive
              treatment options.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-pink-500">
            <h3 className="text-lg font-semibold text-pink-500 mb-3">
              Infertility Investigation & Management
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Expert in diagnosing complex infertility conditions and creating
              customized treatment plans — from ovulation induction to advanced
              fertility procedures.
            </p>
          </div>

          {/* Card 5 (Highlighted like screenshot) */}
          <div className="bg-pink-100 rounded-xl shadow-md p-6 border-l-4 border-pink-500">
            <h3 className="text-lg font-semibold text-pink-600 mb-3">
              Hysteroscopy & Laparoscopic Surgery
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Highly skilled in diagnostic and therapeutic hysteroscopy and
              laparoscopy, enabling minimally invasive treatment of fibroids,
              cysts, endometriosis, and uterine abnormalities.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-pink-500">
            <h3 className="text-lg font-semibold text-pink-500 mb-3">
              Maternal & Fetal Medicine
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Advanced care for expectant mothers with high-risk conditions,
              ensuring safe pregnancy outcomes through specialized monitoring,
              diagnostics, and personalized treatment plans.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AreasOfExpertise;
