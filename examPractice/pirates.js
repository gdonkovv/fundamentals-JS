function pirates(input) {

    // store target cities until Sail is recieved
    // events happen till End is received

    let cities = {};

    let line = input.shift();
    while (line !== "Sail") {
        let tokens = line.split("||");
        let city = tokens[0];
        let population = Number(tokens[1]);
        let gold = Number(tokens[2]);


        if (cities.hasOwnProperty(city)) {

            cities[city].population += population;
            cities[city].gold += gold;

        } else {
            cities[city] = {
                city,
                population,
                gold
            };
        }
        line = input.shift();
    }

    line = input.shift();
    while (line !== "End") {

        let tokens = line.split("=>");
        let command = tokens[0];
        let town = tokens[1];

        if (command === "Plunder") {
            let people = Number(tokens[2]);
            let townGold = Number(tokens[3]);

            cities[town].population -= people;
            cities[town].gold -= townGold;

            console.log(`${town} plundered! ${townGold} gold stolen, ${people} citizens killed.`);

            if (cities[town].population <= 0 || cities[town].gold <= 0) {
                delete cities[town];
                console.log(`${town} has been wiped off the map!`);
            }

        } else {
            let townGold = Number(tokens[2]);
            if (townGold < 0) {
                console.log("Gold added cannot be a negative number!");
            } else {
                cities[town].gold += townGold;
                console.log(`${townGold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`);
            }
        }
        line = input.shift();
    }

    if (Object.keys(cities).length !== 0) {
        console.log(`Ahoy, Captain! There are ${Object.keys(cities).length} wealthy settlements to go to:`);
        for (let key of Object.keys(cities)) {
            console.log(`${key} -> Population: ${cities[key].population} citizens, Gold: ${cities[key].gold} kg`);
        }
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }

}
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]);