// static method.
class StaticMethod {
    constructor (name) {
        this.name = name;
    }
    static classMethod () {
        console.log("I am lazy developer.</>");
    }
};


console.log(StaticMethod.classMethod());

// Ojbect method
const person1 = new StaticMethod("sujon");
console.log(person1.classmethod());

// Exaple : when some time we need access class method but never access object method.