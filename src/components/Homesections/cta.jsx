import { Link } from "react-router-dom";
import BgImage from "../../assets/images/Home/cta.jpg"; // apni image path yaha set karein

const ConsultationCTA = () => {
  return (
    <section className="bg-pink-100 py-10 px-4">
      <div
        className="max-w-7xl mx-auto rounded-xl border-l-4 border-pink-500 px-6 md:px-16 py-12 text-center bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10">
          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4">
            Book Your Consultation
          </h2>

          {/* Description */}
          <p className="text-white max-w-3xl mx-auto mb-8 leading-relaxed">
            Take the first step toward better health and fertility with Dr. Meenu
            Singh's expert guidance.
          </p>

          {/* CTA Button */}
          <Link to="/contact-us">
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-8 py-3 rounded-lg transition">
              Contact Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
