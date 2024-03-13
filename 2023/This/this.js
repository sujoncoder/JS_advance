// This
const thisKeys = () => {
    // console.log(this);
};
thisKeys();

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        console.log("this")
        return this.firstName + " " + this.lastName;
    }
};
const result = person.fullName();
console.log(result);

// Explain: this keyword refers global contex or window context. according to object refer parents area.
