import { ContactForm } from "../../../types/ContactForm.types";
import React, { useState } from "react";

const ContactUs = () => {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Form submitted successfully!");
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <h2 className="text-5xl  text-center mb-8 font-[Oswald]">CONTACT US</h2>
      <div className="max-w-6xl mx-auto p-6 bg-white mb-12 ">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-4">
            <h1 className="font-[Oswald] text-5xl  text-yellow-500 mb-4">
              Get in Touch
            </h1>
            <p className="mb-2 font-[Roboto]">
              <i className="fas fa-map-marker-alt mr-2"></i> 37 Laldighi South,
              Kolabari Shyamganj, Sylhet, Bangladesh
            </p>
            <p className="mb-2 font-[Roboto]">
              <i className="fas fa-envelope mr-2"></i> sportspot@gmail.com
            </p>
            <p className="mb-2 font-[Roboto]">
              <i className="fas fa-phone-alt mr-2"></i> <a>+8801712345678</a>
            </p>
          </div>

          <div className="w-full md:w-1/2 p-4 font-[Roboto]">
            <h2 className="text-xl font-semibold uppercase tracking-wide mb-4">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                  rows={4}
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 bg-black text-white font-bold rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  Send Messages
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
