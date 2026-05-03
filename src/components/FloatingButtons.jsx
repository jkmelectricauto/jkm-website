import React from "react";

function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">

      {/* Call Button */}
      <a
        href="tel:92114242765"
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
      >
        📞
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918447828772"
        target="_blank"
        rel="noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600"
      >
        💬
      </a>

    </div>
  );
}

export default FloatingButtons;