function netherRealms(input) {

    let demons = input.split(",").map(x => x.trim());
    let demonBook = [];

    let pattern = /[^0-9\+\-\*\/\.]/g;
    let numbersPattern = /\-?\d+(\.\d+)?/g;
    let specialPattern = /[*\/]/g;

    for (let demon of demons) {

        let demonHealth = 0;

        let match = pattern.exec(demon);
        while (match !== null) {
            demonHealth += match[0].charCodeAt(0);
            match = pattern.exec(demon);
        }



        let baseDamage = 0;
        let numberMatch = demon.match(numbersPattern);
        if (numberMatch !== null) {
            numberMatch.forEach(x => baseDamage += Number(x));
        }

        let specialMatch = specialPattern.exec(demon);
        while (specialMatch !== null) {

            if (specialMatch[0] === "*") {
                baseDamage *= 2;
            } else {
                baseDamage /= 2;
            }

            specialMatch = specialPattern.exec(demon);
        }
        demonBook.push({
            demon,
            demonHealth,
            baseDamage
        });
    }

    demonBook.sort((a, b) => a.demon.localeCompare(b.demon));
    for (let demon of demonBook) {
        console.log(`${demon.demon} - ${demon.demonHealth} health, ${demon.baseDamage.toFixed(2)} damage`);
    }
}
// netherRealms('M3ph-0.5s-0.5t0.0**');
netherRealms('M3ph1st0**, Azazel');