const manifestObj = {
  containerId: 1,
  destination: "Monterey, California, USA",
  weight: 831,
  unit: "lb",
  hazmat: false,
};

function normalizeUnits(manifest) {
  const copy = { ...manifest };

  if (copy.unit === "lb") {
    copy.weight = copy.weight * 0.45;
    copy.unit = "kg";
  }

  return copy;
}

function validateManifest(manifest) {
  const errors = {};

  // containerId
  if (!("containerId" in manifest)) {
    errors.containerId = "Missing";
  } else if (
    typeof manifest.containerId !== "number" ||
    Number.isNaN(manifest.containerId) ||
    manifest.containerId <= 0 ||
    !Number.isInteger(manifest.containerId)
  ) {
    errors.containerId = "Invalid";
  }

  // destination
  if (!("destination" in manifest)) {
    errors.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    errors.destination = "Invalid";
  }

  // weight
  if (!("weight" in manifest)) {
    errors.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    errors.weight = "Invalid";
  }

  // unit
  if (!("unit" in manifest)) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    errors.unit = "Invalid";
  }

  // hazmat
  if (!("hazmat" in manifest)) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

function processManifest(manifest) {
  const isValid = validateManifest(manifest);
  if (Object.keys(isValid).length === 0) {
    const normalizedCargo = normalizeUnits(manifest);

    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalizedCargo.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(isValid);
  }
}
