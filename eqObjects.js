const assertEqual = function(actual, expected) {
  const happySmiley = String.fromCodePoint(0x1F600);
  const sadSmiley = String.fromCodePoint(0x1F614);
  // include template literal to display
  let match = `${happySmiley} Assertion Passed: ${actual} == ${expected}`;
  let mismatch = `${sadSmiley} Assertion Failed: ${actual}  !== ${expected}`;
  (actual === expected) ? console.log(match) : console.log(mismatch);
};

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

  

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    // values are itself array of elements check each element
    if (Array.isArray(val1) && Array.isArray(val2)) {  
      return eqArrays(val1 , val2);
    }
    if (val1 !== val2) { 
      return false;
    }
  }
  return true;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject);
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);


const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), true);//false;
