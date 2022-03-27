function pianist(input) {

    let n = Number(input.shift());
    let piecesCollection = {};

    for (let i = 0; i < n; i++) {
        let tokens = input.shift().split("|");
        let piece = tokens[0];
        let composer = tokens[1];
        let key = tokens[2];

        piecesCollection[piece] = {
            "piece": piece,
            "composer": composer,
            "key": key
        }
    }

    let line = input.shift();

    while (line !== "Stop") {

        let tokens = line.split("|");
        let command = tokens[0];
        let currPiece = tokens[1];

        if (command === "Add") {
            let composer = tokens[2];
            let key = tokens[3];
            if (piecesCollection.hasOwnProperty(currPiece)) {
                console.log(`${currPiece} is already in the collection!`);
            } else {
                piecesCollection[currPiece] = {
                    piece: currPiece,
                    composer: composer,
                    key: key
                }
                console.log(`${currPiece} by ${composer} in ${key} added to the collection!`);
            }
        } else if (command === "Remove") {

            if (piecesCollection.hasOwnProperty(currPiece)) {
                delete piecesCollection[currPiece];
                console.log(`Successfully removed ${currPiece}!`);
            } else {
                console.log(`Invalid operation! ${currPiece} does not exist in the collection.`);
            }
        } else if (command === "ChangeKey") {

            let newKey = tokens[2];
            if (piecesCollection.hasOwnProperty(currPiece)) {
                piecesCollection[currPiece].key = newKey;
                console.log(`Changed the key of ${currPiece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${currPiece} does not exist in the collection.`);
            }
        }
        line = input.shift();
    }

    Object.values(piecesCollection).forEach(x => {
        console.log(`${x.piece} -> Composer: ${x.composer}, Key: ${x.key}`);
    })
}
pianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);