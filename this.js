let user = {
    name: "John",
    age: 30,

    sayHi() {
        console.log(this.name);
    }

};

console.log(user.sayHi());