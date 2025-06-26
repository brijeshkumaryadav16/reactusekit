// Format a date with locale support
export function formatDate(date, locale = "en-US") {
  return new Intl.DateTimeFormat(locale).format(date);
}
