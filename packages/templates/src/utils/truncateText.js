// Truncate text to a maximum length with ellipsis
export function truncateText(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + '…' : text;
}
