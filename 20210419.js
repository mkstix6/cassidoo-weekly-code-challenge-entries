/**
 * This week’s question:
 * Given an integer array, move all 0s to the
 * end of it while maintaining the relative
 * order of the non-zeroes.
 * Bonus: do this without making a copy of the array!
 *
 * Example:
 * $ moveZeroes([0,2,0,3,8])
 * $ [2,3,8,0,0]
 */

// Using Array.prototype.sort()
const moveZeroes = (arrayIn) =>
  arrayIn.sort((a, b) => (a === 0 ? 1 : b === 0 ? -1 : 0));

// Using a backwards for loop
const moveZeroesForLoop = (arrayIn) => {
  /**
   * Loop backwards `i--` to avoid skipping elements as
   * the array is modified.
   * e.g. ❌ Doesn't work: for (let i = 0; i < 0; i++) {…}
   */
  for (let i = arrayIn.length; i >= 0; i--) {
    if (arrayIn[i] === 0) {
      arrayIn.splice(i, 1);
      arrayIn.push(0);
    }
  }
  return true;
};

const tests = [
  [[0], [0]],
  [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  [
    [0, 1],
    [1, 0],
  ],
  [
    [1, 0, 2, 0, 3, 0, 4, 0, 5],
    [1, 2, 3, 4, 5, 0, 0, 0, 0],
  ],
  [
    [0, 5, 0, 4, 0, 3, 0, 2, 0, 1, 0],
    [5, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 2, 0, 3, 8],
    [2, 3, 8, 0, 0],
  ],
  [
    [0, 0, 0, 3, 8],
    [3, 8, 0, 0, 0],
  ],
  [
    [0, 4, 5, 3, 5, 6, 0, 3, 0, 0, 0, 0, 3, 32, 2, 4, 67, 7, 0],
    [4, 5, 3, 5, 6, 3, 3, 32, 2, 4, 67, 7, 0, 0, 0, 0, 0, 0, 0],
  ],
];

for (let [input, expected] of tests) {
  const output = [...input];
  moveZeroes(output);
  console.log(
    JSON.stringify(output) === JSON.stringify(expected)
      ? `✅ Code works: [${output}] === [${expected}]`
      : `❌ No bueno: [${output}] !== [${expected}]`
  );
}

for (let [input, expected] of tests) {
  const output = [...input];
  moveZeroesForLoop(output);
  console.log(
    JSON.stringify(output) === JSON.stringify(expected)
      ? `✅ Code works: [${output}] === [${expected}]`
      : `❌ No bueno: [${output}] !== [${expected}]`
  );
}
