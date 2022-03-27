function secretChat(input) {

    let message = input.shift();

    let line = input.shift();
    while (line !== "Reveal") {

        let tokens = line.split(":|:");
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];

        if (command === "InsertSpace") {
            let index = Number(p1);
            let messArr = message.split("");
            messArr.splice(index, 0, " ");
            message = messArr.join("");
            console.log(message);


        } else if (command === "Reverse") {

            let substr = p1;
            if (message.includes(substr)) {
                let left = message.substring(0, message.indexOf(substr));
                let right = message.substring(message.indexOf(substr) + substr.length);
                let arr = substr.split("").reverse();
                substr = arr.join("");
                message = left + right + substr;
                console.log(message);


            } else {
                console.log("error");
            }

        } else if (command === "ChangeAll") {
            let substr = p1;
            let repl = p2;

            let arr = message.split(substr);
            message = arr.join(repl);
            console.log(message);
        }


        line = input.shift();
    }

    console.log(`You have a new text message: ${message}`);

}
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);