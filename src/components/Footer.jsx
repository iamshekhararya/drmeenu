import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import logo from "../assets/images/Home/logo.png";

const Footer = () => {
  return (
    <footer className="bg-pink-50 pt-10 pb-6 px-4">
      <div className="max-w-7xl mx-auto">

        {/* ===== MAIN FOOTER GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          {/* ===== LEFT: Logo & Description ===== */}
          <div className="text-left">
            <img src={logo} alt="Dr Meenu Singh" className="w-32 mb-4" />
            <p className="text-gray-800 leading-relaxed text-sm">
              Whether it’s routine gynecology, fertility support, or pregnancy
              care, we guide you through every stage with personalized attention
              and trust. Your well-being and happiness are our priority.
            </p>
          </div>

          {/* ===== MIDDLE: Quick Links ===== */}
          <div className="text-left">
            <h3 className="text-2xl md:text-4xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-pink-600 text-sm">
              <li>
                <Link to="/" className="hover:text-pink-800 transition">Home</Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-pink-800 transition">About</Link>
              </li>
              <li>
                <Link to="/female-infertility" className="hover:text-pink-800 transition">Female Infertility</Link>
              </li>
              <li>
                <Link to="/obs-gynae" className="hover:text-pink-800 transition">OBS & GYNAE</Link>
              </li>
              <li>
                <Link to="/testimonial" className="hover:text-pink-800 transition">Testimonials</Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-pink-800 transition">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* ===== RIGHT: Contact Info ===== */}
          <div className="text-left">
            <h3 className="text-2xl md:text-4xl font-semibold mb-4">Contact</h3>

            <ul className="space-y-3 text-gray-800 text-sm">
              {/* Phone */}
              <li className="flex items-center gap-3">
                <FaPhoneAlt size={16} className="text-gray-700 flex-shrink-0" />
                <span className="font-medium text-lg">+91 93551 03322</span>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <FaEnvelope size={16} className="text-gray-700 flex-shrink-0" />
                <span className="font-medium text-lg">drmeenusinghgynec@gmail.com</span>
              </li>

              {/* Address */}
              <li className="flex gap-3 items-start">
                <FaMapMarkerAlt size={16} className="text-gray-700 mt-1 flex-shrink-0" />
                <span className="text-gray-800 text-sm">
                  <b className="font-semibold text-lg">Address:</b> Shop No. 3, Ground Floor, Plot No. HA-121, Shri Ram Complex, Beside V R Diagnostics, Hazipur, Sector 104, Noida, Gautam Budh Nagar, Uttar Pradesh – 201301
                </span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.facebook.com/people/Dr-Meenus-Gynecology-Fertility-Clinic/61581417162143/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-pink-500 text-white rounded-full flex items-center justify-center hover:bg-pink-600 transition duration-300"
              >
                <FaFacebookF size={14} />
              </a>

              <a
                href="https://www.instagram.com/drmeenusinghivf/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-pink-500 text-white rounded-full flex items-center justify-center hover:bg-pink-600 transition duration-300"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* ===== COPYRIGHT ===== */}
        <div className="border-t border-pink-200 mt-8 pt-4 text-center text-sm text-gray-700">
          © 2025 Dr. Meenu Singh | Powered by Dr. Meenu Singh | Created by Digimarq Technologies Pvt. Ltd.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
