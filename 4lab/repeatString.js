function repeatString(string, repeatCount) {

    let resultArr = [];

    for(let i = 0; i < repeatCount; i++){
        resultArr.push(string);
    }
    console.log(resultArr.join(""));

}
repeatString("String", 2);