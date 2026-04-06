/** @format */

export function decodeHtml(html) {
 const parser = new DOMParser();
 const doc = parser.parseFromString(html, "text/html");
 return doc.documentElement.textContent;
}
