/** @format */

// loaders/optionsLoader.js
export async function optionsLoader() {
  const res = await fetch("https://opentdb.com/api_category.php");
  return res.json();
}

