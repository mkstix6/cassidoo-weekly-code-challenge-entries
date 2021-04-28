/**
 * Given a string of brackets, return a rotation
 * of those brackets that is balanced. The numbers
 * of opening and closing brackets will always be
 * equal, so [ or ][] won't be given as inputs.
 *
 * Example:
 * $ rotateBrackets(']][][[')
 * $ '[[]][]' // First rotation yields '[]][]['.Second one yields '[[]][]'.
 *
 * This was hard to read and understand so I've elaborated myself:
 * Starting point:        ']][][[' ❌ is not balanced, so rotate again.
 * First rotation yields: '[]][][' ❌ is not balanced, so rotate again.
 * Second rotation yields:'[[]][]' ✅ is balanced …return as answer.
 */

const rotateString = (string) => `${string.slice(-1)}${string.slice(0, -1)}`;

const rotateBrackets = (brackets) => {
  let rotated = brackets;
  do {
    rotated = rotateString(rotated);
  } while (!isBalanced(rotated));
  return rotated;
};

const isBalanced = (brackets) => {
  let theBalance = 0;
  for (let character of brackets) {
    if (character === "[") theBalance++;
    if (character === "]") theBalance--;
    if (theBalance < 0) return false;
  }
  return theBalance === 0;
};

// Simple test
console.log(
  rotateBrackets("]][][[") === "[[]][]"
    ? `✅ Code works.`
    : `❌ Code doesn't work.`
);
