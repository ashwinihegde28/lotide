// function identifies whether a supposedly chocolate chip cookie also has raisins in it. 
// It will receive a cookie which is an array of chocolate chips ("🍫")
// and search through the array to see whether or not a raisin is present.
const raisinAlarm = function(cookies) {
  for (let img of cookies) {
    if (img.includes("🍇")) {
      return "Raisin Alert";
    }
  }
  return "All Good!";
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));



// This function will return an array of responses, instead of a single response. 
const raisinAlarmArray = function(cookies) {
  //buffer to store the messages
  let msg = [];
  for (let img of cookies) {
    (img.includes("🍇")) ? msg.push("Raisin Alert") : msg.push("All Good!");
  }
  return msg;
};
  
  
  
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
  

