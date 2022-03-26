function oddOccurrencies(input) {

    let wordsList = input.split(" ").map(x => x.toLowerCase());

    let result = {};

    for (let word of wordsList) {
        if (result.hasOwnProperty(word)) {
            result[word]++;
        } else {
            result[word] = 1;
        }
    }

    let final = "";

    for (let key of Object.keys(result)) {
        if (result[key] % 2 === 0) {
            result[key].delete;
        } else{
            final += `${key} `;
        }
    }

    console.log(final);

}
oddOccurrencies('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');