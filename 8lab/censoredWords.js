function censoredWords(sentence, word) {
    while(sentence.includes(word)){
        sentence = sentence.replace(word,"*".repeat(word.length));
    }
    console.log(sentence);
}
censoredWords('Find the hidden word', 'hidden');