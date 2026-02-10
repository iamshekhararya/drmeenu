import React, { useState, useRef } from "react";
import logo from "../assets/images/Home/logo.png";

const Header = () => {
  // DESKTOP STATES
  const [showObs, setShowObs] = useState(false);
  const [showPregnancy, setShowPregnancy] = useState(false);
  const [showGyne, setShowGyne] = useState(false);
  const [showInfertility, setShowInfertility] = useState(false);

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
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <img src={logo} alt="Logo" className="h-40" />

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8 text-pink-500 font-medium">
          <a href="/">Home</a>
          <a href="/about">About Us</a>

          {/* OBS & GYNAE */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearTimeout(obsTimeout.current);
              setShowObs(true);
            }}
            onMouseLeave={closeObsMenu}
          >
            <button className="flex items-center gap-1">
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
            </button>

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
                      <a className="block px-4 py-2 hover:bg-pink-50" href="/obs-gyne/pregnancy-care">Normal Pregnancy</a>
                      <a className="block px-4 py-2 hover:bg-pink-50" href="/obs-gyne/high-risk-pregnancy">C-Section Delivery</a>
                      <a className="block px-4 py-2 hover:bg-pink-50" href="/obs-gyne/high-risk-pregnancy">Painless Delivery</a>
                      <a className="block px-4 py-2 hover:bg-pink-50" href="/obs-gyne/high-risk-pregnancy">Postpartum Care</a>
                      <a className="block px-4 py-2 hover:bg-pink-50" href="/obs-gyne/high-risk-pregnancy">Vaccination</a>
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
                      <a className="block px-4 py-2 hover:bg-pink-50" href="/gyne/pcos">Fibroid Treatment</a>
                      <a className="block px-4 py-2 hover:bg-pink-50" href="/gyne/infertility">Infections & STIs</a>
                      <a className="block px-4 py-2 hover:bg-pink-50" href="/gyne/infertility">Laparoscopic Surgery</a>
                      <a className="block px-4 py-2 hover:bg-pink-50" href="/gyne/infertility">PCOS Treatment</a>
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
            <button className="flex items-center gap-1">
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
            </button>

            {showInfertility && (
              <div className="absolute left-0 mt-3 w-60 bg-white border rounded-lg shadow-lg z-50">
                <a className="block px-4 py-2 hover:bg-pink-50" href="/female-infertility/ivf">IVF Treatment</a>
                <a className="block px-4 py-2 hover:bg-pink-50" href="/female-infertility/iui">Embryo Preservation</a>
                <a className="block px-4 py-2 hover:bg-pink-50" href="/female-infertility/pcos">Assisted Embryo Hatching</a>
                <a className="block px-4 py-2 hover:bg-pink-50" href="/female-infertility/endometriosis">Blastocyst Transfer</a>
                <a className="block px-4 py-2 hover:bg-pink-50" href="/female-infertility/endometriosis">ICSI Treatment</a>
                <a className="block px-4 py-2 hover:bg-pink-50" href="/female-infertility/endometriosis">IUI Treatment</a>
                <a className="block px-4 py-2 hover:bg-pink-50" href="/female-infertility/endometriosis">PCOD / PCOS</a>
              </div>
            )}
          </div>

          <a href="/testimonial">Testimonial</a>
          <a href="/contact">Contact Us</a>
        </nav>

        {/* DESKTOP CTA */}
        <a
          href="/book-appointment"
          className="hidden lg:block bg-pink-500 text-white px-6 py-3 rounded-lg"
        >
          Book Appointment
        </a>

        {/* MOBILE HAMBURGER */}
        <button
          className="lg:hidden text-pink-500 text-3xl"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="lg:hidden bg-white border-t px-4 py-4 flex flex-col gap-3 text-pink-500 font-medium">
          <a className="block w-full" href="/">Home</a>
          <a className="block w-full" href="/about">About Us</a>

          {/* OBS & GYNAE */}
          <button
            className="block w-full text-left flex justify-between items-center"
            onClick={() => setMobileObs(!mobileObs)}
          >
            OBS & GYNAE <span>{mobileObs ? "▲" : "▼"}</span>
          </button>

          {mobileObs && (
            <div className="pl-4 flex flex-col gap-2">
              {/* Pregnancy Care */}
              <div>
                <button
                  className="w-full text-left flex justify-between items-center"
                  onClick={() => setMobilePregnancy(!mobilePregnancy)}
                >
                  Pregnancy Care <span>{mobilePregnancy ? "▲" : "▼"}</span>
                </button>
                {mobilePregnancy && (
                  <div className="pl-4 flex flex-col gap-1">
                    <a href="/obs-gyne/pregnancy-care" className="block py-1">Normal Pregnancy</a>
                    <a href="/obs-gyne/high-risk-pregnancy" className="block py-1">C-Section Delivery</a>
                    <a href="/obs-gyne/high-risk-pregnancy" className="block py-1">Painless Delivery</a>
                    <a href="/obs-gyne/high-risk-pregnancy" className="block py-1">Postpartum Care</a>
                    <a href="/obs-gyne/high-risk-pregnancy" className="block py-1">Vaccination</a>
                  </div>
                )}
              </div>

              {/* Gyne */}
              <div>
                <button
                  className="w-full text-left flex justify-between items-center"
                  onClick={() => setMobileGyne(!mobileGyne)}
                >
                  Gynecologist <span>{mobileGyne ? "▲" : "▼"}</span>
                </button>
                {mobileGyne && (
                  <div className="pl-4 flex flex-col gap-1">
                    <a href="/gyne/pcos" className="block py-1">Fibroid Treatment</a>
                    <a href="/gyne/infertility" className="block py-1">Infections & STIs</a>
                    <a href="/gyne/infertility" className="block py-1">Laparoscopic Surgery</a>
                    <a href="/gyne/infertility" className="block py-1">PCOS Treatment</a>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* FEMALE INFERTILITY */}
          <button
            className="block w-full text-left flex justify-between items-center"
            onClick={() => setMobileInfertility(!mobileInfertility)}
          >
            Female Infertility <span>{mobileInfertility ? "▲" : "▼"}</span>
          </button>

          {mobileInfertility && (
            <div className="pl-4 flex flex-col gap-1">
              <a href="/female-infertility/ivf" className="block py-1">IVF Treatment</a>
              <a href="/female-infertility/iui" className="block py-1">Embryo Preservation</a>
              <a href="/female-infertility/pcos" className="block py-1">Assisted Embryo Hatching</a>
              <a href="/female-infertility/endometriosis" className="block py-1">Blastocyst Transfer</a>
              <a href="/female-infertility/endometriosis" className="block py-1">ICSI Treatment</a>
              <a href="/female-infertility/endometriosis" className="block py-1">IUI Treatment</a>
              <a href="/female-infertility/endometriosis" className="block py-1">PCOD / PCOS</a>
            </div>
          )}

          <a className="block w-full" href="/testimonial">Testimonial</a>
          <a className="block w-full" href="/contact">Contact Us</a>

          <a
            href="/book-appointment"
            className="block w-full bg-pink-500 text-white text-center py-2 rounded mt-2"
          >
            Book Appointment
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
