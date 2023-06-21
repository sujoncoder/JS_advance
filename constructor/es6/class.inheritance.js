// class inheritance.
class Car {
    constructor (brand) {
        this.carName = brand;
    }
    model (){
        console.log(`My car model is ${this.carName}`)
    }
};

class SuperCar extends Car {
    constructor (carName, color) {
        super(carName);
        this.carColor = color;
    }
    racing() {
        console.log(`wow awesome ${this.carName} & color ${this.carColor}`)
    }
};

let myCar = new SuperCar("Ford", "BMW");
myCar.racing();

// Explain : class constructor is a blue print template. class inheritance means extends previous decleared template using extends keyword then inside of super method received previous perameter.