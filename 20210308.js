/**
08/03/2021
Interview question of the week

Last week, I had you figure out how much paint you’d need to paint a room! Nice work Pranav, Dhanush, Leyan, Leslie, Michael, Ivana, Elliot, Steve, Alex, David, and Ten!

This week’s question:
Given a string array representing a tic-tac-toe board, return true if and only if it’s possible to reach this board position during the course of a valid tic-tac-toe game. You can assume the first player will always play X first, and players will only fill in blank spaces. The game will end if there is 3 in a row, column, or diagonal, or if the board is full. 

Example: 
$ validTTTPosition(["XOX", " X ", "   "])
$ false
$ validTTTPosition(["XOX", "O O", "XOX"])
$ true
$ validTTTPosition(["OOO", "   ", "XXX"])
$ false
$ validTTTPosition(["  O", "   ", "   "])
$ false
*/

const validTTTPosition = (boardInput) => {
  // Assuming boardInput of form ["XOX", " X ", "   "]
  // Re-organise board chars; I'm comfy with arrays.
  const boardChars = [...boardInput.join("")];
  // Player char counts
  const Xcount = boardChars.filter((char) => char === "X").length;
  const Ocount = boardChars.filter((char) => char === "O").length;
  // Mustn't have less Xs than Os; assume X goes first
  if (Xcount < Ocount) return false;
  // Mustn't have 2 more Xs than Os; assume we take turns
  if (Xcount - Ocount > 1) return false;
  // Ok, let's just compute the 8 board "words" up front #noPerf 🤷‍♂️.
  const boardWords = [
    `${boardChars[0]}${boardChars[1]}${boardChars[2]}`, // Horizontal
    `${boardChars[3]}${boardChars[4]}${boardChars[5]}`, // Horizontal
    `${boardChars[6]}${boardChars[7]}${boardChars[8]}`, // Horizontal
    `${boardChars[0]}${boardChars[3]}${boardChars[6]}`, // Vertical
    `${boardChars[1]}${boardChars[4]}${boardChars[7]}`, // Vertical
    `${boardChars[2]}${boardChars[5]}${boardChars[8]}`, // Vertical
    `${boardChars[0]}${boardChars[4]}${boardChars[8]}`, // Diagonal
    `${boardChars[2]}${boardChars[4]}${boardChars[6]}`, // Diagonal
  ];
  // If Xs win there must be one more Xs, than Os, on the board.
  if (boardWords.includes("XXX") && Xcount !== Ocount + 1) {
    return false;
  }
  // If Os win there must be equal counts of Xs and Os on the board.
  if (boardWords.includes("OOO") && Xcount !== Ocount) {
    return false;
  }
  // Exhausted checks, assume board position is valid 😅
  return true;
};

const assertionsResults = [
  [["XOX", " X ", "   "], false],
  [["XOX", "O O", "XOX"], true],
  [["OOO", "   ", "XXX"], false],
  [["OOO", "  X", "XX "], true],
  [["  O", "   ", "   "], false],
  [["  O", " X ", "   "], true],
  [["  O", "  X", "   "], true],
  [["X O", "  X", "  X"], false],
  [["XXX", "OO ", "O  "], false], // If X wins it must have 1 more X on board.
  [["OOO", "XX ", "XX "], false], // If O wins there must be equal numbers of Xs and Os.
  [["OOO", "XXX", "X  "], false],
  [["OOO", "XXX", "   "], false],
  [["OO ", "XXX", "   "], true],
  [["O X", "XOX", "  O"], true],
  [["   ", "   ", "   "], true],
  [["   ", " O ", "   "], false],
  [["   ", " X ", "   "], true],
  [["O  ", " X ", "   "], true],
  [["OX ", " X ", "   "], true],
  [["OX ", " X ", " O "], true],
  [["OX ", " XX", " O "], true],
  [["OX ", "OXX", " O "], true],
  [["OX ", "OXX", "XO "], true],
  [["OXO", "OXX", "XO "], true],
  [["OXO", "OXX", "XOX"], true],
].map(([input, expected]) => {
  return validTTTPosition(input) === expected;
});

console.log({ assertionsResults });

if (assertionsResults.includes(false)) {
  console.log("Your code is bad 👎");
} else if (assertionsResults.every((value) => !!value)) {
  console.log("Your code is good 👍");
}
