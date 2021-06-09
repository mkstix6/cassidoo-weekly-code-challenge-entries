/**
 * This week’s question:
 * Given three numbers, return their product. But,
 * if one of the numbers is the same as another,
 * it does not count: If two numbers are similar,
 * return the lonely number. If all numbers are
 * same, return 1.
 *
 * Example:
 * $ lonelyNumber(1,2,3)
 * $ 6
 *
 * $ lonelyNumber(6,6,4)
 * $ 4
 *
 * $ lonelyNumber(7,7,7)
 * $ 1
 */

function lonelyNumber(a: number, b: number, c: number): number {
  if (a === b && a === c) return 1;
  if (a === b) return c;
  if (a === c) return b;
  if (b === c) return a;
  return a * b * c;
}

const tests: [number[], number][] = [
  [[1, 2, 3], 6],
  [[6, 6, 4], 4],
  [[7, 7, 7], 1],
];

tests.forEach(([[a, b, c], expected]) => {
  console.log(
    lonelyNumber(a, b, c) === expected
      ? `✅ (${a} ${b} ${c}) === ${expected}`
      : `❌ (${a} ${b} ${c}) !== ${expected}`
  );
});

export {}; // Prevent typescript complaining about global scope variables: https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files
