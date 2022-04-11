/**
 * Given an integer n representing the number of sides of a regular polygon, return the measure of each interior angle. Bonus points: implement some of the other functions listed in the linked Wikipedia page!
 *
 * Example:
 *
 * $ interiorAngleSize(3)
 * $ 60 // Each angle in a triangle that is a regular polygon is 60 degrees
 *
 * $ interiorAngleSize(8)
 * $ 135
 */

const interiorAngleSize = (sides: number): number =>
  (180 * (sides - 2)) / sides;

console.log(interiorAngleSize(3) === 60 ? "✅" : "❌");
console.log(interiorAngleSize(4) === 90 ? "✅" : "❌");
console.log(interiorAngleSize(8) === 135 ? "✅" : "❌");
