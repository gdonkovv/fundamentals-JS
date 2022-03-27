function needForSpeedIII(input) {

    let n = Number(input.shift());

    let cars = {};

    for (let i = 0; i < n; i++) {
        let line = input.shift();
        let tokens = line.split("|");
        let carName = tokens[0];
        let mileage = Number(tokens[1]);
        let fuel = Number(tokens[2]);

        cars[carName] = {
            mileage,
            fuel
        }

    }

    let line = input.shift();
    while (line !== "Stop") {

        let tokens = line.split(" : ");
        let command = tokens[0];

        if (command === "Drive") {

            let car = tokens[1];
            let distance = Number(tokens[2]);
            let fuel = Number(tokens[3]);

            if (cars[car].fuel >= fuel) {
                cars[car].mileage += distance;
                cars[car].fuel -= fuel;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

            } else {
                console.log("Not enough fuel to make that ride");
            }

            if (cars[car].mileage >= 100000) {
                delete cars[car];
                console.log(`Time to sell the ${car}!`);
            }

        } else if (command === "Refuel") {

            let car = tokens[1];
            let fuel = Number(tokens[2]);

            if (cars[car].fuel < 75) {
                let needed = 75 - cars[car].fuel;
                if (fuel > needed) {
                    fuel = needed;
                }
                cars[car].fuel += fuel;
                console.log(`${car} refueled with ${fuel} liters`);
            }

        } else if (command === "Revert") {
            let car = tokens[1];
            let km = Number(tokens[2]);
            cars[car].mileage -= km;
            console.log(`${car} mileage decreased by ${km} kilometers`);
            if (cars[car].mileage < 10000) {
                cars[car].mileage = 10000;
            }
        }
        line = input.shift();
    }

    for (let key of Object.keys(cars)) {

        let car = key;
        let mileage = cars[key].mileage;
        let fuel = cars[key].fuel;

        console.log(`${car} -> Mileage: ${mileage} kms, Fuel in the tank: ${fuel} lt.`);

    }

}
needForSpeedIII([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);