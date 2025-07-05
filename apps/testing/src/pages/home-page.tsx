import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4 text-center">
        React UseKit Manual Test
      </h1>
      <p className="text-center mb-6">
        This is a manual testing page for the Hooks and Utils.
      </p>
      <h2 className="text-xl font-semibold mb-4">Available Hooks</h2>
      <nav className="space-x-4 mb-6">
        <Link to="/use-boolean" className="text-blue-600 underline">
          useBoolean
        </Link>
        <Link to="/use-click-outside" className="text-blue-600 underline">
          useClickOutside
        </Link>
      </nav>

      <h2 className="text-xl font-semibold mb-4">Available Utils</h2>
      <nav>
        <Link to="/utils" className="text-blue-600 underline">
          Utils
        </Link>
      </nav>
    </div>
  );
}
