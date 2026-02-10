import React from "react";
import doctorImage from "../../assets/images/Home/dr-meenu.jpeg"; 
// ↑ image path apne project ke hisaab se update kar lena

const AboutDoctor = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-14 items-start">

        {/* Left Image */}
        <div className="w-full lg:w-[35%] flex justify-center">
          <img
            src={doctorImage}
            alt="Dr. Meenu Singh"
            className="w-full max-w-sm h-[550px] rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-[65%]">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About Dr. Meenu Singh
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            With over 18 years of experience in{" "}
            <span className="font-semibold">
              Obstetrics, Gynecology, and Assisted Reproductive Technology
            </span>
            , Dr. Meenu Singh is a trusted name in women’s healthcare and
            fertility management. Her extensive training and international
            exposure have helped countless couples achieve their dream of
            parenthood with safe and advanced treatments.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-5">
            Work Experience
          </h3>

          <ul className="space-y-4 text-gray-700 list-disc pl-5">
            <li>
              <span className="font-semibold">Head & Senior Consultant</span> –
              Department of Reproductive Medicine (IVF), Fortis C-DOC Hospital,
              New Delhi
            </li>

            <li>
              <span className="font-semibold">Consultant</span> – Obstetrics,
              Gynecology & Assisted Reproductive Medicine, Mediheal Hospital,
              Nairobi, Kenya
            </li>

            <li>
              <span className="font-semibold">Consultant</span> – Obstetrics,
              Gynecology & Reproductive Medicine, Yatharth Super Speciality
              Hospital, Noida (Delhi NCR)
            </li>

            <li>
              <span className="font-semibold">Senior Resident</span> –
              Obstetrics & Gynecology, Hindu Rao Hospital, New Delhi
            </li>

            <li>
              <span className="font-semibold">Senior Resident</span> –
              Obstetrics & Gynecology, Jag Pravesh Chandra Hospital, New Delhi
            </li>

            <li>
              <span className="font-semibold">Resident Medical Officer</span> –
              Obstetrics & Gynecology, Maharaja Agrasen Hospital, New Delhi
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default AboutDoctor;
