// The second argument/parameter is expected to be a (callback) function
const findWaldo = (names, found) =>{
  names.forEach(function(element , index) {
    if (element === "Waldo") {
      found(index);
    }
  });
};

const actionWhenFound = function(index) {
  console.log(`Wldo found at index   ${index} !`);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);