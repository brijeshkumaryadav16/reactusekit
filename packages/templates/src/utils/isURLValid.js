/**
 * Check if a string is a valid URL.
 * @param {string} url - The URL string to validate.
 * @param {Object} options - Configuration options for validation.
 * @param {boolean} options.allowRelative - Whether to allow relative URLs (default: false).
 * @param {string[]} options.protocols - Array of allowed protocols (default: ['http', 'https']).
 * @returns {boolean} True if the URL is valid, false otherwise.
 */

export function isURLValid(url, options = {}) {
  const { allowRelative = false, protocols = ["http", "https"] } = options;

  if (!url || typeof url !== "string") {
    return false;
  }

  // Handle relative URLs
  if (allowRelative && url.startsWith("/")) {
    return true;
  }

  try {
    const urlObj = new URL(url);

    // Check if protocol is allowed
    const protocol = urlObj.protocol.slice(0, -1); // Remove trailing ':'
    return protocols.includes(protocol);
  } catch {
    return false;
  }
}
