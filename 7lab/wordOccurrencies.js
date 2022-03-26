function wordOccurrencies(input) {

    let result = {};
    for (let word of input) {
        if (result.hasOwnProperty(word)) {
            result[word]++;
        } else {
            result[word] = 1;
        }
    }
    let sorted = Object.entries(result).sort((a,b) => b[1] - a[1]);

    for(let word of sorted){
        console.log(`${word[0]} -> ${word[1]} times`);
    }
}
wordOccurrencies(["Here", "is", "the", "first",
    "sentence", "Here", "is", "another", "sentence",
    "And", "finally", "the", "third", "sentence"]);