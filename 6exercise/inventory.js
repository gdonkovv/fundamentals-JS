function inventory(input) {

    let heroes = [];

    for (let el of input) {
        let tokens = el.split(" / ");
        let heroName = tokens.shift();
        let heroLevel = Number(tokens.shift());
        let heroItems = tokens[0];
        heroes.push({ heroName, heroLevel, heroItems });
    }

    heroes.sort((a, b) => a.heroLevel - b.heroLevel);

    for (let hero of heroes) {
        console.log(`Hero: ${hero.heroName}`);
        console.log(`level => ${hero.heroLevel}`);
        console.log(`items => ${hero.heroItems}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);