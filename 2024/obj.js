const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
console.log(person["age"]);

// another obj
const person1 = {
  firstName: "sujon",
  lastName: "sheikh",
  age: 25,
  isLove: true,
  isMarried: false,
  fullName: function () {
    return person1.firstName + " " + person1.lastName;
  },
};
console.log(person1.fullName());
