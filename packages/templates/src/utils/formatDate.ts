// Format a date with locale support
export function formatDate(date: Date, locale = "en-US"): string {
  return new Intl.DateTimeFormat(locale).format(date);
}
