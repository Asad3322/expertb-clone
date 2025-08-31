import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
      <div className="flex space-x-2">
        <span className="w-4 h-4 bg-red-500 rounded-full animate-bounce"></span>
        <span className="w-4 h-4 bg-red-500 rounded-full animate-bounce [animation-delay:-0.2s]"></span>
        <span className="w-4 h-4 bg-red-500 rounded-full animate-bounce [animation-delay:-0.4s]"></span>
      </div>
    </div>
  );
}
