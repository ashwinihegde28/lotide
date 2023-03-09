
const assertEqual = function(actual, expected) {
  const happySmiley = String.fromCodePoint(0x1F600);
  const sadSmiley = String.fromCodePoint(0x1F614);
  // include template literal to display
  let match = `${happySmiley} Assertion Passed: ${actual} == ${expected}`;
  let mismatch = `${sadSmiley} Assertion Failed: ${actual}  !== ${expected}`;
  (actual === expected) ? console.log(match) : console.log(mismatch);
};

// function findKeyByValue takes in an object and a value.
//It should scan the object and return the first key which contains the given value.
// If no key with that given value is found, then it should return undefined.
const findKeyByValue = function(object, value) {
  // compare object.key contains value  if so pass the key to calling function using for loop
  /*for (key of Object.keys(object)){
        console.log(key.);
       
    }*/
  for (let id in object) { // here id refers to key
    if (object[id] === value) {
      return id;
    }
  }
  return undefined;
};



const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

   
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);