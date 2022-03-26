function bombNumbers(sequence, bomb) {

    let specialBombNum = bomb[0];
    let bombPower = bomb[1];

    while (sequence.includes(specialBombNum)) {
        let bombIndex = sequence.indexOf(specialBombNum);
        let startIndex = bombIndex - bombPower;

        if (startIndex < 0) {
            sequence.splice(0, 1 + bombIndex + bombPower);
        } else {
            sequence.splice(startIndex, bombPower * 2 + 1);
        }
    }

    let sum = 0;

    for (let i = 0; i < sequence.length; i++) {
        sum += sequence[i];
    }
    console.log(sum);

}
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);