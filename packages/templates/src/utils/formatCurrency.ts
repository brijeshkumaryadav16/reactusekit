/**
 * Format a number as currency with locale support.
 * @param amount - The number to format as currency.
 * @param currency - The currency code (default: 'USD').
 * @param locale - The locale string (default: 'en-US').
 * @returns The formatted currency string.
 */

export function formatCurrency(
  amount: number,
  currency = "USD",
  locale = "en-US"
): string {
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(
    amount
  );
}
