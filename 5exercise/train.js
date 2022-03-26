function train(arr) {

    let wagonsArr = arr.shift().split(" ").map(Number);
    let wagonMaxCapacity = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {

        let command = arr[i].split(" ");
        if (command[0] === "Add") {
            wagonsArr.push(Number(command[1]));
        } else {
            let newPassengers = Number(command[0]);
            for (let j = 0; j < wagonsArr.length; j++) {
                if (wagonMaxCapacity >= wagonsArr[j] + newPassengers) {
                    wagonsArr[j] += newPassengers;
                    break;
                }

            }
        }
    }

    console.log(wagonsArr.join(" "));
}
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']);