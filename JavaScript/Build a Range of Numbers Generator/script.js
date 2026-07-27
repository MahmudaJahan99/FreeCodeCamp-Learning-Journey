function rangeOfNumbers(startNum, endNum) {
  const rangeArray = [];

  if (startNum > endNum) {
    return [];
  } else if (startNum === endNum) {
    return [startNum];
  } else {
    return [startNum, ...rangeOfNumbers(startNum + 1, endNum)];
  }
}

console.log(rangeOfNumbers(3, 9));
