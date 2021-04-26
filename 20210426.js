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
 * Starting point:        '🌶🌶🍌🌶🍌🍌' ❌-is-not-balanced-so-rotate
 * First rotation yields: '🍌🌶🌶🍌🌶🍌' ❌-is-not-balanced-so-rotate
 * Second rotation yields:'🍌🍌🌶🌶🍌🌶' ✅-is-balanced …return as answer.
 */

/**
 * I've implemented some of this with arrays, instead of
 * string methods, because working with strings containing
 * emoji is a bit 🙄.
 * Alternatively, I'd might reach for lodash's emoji-aware
 * string functions if they work as advertised.
 *
 * Balance rules:
 * 🍌🌶 = balanced
 * 🌶🍌 = un-balanced
 */
const rotateFood = (foods) => {
  // Move fruit from end to start.
  console.log(`${[...foods].slice(0, -1)}`);
  let rotatedFoods = `${[...foods].pop()}${[...foods].slice(0, -1)}`;
  console.log({ foods, rotatedFoods });
  // If not balanced rotate again. TODO: handle possible inifinite loop here.
  while (!isBalanced(rotatedFoods)) {
    rotatedFoods = rotateFood(rotatedFoods);
  }
  // Balanced: return
  return foods;
};

const isBalanced = (foods) => {
  let theBalance = 0; // ⚖️
  [...foods].forEach((food) => {
    switch (food) {
      case `🍌`: {
        theBalance++;
        break;
      }
      case `🌶`: {
        theBalance--;
        break;
      }
      default:
        console.log(`Bad food ${food}`);
        throw new Error(`What is this!`);
    }
    if (theBalance < 0) return false;
  });
  // +1 for 🍌
  // -1 for 🌶
  // Must not be negative at any point as we iterate.
  return theBalance === 0;
};

console.log(
  rotateFood("🌶🌶🍌🌶🍌🍌") === "🍌🍌🌶🌶🍌🌶"
    ? `✅ Code passes`
    : `❌ Code fails: ${rotateFood("🌶🌶🍌🌶🍌🍌")}`
);
