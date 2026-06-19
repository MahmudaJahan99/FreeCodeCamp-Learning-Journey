function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 !== 0) {
      return `${year} is a leap year.`;
    } else {
      if (year % 400 === 0) {
        return `${year} is a leap year.`;
      } else {
        return `${year} is not a leap year.`;
      }
    }
  } else {
    return `${year} is a leap year.`;
  }
}
let year = 2024;
let result = isLeapYear(year);

console.log(result);
console.log(isLeapYear(2020));
console.log(isLeapYear(1900));
