// Length
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);

// at()
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits1.at(2));

// join()
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2.join(" @ "));

// pop()
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
const popEl = fruits3.pop();
console.log(popEl);

// shift()
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
const shiftEl = fruits4.shift();
console.log(shiftEl);

// unshift()
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
const unshift = fruits5.unshift("lychee");
console.log("remove first el is: ", fruits5);

// add element on last position
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits6[fruits6.length] = "Kiwi";
console.log(fruits6);

// concat
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log("Total is: ", myChildren);

// flat
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat();
console.log(newArr);
