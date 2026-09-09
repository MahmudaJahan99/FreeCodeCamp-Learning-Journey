function countdown(number) {
  let countArray = [];

  if (number < 1) {
    return [];
  } else {
    return [number, ...countdown(number - 1)];
  }
}

console.log(countdown(5));
