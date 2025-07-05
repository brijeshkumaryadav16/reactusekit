import { useBoolean } from "../hooks/useBoolean";

export default function UseBooleanPage() {
  const { value, setTrue, setFalse, toggle, setValue } = useBoolean(false);

  return (
    <div className="p-6 max-w-2xl mx-auto mt-10 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-2">useBoolean Example</h2>
      <p className="text-lg mb-4">
        Current value:{" "}
        <span
          className={`font-bold ${value ? "text-green-600" : "text-red-600"}`}
        >
          {value.toString()}
        </span>
      </p>
      <div className="space-x-2">
        <button
          onClick={setTrue}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          Set True
        </button>
        <button
          onClick={setFalse}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          Set False
        </button>
        <button
          onClick={toggle}
          className="px-3 py-1 bg-yellow-500 text-white rounded"
        >
          Toggle
        </button>
        <button
          onClick={() => setValue(true)}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          setValue(true)
        </button>
        <button
          onClick={() => setValue(false)}
          className="px-3 py-1 bg-blue-700 text-white rounded"
        >
          setValue(false)
        </button>
      </div>
    </div>
  );
}
