/**
 * Given a grid size, and a set of mines (in pairs of rows and columns), generate the Minesweeper grid for that set of mines. You can use asterisks for mines, and an x for 0!
 *
 * Example:
 *
 * let gridSize = 5
 * let mines = [[1, 3], [3, 5], [2, 4]]
 *
 * $ generateMinesweeper(gridSize, mines)
 *
 * xxxxx
 * 11xxx
 * *21xx
 * 2*21x
 * 12*1x
 */

// // String version
// function makeBlankGridString(gridSize: number): string {
//   return `${"*".repeat(gridSize)}\n`.repeat(gridSize).trim();
// }

type GridData = number[][];
type Coordinates = [number, number];
type MineList = Coordinates[];

// Empty grid
function makeBlankGrid(gridSize: number): GridData {
  const grid = [];
  for (let i = 0; i < gridSize; i++) {
    grid.push(new Array(gridSize).fill(0));
  }
  return grid;
}

function placeMines(grid: GridData, mines: MineList) {
  mines.forEach(([x, y]: Coordinates) => {
    grid[y - 1][x - 1] = -1;
  });
}

function within2DArrayBoundsChecker(arrayLength: number) {
  return (x: number, y: number): boolean => {
    return x >= 0 && x < arrayLength && y >= 0 && y < arrayLength;
  };
}

function computeProximities(grid: GridData, mines: MineList) {
  const inBounds = within2DArrayBoundsChecker(grid[0].length);
  const cardinals = [
    [-1, -1], // NW
    [0, -1], // N
    [1, -1], // NE
    [-1, 0], // W
    [1, 0], // E
    [-1, 1], // SW
    [0, 1], // S
    [1, 1], // SE
  ];
  mines.forEach(([x, y]: Coordinates) => {
    // Scan through adjascent spaces and bump proximity numbers
    cardinals.forEach(([dx, dy]) => {
      let tx = x + dx - 1;
      let ty = y + dy - 1;
      if (inBounds(tx, ty)) {
        grid[ty][tx] += 1;
      }
    });
  });
}

function gridToString(grid: GridData): string {
  return grid
    .map((row) =>
      row
        .map((value) => {
          switch (value) {
            case 0:
              return "x";
            case -1:
              return "*";
            default:
              return value.toString();
          }
        })
        .join("")
    )
    .join("\n");
}

function generateMinesweeper(gridSize: number, mines: MineList): string {
  let grid = makeBlankGrid(gridSize);
  computeProximities(grid, mines); // mutate grid
  placeMines(grid, mines); // mutate grid
  return gridToString(grid);
}

console.log(
  generateMinesweeper(5, [
    [1, 3],
    [3, 5],
    [2, 4],
  ]) === `xxxxx\n11xxx\n*21xx\n2*21x\n12*1x`
    ? "✅"
    : "🛑"
);

console.log(
  generateMinesweeper(6, [
    [4, 3],
    [1, 5],
    [2, 2],
  ]) === "111xxx\n1*211x\n112*1x\n11111x\n*1xxxx\n11xxxx"
    ? "✅"
    : "🛑"
);

console.log(
  generateMinesweeper(3, [
    [1, 1],
    [1, 2],
    [2, 3],
    [3, 3],
  ]) === "*2x\n*42\n2**"
    ? "✅"
    : "🛑"
);

console.log(
  generateMinesweeper(2, [
    [1, 1],
    [2, 2],
  ]) === "*2\n2*"
    ? "✅"
    : "🛑"
);

console.log(
  generateMinesweeper(2, [
    [1, 1],
    [1, 2],
    [2, 2],
  ]) === "*3\n**"
    ? "✅"
    : "🛑"
);
