function stringGame(input) {

    let text = input.shift();

    let line = input.shift();
    while (line !== "Done") {

        let tokens = line.split(" ");
        let command = tokens[0];

        if (command === "Change") {

            let char = tokens[1];
            let repl = tokens[2];

            while (text.includes(char)) {
                text = text.replace(char, repl);
            }
            console.log(text);

        } else if (command === "Includes") {

            let substr = tokens[1];
            if (text.includes(substr)) {
                console.log("True");
            } else {
                console.log("False");
            }

        } else if (command === "End") {

            let substr = tokens[1];
            let newText = text.slice(text.indexOf(substr));
            if (newText === substr) {
                console.log("True");
            } else {
                console.log("False");
            }

        } else if (command === "Uppercase") {
            text = text.toUpperCase();
            console.log(text);
        } else if (command === "FindIndex") {
            let char = tokens[1];
            let index = text.indexOf(char);
            console.log(index);
        } else if (command === "Cut") {
            let start = Number(tokens[1]);
            let count = Number(tokens[2]);

            let newText = text.slice(start, start + count);
            text = newText;
            console.log(text);
        }
        line = input.shift();
    }

}
// stringGame(["//Th1s 1s my str1ng!//",
//     "Change 1 i",
//     "Includes string",
//     "End my",
//     "Uppercase",
//     "FindIndex I",
//     "Cut 5 5",
//     "Done"]);

stringGame(["*S0ftUni is the B3St Plac3**",
    "Change 2 o",
    "Includes best",
    "End is",
    "Uppercase",
    "FindIndex P",
    "Cut 3 7",
    "Done"]);