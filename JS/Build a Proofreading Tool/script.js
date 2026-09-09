function isPalindrome(word) {
  word = word.toLowerCase();
  return word.split("").reverse().join("") === word;
}

function findPalindromeBreaks(words) {
  if (words.length === 0) return [];

  let notPalindrome = [];

  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      notPalindrome.push(i);
    }
  }

  return notPalindrome;
}

function findRepeatedPhrases(words, phraseLength) {
  if (phraseLength >= words.length) {
    return [];
  }

  const phrases = {};
  const result = [];

  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase = words.slice(i, i + phraseLength).join(" ");

    if (phrases[phrase] === undefined) {
      phrases[phrase] = i;
    } else {
      if (!result.includes(phrases[phrase])) {
        result.push(phrases[phrase]);
      }

      result.push(i);
    }
  }

  return result;
}

function analyzeTexts(texts, phraseLength) {
  if (texts.length === 0) {
    return [];
  }

  const results = [];

  for (let i = 0; i < texts.length; i++) {
    results.push({
      repeatedPhrases: findRepeatedPhrases(texts[i], phraseLength),
      palindromeBreaks: findPalindromeBreaks(texts[i]),
    });
  }

  return results;
}
