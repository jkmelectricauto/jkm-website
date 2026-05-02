import React, { useState } from "react";

function Dealership() {
  const [formData, setFormData] = useState({
    full_name: "",
    company_name: "",
    phone: "",
    email: "",
    city: "",
    requirement: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5001/submit-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.text();
      alert(result);

      setFormData({
        full_name: "",
        company_name: "",
        phone: "",
        email: "",
        city: "",
        requirement: "",
      });
    } catch (error) {
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>
          <p className="text-blue-600 uppercase tracking-widest text-sm font-semibold">
            Partnership Opportunity
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
            Become Our Dealer <br /> Across India
          </h2>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            Join JKM Electric Automobiles and expand your EV business with
            premium spare parts, trusted supply chain and OEM quality products.
          </p>

          <div className="mt-8 space-y-4 text-gray-700">
            <p>✓ High demand EV product category</p>
            <p>✓ Strong margins for dealers</p>
            <p>✓ All India expansion support</p>
            <p>✓ Trusted manufacturing brand</p>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Send Inquiry
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              value={formData.full_name}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              name="company_name"
              placeholder="Company Name"
              value={formData.company_name}
              onChange={handleChange}
              className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              name="city"
              placeholder="City / State"
              value={formData.city}
              onChange={handleChange}
              className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="requirement"
              placeholder="Your Requirement"
              rows="4"
              value={formData.requirement}
              onChange={handleChange}
              className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              {loading ? "Submitting..." : "Submit Inquiry"}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

export default Dealership;