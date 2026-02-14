import React from "react";
import doctorImg from "../assets/images/About/1.jpg"; // doctor image
import coupleImg from "../assets/images/Home/dr-meenu.jpeg"; // couple image

const Aboutus = () => {
  return (
    <div className="w-full">
      {/* ===== TOP SECTION ===== */}
      <section className="bg-[#e9dde2] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6">
            About Us
          </h1>

          <p className="text-gray-700 max-w-3xl leading-relaxed">
            At Dr Meenu’s Gynecology & Fertility Clinic, we believe that every
            woman deserves compassionate care and every couple deserves the
            chance to experience the joy of parenthood. With years of expertise
            in gynecology, obstetrics, and advanced fertility treatments, our
            clinic is dedicated to guiding you through every stage of your
            journey—from adolescence to motherhood and beyond.
          </p>
        </div>
      </section>

      {/* ===== DREAMS SECTION ===== */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Bringing Dreams Of Parenthood To Life
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              At Dr Meenu’s Gynaecology & Fertility Clinic, we understand that
              infertility is not just a medical challenge—it’s an emotional
              journey. With compassion, advanced science, and personalized care,
              we stand by couples and individuals who dream of holding their
              little one in their arms.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Led by Dr Meenu Singh, a trusted fertility specialist with years
              of clinical excellence, our clinic has become a beacon of hope for
              countless families.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src={doctorImg}
              alt="Parenthood"
              className="rounded-xl shadow-lg w-full object-cover h-[400px] md:h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* ===== DOCTOR SECTION ===== */}
      <section className="bg-[#f3eef0] py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[25%_75%] gap-12 items-stretch">
          {/* DOCTOR IMAGE */}
          <div className="flex justify-center md:justify-start">
            <img
              src={coupleImg}
              alt="Dr Meenu Singh"
              className="rounded-xl shadow-lg w-full h-auto md:h-full object-cover"
            />
          </div>

          {/* DOCTOR CONTENT */}
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-2xl md:text-5xl font-bold mb-6">
              About Dr. Meenu Singh
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              With over 18 years of experience in Obstetrics, Gynecology, and
              Assisted Reproductive Technology, Dr. Meenu is a trusted name in
              women’s healthcare and fertility management. Her extensive
              training and international exposure have helped countless couples
              achieve their dream of parenthood with safe and advanced
              treatments.
            </p>

            <h3 className="font-semibold mb-3 text-3xl">Work Experience</h3>
            <ul className="list-disc pl-5 space-y-4 text-gray-700 text-lg">
              <li className="flex flex-wrap items-baseline">
                <p className="text-gray-600 font-semibold mr-1 inline">
                  Head & Senior Consultant –
                </p>
                <span>
                  Department of Reproductive Medicine (IVF), Fortis C-DOC
                  Hospital, New Delhi
                </span>
              </li>
              <li className="flex flex-wrap items-baseline">
                <p className="text-gray-600 font-semibold mr-1 inline">
                  Consultant –
                </p>
                <span>
                  Obstetrics, Gynecology & Assisted Reproductive Medicine,
                  Mediheal Hospital, Nairobi, Kenya
                </span>
              </li>
              <li className="flex flex-wrap items-baseline">
                <p className="text-gray-600 font-semibold mr-1 inline">
                  Consultant –
                </p>
                <span>
                  Obstetrics, Gynecology & Reproductive Medicine, Yatharth Super
                  Specialty Hospital, Noida
                </span>
              </li>
              <li className="flex flex-wrap items-baseline">
                <p className="text-gray-600 font-semibold mr-1 inline">
                  Senior Resident –
                </p>
                <span>
                  Obstetrics & Gynecology, Hindu Rao Hospital, New Delhi
                </span>
              </li>
              <li className="flex flex-wrap items-baseline">
                <p className="text-gray-600 font-semibold mr-1 inline">
                  Senior Resident –
                </p>
                <span>
                  Obstetrics & Gynecology, Jag Pravesh Chandra Hospital, New
                  Delhi
                </span>
              </li>
              <li className="flex flex-wrap items-baseline">
                <p className="text-gray-600 font-semibold mr-1 inline">
                  Resident Medical Officer –
                </p>
                <span>
                  Obstetrics & Gynecology, Maharaja Agrasen Hospital, New Delhi
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
