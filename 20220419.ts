/**
 * Given an unsorted array of integers and a number n, find the subarray of length n that has the largest sum.
 *
 * Example:
 * $ largestSubarraySum([3,1,4,1,5,9,2,6], 3)
 * $ [9, 2, 6]
 */

const sumArray = (acc: number, curr: number): number => acc + curr;

const largestSubarraySum = (
  digits: number[],
  resultLength: number
): number[] | undefined => {
  let resultSubArray: number[] | undefined;
  let largestSum = 0;
  for (let i = 0; i < digits.length - resultLength + 1; i++) {
    const subArray = digits.slice(i, i + resultLength);
    const sum = subArray.reduce(sumArray, 0);
    if (sum > largestSum) {
      resultSubArray = subArray;
      largestSum = sum;
    }
  }
  return resultSubArray;
};

console.log(largestSubarraySum([3, 1, 4, 1, 5, 9, 2, 6], 3));
console.log(`Expect [9, 2, 6]`);

console.log(largestSubarraySum([3, 1, 9, 8, 9, 7, 2, 6], 4));
console.log(`Expect [9, 8, 9, 7]`);

console.log(largestSubarraySum([3, 1, 9, 8, 9, 7, 2, 6], 2));
console.log(`Expect [9, 8]`);
