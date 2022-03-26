function pascalCaseSplitter(input) {

    let result = [];
    let currWord = input[0];
    for (let i = 1; i < input.length; i++) {

        let currChar = input[i];
        if (currChar.toUpperCase() === currChar) {
            result.push(currWord);
            currWord = currChar;
        } else {
            currWord += currChar;
        }
    }
    result.push(currWord);

    console.log(result.join(", "));

}
pascalCaseSplitter('ThisIsSoAnnoyingToDo');