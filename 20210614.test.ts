import test, { Macro } from "ava";
import { printArrow } from "./20210614.js";

const simpletests: [[string, number], string][] = [
  [
    ["right", 3],
    `*
 *
  *
 *
*`,
  ],
  [
    ["right", 5],
    `*
 *
  *
   *
    *
   *
  *
 *
*`,
  ],
  [
    ["right", 4],
    `*
 *
  *
   *
  *
 *
*`,
  ],
  [
    ["left", 5],
    `    *
   *
  *
 *
*
 *
  *
   *
    *`,
  ],
  [
    ["left", 4],
    `   *
  *
 *
*
 *
  *
   *`,
  ],
  [
    ["left", 2],
    ` *
*
 *`,
  ],
  [["left", 1], `*`],
  [["right", 1], `*`],
];

const macro = (t, [direction, size], expected) => {
  t.is(printArrow(direction, size), expected);
};

simpletests.forEach((testitem, i) => {
  const [input, expected] = testitem;
  test(`test: ${input[0]}–${input[1]}`, macro, input, expected);
});
