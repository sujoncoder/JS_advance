function f1() {
    console.log("From f1");

    return function f2() {
        console.log("From f2");
    };

};
const dot = f1()
dot();