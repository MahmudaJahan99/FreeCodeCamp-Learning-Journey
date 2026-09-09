let lunches = [];

function addLunchToEnd(lunchMenu, lunchItem) {
  lunchMenu.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);

  return lunchMenu;
}

function addLunchToStart(lunchMenu, lunchItem) {
  lunchMenu.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);

  return lunchMenu;
}
function removeLastLunch(lunchMenu) {
  if (lunchMenu.length === 0) {
    console.log("No lunches to remove.");
    return lunchMenu;
  }

  const lunchItem = lunchMenu.pop();
  console.log(`${lunchItem} removed from the end of the lunch menu.`);

  return lunchMenu;
}

function removeFirstLunch(lunchMenu) {
  if (lunchMenu.length === 0) {
    console.log("No lunches to remove.");
    return lunchMenu;
  }

  const lunchItem = lunchMenu.shift();
  console.log(`${lunchItem} removed from the start of the lunch menu.`);

  return lunchMenu;
}

function getRandomLunch(lunchMenu) {
  if (lunchMenu.length === 0) {
    console.log("No lunches available.");
    return;
  }

  const randomLunch = lunchMenu[Math.floor(Math.random() * lunchMenu.length)];
  console.log(`Randomly selected lunch: ${randomLunch}`);
}

function showLunchMenu(lunchMenu) {
  if (lunchMenu.length === 0) {
    console.log("The menu is empty.");
    return;
  }

  console.log(`Menu items: ${lunchMenu.join(", ")}`);
}
