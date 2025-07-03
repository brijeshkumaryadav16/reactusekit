/**
 * Format a date with locale support.
 * @param date - The date to format.
 * @param locale - The locale string (default: 'en-US').
 * @returns The formatted date string.
 */

export function formatDate(date: Date, locale = "en-US"): string {
  return new Intl.DateTimeFormat(locale).format(date);
}
