const arraySum = (numbers: number[]): number =>
  numbers.reduce((acc, curr) => acc + curr, 0);

type Tuple19<T> = [T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T];
type PuzzleBoard = Tuple19<number>;

const isValidBoard = (board: PuzzleBoard): boolean => {
  const targetNumber = 38;
  // First quick return
  if (board[0] + board[1] + board[2] !== targetNumber) {
    return false;
  }
  if (board[3] + board[4] + board[5] + board[6] !== targetNumber) {
    return false;
  }
  if (board[7] + board[8] + board[9] + board[10] + board[11] !== targetNumber) {
    return false;
  }
  const [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s] = board;
  const lines: number[][] = [
    [a, b, c],
    [d, e, f, g],
    [h, i, j, l, k],
    [m, n, o, p],
    [q, r, s],
    [h, m, q],
    [d, i, n, r],
    [a, e, j, o, s],
    [b, f, k, p],
    [c, g, l],
    [h, d, a],
    [m, i, e, b],
    [q, n, j, f, c],
    [r, o, k, g],
    [s, p, l],
  ];
  const lineSums = lines.map(arraySum);
  return lineSums.every((x) => x === targetNumber);
};

const startingBoard: PuzzleBoard = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];

// @ts-ignore
const permutations = function* (elements) {
  if (elements.length === 1) {
    yield elements;
  } else {
    let [first, ...rest] = elements;
    // @ts-ignore
    for (let perm of permutations(rest)) {
      for (let i = 0; i < elements.length; i++) {
        // @ts-ignore
        let start = perm.slice(0, i);
        let rest = perm.slice(i);
        yield [...start, first, ...rest];
      }
    }
  }
};

// @ts-ignore
const permutationGenerator = permutations([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
]);

let perm;
let validBoards = [];
while ((perm = permutationGenerator.next().value)) {
  console.log(perm);
  if (isValidBoard(perm)) {
    console.log(`✅ Valid board: ${perm}`);
    validBoards.push(perm);
  }
}
console.log({ validBoards });
console.log(`Number of valid board permutations ${validBoards.length}`);
