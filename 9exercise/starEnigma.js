function starEnigma(input) {

    let messagesCount = Number(input.shift());

    let specialPattern = /[star]/gi;
    let planetPattern = /\@(?<planetName>[A-Z][a-z]+)[^@!:>\-]*\:(?<population>\d+)[^@!:>\-]*\!(?<typeOfAttack>A|D)\![^@!:>\-]*\-\>(?<soldierCount>\d+)/;

    let attacked = [];
    let destroyed = [];


    for (let i = 0; i < messagesCount; i++) {

        let line = input[i];

        let offset = line.match(specialPattern).length;

        let decrypted = [];

        for (let ch of line) {
            let newCharCode = ch.charCodeAt(0) - offset;
            decrypted.push(String.fromCharCode(newCharCode));
        }

        let message = decrypted.join("");

        let match = planetPattern.exec(message);

        if (match !== null) {
            if (match[3] === "A") {
                attacked.push(match[1]);
            } else if (match[3] === "D") {
                destroyed.push(match[1]);
            }
        }
    }
    console.log(`Attacked planets: ${attacked.length}`);
    attacked.sort((a, b) => a.localeCompare(b)).map(x => console.log(`-> ${x}`));

    console.log(`Destroyed planets: ${destroyed.length}`);
    destroyed.sort((a, b) => a.localeCompare(b)).map(x => console.log(`-> ${x}`));
}

starEnigma(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR']);
starEnigma(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']);