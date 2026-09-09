function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  let index = arr.findIndex((x) => x >= num);

  return index === -1 ? arr.length : index;
}
