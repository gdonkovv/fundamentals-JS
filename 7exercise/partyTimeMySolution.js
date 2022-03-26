function partyTime2(input) {

    let reservationsVIP = [];
    let reservationsReg = [];

    let invitedGuests = input.splice(0, input.indexOf("PARTY"));
    input.shift(); // remove "PARTY" from array

    for (let person of invitedGuests) {
        if (Number(person[0]) === NaN) {
            reservationsReg.push(person);
        } else {
            reservationsVIP.push(person);
        }
    }

    for (let guest of input) {
        if (reservationsVIP.includes(guest)) {
            reservationsVIP.splice(reservationsVIP.indexOf(guest), 1);
        } else if (reservationsReg.includes(guest)) {
            reservationsReg.splice(reservationsReg.indexOf(guest), 1);
        }
    }

    console.log(reservationsVIP.length + reservationsReg.length);
    console.log(reservationsVIP.join("\n"));
    console.log(reservationsReg.join("\n"));

}
partyTime2(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]);