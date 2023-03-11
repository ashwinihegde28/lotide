const num = [1,2,3,4];
const even = num.filter(function(num){ // filtered elements according to the condition is assigned to even.
return num % 2 === 0;
});
console.log("Subset of even numbers:", even);