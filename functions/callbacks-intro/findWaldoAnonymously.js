// The second argument/parameter is expected to be a (callback) function
const findWaldo = (names, found) =>{
  names.forEach(function(element , index) {
    if (element === "Waldo") {
      found(index);
    }
  });
};

// Anonymous function passes here for findWaldo
findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log(`Wldo found at index   ${index} !`);
});
