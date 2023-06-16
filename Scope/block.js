function myFun () {
  if(100 == 100){
    const one = 1; // Block-scoped variable
    let two = 2; // Block-scoped constant
  // console.log(one,two);
  }
  // console.log(one,two); ReferenceError: one is not defined
};
myFun();

// Explain one & two define loop section so not exicute out site. Becouse this is block scope.