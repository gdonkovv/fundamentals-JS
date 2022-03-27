function imitationGame(input) {

    let message = input.shift();
    let options = {
        Move,
        Insert,
        ChangeAll
    }

    let command = input.shift();
    while (command !== "Decode") {

        let tokens = command.split("|");
        let comm = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];

        message = options[comm](message, p1, p2);

        command = input.shift();
    }

    console.log(`The decrypted message is: ${message}`);


    function Move(text, n) {

        let first = text.substring(0, n);
        let second = text.substring(n);

        return second + first;

    }
    function Insert(text, index, value) {
        let result = text.split("");
        result.splice(index, 0, value);
        return result.join("");
    }
    function ChangeAll(text, substr, replacement) {
        return text.split(substr).join(replacement);
    }
}


imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]);