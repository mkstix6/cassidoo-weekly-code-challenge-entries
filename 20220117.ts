/*
Using the rules of Wordle, given a guessWord
and a solutionWord, return a set of emojis
returned from the guessWord. 

Example:

let solutionWord = "fudge"
$ wordleGuess("reads", solutionWord)
$ "⬛🟨⬛🟨⬛"

$ wordleGuess("lodge", solutionWord)
$ "⬛⬛🟩🟩🟩"
*/

function wordleGuess(guessWord: string, solution: string): string {
  // Check input lengths
  if (guessWord.length !== 5 || solution.length !== 5) {
    throw new Error("Words must have 5 letters");
  }
  // Set up
  const guessLetters = [...guessWord];
  const solutionLetters = [...solution];
  const unusedLetters = [...solution];
  let answer = ["⬛", "⬛", "⬛", "⬛", "⬛"];
  // Analyse all correct letters first
  for (let i = 0; i < solutionLetters.length; i++) {
    if (solutionLetters[i] === guessLetters[i]) {
      answer[i] = "🟩";
      delete unusedLetters[i];
    }
  }
  // Analyse other included letters
  for (let i = 0; i < solutionLetters.length; i++) {
    if (answer[i] !== "🟩" && unusedLetters.includes(guessLetters[i])) {
      answer[i] = "🟨";
      delete unusedLetters[unusedLetters.indexOf(guessLetters[i])];
    }
  }
  // Done
  return answer.join("");
}

const tests = [
  ["reads", "fudge", "⬛🟨⬛🟨⬛"],
  ["lodge", "fudge", "⬛⬛🟩🟩🟩"],
  ["poppy", "peeps", "🟩⬛⬛🟩⬛"],
  ["poply", "peeps", "🟩⬛🟨⬛⬛"],
  ["poppy", "pools", "🟩🟩⬛⬛⬛"],
  ["peeps", "poppy", "🟩⬛⬛🟩⬛"],
  ["spoon", "sloop", "🟩🟨🟩🟩⬛"],
  ["spoon", "sloop", "🟩🟨🟩🟩⬛"],
  ["roomy", "spoon", "⬛🟨🟩⬛⬛"],
  ["roomy", "sloop", "⬛🟨🟩⬛⬛"],
  ["spoon", "roomy", "⬛⬛🟩🟨⬛"],
  ["spoon", "roomy", "⬛⬛🟩🟨⬛"],
  ["sloop", "roomy", "⬛⬛🟩🟨⬛"],
  ["slope", "spoon", "🟩⬛🟩🟨⬛"],
  ["spoon", "slope", "🟩🟨🟩⬛⬛"],
  ["foooo", "oooof", "🟨🟩🟩🟩🟨"],
  ["foooo", "oioof", "🟨🟨🟩🟩⬛"],
  ["foooo", "oioif", "🟨🟨🟩⬛⬛"],
  ["foooo", "oioio", "⬛🟨🟩⬛🟩"],
  ["foooi", "oioio", "⬛🟨🟩🟨🟨"],
  ["foooi", "oioif", "🟨🟨🟩⬛🟨"],
  ["foooi", "oiifo", "🟨🟨🟨⬛🟨"],
  ["ooooo", "oiifo", "🟩⬛⬛⬛🟩"],
];
tests.forEach(([guess, solution, expected]) => {
  const answer = wordleGuess(guess, solution);
  console.log(
    `${answer === expected ? "✅" : "❌"} ${guess} ${solution} ${expected} – `,
    answer
  );
});
