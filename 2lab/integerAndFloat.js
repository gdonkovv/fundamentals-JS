function integerAndFloat(num1, num2, num3){

    let sum = num1 + num2 + num3;
    let typeOfSum = "Integer";
    let sumAsString = String(sum);

    for(let i = 0; i < sumAsString.length; i++){
        if(sumAsString[i] === "."){
            typeOfSum = "Float";
            break;
        }
    }

    console.log(`${sum} - ${typeOfSum}`);

}
integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);