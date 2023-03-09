
// Returns true if both objects have identical keys with identical values.
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    if (Array.isArray(val1) && Array.isArray(val2)) {  // values are itself array of elements check each element
      return eqArrays(val1 , val2);
    }
    if (val1 !== val2) { // value is primitive use "==="
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  // the assertion messages that they print out objects as [object Object] which is not very descriptive and will not help with our debugging efforts. util library's inspect function to modify this function.
  const inspect = require('util').inspect; // must
  console.log(`Example label: ${inspect(actual)}`);
  let match = `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  let mismatch = `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  eqObjects(actual , expected) ? console.log(match) : console.log(mismatch);
  
};

const testObject1 = { a: '1', b: 2 };
const testObject2 = { b: 2, a: '1' };
assertObjectsEqual(testObject1 , testObject2);