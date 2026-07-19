// utils/text.js
export function getFirstWords(text, amount = 3) {
  if (!text) return "";

  return text
    .replace(/[^\p{L}\p{N}\s'’ñ]/gu, "")
    .split(/\s+/)
    .slice(0, amount)
    .join(" ");
}