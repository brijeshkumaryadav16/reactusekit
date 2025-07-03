/**
 * Truncate text to a maximum length with ellipsis.
 * @param {string} text - The text to truncate.
 * @param {number} maxLength - Maximum length before truncation.
 * @returns {string} The truncated text with ellipsis if needed.
 */

export function truncateText(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + "…" : text;
}
