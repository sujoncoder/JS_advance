const gf = "jerin";
console.log(gf.length);

let text = "hello world";

// charAt
console.log(text.charAt(3));

// cahrCodeAt
console.log(text.charCodeAt(2));

// slice // remove from target position
const lovely = "jerin, rokeya, jannath";
console.log(lovely.slice(7));
const cutie = "jerin";
console.log(cutie.slice(1, 4));
console.log(cutie.slice(2));

const lovelyGf = "rokeya, jannath, jerin";
console.log(lovelyGf.slice(-14));

// subString
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);
console.log(part);

// toUppercase
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
console.log(text2);

// toLowercase
let textL = "Hello World!"; // String
let textL2 = text1.toLowerCase();
console.log(textL2);

// concat
const firstName = "sujon";
const lastName = "sheikh";
const final = firstName.concat(" ", lastName);
console.log(final);

// trim
const babu = "jerins  ";
console.log(babu.trim());

// trimStart
const trim1 = " eeeee";
const startTrimer = trim1.trimStart();
console.log(startTrimer);

// end trim
const trimEnd = "djskhdsjd    ";
const trimEnder = trimEnd.trimEnd();
console.log(trimEnder);
