function titleCase(str) {
  let wordsArray = str.split(" ");
  let capitalizedWordsArray = [];

  for (let word of wordsArray) {
    let capitalized =
      word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
    capitalizedWordsArray.push(capitalized);
  }

  return capitalizedWordsArray.join(" ");
}
