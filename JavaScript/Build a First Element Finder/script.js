function findElement(arr, func) {
  if (arr.length === 0) return undefined;

  return arr.find(func);
}
