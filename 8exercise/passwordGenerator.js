function passwordGenerator(input) {

    let newPass = input[0].concat(input[1]);
    let addition = input[2].toUpperCase();

    let vowels = ["a", "e", "i", "o", "u"];


    let additionCounter = 0;

    for (let ch of newPass) {
        if (vowels.includes(ch)) {
            newPass = newPass.replace(ch, addition[additionCounter]);
            if (additionCounter + 1 === addition.length) {
                additionCounter = 0;
            } else {
                additionCounter++;
            }
        }
    }
    newPass = newPass.split("").reverse().join("");

    console.log(`Your generated password is ${newPass}`);
}
passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);