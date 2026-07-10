const regexPattern = document.querySelector("#pattern");
const stringToTest = document.querySelector("#test-string");
const testButton = document.querySelector("#test-btn");
const testResult = document.querySelector("#result");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
  let flags = "";

  if (caseInsensitiveFlag.checked) {
    flags += "i";
  }

  if (globalFlag.checked) {
    flags += "g";
  }

  return flags;
}

testButton.addEventListener("click", () => {
  const pattern = regexPattern.value;
  const text = stringToTest.textContent;
  const flags = getFlags();

  try {
    const regex = new RegExp(pattern, flags);

    const matches = text.match(regex);

    if (matches) {
      testResult.textContent = matches.join(", ");

      // Highlight matches
      stringToTest.innerHTML = text.replace(
        regex,
        '<span class="highlight">$&</span>',
      );
    } else {
      testResult.textContent = "no match";
      stringToTest.textContent = text;
    }
  } catch (error) {
    testResult.textContent = "Invalid regular expression";
  }
});
