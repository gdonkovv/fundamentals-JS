function plantDiscovery(input) {

    let n = Number(input.shift());
    let plants = {};

    for (let i = 0; i < n; i++) {

        let line = input.shift();
        let tokens = line.split("<->");
        let plantName = tokens[0];
        let plantRarity = tokens[1];
        plants[plantName] = { rarity: plantRarity, ratings: [] };

    }

    let newLine = input.shift();
    while (newLine !== "Exhibition") {

        let tokens = newLine.split(": ");
        let command = tokens[0];
        let detailsTokens = tokens[1].split(" - ");

        let currPlant = detailsTokens[0];
        let p = Number(detailsTokens[1]);
        if (plants.hasOwnProperty(currPlant)) {
            if (command === "Rate") {
                plants[currPlant].ratings.push(p);
            } else if (command === "Update") {

                plants[currPlant].rarity = p;

            } else if (command === "Reset") {
                plants[currPlant].ratings.splice(0, plants[currPlant].ratings.length);
            }

        } else {
            console.log("error");
        }
        newLine = input.shift();
    }

    console.log("Plants for the exhibition:");
    for (let key of Object.keys(plants)) {

        let name = key;
        let rarity = plants[key].rarity;
        let sumRating = 0;
        let avgRating = 0;
        if (plants[key].ratings.length > 0) {
            plants[key].ratings.forEach(element => sumRating += element);
            avgRating = sumRating / (plants[key].ratings).length;
        }


        console.log(`- ${name}; Rarity: ${rarity}; Rating: ${avgRating.toFixed(2)}`);

    }
}
plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);