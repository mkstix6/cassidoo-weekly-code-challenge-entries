/**
 * Given a string s, return the longest palindromic substring in s.
 *
 * Example:
 * $ pSubstring('babad')
 * $ 'bab' // or 'aba'
 */

const reverseString = (string: string): string => {
  return string.split("").reverse().join("");
};

const isPalindrome = (string: string): boolean => {
  // Exit early; avoids expensive reverseString() in most cases.
  if (string.slice(0, 1) !== string.slice(-1)) {
    return false;
  }
  // Full check
  return string === reverseString(string);
};

const pSubstring = (s: string): string => {
  let longest = "";
  // Start with long candidates first
  for (let candidateLength = s.length; candidateLength > 0; candidateLength--) {
    for (let i = 0; i <= s.length - candidateLength; i++) {
      // Exit early; we have a longer solution already.
      if (candidateLength <= longest.length) {
        break;
      }
      const candidate = s.slice(i, i + candidateLength);
      if (isPalindrome(candidate) && candidate.length > longest.length) {
        longest = candidate;
      }
    }
  }
  return longest;
};

// Tests: deno run --watch FILENAME.ts
[
  ["abcdefg", "a"],
  ["babad", "bab"],
  ["yoyoy", "yoyoy"],
  ["eeeee", "eeeee"],
  ["abbcccddddeeeee", "eeeee"],
  ["aaaaabbbbcccdde", "aaaaa"],
  ["ywrybrasdfghjkjhgfdsaberqywnw", "asdfghjkjhgfdsa"],
  ["tilqwertytrewqnuatvlnvntl", "qwertytrewq"],
  ["qwertytrewq", "qwertytrewq"],
  ["Aqwertytrewq", "qwertytrewq"],
  ["qwertytrewqB", "qwertytrewq"],
].forEach(([input, expected]) => {
  const result = pSubstring(input);
  console.log(result === expected ? `✅ ${result}` : `🛑`);
});
