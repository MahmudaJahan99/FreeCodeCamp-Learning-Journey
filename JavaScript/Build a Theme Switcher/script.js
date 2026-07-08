const themes = [
  { name: "light", message: "Hello sunshine - Light theme is on!" },
  { name: "dark", message: "The night is yours - Dark theme is on!" },
  { name: "ocean", message: "The frost has settled - Nord theme is on!" },
  { name: "nord", message: "Blue skies and high tides - Ocean theme is on!" },
];

const button = document.getElementById("theme-switcher-button");
const dropdown = document.getElementById("theme-dropdown");
const status = document.querySelector('[aria-live="polite"]');

button.addEventListener("click", () => {
  const isHidden = dropdown.hasAttribute("hidden");

  if (isHidden) {
    dropdown.removeAttribute("hidden");
    button.setAttribute("aria-expanded", "true");
  } else {
    dropdown.setAttribute("hidden", "");
    button.setAttribute("aria-expanded", "false");
  }
});

dropdown.addEventListener("click", (e) => {
  if (e.target.getAttribute("role") !== "menuitem") return;

  const selectedTheme = e.target.textContent.trim().toLowerCase();

  // Remove existing theme classes
  themes.forEach((theme) => {
    document.body.classList.remove(`theme-${theme.name.toLowerCase()}`);
  });

  // Add selected theme class
  document.body.classList.add(`theme-${selectedTheme.toLowerCase()}`);

  // Update status message
  const theme = themes.find((t) => t.name === selectedTheme);

  if (theme) {
    status.textContent = theme.message;
  }

  // Close dropdown
  dropdown.setAttribute("hidden", "");
  button.setAttribute("aria-expanded", "false");
});
