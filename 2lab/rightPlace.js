function rightPlace(string1, char, string2) {

    let newString1 = "";

    for (let i = 0; i < string1.length; i++) {

        if (string1[i] === "_") {
            newString1 += char;
        } else {
            newString1 += string1[i];
        }
    }

    if (newString1 === string2) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }

}
rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');
