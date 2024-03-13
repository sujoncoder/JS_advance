const cars = ["volvo", "fiat", "rokeya"];
console.log(cars);

// create an array.
const persons = [];
persons[0] = "sujon";
persons[1] = "sheikh";
persons[2] = "jerin";
console.log("persons array is: ", persons);

// create array using new key
const vip = new Array("Jannth", "jerin", "Sujon");
console.log("vip array is", vip);

// access array element
const gf = ["jannath", "jerin", "rokeya"];
console.log("access is : ", gf[1]);

// change element an array
const ex = ["jannath", "rokeya"];
console.log("my curent ex is:", (ex[0] = "jerin"));

// toString
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("fruits =", fruits);
console.log("Now fruits is string =", fruits.toString());

// length
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log("length is = ", fruits1.length);
console.log("fruits first element is :", fruits1[1]);
console.log("fruits lastttt element index is :", [fruits1.length - 1]);

// push
const fruits2 = ["Banana", "Orange", "Apple"];
console.log(fruits2);
const pushFruits2 = fruits2.push("Lychee");
console.log(pushFruits2);

const fruits3 = ["Banana", "Orange", "Apple"];
console.log(typeof fruits3);
console.log(Array.isArray(fruits3));

const fruits4 = ["Banana", "Orange", "Apple"];
console.log(fruits4 instanceof Array);
