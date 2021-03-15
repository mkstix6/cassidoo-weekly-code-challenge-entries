/**
 * Given a rowIndex, return an array of the values in that row of Pascal’s Triangle.
 * e.g.
 * pascals(0)
 * [1]
 * pascals(3)
 * [1,3,3,1]
 */

const pascals = (depth) => {
  // Zeroth case
  if (depth === 0) return [1];
  // All other cases
  const previous = pascals(depth - 1);
  let current = [1];
  current[depth] = 1;
  for (let i = 1; i < depth; i++) {
    current[i] = previous[i - 1] + previous[i];
  }
  return current;
};

////////////////////////////////////////////////////////////
// simpleArrayEqual tests
const simpleArrayEqual = (arrA, arrB) => {
  if (arrA.length !== arrB.length) return false;
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) return false;
  }
  return true;
};

console.assert(
  simpleArrayEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]) === true,
  "simpleArrayEqual similar arrays check"
);
console.assert(
  simpleArrayEqual([1, 2, 3, 4, 5], [1, 2, 3, 4]) === false,
  "simpleArrayEqual different arrays check"
);

// pascals tests
console.assert(simpleArrayEqual(pascals(0), [1]) === true, `pascals(0) failed`);
console.assert(
  simpleArrayEqual(pascals(1), [1, 1]) === true,
  `pascals(1) failed`
);
console.assert(
  simpleArrayEqual(pascals(2), [1, 2, 1]) === true,
  `pascals(2) failed`
);
console.assert(
  simpleArrayEqual(pascals(3), [1, 3, 3, 1]) === true,
  `pascals(3) failed`
);
console.assert(
  simpleArrayEqual(pascals(4), [1, 4, 6, 4, 1]) === true,
  `pascals(4) failed`
);
console.assert(
  simpleArrayEqual(pascals(5), [1, 5, 10, 10, 5, 1]) === true,
  `pascals(5) failed`
);
