function pairElement(DNAstr) {
  let pairedBases = [];
  for (let strand of DNAstr) {
    switch (strand.toUpperCase()) {
      case "A":
        pairedBases.push(["A", "T"]);
        break;
      case "T":
        pairedBases.push(["T", "A"]);
        break;

      case "C":
        pairedBases.push(["C", "G"]);
        break;

      case "G":
        pairedBases.push(["G", "C"]);
        break;

      default:
        break;
    }
  }
  return pairedBases;
}