
// Implementing assertArraysEqual which will take in two arrays and console.log an appropriate message to the console using previously implemented "eqArrays" function
const eqArrays = function(arr1 , arr2) {
  let isTrue = false;
  if (arr1.length !== arr1.length) {
    return false;
  }
  for (let i in arr1) {
    (arr1[i] === arr2[i]) ? isTrue = true : isTrue = false;
  }
  console.log(isTrue);
  return isTrue;
};

const assertArraysEqual = function(actual , expected) {
  const happySmiley = String.fromCodePoint(0x1F600);
  const sadSmiley = String.fromCodePoint(0x1F614);
  const isEqual = eqArrays(actual , expected);
  // include template literal to display
  let match = `${happySmiley} Assertion Passed: ${actual} == ${expected}`;
  let misMatch = `${sadSmiley} Assertion Failed: ${actual}  !== ${expected}`;
  (isEqual) ? console.log(match) : console.log(misMatch);
};

/*assertArraysEqual([5,6,7] , [5,6,7]);
assertArraysEqual(['a','b'] , ['a','c']);*/


module.exports = assertArraysEqual;
