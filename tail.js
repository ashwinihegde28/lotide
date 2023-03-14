// import assertEqual function
const assertEqual = require('./assertEqual');

const tail = (array) => {
    console.log(array.slice(1));
    return array.slice(1);
};
tail([10,20]);

module.exports = tail;