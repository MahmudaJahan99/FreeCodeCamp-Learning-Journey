const pantry = [
  {
    sku: "A10",
    name: "Tomatoes",
    qty: 4,
    expires: "2027-01-01",
    zone: "fridge",
  },
  {
    sku: "D43",
    name: "Pineapples",
    qty: 2,
    expires: "2020-01-01",
    zone: "general",
  },
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge",
];

function parseShipment(rawData) {
  let shipment = [];

  for (let data of rawData) {
    let splitData = data.split("|");

    let tempObj = {
      sku: splitData[0],
      name: splitData[1],
      qty: Number(splitData[2]),
      expires: splitData[3],
      zone: splitData[4] || "general",
    };

    const duplicates = shipment.some((item) => item.sku === tempObj.sku);

    if (!duplicates) {
      shipment.push(tempObj);
    }
  }

  return shipment;
}

function planRestock(pantry, shipment) {
  const actions = [];

  for (let i = 0; i < shipment.length; i++) {
    let item = shipment[i];
    let type = "";

    if (item.qty <= 0) {
      type = "discard";
    } else {
      let found = false;

      for (let j = 0; j < pantry.length; j++) {
        if ((pantry[j].sku = item.sku)) {
          found = true;
          break;
        }
      }

      type = found ? "restock" : "donate";
    }

    actions.push({
      type,
      item,
    });
  }

  return actions;
}

function groupByZone(actions) {
  const grouped = {};

  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];
    const zone = action.item.zone;

    if (!grouped[zone]) {
      grouped[zone] = [];
    }

    grouped[zone].push(action);
  }

  return grouped;
}

function clonePantry(pantry) {
  const copy = [];

  for (let i = 0; i < pantry.length; i++) {
    copy.push({
      sku: pantry[i].sku,
      name: pantry[i].name,
      qty: pantry[i].qty,
      expires: pantry[i].expires,
      zone: pantry[i].zone,
    });
  }

  return copy;
}

const pantryCopy = clonePantry(pantry);
const shipment = parseShipment(rawData);
const actions = planRestock(pantryCopy, shipment);
const grouped = groupByZone(actions);

console.log(grouped);
