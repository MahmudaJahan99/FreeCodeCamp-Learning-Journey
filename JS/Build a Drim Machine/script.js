const keyQ = document.getElementById("Heater-1"),
  keyW = document.getElementById("Heater-2"),
  keyE = document.getElementById("Heater-3"),
  keyA = document.getElementById("Heater-4"),
  keyS = document.getElementById("Clap"),
  keyD = document.getElementById("Open-HH"),
  keyZ = document.getElementById("Kick-n'-Hat"),
  keyX = document.getElementById("Kick"),
  keyC = document.getElementById("Closed-HH");

const display = document.getElementById("display");

// Function for keypad press
function playPad(pad) {
  const audio = pad.querySelector(".clip");
  audio.currenTime = 0;
  audio.play();

  display.textContent = pad.id;
}

// Click on keypads
keyQ.addEventListener("click", () => playPad(keyQ));
keyW.addEventListener("click", () => playPad(keyW));
keyE.addEventListener("click", () => playPad(keyE));
keyA.addEventListener("click", () => playPad(keyA));
keyS.addEventListener("click", () => playPad(keyS));
keyD.addEventListener("click", () => playPad(keyD));
keyZ.addEventListener("click", () => playPad(keyZ));
keyX.addEventListener("click", () => playPad(keyX));
keyC.addEventListener("click", () => playPad(keyC));

// Keyboard
document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();

  const audio = document.getElementById(key);
  if (!audio) return;

  const pad = audio.parentElement;

  audio.currenTime = 0;
  audio.play((display.textContent = pad.id));
});
