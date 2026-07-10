function translatePigLatin(str) {
  // Starts with a vowel
  if (/^[aeiou]/i.test(str)) {
    return str + "way";
  }

  // Find the initial consonant cluster
  const consonantCluster = str.match(/^[^aeiou]+/i);

  // No vowels in the word
  if (!/[aeiou]/i.test(str)) {
    return str + "ay";
  }

  // Move the consonant cluster to the end and add "ay"
  return str.slice(consonantCluster[0].length) + consonantCluster[0] + "ay";
}
