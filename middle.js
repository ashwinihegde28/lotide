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

module.exports = middle;
   
  


  