function sumAll([n, m]) {
  let smallNum;
  let largeNum;
  let sum = 0;

  if (n > m) {
    smallNum = m;
    largeNum = n;
  } else {
    smallNum = n;
    largeNum = m;
  }

  for (let i = smallNum; i <= largeNum; i++) {
    sum += i;
  }

  return sum;
}
