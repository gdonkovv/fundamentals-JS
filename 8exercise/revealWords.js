function revealWords(words, sentence) {

    let wordsArr = words.split(", ");
    let sentenceArr = sentence.split(" ");
    for(let part of sentenceArr){
        if(part[0] === "*"){
            for(let word of wordsArr){
                if(word.length === part.length){
                    sentenceArr[sentenceArr.indexOf(part)] = word;
                }
            }
        }
    }
    console.log(sentenceArr.join(" "));

}
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages');