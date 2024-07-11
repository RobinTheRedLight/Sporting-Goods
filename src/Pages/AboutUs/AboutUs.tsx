const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <section className="mb-12">
        <h2 className="text-4xl  mb-4 font-[Oswald]">About Our Company</h2>
        <p className="text-lg text-gray-700 font-[Roboto]">
          We are a leading company in the industry, committed to providing
          top-notch services and products to our customers. Our journey began
          over a decade ago, and we have since grown into a trusted brand known
          for our quality and dedication.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="mb-12">
        <h2 className="text-4xl  mb-4 font-[Oswald]">Our Mission & Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl  mb-2 font-[Roboto]">Mission</h3>
            <p className="text-lg text-gray-700 font-[Roboto]">
              Our mission is to deliver exceptional value to our customers
              through innovation, quality, and commitment. We strive to exceed
              expectations and build long-lasting relationships.
            </p>
          </div>
          <div>
            <h3 className="text-2xl mb-2 font-[Roboto]">Vision</h3>
            <p className="text-lg text-gray-700 font-[Roboto]">
              Our vision is to be a global leader in our industry, recognized
              for our excellence and integrity. We aim to create a sustainable
              future by making a positive impact on our community and
              environment.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="mb-12">
        <h2 className="text-4xl  mb-4 font-[Oswald]">Contact Information</h2>
        <p className="text-lg text-gray-700 font-[Roboto]">
          If you have any questions or need further information, feel free to
          reach out to us:
        </p>
        <ul className="list-disc list-inside mt-4 text-lg text-gray-700 font-[Roboto]">
          <li>Email: sportspot@gmail.com</li>
          <li>Phone: +8801712345678</li>
          <li>
            Address: 37 Laldighi South, Kolabari Shyamganj, Sylhet, Bangladesh
          </li>
        </ul>
      </section>

      {/* Our Team */}
      <section className="mb-12">
        <h2 className="text-4xl  mb-4 font-[Oswald]">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-[Roboto]">
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-lg text-gray-700">CEO</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-lg text-gray-700">CTO</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Emily Johnson</h3>
            <p className="text-lg text-gray-700">COO</p>
          </div>
        </div>
      </section>

      {/* Store Location */}
      <section>
        <h2 className="text-4xl font-[Oswald] mb-4 ">Our Store Location</h2>
        <p className="text-lg text-gray-700 font-[Roboto]">
          Visit our store at the following location:
        </p>
        <div className="mt-4 font-[Roboto]">
          <p className="text-lg text-gray-700">
            123 Main Street, City, Country
          </p>
          <iframe
            className="w-full h-64 mt-4 border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093697!2d144.95373531558973!3d-37.81627974202162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d7d7a9c8a10e!2s123%20Main%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1594832898259!5m2!1sen!2sus"
            allowFullScreen={true}
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
