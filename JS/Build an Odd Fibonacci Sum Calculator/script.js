function sumFibs(num) {
  let fibsArray = [0, 1];
  do {
    let nextFib =
      fibsArray[fibsArray.length - 1] + fibsArray[fibsArray.length - 2];

    if (nextFib > num) break;

    fibsArray.push(nextFib);
  } while (true);

  return fibsArray.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n, 0);
}
