function truncateString(string, num) {
  let stringLength = string.length;
  if (stringLength > num) {
    let newString = `${string.substring(0, num)}...`;
    return newString;
  } else if (stringLength <= num) {
    return string;
  }
}
