// new
const Person = function (name, age, job, subject) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.subject = subject;
 };
const sujon = new Person ("Sujon Sheikh", 24, "WebDevs", "math");
console.log(sujon); 

// Explain: this is function constructor with new keyword. constructor is a blue print template here create more object.