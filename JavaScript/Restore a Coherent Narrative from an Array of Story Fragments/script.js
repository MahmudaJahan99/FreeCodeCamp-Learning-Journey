const shuffledFragments = [
  {
    id: 15,
    text: "and, after a time, passed the place where the Hare was sleeping.",
  },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  {
    id: 11,
    text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare,",
  },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  {
    id: 1,
    text: "A Hare was making fun of the Tortoise one day for being so slow.",
  },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  {
    id: 6,
    text: "The Hare was much amused at the idea of running a race with the Tortoise,",
  },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

function compactFragments(arrayOfFragments) {
  const compacted = [];
  let removedUndefined = false;

  for (let i = 0; i < arrayOfFragments.length; i++) {
    if (arrayOfFragments[i] !== undefined) {
      compacted.push(arrayOfFragments[i]);
    } else {
      removedUndefined = true;
    }
  }

  if (removedUndefined) {
    console.log("[COMPACTED] Undefined elements removed.");
  }

  return compacted;
}

const compactedShuffledFragments = compactFragments(shuffledFragments);

function sortFragments(arrayOfFragments) {
  const sorted = [...arrayOfFragments];

  // Stable insertion sort
  for (let i = 1; i < sorted.length; i++) {
    const current = sorted[i];
    let j = i - 1;

    while (j >= 0 && sorted[j].id > current.id) {
      sorted[j + 1] = sorted[j];
      j--;
    }

    sorted[j + 1] = current;
  }

  return sorted;
}

const sortedFragments = sortFragments(compactedShuffledFragments);

function dedupeFragments(sortedArray) {
  const deduped = [];

  for (let i = 0; i < sortedArray.length; i++) {
    if (i === 0 || sortedArray[i].id !== sortedArray[i - 1].id) {
      deduped.push(sortedArray[i]);
    } else {
      console.log(`[DEDUPED] Duplicate fragment with id ${sortedArray[i].id}`);
    }
  }

  return deduped;
}

const dedupedFragments = dedupeFragments(sortedFragments);

function fillMissingFragments(sortedArray) {
  const filled = [];

  if (sortedArray.length === 0) {
    return filled;
  }

  for (let i = 0; i < sortedArray.length - 1; i++) {
    filled.push(sortedArray[i]);

    const currentId = sortedArray[i].id;
    const nextId = sortedArray[i + 1].id;

    for (let missingId = currentId + 1; missingId < nextId; missingId++) {
      const placeholder = {
        id: missingId,
        text: "[...]",
      };

      filled.push(placeholder);
      console.log(`[FILLED] Missing fragment with id ${missingId}`);
    }
  }

  // Add the final fragment.
  filled.push(sortedArray[sortedArray.length - 1]);

  return filled;
}

const filledFragments = fillMissingFragments(dedupedFragments);

function assembleStory(sortedArray) {
  let story = "";

  for (let i = 0; i < sortedArray.length; i++) {
    if (i > 0) {
      story += "\n";
    }

    story += sortedArray[i].text;
  }

  return story;
}

console.log(assembleStory(filledFragments));
