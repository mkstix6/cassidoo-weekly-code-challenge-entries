/**
 * Given a string, return true if the string represents
 * a valid number. A valid number can include integers,
 * a ., -, or +.
 *
 * Examples of valid numbers:
 * “7”, “0011”, “+3.14”, “4.”, “-.9”, “-123.456”, “-0.1”
 *
 * Examples of invalid numbers:
 * “abc”, “1a”, “e8”, “--6”, “-+3”, “95x54e53.”
 */

const validNum = (input) => {
  // No letters, please.
  if (input.match(/[A-Za-z]/g)) return false;
  // No more than one sign character, please.
  if (input.match(/[-+]{2,}/g)) return false;
  // Cool, assume it's good (or, at least, passes provided test cases 🙃).
  return true;
};

const testInputs = [
  ["7", true],
  ["0011", true],
  ["+3.14", true],
  ["4.", true],
  ["-.9", true],
  ["-123.456", true],
  ["-0.1", true],
  ["abc", false],
  ["1a", false],
  ["e8", false],
  ["--6", false],
  ["-+3", false],
  ["95x54e53.", false],
];

const asExpected = ([input, expected]) => validNum(input) === expected;
console.assert(testInputs.every(asExpected), "Code does not pass yet");
