// Check if a value is empty (null, undefined, empty string, array, or object)
export function isEmpty(value) {
  // null or undefined
  if (value == null) {
    return true;
  }

  // String (including whitespace-only strings)
  if (typeof value === "string") {
    return value.trim().length === 0;
  }

  // Array
  if (Array.isArray(value)) {
    return value.length === 0;
  }

  // Object (plain objects only)
  if (typeof value === "object" && value.constructor === Object) {
    return Object.keys(value).length === 0;
  }

  // For other types (numbers, booleans, functions, etc.), consider them not empty
  return false;
}
