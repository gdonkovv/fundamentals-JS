function makeADictionary(input) {

    let dictionary = {};

    for (let word of input) {

        let wordObj = JSON.parse(word);
        for (let key of Object.keys(wordObj)) {

            dictionary[key] = wordObj[key];
        }
    }

    let sortedWords = Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0]));

    for (let word of sortedWords) {
        console.log(`Term: ${word[0]} => Definition: ${word[1]}`);
    }

}
makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);