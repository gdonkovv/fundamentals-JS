function passwordReset(input) {

    let text = input.shift();

    let line = input.shift();
    while (line !== "Done") {

        if (line === "TakeOdd") {
            let newText = "";
            let textArr = text.split("");
            for (let i = 1; i < textArr.length; i += 2) {
                newText += textArr[i];
            }
            text = newText;
            console.log(text);
        } else {
            let tokens = line.split(" ");
            let command = tokens[0];
            if (command === "Cut") {
                let index = Number(tokens[1]);
                let length = Number(tokens[2]);
                let left = text.substring(0, index);
                let right = text.substring(index + length);

                text = left + right;
                console.log(text);


            } else if (command === "Substitute") {
                let substr = tokens[1];
                let substitute = tokens[2];
                if (text.includes(substr)) {
                    while (text.includes(substr)) {
                        text = text.replace(substr, substitute);
                    }
                    console.log(text);


                } else {
                    console.log("Nothing to replace!");
                }
            }
        }

        line = input.shift();
    }
    console.log(`Your password is: ${text}`);
}
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"]);