function legendaryFarming(input) {

    let tokens = input.split(" ");
    let keyMaterials = {
        "shards": 0,
        "fragments": 0,
        "motes": 0,
    };
    let junk = {};

    let legendaryWon = "";

    for (let i = 0; i < tokens.length; i += 2) {
        let currQuantity = Number(tokens[i]);
        let material = tokens[i + 1].toLowerCase();

        if (keyMaterials.hasOwnProperty(material)) {
            keyMaterials[material] += currQuantity;
        } else {
            if (junk.hasOwnProperty(material)) {
                junk[material] += currQuantity;
            } else {
                junk[material] = currQuantity;
            }
        }

        if (keyMaterials[material] >= 250) {
            keyMaterials[material] -= 250;

            switch (material) {
                case "shards": legendaryWon = "Shadowmourne";
                    break;
                case "fragments": legendaryWon = "Valanyr";
                    break;
                case "motes": legendaryWon = "Dragonwrath";
                    break;
            }
            break;
        }
    }


    console.log(`${legendaryWon} obtained!`);

    let keyMatsSorted = Object.entries(keyMaterials).sort((a, b) => {
        if (a[1] !== b[1]) {
            return b[1] - a[1];
        } else {
            return a[0].localeCompare(b[0]);
        }
    });

    let junkSorted = Object.entries(junk).sort((a,b) => a[0].localeCompare(b[0]));

    for(let item of keyMatsSorted){
        console.log(`${item[0]}: ${item[1]}`);
    }

    for(let item of junkSorted){
        console.log(`${item[0]}: ${item[1]}`);
    }
}
legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
console.log("---");
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');