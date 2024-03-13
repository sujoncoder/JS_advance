// Local & global.
const globalfunc  = () => {
    console.log("hello i am from global function.");
    const localfunc = () => {
        console.log("I a from local function.");
    };
    localfunc();
};
localfunc();

// Explain : when call globalFunction then exicute two function global and local. Becouse global function inside local function.

// But when call localfunc() : throw ReferenceError.