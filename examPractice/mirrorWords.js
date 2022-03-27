function mirrorWords(input) {

    let text = input[0];

    let pattern = /(#|@)(?<leftWord>[A-Za-z]{3,})\1\1(?<rightWord>[A-Za-z]{3,})\1/g;

    let match = pattern.exec(text);
    let countPairs = 0;
    let countMirrored = 0;
    let mirrorPairs = [];

    while (match !== null) {
        countPairs++;
        let first = match.groups.leftWord;
        let second = match.groups.rightWord;
        let secReversed = second.split("").reverse().join("");

        if (first === secReversed) {
            mirrorPairs.push(`${first} <=> ${second}`);
            countMirrored++;
        }


        match = pattern.exec(text);
    }


    if (countPairs === 0) {
        console.log("No word pairs found!");
    } else {
        console.log(`${countPairs} word pairs found!`);
    }

    if (countMirrored === 0) {
        console.log("No mirror words!");
    } else {
        console.log("The mirror words are:");
        console.log(mirrorPairs.join(", "));
    }

}
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);