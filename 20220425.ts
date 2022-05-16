/**
 * Given an array of intervals, merge the overlapping intervals,
 * and return an array of the resulting intervals.
 *
 * Example:
 *
 * $ mergeIntervals([[1,4],[2,6],[8,10],[15,20]])
 * $ [[1,6],[8,10],[15,20]]
 *
 * $ mergeIntervals([[1,2],[2,7]])
 * $ [[1,7]]
 */

type IntervalList = [number, number][];

const mergeIntervals = (intervals: IntervalList): IntervalList => {
  const merged: IntervalList = [];
  return intervals;
};

console.log(
  mergeIntervals([
    [1, 4],
    [2, 6],
    [8, 10],
    [15, 20],
  ])
);
console.log(`Expect [[1,6],[8,10],[15,20]]`);

console.log(
  mergeIntervals([
    [1, 2],
    [2, 7],
  ])
);
console.log(`Expect [[1,7]]`);
