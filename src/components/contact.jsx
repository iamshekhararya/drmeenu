import React, { useState } from "react";
import contact from "../assets/images/contact/1.jpg";

const Contact = () => {
  // Form state
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp number with country code (example: India +91)
    const phoneNumber = "919355103222";

    // Prepare message text
    const text = `Hello, I want to contact you.%0A
    Name: ${form.firstName} ${form.lastName}%0A
    Email: ${form.email}%0A
    Subject: ${form.subject}%0A
    Message: ${form.message}`;

    // Open WhatsApp link
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="bg-pink-50 min-h-screen">
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-7xl font-bold mb-12">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* ===== LEFT: Form ===== */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-4xl font-semibold mb-4">Send Us Message</h3>
            <p className="text-gray-700 mb-6 text-lg">
              We at <strong>Dr. Meenu’s Gynecology & Fertility Clinic</strong> are always here to listen, guide, and support you. Reach out today!
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="w-1/2 p-2 border border-gray-300 rounded"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-1/2 p-2 border border-gray-300 rounded"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full p-2 border border-gray-300 rounded"
                value={form.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                className="w-full p-2 border border-gray-300 rounded h-32"
                value={form.message}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* ===== RIGHT: Contact Info ===== */}
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md h-[200px] flex flex-col items-left justify-left gap-4 flex-1 text-left">
                <span className="text-pink-500 text-4xl">📞</span>
                <h4 className="font-semibold">Call Us</h4>
                <p>+91 93551 03222</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md h-[200px] flex flex-col items-left justify-left gap-4 flex-1 text-left">
                <span className="text-pink-600 text-4xl">✉️</span>
                <h4 className="font-semibold">Email Us</h4>
                <p>drrmeenusinghgyne@gmail.com</p>
              </div>
            </div>

            <div className="bg-pink-500 text-white shadow-md">
              <h4 className="font-semibold text-2xl mb-4 pl-6 pt-6">
                Our Location
              </h4>
              <p className="text-lg mb-20 pl-6 pt-2 pb-2">
                Shop No. 3, Ground Floor, Plot No. HA-121, Shri Ram Complex,
                Beside V R Diagnostics, Hazipur, Sector 104, Noida, Gautam Budh
                Nagar, Uttar Pradesh – 201301
              </p>
              <img src={contact} alt="Clinic" className="w-full shadow" />
            </div>
          </div>
        </div>

        {/* ===== GOOGLE MAP ===== */}
        <div className="mt-8 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.5454111053666!2d77.35691431505907!3d28.57798898242603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4233f5f86f1%3A0x1f4bdb0fcd58c6e6!2sNoida%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1697116712345!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
