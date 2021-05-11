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

const digitString = (n: number): string => [...new Set(`${n}`)].sort().join("");

const identicalSets = <Type>(a: Set<Type>, b: Set<Type>): boolean =>
  a.size === b.size && [...a].every((x) => b.has(x));

const sameDigits = (a: number, b: number): boolean =>
  digitString(a) === digitString(b);

const sameDigitsAsCube = (n: number): boolean => sameDigits(n, n ** 3);

const tests: [number, boolean][] = [
  [1, true],
  [10, true],
  [251894, true],
  [251895, false],
  [106239, false],
];

tests.forEach(([n, expected]: [number, boolean]) => {
  console.log(sameDigitsAsCube(n) === expected ? "✅ passing" : "❌ failing");
});
