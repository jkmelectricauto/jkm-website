import React from "react";

function WhyChooseUs() {
  const stats = [
    { number: "2019+", label: "Established Brand" },
    { number: "1000+", label: "Satisfied Dealers & Buyers" },
    { number: "28+", label: "States Reach Across India" },
    { number: "OEM", label: "Manufacturing Quality" },
  ];

  const points = [
    "Premium raw material & strong build quality",
    "Reliable supply for dealers and distributors",
    "Precision engineering for long life",
    "Fast support and B2B partnership model",
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-blue-300 text-sm font-semibold">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Built On Trust & Performance
          </h2>

          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            JKM Electric Automobiles delivers premium EV spare parts and
            scalable dealership opportunities across India.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/10"
            >
              <h3 className="text-4xl font-bold text-white">
                {item.number}
              </h3>
              <p className="text-gray-300 mt-2">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Points */}
        <div className="grid md:grid-cols-2 gap-6">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-2xl p-6 border border-white/10"
            >
              <p className="text-lg text-gray-200">✓ {point}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;