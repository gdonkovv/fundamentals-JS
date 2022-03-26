function cardGame(input) {
    let power = {
        "1": 10,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14,
    }
    let type = {
        "C": 1,
        "D": 2,
        "H": 3,
        "S": 4
    }

    let players = {};

    for (let line of input) {
        let tokens = line.split(": ");
        let name = tokens[0];
        let cards = tokens[1].split(", ");

        if (players.hasOwnProperty(name)) {
            for (let card of cards) {
                if (players[name].includes(card) === false) {
                    players[name].push(card);
                }
            }
        } else {
            players[name] = [];
            for (let card of cards) {
                if (players[name].includes(card) === false) {
                    players[name].push(card);
                }
            }
        }
    }
    for (let player of Object.keys(players)) {
        let total = 0;
        for (let card of players[player]) {
            let cardPower = power[card[0]];
            let cardType = type[card[card.length - 1]];
            total += cardPower * cardType;
        }
        console.log(`${player}: ${total}`);
    }

}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);