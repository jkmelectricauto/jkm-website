import React, { useState } from "react";

function Dealership() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
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
            premium spare parts and OEM quality products.
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

          <form
              name="dealer-form"
              method="POST"
              data-netlify="true"
              action="/thank-you"
              className="space-y-4"
            >
            {/* Required hidden input */}
            <input type="hidden" name="form-name" value="dealer-form" />

            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              required
              className="w-full border border-gray-200 p-4 rounded-xl"
            />

            <input
              type="text"
              name="company_name"
              placeholder="Company Name"
              className="w-full border border-gray-200 p-4 rounded-xl"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full border border-gray-200 p-4 rounded-xl"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full border border-gray-200 p-4 rounded-xl"
            />

            <input
              type="text"
              name="city"
              placeholder="City / State"
              className="w-full border border-gray-200 p-4 rounded-xl"
            />

            <textarea
              name="requirement"
              placeholder="Your Requirement"
              rows="4"
              className="w-full border border-gray-200 p-4 rounded-xl"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold"
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