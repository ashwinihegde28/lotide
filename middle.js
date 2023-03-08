

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
    (isEqual) ? match : misMatch;
  };
  
  const calMiddleElement = function(array){
    // if there is only one element or two in the inout array than return empty string
    let middleElement = [];
    let len = array.length;
    console.log(len);
    if(len >= 2 ){
        // calculte middle element for even arrays
        if(len % 2 === 0)
        {
            let index = len/2;
            middleElement.push(array[index - 1]);  
            middleElement.push(array[index] );         
          
        }
        // check if the element is even or odd
        // if its even , round the number and get the index or middle element.
        // If its even than index and index -1 elements
        else{
            let index = Math.floor(len/2);
            return array[index];
        }            
      
    }
    return middleElement;
  };
  calMiddleElement([2,3,4,5]);


  