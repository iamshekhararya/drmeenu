const ConsultationCTA = () => {
  return (
    <section className="bg-pink-50 py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-xl border-l-4 border-pink-500 px-6 md:px-16 py-12 text-center">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
          Book Your Consultation
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Take the first step toward better health and fertility with Dr.
          Meenu Singh's expert guidance.
        </p>

        {/* CTA Button */}
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-8 py-3 rounded-lg transition">
          Contact Now
        </button>

      </div>
    </section>
  );
};

export default ConsultationCTA;
