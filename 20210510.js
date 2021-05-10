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

const digitString = (number) => [...new Set(`${number}`)].sort().join("");
const sameDigits = (a, b) => digitString(a) === digitString(b);
const sameDigitsAsCube = (number) => sameDigits(number, number ** 3);

const tests = [
  [1, true],
  [10, true],
  [251894, true],
  [251895, false],
  [106239, false],
].forEach(([number, expected]) => {
  console.log(digitString(number));
  console.log(
    sameDigitsAsCube(number) === expected ? "✅ passing" : "❌ failing"
  );
});
