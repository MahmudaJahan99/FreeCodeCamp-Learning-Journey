const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const bookmarkListSection = document.getElementById("bookmark-list-section");

const categoryDropdown = document.getElementById("category-dropdown");

const viewCategoryButton = document.getElementById("view-category-button");
const addBookmarkButton = document.getElementById("add-bookmark-button");

const closeFormButton = document.getElementById("close-form-button");
const addBookmarkButtonForm = document.getElementById(
  "add-bookmark-button-form",
);

const closeListButton = document.getElementById("close-list-button");
const deleteBookmarkButton = document.getElementById("delete-bookmark-button");

const categoryNames = document.querySelectorAll(".category-name");

const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");

const categoryList = document.getElementById("category-list");

// ========== LOCAL STORAGE ==========
function getBookmarks() {
  try {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

    if (!Array.isArray(bookmarks)) {
      return [];
    }

    const isValid = bookmarks.every(
      (bookmark) =>
        bookmark &&
        typeof bookmark === "object" &&
        typeof bookmark.name === "string" &&
        typeof bookmark.category === "string" &&
        typeof bookmark.url === "string"
    );

    return isValid ? bookmarks : [];
  } catch {
    return [];
  }
}

// ========== TOGGLE SECTIONS ==========
function displayOrCloseForm() {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
}

function displayOrHideCategory() {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
}

// ========== DISPLAY BOOKMARKS ==========
function renderCategory(category) {
  const bookmarks = getBookmarks();

  const filteredBookmarks = bookmarks.filter(
    (bookmark) => bookmark.category === category,
  );

  if (filteredBookmarks.length === 0) {
    categoryList.innerHTML = "<p>No Bookmarks Found</p>";
    return;
  }

  categoryList.innerHTML = filteredBookmarks
    .map(
      (bookmark) => `
      <div>
        <input
          type="radio"
          id="${bookmark.name}"
          name="bookmark"
          value="${bookmark.name}"
        />
        <label for="${bookmark.name}">
          <a href="${bookmark.url}" target="_blank">
            ${bookmark.name}
          </a>
        </label>
      </div>
    `,
    )
    .join("");
}

// ========== EVENT LISTENERS ==========
// Add Bookmark Button
addBookmarkButton.addEventListener("click", () => {
  const category = categoryDropdown.value;

  categoryNames.forEach((title) => {
    title.innerText = category;
  });

  displayOrCloseForm();
});

// View Category Button
viewCategoryButton.addEventListener("click", () => {
  const category = categoryDropdown.value;

  categoryNames.forEach((title) => (title.innerText = category));

  renderCategory(category);
  displayOrHideCategory();
});

// Close List
closeListButton.addEventListener("click", displayOrHideCategory);

// Add & Save Bookmark
addBookmarkButtonForm.addEventListener("click", () => {
  const bookmarks = getBookmarks();

  bookmarks.push({
    name: nameInput.value,
    category: categoryDropdown.value,
    url: urlInput.value,
  });

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  nameInput.value = "";
  urlInput.value = "";

  displayOrCloseForm();
});

// Close Form
closeFormButton.addEventListener("click", displayOrCloseForm);

// Delete Bookmark
deleteBookmarkButton.addEventListener("click", () => {
  const selected = document.querySelector('input[name="bookmark"]:checked');

  if (!selected) return;

  const category = categoryDropdown.value;

  let bookmarks = getBookmarks();

  bookmarks = bookmarks.filter(
    (bookmark) =>
      !(bookmark.name === selected.value && bookmark.category === category),
  );

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  renderCategory(category);
});
