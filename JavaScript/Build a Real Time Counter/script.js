const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

textInput.addEventListener("input", () => {
  if (textInput.value.length > 50) {
    textInput.value = textInput.value.slice(0, 50);
  }

  const count = textInput.value.length;
  console.log(count);

  charCount.textContent = `Character Count: ${count}/50`;

  if (count === 50) {
    charCount.classList.add("red");
  } else {
    charCount.classList.remove("red");
  }
});
