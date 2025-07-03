/**
 * Format a number as currency with locale support.
 * @param {number} amount - The number to format as currency.
 * @param {string} currency - The currency code (default: 'USD').
 * @param {string} locale - The locale string (default: 'en-US').
 * @returns {string} The formatted currency string.
 */

export function formatCurrency(amount, currency = "USD", locale = "en-US") {
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(
    amount
  );
}
