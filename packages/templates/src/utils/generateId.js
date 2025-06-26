// Generate unique identifiers for various use cases
export function generateId(options = {}) {
  const {
    length = 8,
    prefix = "",
    type = "alphanumeric",
    uppercase = false,
  } = options;

  // UUID generation
  if (type === "uuid") {
    // Simple UUID v4 implementation
    return (
      prefix +
      "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      })
    );
  }

  // Character sets for different types
  const charSets = {
    numeric: "0123456789",
    alpha: "abcdefghijklmnopqrstuvwxyz",
    alphanumeric: "abcdefghijklmnopqrstuvwxyz0123456789",
  };

  let chars = charSets[type];

  if (uppercase && type !== "numeric") {
    chars = chars.toUpperCase();
  }

  // Generate random ID
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return prefix + result;
}

/**
 * Generates a timestamp-based ID for better uniqueness
 *
 * @param {string} prefix - Optional prefix for the ID
 * @returns {string} A timestamp-based unique ID
 *
 * @example
 * ```js
 * generateTimestampId();           // '1703123456789_a7b8'
 * generateTimestampId('order_');   // 'order_1703123456789_x1y2'
 * ```
 */
export function generateTimestampId(prefix = "") {
  const timestamp = Date.now();
  const random = generateId({ length: 4, type: "alphanumeric" });
  return `${prefix}${timestamp}_${random}`;
}
