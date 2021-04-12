/**
 * Given an integer n and a sorted array of prime integers
 * called primes, return the nth “super ugly number”. A
 * “super ugly number” is a positive number whose all
 * prime factors are in the array primes.
 *
 * Example:
 * $ superUgly(1, [2,3,5])
 * $ 1
 * $ superUgly(11, [2,7,13,19])
 * $ 28
 */

const superUgly = (n, primes) => {
  return 1;
};

console.assert(superUgly(1, [2, 3, 5]) === 1);
console.assert(superUgly(11, [2, 7, 13, 19]) === 28);
