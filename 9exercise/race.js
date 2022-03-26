function race(input) {


    let patternName = /[A-Za-z]+/g;
    let patternDigits = /\d/g;

    let participants = input.shift().split(", ");
    let result = {};

    for (let line of input) {
        if (line === "end of race") {
            break;
        }

        let name = "";
        let match = patternName.exec(line);
        while (match !== null) {
            name += match[0];
            match = patternName.exec(line);
        }

        let distanceRun = 0;
        let match2 = patternDigits.exec(line);
        while (match2 !== null) {
            distanceRun += Number(match2[0]);
            match2 = patternDigits.exec(line);
        }

        if (participants.includes(name)) {
            if (result.hasOwnProperty(name)) {
                result[name] += distanceRun;
            } else {
                result[name] = distanceRun;
            }
        }
    }

    let sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);
    let winner = sorted[0];
    let second = sorted[1];
    let third = sorted[2];

    console.log(`1st place: ${winner[0]}`);
    console.log(`2nd place: ${second[0]}`);
    console.log(`3rd place: ${third[0]}`);

}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);