function destroyer(arr, ...values) {
  return arr.filter((item) => !values.includes(item));
}
