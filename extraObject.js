const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
// console.log(person);

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50, eyeColor: "blue"
}

const x = person;
x.age = 10;
console.log(person)