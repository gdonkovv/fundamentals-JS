function ladybugs(arr) {

    let fieldSize = Number(arr.shift());
    let bugsString = arr.shift();

    let bugsArr = bugsString.split(" ");

    let field = [];

    for (let m = 0; m < fieldSize; m++) {
        field.push(0);
    }

    for (let i = 0; i < bugsArr.length; i++) {
        for (let j = 0; j < field.length; j++) {
            if (Number(bugsArr[i]) === j) {
                field[j] = 1;
            }
        }
    }

    for (let k = 0; k < arr.length; k++) {
        if (k > 100) {
            break;
        }
        if (arr[k] === undefined) {
            break;
        }

        let currFlight = arr[k].split(" ");

        let position = Number(currFlight[0]);
        let direction = currFlight[1];
        let steps = Number(currFlight[2]);

        if (field[position] === 1) {
            field[position] = 0;
            if (direction === "right") {
                if (position + steps < field.length && position + steps >= 0) {

                    if (field[position + steps] === 1) {

                        for (let l = (position + steps) + steps; l < field.length; l += steps) {
                            if (field[l] !== 1) {
                                field[l] = 1;
                                break;
                            }
                        }
                    } else {
                        field[position + steps] = 1;
                    }
                }

            } else if (direction === "left") {
                if (position - steps >= 0) {

                    if (field[position - steps] === 1) {
                        for (let l = (position - steps) - steps; l >= 0; l -= steps) {
                            if (field[l] !== 1) {
                                field[l] = 1;
                                break;
                            }
                        }
                    } else {
                        field[position - steps] = 1;
                    }
                }
            }
        }

    }
    console.log(`${field.join(" ")}`);
}
ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);