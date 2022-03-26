function modernTimesOfHashTag(sentence) {

    let words = sentence.split(" ");
    let specialWords = [];

    for (let word of words) {

        if (word[0] === "#" && word.length > 1) {
            let newWord = word.replace("#", "");
            let hasNumbers = false;

            for (let ch of newWord) {
                if (ch.charCodeAt(0) >= 48 && ch.charCodeAt(0) <= 57) {
                    hasNumbers = true;
                    break;
                }
            }
            if (!hasNumbers) {
                specialWords.push(newWord);
            }
        }
    }
    console.log(specialWords.join("\n"));

}
modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');