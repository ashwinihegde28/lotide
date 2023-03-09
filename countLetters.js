const assertEqual = function(actual, expected) {
  const happySmiley = String.fromCodePoint(0x1F600);
  const sadSmiley = String.fromCodePoint(0x1F614);
  // include template literal to display
  let match = `${happySmiley} Assertion Passed: ${actual} == ${expected}`;
  let mismatch = `${sadSmiley} Assertion Failed: ${actual}  !== ${expected}`;
  (actual === expected) ? console.log(match) : console.log(mismatch);
};


// The function will take in a sentence (as a string) and then return a count of each of the letters in that sentence.
const countLetters = function(sentence) {
  console.log();
  const result = {};
  for (let alpha of sentence) {
    if (alpha !== " ") { // Filters the spaces in the string
      if (result[alpha]) { // If the alphabet has already been counted, adds 1 to the count
        result[alpha] += 1;
      } else { // If the alphabet doesn't exist in the result object, creates it
        result[alpha] = 1;
      }
    }
  }
  return result;

};

console.log(countLetters("LHL"));

  