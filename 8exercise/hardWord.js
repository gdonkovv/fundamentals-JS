function hardWord(input) {

    let letterText = input[0];
    let wordsToFill = input[1];

    for (let word of wordsToFill) {

        let blankSpace = ` ${"_".repeat(word.length)} `;
        let newWord = ` ${word} `;

        if (letterText.includes(blankSpace)) {
            letterText = letterText.replace(blankSpace, newWord);
        } else if (letterText.includes(blankSpace.trimEnd() + ".")) {
            letterText = letterText.replace(blankSpace.trimEnd() + ".", newWord.trimEnd() + ".");
        } else if (letterText.includes(blankSpace.trimEnd() + ",")) {
            letterText = letterText.replace(blankSpace.trimEnd() + ",", newWord.trimEnd() + ",");
        }
    }
    console.log(letterText);
}
hardWord(["Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);