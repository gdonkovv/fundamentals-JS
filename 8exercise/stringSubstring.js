function stringSubstring(word, text) {

    word = word.toLowerCase();
    let textArr = text.split(" ");

    for (let item of textArr) {
        let currWord = item.toLowerCase();
        if (word === currWord) {
            console.log(word);
            return;
        }
    }
    console.log(`${word} not found!`);
}
stringSubstring('python',
    'JavaScript is the best programming language');