// class
class Car  {
    constructor (name, year) {
        this.name = name;
        this.year = year;
    }
    model () {
        console.log(`this is awesome ${this.name} model in ${this.year}`)
    }
}

const car1 = new Car ("suzuki", 2020);
car1.model();
console.log(car1.name);

// Explain : class constructor is a blue print object model template on es6.