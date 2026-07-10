const markdownInput = document.getElementById("markdown-input"),
  htmlOutput = document.getElementById("html-output"),
  preview = document.getElementById("preview");

const headingRegex = /^(#{1,6})\s+(.+)$/gm;
const strongRegex = /(\*\*(.*?)\*\*|__(.*?)__)/g;
const emphasiseRegex = /(\*(.*?)\*|_(.*?)_)/g;
const imageRegex = /!\[(.*?)\]\((.*?)\)/g;
const linkRegex = /\[(.*?)\]\((.*?)\)/g;
const blockquoteRegex = /^>\s+(.*)$/gm;

const convertMarkdown = () => {
  let inputValue = markdownInput.value;

  inputValue = inputValue.replace(imageRegex, (match, altText, imgsrc) => {
    return `<img alt="${altText}" src="${imgsrc}">`;
  });

  inputValue = inputValue.replace(linkRegex, (match, text, url) => {
    return `<a href="${url}">${text}</a>`;
  });

  inputValue = inputValue.replace(headingRegex, (match, hashes, text) => {
    const level = hashes.length;
    return `<h${level}>${text}</h${level}>`;
  });

  inputValue = inputValue.replace(blockquoteRegex, (match, text) => {
    return `<blockquote>${text}</blockquote>`;
  });

  inputValue = inputValue.replace(strongRegex, (match) => {
    const text = match.slice(2, -2);
    return `<strong>${text}</strong>`;
  });

  inputValue = inputValue.replace(emphasiseRegex, (match) => {
    const text = match.slice(1, -1);
    return `<em>${text}</em>`;
  });

  console.log(inputValue);
  return inputValue;
};

markdownInput.addEventListener("input", () => {
  const converted = convertMarkdown();

  htmlOutput.textContent = converted;
  preview.innerHTML = converted;
});
