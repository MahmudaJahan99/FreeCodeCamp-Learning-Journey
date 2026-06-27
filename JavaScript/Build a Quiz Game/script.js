const questions = [
  {
    category: "JavaScript Basics",
    question:
      "Which keyword is used to declare a variable that can be reassigned?",
    choices: ["var", "let", "const"],
    answer: "let",
  },
  {
    category: "JavaScript Data Types",
    question:
      "Which of the following is NOT a primitive data type in JavaScript?",
    choices: ["string", "number", "object"],
    answer: "object",
  },
  {
    category: "JavaScript Arrays",
    question: "Which method adds a new element to the end of an array?",
    choices: ["push", "pop", "shift"],
    answer: "push",
  },
  {
    category: "JavaScript Loops",
    question: "Which loop is best used to iterate over the values of an array?",
    choices: ["for...in", "for...of", "while"],
    answer: "for...of",
  },
  {
    category: "JavaScript Functions",
    question: "What keyword is used to return a value from a function?",
    choices: ["break", "return", "continue"],
    answer: "return",
  },
];

// Function to get a random question from the questions array
const getRandomQuestion = (questionArray) => {
  const randomindex = Math.floor(Math.random() * questionArray.length);
  return questionArray[randomindex];
};

// Function to get a random choice from the choices array
function getRandomComputerChoice(choiceArray) {
  const randomIndex = Math.floor(Math.random() * choiceArray.length);
  return choiceArray[randomIndex];
}

// Function to determine if the computer's choice is correct
function getResults(questionObject, computerChoice) {
  if (computerChoice === questionObject.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`;
  }
}

console.log(
  getResults(
    getRandomQuestion(questions),
    getRandomComputerChoice(getRandomQuestion(questions).choices),
  ),
);
