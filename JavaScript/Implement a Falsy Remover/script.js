function bouncer(arr) {
  const noFalsies = [];

  for (let item of arr) {
    if (item) {
      noFalsies.push(item);
    }
  }

  return noFalsies;
}
