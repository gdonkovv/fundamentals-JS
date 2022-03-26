function houseParty(arr) {

    let guestsArr = [];

    for (let i = 0; i < arr.length; i++) {

        let currArr = arr[i].split(" ");
        if (currArr.length === 3) {
            if (guestsArr.includes(currArr[0]) === false) {
                guestsArr.push(currArr[0]);
            } else {
                console.log(`${currArr[0]} is already in the list!`);
            }
        } else {
            if (guestsArr.includes(currArr[0])) {
                guestsArr.splice(guestsArr.indexOf(currArr[0]), 1);
            } else {
                console.log(`${currArr[0]} is not in the list!`);
            }
        }
    }

    console.log(guestsArr.join("\n"));

}
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);