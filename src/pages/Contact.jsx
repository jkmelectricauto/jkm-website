function Contact() {
  return (
    <section className="pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900">
            Contact Us
          </h1>
          <p className="text-gray-600 mt-4">
            Get in touch with JKM Electric Automobiles
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left Info */}
          <div className="bg-white p-8 rounded-2xl shadow-md space-y-5">
            <p>📍 New Delhi, India</p>
            <p>📞 92114242765</p>
            <p>📱 8447828772</p>
            <p>✉ jkmelectricauto@gmail.com</p>

            <a
              href="https://wa.me/918447828772"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600"
            >
              WhatsApp Now
            </a>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-md">
            <iframe
              title="location"
              src="https://maps.app.goo.gl/WibVhnjsasefyys27"
              className="w-full h-[400px] border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;