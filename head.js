
const assertEqual = require('./assertEqual');
/*
const assertEqual = function(actual, expected) {
    
    if(isNaN(actual) || expected.length < 0  || actual.length < 0 || isNaN(expected)){   
        return;
    }           
    const happySmiley = String.fromCodePoint(0x1F600);
    const sadSmiley = String.fromCodePoint(0x1F614);
    // include template literal to display
    let match = `${happySmiley} Assertion Passed: ${actual} == ${expected}`;
    let mismatch = `${sadSmiley} Assertion Failed: ${actual}  !== ${expected}`;
    (actual === expected) ? console.log(match) : console.log(mismatch);
    
  };*/
  
const head = (array) => 
(array.length < 1)?console.log("Undefined"): array[0];
/*assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), []);*/

module.exports = head;