// Current date and time
const currentDate = new Date();

// Current date string
const currentDateFormat = `Current Date and Time: ${currentDate}`;

console.log(currentDateFormat);

// MM/DD/YYYY format
function formatDateMMDDYYYY(date) {
  const formattedDate = date.toLocaleDateString("en-US");

  return `Formatted Date (MM/DD/YYYY): ${formattedDate}`;
}

// Month Day, Year format
function formatDateLong(date) {
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return `Formatted Date (Month Day, Year): ${formattedDate}`;
}

// Example
console.log(formatDateMMDDYYYY(currentDate));
console.log(formatDateLong(currentDate));
