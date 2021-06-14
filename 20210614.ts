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

const printArrowA = (direction: "left" | "right", n: number): string => {
  let phase = "inc";
  let result = ``;
  let i = n - 1;
  while (i < n) {
    if (result) {
      result = `${result}\n`;
    }
    if (direction === "right") {
      result = `${result}${` `.repeat(n - (i + 1))}*`;
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

const printArroB = (direction: "left" | "right", n: number): string =>
  Array.from(
    Array(n * 2 - 1),
    (x, i) =>
      `${
        direction === "right"
          ? ` `.repeat(i < (n + 2) / 2 ? i : (n - 1) * 2 - i)
          : ` `.repeat(i < (n + 2) / 2 ? n - 1 - i : i + 1 - n)
      }*`
  ).join(`\n`);

const printArrowC = (direction: "left" | "right", n: number): string =>
  Array.from(Array(n * 2 - 1), (x, i) => {
    const firstHalf = i < (n + 2) / 2;
    const spaces =
      direction === "right"
        ? firstHalf
          ? i
          : (n - 1) * 2 - i
        : firstHalf
        ? n - 1 - i
        : i - (n - 1);
    return `${` `.repeat(spaces)}*`;
  }).join(`\n`);

const printArrow = (direction: "left" | "right", n: number): string => {
  let lines = [];
  n--;
  for (let i = 0; i < n; i++) {
    lines.push(i);
  }
  for (let i = 0; i <= n; i++) {
    lines.push(n - i);
  }
  return lines
    .map((x) => (direction === "right" ? x : n - x))
    .map((x) => ` `.repeat(x) + "*")
    .join(`\n`);
};

export { printArrow };
