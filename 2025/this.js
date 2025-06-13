// ------------------------------- NORMAL FUNCTION WITH THIS ---------------------------


function hello() {
    console.log("Wellcome To : ", this)
};

hello();

const obj = {
    name: "sujon",
    fun: hello
};

obj.fun();

// ------------------------------- ARROW FUNCTION WITH THIS ---------------------------

const hello2 = () => {
    console.log("Wellcome To : ", this)
};

hello();

const obj2 = {
    name: "sujon",
    fun: hello
};

obj2.fun();
