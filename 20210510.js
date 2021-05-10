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

const sameDigitsVerbose = (number) => {
  const numberDigits = new Set(number.toString());
  const result = Math.pow(number, 3);
  const resultDigits = new Set([...numberDigits, ...result.toString()]);
  console.log(
    { number, result, numberDigits, resultDigits },
    numberDigits.size
  );
  return numberDigits.size === resultDigits.size;
};

const sameDigits = (number) =>
  new Set(number.toString()).size ===
  new Set(number.toString() + (number ** 3).toString()).size;

const tests = [
  [1, true],
  [10, true],
  [251894, true],
  [251895, false],
  [106239, false],
].forEach(([number, expected]) => {
  console.log(sameDigits(number) === expected ? "✅ passing" : "❌ failing");
});
