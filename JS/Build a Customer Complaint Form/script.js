const form = document.getElementById("complaint-form");

const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNo = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");

const complaintsFieldset = document.getElementById("complaints-group");
const complaintCheckboxes = document.querySelectorAll(
  '#complaints-group input[type="checkbox"]',
);
const otherComplaint = document.getElementById("other-complaint");
const complaintDescription = document.getElementById("complaint-description");

const solutionsFieldset = document.getElementById("solutions-group");
const solutionRadios = document.querySelectorAll(
  '#solutions-group input[type="radio"]',
);
const otherSolution = document.getElementById("other-solution");
const solutionDescription = document.getElementById("solution-description");

const messageBox = document.getElementById("message-box");

function validateForm() {
  const complaintsChecked = [...complaintCheckboxes].some((cb) => cb.checked);

  const solutionSelected = [...solutionRadios].some((radio) => radio.checked);

  return {
    "full-name": fullName.value.trim() !== "",

    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value),

    "order-no": /^2024\d{6}$/.test(orderNo.value),

    "product-code": /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/.test(
      productCode.value,
    ),

    quantity: /^\d+$/.test(quantity.value) && Number(quantity.value) > 0,

    "complaints-group": complaintsChecked,

    "complaint-description":
      !otherComplaint.checked || complaintDescription.value.trim().length >= 20,

    "solutions-group": solutionSelected,

    "solution-description":
      !otherSolution.checked || solutionDescription.value.trim().length >= 20,
  };
}

function isValid(validation) {
  return Object.values(validation).every(Boolean);
}

function setBorder(element, valid) {
  element.style.borderColor = valid ? "green" : "red";
}

function updateValidation() {
  const validation = validateForm();

  setBorder(fullName, validation["full-name"]);
  setBorder(email, validation.email);
  setBorder(orderNo, validation["order-no"]);
  setBorder(productCode, validation["product-code"]);
  setBorder(quantity, validation.quantity);

  setBorder(complaintsFieldset, validation["complaints-group"]);

  setBorder(complaintDescription, validation["complaint-description"]);

  setBorder(solutionsFieldset, validation["solutions-group"]);

  setBorder(solutionDescription, validation["solution-description"]);

  return validation;
}

[
  fullName,
  email,
  orderNo,
  productCode,
  quantity,
  complaintDescription,
  solutionDescription,
].forEach((element) => {
  element.addEventListener("change", updateValidation);
});

complaintCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateValidation);
});

solutionRadios.forEach((radio) => {
  radio.addEventListener("change", updateValidation);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const validation = updateValidation();

  if (isValid(validation)) {
    messageBox.textContent = "Complaint submitted successfully!";
  } else {
    messageBox.textContent = "Please correct the highlighted fields.";
  }
});
