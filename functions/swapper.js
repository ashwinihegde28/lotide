/* Function Will:
fetch the value stored in key1 in object1, and then store that value in key2 of object2.
take the original value stored in key2 of object2, and store that in key1 of object1.
not need to return anything.*/

const swapper = function(key1, object1, key2, object2) {
  console.log("Swap!");
  // Add an empty objectBuffer, to store value. We want to transfer object1[key1] into it
  const tempVal = object1[key1];
  //copy object 1 into the buffer
  //Object.assign(tempObj, object1); // same as tempObj = object1


  // copy swap object2 into object1
  object1[key1] = object2[key2];  
  console.log(object1);


  //take the tempVal to copy into object2
  object2[key2] = tempVal;
  console.log(object2);
  return "";
};

  

swapper("a", { a: 1, b: 2, c: 3 }, "c", { a: 4, b: 3, c: 5 });
swapper("b", { a: 8, b: 7, c: 6 }, "d", { a: 5, b: 1, c: 2, d: 12 });
swapper("c", { a: 1, b: 3, c: 3, d: 7 }, "c", { a: 4, b: 0, c: 5 });


/* Swap!
object1: { a: 5 , b: 2, c: 3 }
object2: { a: 4, b: 3, c: 1 }
Swap!
object1: { a: 8 , b: 12, c: 6 }
object2: { a: 5, b: 1, c: 2, d: 7}
Swap!
object1: { a: 1 , b: 3, c: 5, d: 7 }
object2: { a: 4, b: 0, c: 3 }*/

