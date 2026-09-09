function spinalCase(str) {
  return str
    // Add a space between lowercase and uppercase letters
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    // Replace spaces and underscores with hyphens
    .replace(/[\s_]+/g, "-")
    // Convert to lowercase
    .toLowerCase();
}