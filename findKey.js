const assertEqual = function(actual, expected) {
  const happySmiley = String.fromCodePoint(0x1F600);
  const sadSmiley = String.fromCodePoint(0x1F614);
  // include template literal to display
  let match = `${happySmiley} Assertion Passed: ${actual} == ${expected}`;
  let mismatch = `${sadSmiley} Assertion Failed: ${actual}  !== ${expected}`;
  (actual === expected) ? console.log(match) : console.log(mismatch);
};

/*function findKey which takes in an object and a callback.
*It should scan the object and return the first key for which the callback returns a truthy value.
*If no key is found, then it should return undefined.
*/

const findKey = function(object , callback) {
  let matchedKey = undefined;
  // get the keys from the object
  for (let item in object) {
    if (callback(object[item])) {
      return item;
    }
  }
  return  undefined;
};

//Call the function
const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

assertEqual(result,'noma');

