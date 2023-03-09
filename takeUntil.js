/** This function will take in two parameters as well:
 * The array to work with
 * The callback (which Lodash calls "predicate")
 * The function will return a "slice of the array with elements taken from the beginning."
 * It should keep going until the callback/predicate returns a truthy value.
 */

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

const takeUntil = function(array, callback) {
  let res = [];
  for (item of array) {
    if (callback(item)) {
      return res;
    } else {
      res.push(item);
    }
  }
  return res;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1,data1.slice(0,5));

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2,data2.slice(0,4));

const data3 = [4,8,12,16,6,7];
const results3 = takeUntil(data3, x => x % 4);
console.log(results3);
assertArraysEqual(results3,data3.slice(0,3));