const inventory = [];

// finds index of the given product name
function findProductIndex(productName) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === productName.toLowerCase()) {
      return i;
    }
  }
  return -1;
}

// if product already exists then updates the quantity. Otherwise adds it to inventory
function addProduct(productObj) {
  const productIndex = findProductIndex(productObj.name);
  // If product found
  for (let product of inventory) {
    if (product.name === productObj.name.toLowerCase()) {
      product.quantity += productObj.quantity;
      console.log(`${product.name} quantity updated`);
      return;
    }
  }
  // If product not found
  inventory.push({
    name: productObj.name.toLowerCase(),
    quantity: productObj.quantity,
  });
  console.log(`${productObj.name.toLowerCase()} added to inventory`);
  return;
}

// Removes product if it exits
function removeProduct(productName, productQuantity) {
  const index = findProductIndex(productName);

  for (let product of inventory) {
    if (productName.toLowerCase() === product.name) {
      if (product.quantity >= productQuantity) {
        product.quantity -= productQuantity;
        if (product.quantity === 0) {
          return inventory.splice(index, 1);
        } else {
          console.log(`Remaining ${product.name} pieces: ${product.quantity}`);
          return;
        }
      } else {
        console.log(
          `Not enough ${product.name} available, remaining pieces: ${product.quantity}`,
        );
        return;
      }
    }
  }
  console.log(`${productName.toLowerCase()} not found`);
  return;
}
