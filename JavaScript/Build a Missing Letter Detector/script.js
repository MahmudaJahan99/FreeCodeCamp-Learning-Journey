function fearNotLetter(str) {
  let strArr = str.split("");
  let asciiArr = [];
  for (let i = 0; i < strArr.length; i++) {
    asciiArr.push(strArr[i].charCodeAt());
  }

  let comparison = asciiArr[0];

  for (let j = 1; j < asciiArr.length; j++) {
    if (asciiArr[j] - comparison === 1) {
      comparison = asciiArr[j];
    } else {
      return String.fromCharCode(comparison + 1);
    }
  }

  return undefined;
}
