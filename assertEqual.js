// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const happySmiley = String.fromCodePoint(0x1F600);
  const sadSmiley = String.fromCodePoint(0x1F614);
  // include template literal to display
  let match = `${happySmiley} Assertion Passed: ${actual} == ${expected}`;
  let mismatch = `${sadSmiley} Assertion Failed: ${actual}  !== ${expected}`;
  (actual === expected) ? console.log(match) : console.log(mismatch);
};
/* moved to assertEqualTest.js
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);*/


module.exports = assertEqual;
