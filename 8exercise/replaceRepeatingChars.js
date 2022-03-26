function replaceRepeatingChars(word) {

    let result = [];

    for (let i = 0; i < word.length; i++) {
        if(word[i] !== word[i+1]){
            result.push(word[i]);
        }
    }

    console.log(result.join(""));

}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');