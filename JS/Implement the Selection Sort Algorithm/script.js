function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let smallestIndex = i;

    // Find the smallest element
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[smallestIndex]) {
        smallestIndex = j;
      }
    }

    // Swap smallest element with array[i]
    let temp = array[i];
    array[i] = array[smallestIndex];
    array[smallestIndex] = temp;
  }

  return array;
}

console.log(
  selectionSort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ]),
);
