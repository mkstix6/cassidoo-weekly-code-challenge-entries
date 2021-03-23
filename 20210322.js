/**
 * Interview question of the week
 *
 * You’re given two integer arrays (n and m),
 * and an integer k. Using the digits from n and m,
 * return the largest number you can of length k.
 *
 * Example:
 *
 * n = [3,4,6,5]
 * m = [9,0,2,5,8,3]
 * k = 5
 * $ maxNum(n, m, k)
 * $ 98655
 */

const desc = (a, b) => b - a;
const maxNum = (n, m, k) => +[...n, ...m].sort(desc).slice(0, k).join("");

// Provided test
n = [3, 4, 6, 5];
m = [9, 0, 2, 5, 8, 3];
k = 5;
console.assert(
  maxNum(n, m, k) === 98655,
  `maxNum() did not pass provided test.`
);
console.log(maxNum(n, m, k));
