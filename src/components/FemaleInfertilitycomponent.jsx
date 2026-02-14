import React from "react";
import heroImg from "../assets/images/female-infertility/1.jpg";
import coupleImg from "../assets/images/female-infertility/2.jpg";
import Header from "./Header";
import Footer from "./Footer";

const FemaleInfertility = () => {
  const treatments = [
    {
      title: "Embryo Preservation",
      description:
        "Expert care in preserving embryos to safeguard your future parenthood plans. We provide personalized guidance, advanced technology, and ongoing support to protect your fertility and ensure the best outcomes."
    },
    {
      title: "IUI Treatment",
      description:
        "Intrauterine Insemination (IUI) is a simple, less invasive fertility treatment. Prepared sperm is placed directly into the uterus during ovulation, increasing the chances of fertilization. This is often the first step for couples struggling with infertility."
    },
    {
      title: "Blastocyst Transfer",
      description:
        "In IVF, embryos are usually transferred after 3 days. With Blastocyst Transfer, embryos are cultured for 5 days until they reach the blastocyst stage, giving a higher chance of successful implantation."
    },
    {
      title: "Assisted Embryo Hatching",
      description:
        "Sometimes, the outer shell of the embryo makes it hard to implant. Assisted Embryo Hatching gently opens the shell, improving implantation chances, especially in older women or those with previous IVF failures."
    },
    {
      title: "PCOD / PCOS Treatment",
      description:
        "PCOD / PCOS is one of the most common causes of infertility. With proper medications, lifestyle guidance, and advanced fertility techniques, we help women manage PCOS and improve ovulation."
    },
    {
      title: "IVF Treatment",
      description:
        "IVF (In Vitro Fertilization) is the most trusted fertility solution. It is recommended for cases like blocked tubes, endometriosis, unexplained infertility, and advanced maternal age. Our clinic provides personalized IVF plans to maximize success."
    },
    {
      title: "Infertility Treatment (Comprehensive Care)",
      description: {
        text: "Our approach goes beyond just medical procedures. We focus on:",
        points: [
          "Accurate diagnosis",
          "Emotional support",
          "Personalized treatment planning",
          "Holistic care (diet, counseling, and wellness)"
        ]
      }
    }
  ];

  return (
    <>
      <Header />

      <div className="bg-[#f3e3e8] min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

          {/* HERO SECTION */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                Female Infertility Treatment
              </h1>

              <p className="text-gray-600 text-[17px] leading-relaxed mb-8">
               Infertility can feel overwhelming, but you are not alone. Many women face challenges in conceiving due to hormonal, lifestyle, or medical reasons. With the right guidance and advanced fertility treatments, motherhood is possible. At our IVF centre, we offer <b> personalized treatments for female infertility</b> to help you achieve your dream of becoming a parent.
              </p>

              <button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition duration-300 shadow-md">
                Book Your Consultation
              </button>
            </div>

            <div>
              <img
                src={heroImg}
                alt="Infertility Treatment"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>

          {/* UNDERSTANDING SECTION */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-pink-600 mb-6">
                Understanding Female Infertility
              </h2>

              <p className="text-gray-600 mb-6">
                Female infertility refers to the inability to conceive naturally,
                even after a year of regular, unprotected intercourse.
              </p>

              <ul className="list-disc pl-6 text-gray-600 space-y-3">
                <li>Ovulation disorders (PCOD / PCOS)</li>
                <li>Blocked fallopian tubes</li>
                <li>Hormonal imbalance</li>
                <li>Endometriosis</li>
                <li>Uterine fibroids</li>
              </ul>

              <p className="mt-6 text-lg font-semibold text-black">
                Early diagnosis and timely treatment improve success rates.
              </p>
            </div>

            <div>
              <img
                src={coupleImg}
                alt="Couple Concerned"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>

          {/* TREATMENTS SECTION */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-semibold text-pink-600 mb-6">
              Our Fertility Treatments
            </h2>

            <p className="text-gray-600 mb-10">
              We provide a wide range of treatments tailored to your medical
              condition and personal needs.
            </p>

            <div className="space-y-8">
              {treatments.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-md border border-pink-100 border-l-4 border-l-pink-500 hover:border-l-8 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold text-pink-500 mb-3">
                    {item.title}
                  </h3>

                  {typeof item.description === "object" ? (
                    <>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {item.description.text}
                      </p>

                      <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                        {item.description.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <p className="text-black mb-4 leading-relaxed">
                      {item.description}
                    </p>
                  )}

                  <button className="text-pink-500 text-sm font-medium hover:text-black">
                    👉 Read More
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default FemaleInfertility;
