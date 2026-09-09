function confirmEnding(str1, str2) {
  let str2Length = str1.length - str2.length;
  if (str1.includes(str2, str2Length)) {
    return true;
  } else {
    return false;
  }
}
