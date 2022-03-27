function heroesOfCodeAndLogic(input) {

    let n = Number(input.shift());

    let heroes = {};

    for (let i = 0; i < n; i++) {

        let line = input.shift();
        let tokens = line.split(" ");
        let name = tokens[0];
        let hp = Number(tokens[1]);
        let mp = Number(tokens[2]);

        heroes[name] = {
            hp,
            mp
        }
    }

    let line = input.shift();
    while (line !== "End") {

        let tokens = line.split(" - ");
        let command = tokens[0];

        if (command === "CastSpell") {
            let heroName = tokens[1];
            let mpNeeded = Number(tokens[2]);
            let spellName = tokens[3];
            if (heroes[heroName].mp >= mpNeeded) {
                heroes[heroName].mp -= mpNeeded;
                console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mp} MP!`);
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }
        } else if (command === "TakeDamage") {
            let heroName = tokens[1];
            let damage = Number(tokens[2]);
            let attacker = tokens[3];

            heroes[heroName].hp -= damage;

            if (heroes[heroName].hp > 0) {
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].hp} HP left!`);
            } else {
                delete heroes[heroName];
                console.log(`${heroName} has been killed by ${attacker}!`);
            }

        } else if (command === "Recharge") {
            let heroName = tokens[1];
            let amount = Number(tokens[2]);

            let neededToMax = 200 - heroes[heroName].mp;

            if (amount <= neededToMax) {
                heroes[heroName].mp += amount;
                console.log(`${heroName} recharged for ${amount} MP!`);
            } else {
                heroes[heroName].mp += neededToMax;
                console.log(`${heroName} recharged for ${neededToMax} MP!`);
            }

        } else if (command === "Heal") {
            let heroName = tokens[1];
            let amount = Number(tokens[2]);

            let neededToMax = 100 - heroes[heroName].hp;

            if (amount <= neededToMax) {
                heroes[heroName].hp += amount;
                console.log(`${heroName} healed for ${amount} HP!`);
            } else {
                heroes[heroName].hp += neededToMax;
                console.log(`${heroName} healed for ${neededToMax} HP!`);
            }
        }
        line = input.shift();
    }

    for (let key of Object.keys(heroes)) {

        console.log(key);
        console.log(`  HP: ${heroes[key].hp}`);
        console.log(`  MP: ${heroes[key].mp}`);
    }
}
heroesOfCodeAndLogic([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End']);