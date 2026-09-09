function largestOfAll(arrOfarrs) {
  const result = [];

  for (let arr of arrOfarrs) {
    let largestNum = arr[0];

    for (let i = 0; i < arr.length; i++) {
      if (largestNum < arr[i]) {
        largestNum = arr[i];
      }
    }

    result.push(largestNum);
  }

  return result;
}
