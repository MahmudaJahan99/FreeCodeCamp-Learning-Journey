// Initialize the poll
const poll = new Map();

// Function to add options
function addOption(option) {
  if (!option) {
    return "Option cannot be empty.";
  }

  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  } else {
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
  }
}

// Function to vote
function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }

  const voters = poll.get(option);

  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  } else {
    voters.add(voterId);
    return `Voter ${voterId} voted for "${option}".`;
  }
}

// Function to display results
function displayResults() {
  let results = "Poll Results:\n";

  for (const [option, voters] of poll) {
    results += `${option}: ${voters.size} votes\n`;
  }

  return results.trim();
}

// Add at least three options
console.log(addOption("Turkey"));
console.log(addOption("Morocco"));
console.log(addOption("Japan"));
console.log(addOption("Egypt"));

// Add at least three votes
console.log(vote("Turkey", 101));
console.log(vote("Turkey", 102));
console.log(vote("Morocco", 103));

// Display results
console.log(displayResults());
