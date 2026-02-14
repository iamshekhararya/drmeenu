import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import BookAppointment from "../components/bookappoitment";
import logo from "../assets/images/Home/logo.png";
import wimg from "../assets/images/Home/w.png";

const Header = () => {
  // DESKTOP STATES
  const [showObs, setShowObs] = useState(false);
  const [showPregnancy, setShowPregnancy] = useState(false);
  const [showGyne, setShowGyne] = useState(false);
  const [showInfertility, setShowInfertility] = useState(false);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  const obsTimeout = useRef(null);
  const infertilityTimeout = useRef(null);

  const closeObsMenu = () => {
    obsTimeout.current = setTimeout(() => {
      setShowObs(false);
      setShowPregnancy(false);
      setShowGyne(false);
    }, 250);
  };

  const closeInfertilityMenu = () => {
    infertilityTimeout.current = setTimeout(() => {
      setShowInfertility(false);
    }, 250);
  };

  // MOBILE STATES
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileObs, setMobileObs] = useState(false);
  const [mobilePregnancy, setMobilePregnancy] = useState(false);
  const [mobileGyne, setMobileGyne] = useState(false);
  const [mobileInfertility, setMobileInfertility] = useState(false);

  return (
    <header className="w-full border-b bg-white relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3 flex items-center justify-between">
        {/* LOGO */}
        <img src={logo} alt="Logo" className="h-20 lg:h-24" />

        {/* DESKTOP NAV */}
        <nav className="hidden xl:flex items-center gap-8 text-pink-500 font-medium">
          <a href="/">Home</a>
          <a href="/about-us">About Us</a>

          {/* OBS & GYNAE */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearTimeout(obsTimeout.current);
              setShowObs(true);
            }}
            onMouseLeave={closeObsMenu}
          >
            <Link to="/obs-gynae" className="flex items-center gap-1">
              OBS & GYNAE
              <svg
                className="w-4 h-4 mt-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </Link>

            {showObs && (
              <div className="absolute left-0 mt-3 w-60 bg-white border rounded-lg shadow-lg z-50">
                {/* Pregnancy */}
                <div
                  className="relative"
                  onMouseEnter={() => {
                    setShowPregnancy(true);
                    setShowGyne(false);
                  }}
                >
                  <div className="px-4 py-2 hover:bg-pink-50 cursor-pointer flex justify-between">
                    Pregnancy Care <span>›</span>
                  </div>
                  {showPregnancy && (
                    <div className="absolute top-0 left-full w-56 bg-white border rounded-lg shadow-lg">
                      <a
                        href="/obs-gynae/pregnancy-care/normal-delivery"
                        className="block px-4 py-2 hover:bg-pink-50"
                      >
                        Normal Pregnancy
                      </a>
                      <a
                        href="/obs-gynae/pregnancy-care/c-section-delivery"
                        className="block px-4 py-2 hover:bg-pink-50"
                      >
                        C-Section Delivery
                      </a>
                      <a
                        href="/obs-gynae/pregnancy-care/painless-delivery"
                        className="block px-4 py-2 hover:bg-pink-50"
                      >
                        Painless Delivery
                      </a>
                      <a
                        href="/obs-gynae/pregnancy-care/postpartum-care"
                        className="block px-4 py-2 hover:bg-pink-50"
                      >
                        Postpartum Care
                      </a>
                      <a
                        href="/obs-gynae/pregnancy-care/vaccination"
                        className="block px-4 py-2 hover:bg-pink-50"
                      >
                        Vaccination
                      </a>
                      <a
                        href="/obs-gynae/pregnancy-care/pregnancy-care"
                        className="block px-4 py-2 hover:bg-pink-50"
                      >
                        Pregnancy Care
                      </a>
                    </div>
                  )}
                </div>

                {/* Gyne */}
                <div
                  className="relative"
                  onMouseEnter={() => {
                    setShowGyne(true);
                    setShowPregnancy(false);
                  }}
                >
                  <div className="px-4 py-2 hover:bg-pink-50 cursor-pointer flex justify-between">
                    Gynecologist <span>›</span>
                  </div>
                  {showGyne && (
                    <div className="absolute top-0 left-full w-56 bg-white border rounded-lg shadow-lg">
                      <a
                        href="/obs-gynae/gynecology/fibroid-treatment"
                        className="block px-4 py-2 hover:bg-pink-50"
                      >
                        Fibroid Treatment
                      </a>
                      <a
                        href="/obs-gynae/gynecology/infections-stis"
                        className="block px-4 py-2 hover:bg-pink-50"
                      >
                        Infections & STIs
                      </a>
                      <a
                        href="/obs-gynae/gynecology/laparoscopic-surgery"
                        className="block px-4 py-2 hover:bg-pink-50"
                      >
                        Laparoscopic Surgery
                      </a>
                      <a
                        href="/obs-gynae/gynecology/menstrual-health"
                        className="block px-4 py-2 hover:bg-pink-50"
                      >
                        Menstrual Health
                      </a>
                      <a
                        href="/obs-gynae/gynecology/pcos-treatment"
                        className="block px-4 py-2 hover:bg-pink-50"
                      >
                        PCOS Treatment
                      </a>
                      <a
                        href="/obs-gynae/gynecology/pelvic-pain-pap-smear"
                        className="block px-4 py-2 hover:bg-pink-50"
                      >
                        Pelvic Pain, Breast Examination, Pap Smears
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* FEMALE INFERTILITY */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearTimeout(infertilityTimeout.current);
              setShowInfertility(true);
            }}
            onMouseLeave={closeInfertilityMenu}
          >
            <Link to="/female-infertility" className="flex items-center gap-1">
              Female Infertility
              <svg
                className="w-4 h-4 mt-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </Link>

            {showInfertility && (
              <div className="absolute left-0 mt-3 w-60 bg-white border rounded-lg shadow-lg z-50">
                <a
                  href="/female-infertility/ivf-treatment"
                  className="block px-4 py-2 hover:bg-pink-50"
                >
                  IVF Treatment
                </a>
                <a
                  href="/female-infertility/embryo-preservation"
                  className="block px-4 py-2 hover:bg-pink-50"
                >
                  Embryo Preservation
                </a>
                <a
                  href="/female-infertility/assisted-embryo-hatching"
                  className="block px-4 py-2 hover:bg-pink-50"
                >
                  Assisted Embryo Hatching
                </a>
                <a
                  href="/female-infertility/blastocyst-transfer"
                  className="block px-4 py-2 hover:bg-pink-50"
                >
                  Blastocyst Transfer
                </a>
                <a
                  href="/female-infertility/icsi-treatment"
                  className="block px-4 py-2 hover:bg-pink-50"
                >
                  ICSI Treatment
                </a>
                <a
                  href="/female-infertility/iui-treatment"
                  className="block px-4 py-2 hover:bg-pink-50"
                >
                  IUI Treatment
                </a>
                <a
                  href="/female-infertility/pcod-pcos-treatment"
                  className="block px-4 py-2 hover:bg-pink-50"
                >
                  PCOD / PCOS
                </a>
              </div>
            )}
          </div>

          <a href="/testimonial">Testimonial</a>
          <a href="/contact-us">Contact Us</a>
        </nav>

        {/* DESKTOP BOOK APPOINTMENT BUTTON */}
        <button
          onClick={() => setShowAppointmentModal(true)}
          className="hidden xl:block bg-pink-500 text-white px-6 py-3 rounded-lg"
        >
          Book Appointment
        </button>

        {/* MOBILE HAMBURGER */}
        <button
          className="xl:hidden text-pink-500 text-3xl"
          onClick={() => setMobileMenu((prev) => !prev)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="xl:hidden bg-white border-t px-4 py-4 flex flex-col gap-3 text-pink-500 font-medium">
          <a href="/">Home</a>
          <a href="/about-us">About Us</a>

          {/* Mobile OBS & Gyne */}
          <button
            className="w-full text-left flex justify-between items-center"
            onClick={() => setMobileObs(!mobileObs)}
          >
            OBS & GYNAE <span>{mobileObs ? "▲" : "▼"}</span>
          </button>
          {mobileObs && (
            <div className="pl-4 flex flex-col gap-2">
              {/* Pregnancy */}
              <button
                className="w-full text-left flex justify-between items-center"
                onClick={() => setMobilePregnancy(!mobilePregnancy)}
              >
                Pregnancy Care <span>{mobilePregnancy ? "▲" : "▼"}</span>
              </button>
              {mobilePregnancy && (
                <div className="pl-4 flex flex-col gap-1">
                  <a href="/obs-gynae/pregnancy-care/normal-delivery">Normal Pregnancy</a>
                  <a href="/obs-gynae/pregnancy-care/c-section-delivery">C-Section Delivery</a>
                  <a href="/obs-gynae/pregnancy-care/painless-delivery">Painless Delivery</a>
                  <a href="/obs-gynae/pregnancy-care/postpartum-care">Postpartum Care</a>
                  <a href="/obs-gynae/pregnancy-care/vaccination">Vaccination</a>
                  <a href="/obs-gynae/pregnancy-care/pregnancy-care">Pregnancy Care</a>
                </div>
              )}

              {/* Gyne */}
              <button
                className="w-full text-left flex justify-between items-center"
                onClick={() => setMobileGyne(!mobileGyne)}
              >
                Gynecologist <span>{mobileGyne ? "▲" : "▼"}</span>
              </button>
              {mobileGyne && (
                <div className="pl-4 flex flex-col gap-1">
                  <a href="/obs-gynae/gynecology/fibroid-treatment">Fibroid Treatment</a>
                  <a href="/obs-gynae/gynecology/infections-stis">Infections & STIs</a>
                  <a href="/obs-gynae/gynecology/laparoscopic-surgery">Laparoscopic Surgery</a>
                  <a href="/obs-gynae/gynecology/pcos-treatment">PCOS Treatment</a>
                  <a href="/obs-gynae/gynecology/pelvic-pain-pap-smear">Pelvic Pain, Pap Smear</a>
                </div>
              )}
            </div>
          )}

          {/* Mobile Female Infertility */}
          <button
            className="w-full text-left flex justify-between items-center"
            onClick={() => setMobileInfertility(!mobileInfertility)}
          >
            Female Infertility <span>{mobileInfertility ? "▲" : "▼"}</span>
          </button>
          {mobileInfertility && (
            <div className="pl-4 flex flex-col gap-1">
              <a href="/female-infertility/ivf">IVF Treatment</a>
              <a href="/female-infertility/iui">IUI Treatment</a>
              <a href="/female-infertility/assisted-embryo-hatching">Assisted Hatching</a>
              <a href="/female-infertility/blastocyst-transfer">Blastocyst Transfer</a>
              <a href="/female-infertility/icsi-treatment">ICSI Treatment</a>
              <a href="/female-infertility/pcod-pcos-treatment">PCOD / PCOS</a>
            </div>
          )}

          <a href="/testimonial">Testimonial</a>
          <a href="/contact">Contact Us</a>

          {/* Mobile Book Appointment */}
          <button
            onClick={() => setShowAppointmentModal(true)}
            className="w-full bg-pink-500 text-white py-2 rounded mt-2"
          >
            Book Appointment
          </button>
        </div>
      )}

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919355103322"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50"
      >
        <img src={wimg} alt="WhatsApp" className="w-14 h-14 rounded-full shadow-lg" />
      </a>

      {/* APPOINTMENT MODAL */}
      {showAppointmentModal && (
        <BookAppointment onClose={() => setShowAppointmentModal(false)} />
      )}
    </header>
  );
};

export default Header;
