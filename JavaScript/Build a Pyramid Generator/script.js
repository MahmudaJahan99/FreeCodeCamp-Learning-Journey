function pyramid(char, rows, faceUpwards) {
  let result = "\n";

  if (!faceUpwards) {
    for (let i = 1; i <= rows; i++) {
      let spaces = " ".repeat(rows - i);
      let chars = char.repeat(2 * i - 1);
      result += spaces + chars + "\n";
    }
  } else {
    for (let i = rows; i >= 1; i--) {
      let spaces = " ".repeat(rows - i);
      let chars = char.repeat(2 * i - 1);
      result += spaces + chars + "\n";
    }
  }

  return result;
}
