import React from "react";

function FloatingButtons() {
  return (
    <div>

      {/* WhatsApp */}
      <a
        href="https://wa.me/918447828772"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-600 z-50"
      >
        WhatsApp
      </a>

      {/* Call */}
      <a
        href="tel:92114242765"
        className="fixed bottom-6 left-6 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 z-50"
      >
        Call
      </a>

    </div>
  );
}

export default FloatingButtons;