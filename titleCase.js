// Title case (or Capital Case) is a specific method of capitalizing the characters of every word in a sentence in order to make it usable as a title or headline.

const titleCase  = function(text) {
  if(text.length === 0){
    return "";
  }
  const words = text.split(" ");
  let res = [];
  words.forEach(element => {
    //capitalise only the starting letter at 0th position and than add the rest letters from 1st poition.
    res.push(element.charAt(0).toUpperCase() + element.slice(1).toLowerCase())
  });
  return  res.join(" ");
};


console.log(titleCase("AB"));
console.log(titleCase("HI YO"));
console.log(titleCase("hAndlE wEIrd vOwEl cAsE"));
console.log(titleCase("all lower case words"));
console.log(titleCase("i r cool"));
console.log(" ");