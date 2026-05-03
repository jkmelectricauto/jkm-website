import React from "react";

function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-white via-blue-50 to-gray-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-4">
            OEM Manufacturer • India
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Premium EV <br />
            Spare Parts & <br />
            Electric Vehicles
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
            JKM Electric Automobiles Pvt Ltd manufactures high-performance
            Hydraulic Differential, Front Fork, E-Rickshaw and E-Auto solutions
            for dealers, distributors and B2B partners across India.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/918447828772"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Get Dealership
            </a>

            <a
              href="tel:92114242765"
              className="border border-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-white transition"
            >
              Call Now
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500 italic">
            “Bheed nahi, pehchan banao. Chalao Jeet Electric Auto.”
          </p>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-blue-200 blur-3xl opacity-40 rounded-full"></div>

          <img
            src="https://scontent-del3-1.xx.fbcdn.net/v/t39.30808-6/670148241_122221526162283370_6385073869020673714_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=V4EDTgQfxjsQ7kNvwHvh-Vl&_nc_oc=AdoRF0f5QJEQSJFRQhUbVr-13Z_nct-dHZhn_mmxHWL6cYZMCInyWxhERhGpEI7cmng&_nc_zt=23&_nc_ht=scontent-del3-1.xx&_nc_gid=v5RZczY8qPuoWx05iUj67A&_nc_ss=7b2a8&oh=00_Af6UTSTy1bZKwnrdnsvmLVjzi2Z-PfeMNTIof_PjStz0Jg&oe=69FD6B0F"
            alt="Electric Vehicle"
            className="relative rounded-3xl shadow-2xl w-full object-cover h-[550px]"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;