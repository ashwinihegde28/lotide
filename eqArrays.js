//Implementing a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
const eqArrays = function(arr1 , arr2) {
  let isTrue = false;
  if (arr1.length !== arr1.length) {
    return false;
  }
  for (let i in arr1) {
   isTrue = (arr1[i] === arr2[i]) ? true : false;
  }
  console.log(isTrue);
  return isTrue;
};

module.exports = eqArrays;
