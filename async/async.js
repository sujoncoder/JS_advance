// async.
console.log("i am first.")
setTimeout(function(){
    console.log("I am second.")
},2000);
console.log("i am third.")


// first
setTimeout(myFunction, 3000);

function myFunction() {
  console.log("I love you...");
};

// Or
setTimeout(function(){
    console.log("I love you too...")
},4000)

// Or
setTimeout(function() { myFunction("hello"); }, 3000);

function myFunction(value) {
  console.log("I am calling from 3rd line.")
}