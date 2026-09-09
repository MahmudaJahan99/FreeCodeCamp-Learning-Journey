const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

const spaceRegex = /[^a-z0-9]/gi;
// const checkList = [spaceRegex];

function isPalindrome(str) {
  const cleanedStr = str.replace(spaceRegex, "").toLowerCase();
  return cleanedStr === cleanedStr.split("").reverse().join("");
  console.log(cleanedStr);
}

checkButton.addEventListener("click", () => {
  const userInput = textInput.value;

  if (userInput.trim().length === 0) {
    alert("Please input a value");
    return;
  }

  isPalindrome(userInput)
    ? (result.textContent = `${userInput} is a palindrome`)
    : (result.textContent = `${userInput} is not a palindrome`);

  textInput.value = "";
});
