// import assertEqual function
const head = require('../head');
// import assertEqual function
const assertEqual = require('../assertEqual');


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);

