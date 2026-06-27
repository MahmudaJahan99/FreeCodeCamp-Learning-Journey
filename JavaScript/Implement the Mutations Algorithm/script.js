function mutation(arr) {
  let word1 = arr[0].toLowerCase();
  let word2 = arr[1].toLowerCase();

  let wordToMatch = word2.split("");

  let matched = 0;

  for (let i = 0; i < wordToMatch.length; i++) {
    if (word1.includes(wordToMatch[i])) {
      matched++;
    }
  }

  if (matched === wordToMatch.length) {
    return true;
  } else return false;
}
