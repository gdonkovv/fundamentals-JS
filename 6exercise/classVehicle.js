function classVehicle() {

    class Vehicle {
        constructor(type, model, parts, fuel) {
            this.type = type;
            this.model = model;
            this.fuel = fuel;
            this.parts = {
                engine: parts.engine,
                power: parts.power,
                quality: parts.engine * parts.power,
            }
        }
        drive(fuelLoss) {
            this.fuel -= Number(fuelLoss);
        }
    }
    let parts = { engine: 9, power: 500 };
    let vehicle = new Vehicle('l', 'k', parts, 840);
    vehicle.drive(20);
    console.log(vehicle.fuel);
}
classVehicle();