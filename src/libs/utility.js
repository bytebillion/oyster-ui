export function countWords(str) {
  if (typeof str !== "string") return 0;
  if (str === "") return 0;
  str = str.replace(/(\r\n|\n|\r)/gm, " ");
  const arr = str.split(" ");
  return arr.filter((word) => word !== "").length;
}

export function convertToPlain(html) {
  // Create a new div element
  var tempDivElement = document.createElement("div");

  // Set the HTML content with the given value
  tempDivElement.innerHTML = html;

  // Retrieve the text property of the element
  return tempDivElement.textContent || tempDivElement.innerText || "";
}

export function getWordAt(str, offset, length) {
  return str.substring(offset, offset + length);
}

export function replaceWord(str, replacement, offset, length) {
  return (
    str.substring(0, offset) +
    replacement +
    str.substring(offset + length, str.length)
  );
}

export function getDaysDiff(date1, date2) {
  if (!date1 || !date2) {
    return 0;
  }

  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return diffDays;
}
