function heroRecruitment(input) {

    let heroes = {};

    let line = input.shift();
    while (line !== "End") {

        let tokens = line.split(" ");
        let command = tokens[0];


        if (command === "Enroll") {
            let heroName = tokens[1];
            if (heroes.hasOwnProperty(heroName)) {
                console.log(`${heroName} is already enrolled.`);
            } else {
                heroes[heroName] = {};
            }

        } else if (command === "Learn") {
            let heroName = tokens[1];
            let spellName = tokens[2];

            if (heroes.hasOwnProperty(heroName) === false) {
                console.log(`${heroName} doesn't exist.`);
            } else {

                if (heroes[heroName].hasOwnProperty(spellName)) {
                    console.log(`${heroName} has already learnt ${spellName}.`);
                } else {
                    heroes[heroName][spellName] = spellName;
                }
            }
        } else if (command === "Unlearn") {
            let heroName = tokens[1];
            let spellName = tokens[2];

            if (heroes.hasOwnProperty(heroName) === false) {
                console.log(`${heroName} doesn't exist.`);
            } else {
                if (heroes[heroName].hasOwnProperty(spellName)) {
                    delete heroes[heroName][spellName];
                } else {
                    console.log(`${heroName} doesn't know ${spellName}.`);
                }

            }
        }
        line = input.shift();
    }

    console.log("Heroes:");
    for(let key of Object.keys(heroes)){

        let hero = key;
        let spells = Object.keys(heroes[hero]);
        console.log(`== ${hero}: ${spells.join(", ")}`);
    }

}
// heroRecruitment(["Enroll Stefan",
//     "Enroll Peter",
//     "Enroll Stefan",
//     "Learn Stefan ItShouldWork",
//     "Learn John ItShouldNotWork",
//     "Unlearn George Dispel",
//     "Unlearn Stefan ItShouldWork",
//     "End"]);

// heroRecruitment(["Enroll Stefan",
//     "Learn Stefan ItShouldWork",
//     "Learn Stefan ItShouldWork",
//     "Unlearn Stefan NotFound",
//     "End"]);

heroRecruitment(["Enroll Stefan",
    "Enroll Peter",
    "Enroll John",
    "Learn Stefan Spell",
    "Learn Peter Dispel",
    "End"]);