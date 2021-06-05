/**
 * This week’s question:
 * Given a list, return a list of all its prefixes in
 * ascending order of their length.
 *
 * You’re essentially implementing the inits function
 * in Haskell!
 *
 * Example:
 * $ inits([4, 3, 2, 1])
 * $ [[], [4], [4,3], [4,3,2], [4,3,2,1]]
 *
 * $ inits([144])
 * $ [[], [144]]
 */

// function inits0(input: number[]): number[][] {
//   let result = [];
//   let inputCopy = [...input];
//   for (let i = inputCopy.length; i >= 0; i--) {
//     result.unshift([...inputCopy]);
//     inputCopy.pop();
//   }
//   return result;
// }

// Using for loop
const inits1 = (input: number[]): number[][] => {
  let result: number[][] = [[]];
  for (let i = 1; i <= input.length; i++) {
    result.push(input.slice(0, i));
  }
  return result;
};

// Using Array.map()
// Shortest version in vanilla JS
// const inits = (x) => [[], ...x.map((y, i) => x.slice(0, i + 1))];
const inits2 = (input: number[]): number[][] => [
  [],
  ...input.map((x, i) => input.slice(0, i + 1)),
];

// Using Array.reduce()
const inits3 = (input: number[]): number[][] => {
  return input.reduce<number[][]>(
    (a, c, i) => {
      a.push([...a[i], c]);
      return a;
    },
    [[]]
  );
};

let inits = inits2;

let a = [4, 3, 2, 1];
let b = [...a];
console.assert(
  inits(a).toString() === [[], [4], [4, 3], [4, 3, 2], [4, 3, 2, 1]].toString()
);

console.assert(a.toString() === b.toString(), "mutated input");
console.assert(inits([144]).toString() === [[], [144]].toString());

console.log(inits([4, 3, 2, 1]));
console.log(inits([144]));
