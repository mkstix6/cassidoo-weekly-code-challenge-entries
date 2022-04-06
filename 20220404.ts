/**
 * Given two strings n and m, return true if they are equal
 * when both are entered into text editors. But: a # means
 * a backspace character (deleting backwards), and a % means
 * a delete character (deleting forwards).
 *
 * Example:
 *
 * > equalWithDeletions("a##x", "#a#x")
 * > true      // both strings become "x"
 *
 * > equalWithDeletions("fi##f%%%th %%year #time###", "fifth year time")
 * > false     // the first string becomes "fart"
 */

function processKeypresses(str: string): string {
  let final = "";
  let forwardDeletions = 0;
  for (let i = 0; i < str.length; i++) {
    const thisChar = str.charAt(i);
    switch (thisChar) {
      case "#":
        final = final.slice(0, -1);
        break;

      case "%":
        forwardDeletions++;
        break;

      default:
        if (forwardDeletions) {
          forwardDeletions--;
        } else {
          final = final.concat(thisChar);
        }
        break;
    }
  }
  return final;
}

function equalWithDeletions(str1: string, str2: string): boolean {
  return processKeypresses(str1) === processKeypresses(str2);
}

console.log(
  processKeypresses("a##x") === "x" ? "✅" : `❌ ${processKeypresses("a##x")}`
);
console.log(
  processKeypresses("#a#x") === "x" ? "✅" : `❌ ${processKeypresses("#a#x")}`
);
console.log(
  processKeypresses("fi##f%%%th %%year #time###") === "fart"
    ? "✅"
    : `❌ ${processKeypresses("fi##f%%%th %%year #time###")}`
);
console.log(
  processKeypresses("fifth year time") === "fifth year time" ? "✅" : "❌"
);
console.log(equalWithDeletions("a##x", "#a#x") === true ? "✅" : "❌");
console.log(
  equalWithDeletions("fi##f%%%th %%year #time###", "fifth year time") === false
    ? "✅"
    : "❌"
);
