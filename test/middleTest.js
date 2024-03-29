
const middle = require('../middle');
const assert = require('chai').assert;


/*assertArraysEqual(middle([2]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]));
assertArraysEqual(middle([1, 2, 3]) , 2);
assertArraysEqual(middle([1, 2, 3, 4, 5]) , 3);
assertArraysEqual(middle([1, 2, 3, 4]) , [2,3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);*/

describe("#middle", () => {
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);
  });
});

