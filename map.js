/**Our map function will take in two arguments:

*An array to map
*A callback function
*The map function will return a new array based on the results of the callback function.
*/

// define map function


const eqArrays = function(arr1 , arr2) {
  let isTrue = false;
  if (arr1.length !== arr1.length) {
    return false;
  }
  for (let i in arr1) {
    (arr1[i] === arr2[i]) ? isTrue = true : isTrue = false;
  }
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


const map = function(array, callback) {
  // temporary code:
  const results = [];
  for (let item of array) {
    results.push(item);
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
const res2 = ['ground', 'control', 'to', 'major', 'tom'];
assertArraysEqual(results1 , res2);