function wordsTracker(input) {

    let givenWords = input.shift().split(" ");
    let result = {};
    for (let word of givenWords) {
        result[word] = 0;
    }

    for (let word of input) {
        if (result.hasOwnProperty(word)) {
            result[word]++;
        }
    }
    let sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);

    for (let item of sorted) {
        console.log(`${item[0]} - ${item[1]}`);
    }
}
wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);