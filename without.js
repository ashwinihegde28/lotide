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
  (isEqual) ? match : misMatch;
};

const without = function(array1, array2) {
  let filteredArray = [];
  for (const element of array1) {
    if (! array2.includes(element)) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
};


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);