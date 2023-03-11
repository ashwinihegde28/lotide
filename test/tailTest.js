// import assertEqual function
/*
const tail = require('../tail');
const assertEqual = require('../assertEqual');

assertEqual(compEquality(['af','3z','cr'],['bz','cr']));*/


//Retesting required 

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
    it("returns ['Lighthouse', 'Labs']" , () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]) , ["Lighthouse", "Labs"]);

    });
}
);



// Need Help