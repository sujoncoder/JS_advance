// callback.
function myFirst() {
    console.log("Hello");
  }
  
  function mySecond() {
    console.log("Goodbye");
  }
  
  myFirst();
  mySecond();

  // Explain : it,s not a callback function. Just understanding its programing works Sequence on order.



// Sequence Control
// Sometimes you would like to have better control over when to execute a function.
//Suppose you want to do a calculation, and then display the result.
//You could call a calculator function (myCalculator), save the result, and then call another function (myDisplayer) to display the result:

const resultCall = (sum) => {
  console.log(sum)
}

const calculate = (a, b) =>{
  const sum = a + b;
  return sum;
};
const result = calculate(20, 30);
resultCall(result);

// OR

const second = (sum) => {
  console.log(sum)
}

const first = (a, b) =>{
  const sum = a + b;
  resultCall(sum);
};
first(29, 70);
// Explain : the problem is it,s not controll from outside.



function myDisplayer(sum) {
  console.log(sum);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 * num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
// Example : here is controll outside.