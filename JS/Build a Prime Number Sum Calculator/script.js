function sumPrimes(num) {
  if (num < 2) {
    return 0;
  }

  let sum = 0;

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

function isPrime(number) {
  // Numbers less than or equal to 1 are not prime
  if (number <= 1) return false;

  // 2 is the only even prime number
  if (number === 2) return true;

  // Exclude all other even numbers
  if (number % 2 === 0) return false;

  // Check odd factors up to the square root of the number
  const boundary = Math.sqrt(number);
  for (let i = 3; i <= boundary; i += 2) {
    if (number % i === 0) return false;
  }

  return true;
}
