function activationKeys(input) {

    let rawActivationKey = input.shift();

    let line = input.shift();

    while (line !== "Generate") {

        let tokens = line.split(">>>");
        let command = tokens[0];

        if (command === "Contains") {
            let substr = tokens[1];
            if (rawActivationKey.includes(substr)) {
                console.log(`${rawActivationKey} contains ${substr}`);
            } else {
                console.log("Substring not found!");
            }

        } else if (command === "Flip") {
            let type = tokens[1];
            let start = Number(tokens[2]);
            let end = Number(tokens[3]);

            let left = rawActivationKey.slice(0, start);
            let right = rawActivationKey.slice(end);
            let newSubstr = rawActivationKey.slice(start, end);

            if (type === "Upper") {
                newSubstr = newSubstr.toUpperCase();
            } else {
                newSubstr = newSubstr.toLowerCase();
            }
            rawActivationKey = left + newSubstr + right;
            console.log(rawActivationKey);

        } else if (command === "Slice") {
            let start = Number(tokens[1]);
            let end = Number(tokens[2]);

            let left = rawActivationKey.slice(0, start);
            let right = rawActivationKey.slice(end);

            rawActivationKey = left + right;
            console.log(rawActivationKey);

        }
        line = input.shift();
    }

    console.log(`Your activation key is: ${rawActivationKey}`);

}
activationKeys(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]);