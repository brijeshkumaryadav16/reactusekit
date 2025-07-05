import { useState } from "react";
import { useClickOutside } from "../hooks/useClickOutside";

export default function UseClickOutsidePage() {
  const [isOpen, setIsOpen] = useState(true);

  const ref = useClickOutside<HTMLDivElement>(() => {
    console.log("Clicked outside");
    setIsOpen(false);
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {isOpen ? (
        <div ref={ref} className="p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-bold mb-2">Click Outside Me</h2>
          <p className="text-gray-600">
            Clicking outside this box will close it.
          </p>
        </div>
      ) : (
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => setIsOpen(true)}
        >
          Reopen Box
        </button>
      )}
    </div>
  );
}
