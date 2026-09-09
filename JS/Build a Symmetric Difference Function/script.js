function diffArray(arr1, arr2) {
  //   return arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)));

  for (let item of arr2) {
    if (arr1.includes(item)) {
      arr1 = arr1.filter((x) => x !== item);
      arr2 = arr2.filter((x) => x !== item);
    }
  }

  return arr1.concat(arr2);
}
