// constructor inheritence.
const Person = function (name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
};

const sujon = new Person("sujon sheikh", 24, "nothing");
console.log(sujon);

const Teacher = function (name, age, job, subject) {
    Person.call(this, name, age, job);
    this.subject = subject
}

const apolloSir = new Teacher("Apollo", 33, "teacher", "english");
console.log(apolloSir.name);

// Explain : constructor inheritance means suppose already have person function and there property. now need another property for teacher function. all same but need extra propert like "subject" for teacher now here is works constructor inheritance; 