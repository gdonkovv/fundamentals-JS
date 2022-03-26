function stringOccurencies(text, word) {

    let allWords = text.split(" ");
    let counter = 0;
    for(let part of allWords){
        if(part === word){
            counter++;
        }
    }
    console.log(counter);

}
stringOccurencies('softuni is great place for learning new programming languages','softuni');