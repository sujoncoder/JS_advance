// var had a global or function scope.
// but let has block scope.

{
  let x = 2;
  console.log(x);
}

// let not work here becouse let decleared.
let x = "John Doe";
let x = 2;
console.log(x);

// var right work here
var y = "John Doe";
var y = 0;
console.log("var", y);
