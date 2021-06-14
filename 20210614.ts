/**
 * Given a direction and a number of columns, write a function that outputs an arrow of asterisks (see the pattern in the examples below)!
 *
 * Examples:
 *
 * $ printArrow('right', 3)
 * Output:
 * *
 *  *
 *   *
 *  *
 * *
 *
 * $ printArrow('left', 5)
 * Output:
 *     *
 *    *
 *   *
 *  *
 * *
 *  *
 *   *
 *    *
 *     *
 */

const printArrow = (direction: string, size: number): string => {
  let phase = "inc";
  let result = ``;
  let i = size - 1;
  while (i < size) {
    if (result) {
      result = `${result}\n`;
    }
    if (direction === "right") {
      result = `${result}${` `.repeat(size - (i + 1))}*`;
    } else {
      result = `${result}${` `.repeat(i)}*`;
    }
    if (phase === "inc" && i <= 0) {
      phase = "dec";
    }
    if (phase === "inc") {
      i--;
    } else {
      i++;
    }
  }
  return result;
};

export { printArrow };
