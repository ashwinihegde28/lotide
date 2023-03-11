/*Module {
  id: '.',
  exports: {},
  parent: null,
  filename: '/Users/superman/codes/moduleCheck.js',
  loaded: false,
  children: [],
  paths: [ ... ] 
}*/

const sayHelloTo = function(person) {
  console.log(`Hello, ${person}`);
}
// add this line to the end of the file.
module.exports = sayHelloTo;