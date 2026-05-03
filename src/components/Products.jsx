import React from "react";
import { Link } from "react-router-dom";

function Products() {
  const products = [
    {
      title: "Hydraulic Differential",
      desc: "OEM grade high-strength differential for electric rickshaw with smooth performance and durability.",
      link: "/hydraulic-differential",
      img: "https://5.imimg.com/data5/SELLER/Default/2026/3/589188941/YB/DP/EO/59973535/gemini-generated-image-jxpmxcjxpmxcjxpm-png-1000x1000.png",
    },
    {
      title: "Front Fork Dual Suspension",
      desc: "Hydraulic and mechanical brake variants with strong stability and road control.",
      link: "/front-fork",
      img: "https://5.imimg.com/data5/SELLER/Default/2026/3/594784103/GX/AQ/KE/59973535/front-fork-chimta-l5-l3-1000x1000.png",
    },
    {
      title: "Electric Rickshaw",
      desc: "Reliable EV vehicle designed for Indian roads with performance and comfort.",
      link: "/electric-rickshaw",
      img: "/Users/mohit/jkm-website/public/images/e-auto.jpeg",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Products
          </h2>
          <p className="text-gray-600 mt-4">
            Explore our premium EV products and spare parts
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-2">
                  {item.desc}
                </p>

                <Link
                  to={item.link}
                  className="inline-block mt-5 text-blue-600 font-semibold hover:text-blue-800"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Products;