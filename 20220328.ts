/**
 * Given a string that represents items as asterisks (*) and compartment walls
 * as pipes (|), a start index, and an end index, return the number of items
 * in a closed compartment.
 *
 * Example:
 * let str = '|**|*|*'
 * > containedItems(str, 0, 5)
 * > 2
 * > containedItems(str, 0, 6)
 * > 3
 * > containedItems(str, 1, 7)
 * > 1
 *
 * Extra credit: What if you had multiple pairs of start and end indices?
 * You can do it in O(n) time!
 */

function containedItems(str: string, start: number, end: number): number {
  return 1;
}

let str = "|**|*|*";
console.log(
  containedItems(str, 0, 5) === 2
    ? "✅"
    : `❌ ${containedItems(str, 0, 5)} expected 2`
);
console.log(
  containedItems(str, 0, 6) === 3
    ? "✅"
    : `❌ ${containedItems(str, 0, 6)} expected 3`
);
console.log(
  containedItems(str, 1, 7) === 1
    ? "✅"
    : `❌ ${containedItems(str, 1, 7)} expected 1`
);
