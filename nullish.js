// Nullish 

// Exactly nullish work check two value that value already exixts.
let user = "John";

console.log(user ?? "Anonymous");
let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0