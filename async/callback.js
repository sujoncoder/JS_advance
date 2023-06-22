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

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }
  
  let result = myCalculator(5, 5);
  myDisplayer(result);
  
  