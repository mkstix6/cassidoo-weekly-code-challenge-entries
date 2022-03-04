// Deno CLI reminders:
// - deno run [filename]
// - deno test [filename]
// - deno test --watch [filename]
import { assertEquals } from "https://deno.land/std@0.125.0/testing/asserts.ts";

/**
 * Implement a word search. Given a 2D array of letters and
 * a word to find, return the 2D array with the found word’s
 * letters replaced with an asterisk (*).
 */

// Example:
const grid: string[][] = [
  ["a", "a", "q", "t"],
  ["x", "c", "w", "e"],
  ["r", "l", "e", "p"],
];

class MissingLettersError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MissingLettersError";
    Error.captureStackTrace(this, MissingLettersError);
  }
}

function findWord(grid: string[][], word: string): string[][] {
  // Check word letters all exist - doesn't handle duplicate letters
  const gridLetters = new Set(grid.flat());
  const wordLetters = new Set(word);
  wordLetters.forEach((letter) => {
    if (!gridLetters.has(letter)) {
      throw new MissingLettersError(
        `Word not in grid; missing letter "${letter}".`
      );
    }
  });

  const stepDirections = [
    [-1, -1],
    [0, -1],
    [1, -1],
    [-1, 0],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
  ];

  let wordFound = false;
  let firstLetterFound = false;
  // Check each grid position
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const firstLetter = word.charAt(0);
      // Find location of first letter
      if (firstLetter !== grid[i][j]) continue;
      // If found word record location
      firstLetterFound = true;
      // Check each direction on grid for next letter
      let secondLetterFound = false;
      for (let k = 0; k < stepDirections.length; k++) {
        let [dx, dy] = stepDirections[k];
        let [x, y] = [j + dx, i + dy];
        // Check next coordinates are within bounds
        if (x < 0 || x >= grid[i].length || y < 0 || y >= grid.length) continue;
        // Check letter at coordinates
        if (grid[y][x] !== word.charAt(1)) continue;
        // Found second letter
        secondLetterFound = true;
        // …and down the loop we go
      }

      // Else check next position
    }
  }
  if (!wordFound) throw new Error(`Word not found in grid`);

  // Build new grid

  return [["r"]];
}

findWord(grid, "ace");

// Compact form: name and function
Deno.test("Successfully marks target word #1", () => {
  assertEquals(findWord(grid, "ace"), [
    ["*", "a", "q", "t"],
    ["x", "*", "w", "e"],
    ["r", "l", "*", "p"],
  ]);
});
Deno.test("Successfully marks target word #2", () => {
  assertEquals(findWord(grid, "tep"), [
    ["a", "a", "q", "*"],
    ["x", "c", "w", "*"],
    ["r", "l", "e", "*"],
  ]);
});
