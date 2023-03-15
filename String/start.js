// START METHOD
const text = "Hello world, welcome to the universe.";
const result = text.startsWith("Hello");
const results = text.startsWith("world");
console.log(result, results);

// two parametter ("value" & index number = return TRUE or FALSE.)
let nextText = "Hello world, welcome to the universe.";
const nextResult = nextText.startsWith("world", 6);
console.log(nextResult);

// END WITH.
const texts = "wow awesome please give me some data";
const endText = texts.endsWith("data");
console.log(endText);