import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <h2 className="text-2xl font-bold">
            JKM <span className="text-blue-500">Electric</span>
          </h2>

          <p className="text-gray-400 mt-4 leading-relaxed">
            Premium manufacturer of EV spare parts, Hydraulic Differential,
            Front Fork, E-Rickshaw and Electric Auto solutions across India.
          </p>

          <p className="text-sm text-gray-500 mt-5">
            Est. 2019 • New Delhi
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Quick Links</h3>

          <ul className="space-y-3 text-gray-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Products</a></li>
            <li><a href="#" className="hover:text-white">Dealership</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Products</h3>

          <ul className="space-y-3 text-gray-400">
            <li>Hydraulic Differential</li>
            <li>Front Fork</li>
            <li>Electric Rickshaw</li>
            <li>Electric Auto</li>
            <li>OEM Spare Parts</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Contact</h3>

          <ul className="space-y-3 text-gray-400">
            <li>📍 New Delhi, India</li>
            <li>📞 92114242765</li>
            <li>📱 8447828772</li>
            <li>✉ jkmelectricauto@gmail.com</li>
          </ul>

          <a
            href="https://wa.me/918447828772"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 bg-green-500 px-5 py-3 rounded-full font-semibold hover:bg-green-600 transition"
          >
            WhatsApp Now
          </a>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-14 pt-8 text-center text-gray-500 text-sm">
        © 2026 JKM Electric Automobiles Pvt Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;