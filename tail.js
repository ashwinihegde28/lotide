/*function assertEqual(actual, expected) {
    
  if (isNaN(actual) || expected.length < 0  || actual.length < 0 || isNaN(expected)) {
    return;
  }
  const happySmiley = String.fromCodePoint(0x1F600);
  const sadSmiley = String.fromCodePoint(0x1F614);
  // include template literal to display
  let match = `${happySmiley} Assertion Passed: ${actual} == ${expected}`;
  let mismatch = `${sadSmiley} Assertion Failed: ${actual}  !== ${expected}`;
  (actual === expected) ? console.log(match) : console.log(mismatch);
    
};

const tail = (array) => array.slice(1);

const compEquality = (array1,array) => {
  let getTail = tail(array1);
  if (getTail.length === array.length) {
    for (let i = 1; i < array.length; i++) {
      if (getTail[i] !== array[i]) {
        console.log("array mismatch");
        return false;
      }
    }
  } else {
    return false;
  }
  console.log("Both array matched");
  return true;
};
compEquality(['af','3z','cr'],['bz','cr']);*/

console.log(friend);
var friend = 'E.T.';
console.log(friend);
  