import { useBoolean } from "../hooks/useBoolean";

export default function BooleanHook() {
  const { value, toggle, setFalse, setTrue, setValue } = useBoolean(true);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-center">useBoolean Hook Example</h2>
      <p className="text-center mt-5">Current Value: {value.toString()}</p>
      <div className="flex justify-center space-x-2 mt-5">
        <button className="border px-4 py-2" onClick={toggle}>
          Toggle
        </button>
        <button className="border px-4 py-2" onClick={setTrue}>
          Set True
        </button>
        <button className="border px-4 py-2" onClick={setFalse}>
          Set False
        </button>
        <button className="border px-4 py-2" onClick={() => setValue(true)}>
          Set Value to True
        </button>
        <button className="border px-4 py-2" onClick={() => setValue(false)}>
          Set Value to False
        </button>
      </div>
    </div>
  );
}
