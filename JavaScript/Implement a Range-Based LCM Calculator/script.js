function smallestCommons(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  function gcd(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  let result = min;

  for (let i = min + 1; i <= max; i++) {
    result = lcm(result, i);
  }

  return result;
}
