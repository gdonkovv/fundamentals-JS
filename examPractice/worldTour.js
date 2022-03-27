function worldTour(input) {

    let destinations = input.shift();
    let line = input.shift();
    while (line !== "Travel") {

        let tokens = line.split(":");
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];

        if (command === "Add Stop") {
            let index = Number(p1);
            let givenString = p2;

            if (index !== NaN && index >= 0 && index < destinations.length) {
                let destArr = destinations.split("");
                destArr.splice(index, 0, givenString);
                destinations = destArr.join("");
            }
        } else if (command === "Remove Stop") {
            let start = Number(p1);
            let end = Number(p2);
            if ((start !== NaN && start >= 0 && start < destinations.length) && (end !== NaN && end >= 0 && end < destinations.length)) {
                let destArr = destinations.split("");
                destArr.splice(start, end+1 - start);
                destinations = destArr.join("");
            }
        } else if (command === "Switch") {
            if (destinations.includes(p1)) {
                destinations = destinations.split(p1).join(p2);
            }
        }

        console.log(destinations);
        line = input.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${destinations}`);

}
worldTour((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]));