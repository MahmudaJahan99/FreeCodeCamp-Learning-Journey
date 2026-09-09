// function repeatStringNumTimes(str, num) {
//   if (num <= 0) {
//     return "";
//   } else {
//     return str.repeat(num)
//   }
// }

function repeatStringNumTimes(str, num) {
  let result;

  if (num <= 0) {
    return "";
  }

  return str + repeatStringNumTimes(str, num - 1);
}
