function charsInRange(char1, char2){

    // take the ascii index of a character that is on 0 index of the string char1
    let char1Index = char1.charCodeAt(0);
    let char2Index = char2.charCodeAt(0);
    let firstIndex;
    let secondIndex;

    if(char1Index < char2Index){
        firstIndex = char1Index;
        secondIndex = char2Index;
    } else{
        firstIndex = char2Index;
        secondIndex = char1Index;
    }

    let resultArr = [];

    for(let i = firstIndex + 1; i < secondIndex; i++){
        resultArr.push(String.fromCharCode(i));
    }

    console.log(resultArr.join(" "));

}
charsInRange('C','#');