/**
 * This week’s question:
 * Given an array of 0s and 1s that represent a garden,
 * where 0 is a plot that hasn’t been planted on, and 1
 * is a plot that has been planted on, return true if n
 * plants can be planted without touching another plant.
 *
 * Example:
 * garden = [1,0,0,0,1]
 *
 * $ canPlant(garden, 1)
 * $ true // plant at position 2
 * $ canPlant(garden, 4)
 * $ false // there are only 3 plots, and two of them can't be planted on
 */

const sum = (curr, acc) => curr + acc;

const canPlant = (garden, sprouts) => {
  // Initialise array to remember garden's unplanted-plot-chains.
  const plotLengths = new Array(garden.length + 3).fill(0);
  // Analyse garden's unplanted-plot-chains.
  let countUnplanted = 0;
  countUnplanted++; // Beginning of garden case: boundary of garden acts like an unplanted-plot.
  for (let i = 0; i < garden.length; i++) {
    if (garden[i] === 0) {
      countUnplanted++;
    } else {
      plotLengths[countUnplanted]++;
      countUnplanted = 0;
    }
  }
  countUnplanted++; // End of garden case: boundary of garden acts like an unplanted-plot.
  plotLengths[countUnplanted]++; // Log final unplanted-plot.
  // Compute space for sprouts.
  const maxSprouts = plotLengths
    .map((count, plotLength) => {
      return Math.floor(plotLength / 2 - 0.5) * count;
    })
    .reduce(sum);
  // Final answer.
  return sprouts <= maxSprouts;
};

let errorCount = 0;
const tests = [
  { testNum: 1, garden: [0], sprouts: 1, expected: true },
  { testNum: 2, garden: [1], sprouts: 1, expected: false },
  { testNum: 3, garden: [0, 0, 0], sprouts: 1, expected: true },
  { testNum: 4, garden: [0, 0, 0], sprouts: 2, expected: true },
  { testNum: 5, garden: [0, 0, 0], sprouts: 3, expected: false },
  { testNum: 6, garden: [0, 0, 0, 0], sprouts: 1, expected: true },
  { testNum: 7, garden: [0, 0, 0, 0], sprouts: 2, expected: true },
  { testNum: 8, garden: [0, 0, 0, 0], sprouts: 3, expected: false },
  { testNum: 9, garden: [0, 0, 0, 0], sprouts: 4, expected: false },
  { testNum: 10, garden: [0, 0, 0, 0, 0], sprouts: 1, expected: true },
  { testNum: 11, garden: [0, 0, 0, 0, 0], sprouts: 2, expected: true },
  { testNum: 12, garden: [0, 0, 0, 0, 0], sprouts: 3, expected: true },
  { testNum: 13, garden: [0, 0, 0, 0, 0], sprouts: 4, expected: false },
  { testNum: 14, garden: [0, 0, 0, 0, 0], sprouts: 5, expected: false },
  { testNum: 15, garden: [1, 0, 0, 0, 1], sprouts: 1, expected: true },
  { testNum: 16, garden: [1, 0, 0, 0, 1], sprouts: 2, expected: false },
  { testNum: 17, garden: [1, 0, 0, 0, 1], sprouts: 4, expected: false },
  { testNum: 18, garden: [1, 0, 0, 0, 0, 1], sprouts: 1, expected: true },
  { testNum: 19, garden: [1, 0, 0, 0, 0, 1], sprouts: 2, expected: false },
  { testNum: 20, garden: [1, 0, 0, 0, 0, 1], sprouts: 3, expected: false },
  { testNum: 21, garden: [1, 0, 0, 0, 0, 1], sprouts: 4, expected: false },
  { testNum: 22, garden: [1, 0, 0, 0, 0, 1], sprouts: 5, expected: false },
  { testNum: 23, garden: [1, 0, 1, 0, 0, 1], sprouts: 1, expected: false },
  { testNum: 24, garden: [1, 0, 1, 0, 0, 0, 1], sprouts: 1, expected: true },
  {
    testNum: 25,
    garden: [1, 0, 1, 0, 0, 0, 1],
    sprouts: 2,
    expected: false,
  },
  {
    testNum: 26,
    garden: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    sprouts: 1,
    expected: false,
  },
].forEach(({ testNum, garden, sprouts, expected }) => {
  if (canPlant(garden, sprouts) !== expected) {
    errorCount++;
    console.log(`❌ test#${testNum} failed.`);
  }
});
console.log(
  errorCount ? `❌ Failing tests: ${errorCount}.` : `✅ All passing 🌻🕳🌻🕳🌻`
);
