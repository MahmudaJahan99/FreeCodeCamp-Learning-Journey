let count = 0;

function cardCounter(card) {
  if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
    count++;
  } else if (
    card === 10 ||
    card === "A" ||
    card === "J" ||
    card === "Q" ||
    card === "K"
  ) {
    count--;
  } else {
    count;
  }

  if (count <= 0) {
    return `${count} Hold`;
  } else {
    return `${count} Bet`;
  }
}

console.log(cardCounter("J"));
