const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 },
  ],
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 },
  ],
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 },
  ],
};

const config4 = {
  fault: false,
  phases: [],
};

// Function
function runSequence(config, cycles) {
  if (config.phases.length === 0) {
    console.log("No phases found");
    return;
  }

  for (let cycle = 0; cycle < cycles; cycle++) {
    if (config.fault) {
      console.log("Faulted phase!");
      return;
    }

    for (const phase of config.phases) {
      if (phase.duration <= 0) {
        console.log("Invalid phase detected");
      } else {
        console.log(`Switching to ${phase.color} for ${phase.duration} s`);
      }
    }
  }
}

function generateTimeline(config, cycles) {
  const timeline = [];
  let cumulativeElapsedTime = 0;

  for (let cycle = 0; cycle < cycles; cycle++) {
    for (const phase of config.phases) {
      cumulativeElapsedTime += phase.duration;
      timeline.push(cumulativeElapsedTime);
    }
  }

  return timeline;
}
