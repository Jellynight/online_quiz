/** @format */

export function decodeHtml(html) {
  if (!html || typeof html !== "string") return html;
  if (!html.includes("&")) return html;
 const parser = new DOMParser();
 const doc = parser.parseFromString(html, "text/html");
 return doc.documentElement.textContent;
}
