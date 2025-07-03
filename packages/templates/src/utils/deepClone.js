/**
 * Create a deep copy of objects and arrays, handling nested structures safely.
 * @param {*} obj - The object or array to clone.
 * @returns {*} A deep copy of the input object.
 */

export function deepClone(obj) {
  // Handle null, undefined, and primitive types
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle Date objects
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  // Handle Arrays
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  // Handle RegExp
  if (obj instanceof RegExp) {
    return new RegExp(obj.source, obj.flags);
  }

  // Handle Objects
  if (typeof obj === "object") {
    const cloned = {};

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloned[key] = deepClone(obj[key]);
      }
    }

    return cloned;
  }

  return obj;
}
