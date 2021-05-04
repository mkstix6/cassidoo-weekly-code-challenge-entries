/**
 * This week’s question:
 * Given a positive or negative real number,
 * round it to the next whole integer closer
 * to zero. This means if it’s positive,
 * round down, and if it’s negative, round
 * up. Try to do this in as few characters
 * possible!
 *
 * Test cases:
 *  1.7    =>  1
 * -2.1    => -2
 *  500.4  =>  500
 * -369.5  => -369
 *  150    =>  150
 * -350    => -350
 */

const roundTowardsZero = (number) => ~~number;

console.log(roundTowardsZero(1.7) === 1);
console.log(roundTowardsZero(-2.1) === -2);
console.log(roundTowardsZero(500.4) === 500);
console.log(roundTowardsZero(-369.5) === -369);
console.log(roundTowardsZero(150) === 150);
console.log(roundTowardsZero(-350) === -350);
