function bossRush(input) {

    let n = Number(input.shift());
    let pattern = /\|(?<name>[A-Z]{4,})\|:#(?<title>[A-Za-z]+ [A-Za-z]+)#/;

    for (let i = 0; i < n; i++) {

        let line = input.shift();

        let match = pattern.exec(line);
        if (match !== null) {
            let name = match[1];
            let title = match[2];
            let strength = name.length;
            let armour = title.length;
            console.log(`${name}, The ${title}`);
            console.log(`>> Strength: ${strength}`);
            console.log(`>> Armor: ${armour}`);
        } else {
            console.log("Access denied!");
        }

    }
}
// bossRush(['3',
//     '|PETER|:#Lead architect#',
//     '|GEORGE|:#High Overseer#',
//     '|ALEX|:#Assistant Game Developer#']);

bossRush(['3',
    '|STEFAN|:#H1gh Overseer#',
    '|IVAN|:#Master detective#',
    '|KARL|: #Marketing lead#']);