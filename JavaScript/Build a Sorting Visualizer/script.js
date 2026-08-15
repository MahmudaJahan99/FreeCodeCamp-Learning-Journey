function generateElement() {
  return Math.floor(Math.random() * 100) + 1;
}

function generateArray() {
  const array = [];

  for (let i = 0; i < 5; i++) {
    array.push(generateElement());
  }

  return array;
}

function generateContainer() {
  return document.createElement("div");
}

function fillArrContainer(htmlElement, array) {
  array.forEach((value) => {
    const span = document.createElement("span");
    span.textContent = value;
    htmlElement.appendChild(span);
  });
}

function isOrdered(int1, int2) {
  return int1 <= int2;
}

function swapElements(array, index) {
  if (!isOrdered(array[index], array[index + 1])) {
    let temp = array[index];
    array[index] = array[index + 1];
    array[index + 1] = temp;
  }
}

function highlightCurrentEls(htmlElement, index) {
  htmlElement.children[index].style.border = "2px dashed red";
  htmlElement.children[index + 1].style.border = "2px dashed red";
}

const generateBtn = document.getElementById("generate-btn");
const sortBtn = document.getElementById("sort-btn");
const startingArray = document.getElementById("starting-array");
const arrayContainer = document.getElementById("array-container");

generateBtn.addEventListener("click", () => {
  arrayContainer.innerHTML = "";
  arrayContainer.appendChild(startingArray);

  startingArray.innerHTML = "";

  const array = generateArray();

  fillArrContainer(startingArray, array);
});

sortBtn.addEventListener("click", () => {
  const spans = startingArray.querySelectorAll("span");
  const array = Array.from(spans).map((span) => Number(span.textContent));

  arrayContainer.innerHTML = "";
  arrayContainer.appendChild(startingArray);

  Array.from(startingArray.children).forEach((el) => (el.style.border = ""));

  let swapped = true;

  while (swapped) {
    const beforePass = array.slice();

    for (let i = 0; i < array.length - 1; i++) {
      const lastContainer = arrayContainer.lastElementChild;
      highlightCurrentEls(lastContainer, i);

      swapElements(array, i);

      const stepContainer = generateContainer();
      fillArrContainer(stepContainer, array);
      arrayContainer.appendChild(stepContainer);
    }

    swapped = !beforePass.every((value, idx) => value === array[idx]);
  }
});
