// Create a deep copy of objects and arrays, handling nested structures safely
export function deepClone<T>(obj: T): T {
  // Handle null, undefined, and primitive types
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle Date objects
  if (obj instanceof Date) {
    return new Date(obj.getTime()) as T;
  }

  // Handle Arrays
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item)) as T;
  }

  // Handle RegExp
  if (obj instanceof RegExp) {
    return new RegExp(obj.source, obj.flags) as T;
  }

  // Handle Objects
  if (typeof obj === "object") {
    const cloned = {} as T;

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        (cloned as any)[key] = deepClone((obj as any)[key]);
      }
    }

    return cloned;
  }

  return obj;
}
