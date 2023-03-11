// Implementing assertArraysEqual which will take in two arrays and console.log an appropriate message to the console using previously implemented "eqArrays" function
/* const eqArrays = function(arr1 , arr2) {
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

*/

const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


  
const middle = function(array) {
  // if there is only one element or two in the inout array than return empty string
  let middleElements = [];
  let len = array.length;
  if (len > 2) {
    // calculte middle element for even arrays
    // check if the element is even or odd
    // if its even , round the number and get two middle element present in index and index -1 position
    if (len % 2 === 0) {
      let index = len / 2;
      middleElements.push(array[index - 1]);
      middleElements.push(array[index]);
          
    }
    
    // If its odd 
    else {
      let index = Math.floor(len / 2);
      return array[index];
    }
      
  }
  return middleElements;
};


/*
console.log(Output);
console.log(middle([2]));
console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));
*/

module.exports = middle;
   
  


  