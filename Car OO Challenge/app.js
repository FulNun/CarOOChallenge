class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep.";
    }

    toString() {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
console.log(myFirstVehicle.honk()); // Outputs: "Beep."
console.log(myFirstVehicle.toString()); // Outputs: "Make: Honda, Model: Monster Truck, Year: 1999"


class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep.";
    }

    toString() {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year); // Call the constructor of the parent class (Vehicle)
        this.numWheels = 4; // Add the numWheels property specific to Car
    }
}

let myCar = new Car("Toyota", "Camry", 2022);
console.log(myCar.toString()); // Outputs: "Make: Toyota, Model: Camry, Year: 2022"
console.log(myCar.numWheels); // Outputs: 4


class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep.";
    }

    toString() {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return "VROOM!!!";
    }
}

let myMotorcycle = new Motorcycle("Harley-Davidson", "Sportster", 2023);
console.log(myMotorcycle.toString()); // Outputs: "Make: Harley-Davidson, Model: Sportster, Year: 2023"
console.log(myMotorcycle.numWheels); // Outputs: 2
console.log(myMotorcycle.revEngine()); // Outputs: "VROOM!!!"


class Garage {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    add(vehicle) {
        if (!(vehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        }

        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
        }

        this.vehicles.push(vehicle);
        return "Vehicle successfully added to the garage!";
    }
}

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

// Create a garage with a capacity of 3
const myGarage = new Garage(3);

// Create some vehicles
const car1 = new Vehicle("Toyota", "Camry", 2022);
const car2 = new Vehicle("Honda", "Civic", 2021);
const motorcycle = new Motorcycle("Harley-Davidson", "Sportster", 2023);

// Attempt to add vehicles to the garage
console.log(myGarage.add(car1)); // "Vehicle successfully added to the garage!"
console.log(myGarage.add(car2)); // "Vehicle successfully added to the garage!"
console.log(myGarage.add(motorcycle)); // "Sorry, we're full."
console.log(myGarage.add("Not a vehicle")); // "Only vehicles are allowed in here!"
