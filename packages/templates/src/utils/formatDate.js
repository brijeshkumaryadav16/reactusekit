/**
 * Format a date with locale support.
 * @param {Date} date - The date to format.
 * @param {string} locale - The locale string (default: 'en-US').
 * @returns {string} The formatted date string.
 */

export function formatDate(date, locale = "en-US") {
  return new Intl.DateTimeFormat(locale).format(date);
}
