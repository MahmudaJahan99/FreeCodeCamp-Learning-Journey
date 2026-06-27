function findLongestWordLength(sentence) {
  const wordsArray = sentence.split(" ");

  let count = 0;
  let longestWord;

  for (let word of wordsArray) {
    if (word.length > count) {
      longestWord = word;
      count = word.length;
    }
  }

  return longestWord.length;
}
