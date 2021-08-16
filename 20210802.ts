/**
 * Given a 3x3, 2D array of integers, where every
 * digit is between 0 and 9, except 7, find the
 * minimum number of digits that must be replaced
 * with 7s so that the sums of the numbers in each
 * row and each column are the same.
 * 
 * Example: 
 * 
  $ missingSevens([[9,4,3],[3,4,9],[4,8,4]])
  $ 0

  $ missingSevens([[1,5,2],[5,9,5],[6,5,3]])
  $ 4

  $ missingSevens([[3,9,6],[8,5,5],[8,4,0]])
  $ 2
 */

const calcLineSums = (
  input: [
    [number, number, number],
    [number, number, number],
    [number, number, number]
  ]
): [number, number, number, number, number, number] => {
  return [
    input[0][0] + input[0][1] + input[0][2],
    input[1][0] + input[1][1] + input[1][2],
    input[2][0] + input[2][1] + input[2][2],
    input[0][0] + input[1][0] + input[2][0],
    input[0][1] + input[1][1] + input[2][1],
    input[0][2] + input[1][2] + input[2][2],
  ];
};

const calcLineAnalysis = (
  input: [
    [number, number, number],
    [number, number, number],
    [number, number, number]
  ]
): [
  [number, number, number],
  [number, number, number],
  [number, number, number]
] => {
  const lineSums = calcLineSums(input);
  return [
    [
      lineSums[0] - lineSums[3],
      lineSums[0] - lineSums[4],
      lineSums[0] - lineSums[5],
    ],
    [
      lineSums[1] - lineSums[3],
      lineSums[1] - lineSums[4],
      lineSums[1] - lineSums[5],
    ],
    [
      lineSums[2] - lineSums[3],
      lineSums[2] - lineSums[4],
      lineSums[2] - lineSums[5],
    ],
  ];
};

const missingSevens = (
  input: [
    [number, number, number],
    [number, number, number],
    [number, number, number]
  ]
): number => {
  console.log("˘¯˘¯˘¯˘¯˘start˘¯˘¯˘¯˘¯˘");
  let sevens = 0;
  let lineSums = calcLineSums(input);
  if (!lineSums.every((item) => item === lineSums[0])) {
    console.log(lineSums);
    console.log(calcLineAnalysis(input));
  }
  return sevens;
};

// Tests
// console.log(
//   missingSevens([
//     [9, 4, 3],
//     [3, 4, 9],
//     [4, 8, 4],
//   ]) === 0
// );
// console.log(
//   missingSevens([
//     [1, 5, 2],
//     [5, 9, 5],
//     [6, 5, 3],
//   ]) === 4
// );
console.log(
  missingSevens([
    [3, 9, 6],
    [8, 5, 5],
    [8, 4, 0],
  ]) === 2
);
