function uniteUnique(...arrs) {
  let flatArr = [];
  for (let arr of arrs) {
    flatArr = flatArr.concat(arr);
  }

  let uniqueArr = [flatArr[0]];
  for (let num of flatArr) {
    if (!uniqueArr.includes(num)) {
      uniqueArr.push(num);
    }
  }

  return uniqueArr;
}
