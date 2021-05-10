/**
 * Given an integer n, return true if n^3 and n
 * have the same set of digits.
 *
 * Example:
 * $ sameDigits(1) // true
 * $ sameDigits(10) // true
 * $ sameDigits(251894) // true
 * $ sameDigits(251895) // false
 */

const sameDigits = (number) =>
  `${[...new Set(`${number}`)].sort()}` ===
  `${[...new Set(`${number ** 3}`)].sort()}`;

const tests = [
  [1, true],
  [10, true],
  [251894, true],
  [251895, false],
  [106239, false],
].forEach(([number, expected]) => {
  console.log(sameDigits(number) === expected ? "✅ passing" : "❌ failing");
});
