// call
const thisCall = {
    name: "sujon",
    age: 24,
    isGf: false,
    another: {
        name: "sheikh",
        hello: function(){
            console.log(`hello ${this.name}`)
        }
    }
};
thisCall.another.hello(); // its default
thisCall.another.hello.call(thisCall); // its customs

// explain: call method works on cutoms parents.