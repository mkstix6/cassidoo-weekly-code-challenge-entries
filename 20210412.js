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
  // const numSpaces = garden.length - garden.filter((x) => !!x).length;
  // Count the lengths of gaps.
  const gapStrings = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // TODO handle the creation of this more elegantly
  let emptyLength = 1; // Edge of plot is effectively an empty space.
  // garden = [1, 0, 1, 0, 0, 0, 1]
  for (let i = 0; i < garden.length; i++) {
    if (garden[i] === 0) {
      emptyLength++;
    } else {
      gapStrings[emptyLength]++;
      emptyLength = 0;
    }
  }
  emptyLength++; // Edge of plot is effectively an empty space.
  gapStrings[emptyLength]++; // Log final empty plot if at the end.
  // Number of plants you can plant is the length of the ((gap/2)-0.5)
  const sproutCounts = gapStrings.map((count, index) => {
    if (index < 3) {
      return 0;
    }
    return Math.floor(index / 2 - 0.5) * count;
  });
  const maxSprouts = sproutCounts.reduce(sum);
  // console.log({ garden, gapStrings, sproutCounts, maxSprouts });
  // Final answer.
  return sprouts <= maxSprouts;
};

console.assert(canPlant([0, 0, 0], 1) === true, `❌check#0`);
console.assert(canPlant([0, 0, 0], 2) === true, `❌check#1`);
console.assert(canPlant([0, 0, 0], 3) === false, `❌check#2`);
console.assert(canPlant([0, 0, 0, 0], 1) === true, `❌check#3`);
console.assert(canPlant([0, 0, 0, 0], 2) === true, `❌check#4`);
console.assert(canPlant([0, 0, 0, 0], 3) === false, `❌check#5`);
console.assert(canPlant([0, 0, 0, 0], 4) === false, `❌check#6`);
console.assert(canPlant([0, 0, 0, 0, 0], 1) === true, `❌check#7`);
console.assert(canPlant([0, 0, 0, 0, 0], 2) === true, `❌check#8`);
console.assert(canPlant([0, 0, 0, 0, 0], 3) === true, `❌check#9`);
console.assert(canPlant([0, 0, 0, 0, 0], 4) === false, `❌check#10`);
console.assert(canPlant([0, 0, 0, 0, 0], 5) === false, `❌check#11`);
console.assert(canPlant([1, 0, 0, 0, 1], 1) === true, `❌check#12`);
console.assert(canPlant([1, 0, 0, 0, 1], 2) === false, `❌check#13`);
console.assert(canPlant([1, 0, 0, 0, 1], 4) === false, `❌check#14`);
console.assert(canPlant([1, 0, 0, 0, 0, 1], 1) === true, `❌check#15`);
console.assert(canPlant([1, 0, 0, 0, 0, 1], 2) === false, `❌check#16`);
console.assert(canPlant([1, 0, 0, 0, 0, 1], 3) === false, `❌check#17`);
console.assert(canPlant([1, 0, 0, 0, 0, 1], 4) === false, `❌check#18`);
console.assert(canPlant([1, 0, 0, 0, 0, 1], 5) === false, `❌check#19`);
console.assert(canPlant([1, 0, 1, 0, 0, 1], 1) === false, `❌check#20`);
console.assert(canPlant([1, 0, 1, 0, 0, 0, 1], 1) === true, `❌check#21`);
console.assert(canPlant([1, 0, 1, 0, 0, 0, 1], 2) === false, `❌check#22`);
