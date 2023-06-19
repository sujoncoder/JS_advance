// Prototype based Inheritance.

// Blue print template.
const Person = function (name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
};

// Create object.
const sujon = new Person ("sujon sheikh", 24, "student");
const anotherObj = new Person ("minhazul", 24, "nai");

// Upload new property on object...
sujon.gf = "jannati"; // adding property on sujon object.
sujon.company = "cs50";

// Prototype
// Prototype means when declear new object previous object vanish so store on prototype.
Person.prototype.sallary = "20000";
Person.prototype.address = "magura";

