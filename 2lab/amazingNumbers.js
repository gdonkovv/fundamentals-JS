function amazingNumbers(num) {

    let numAsString = String(num);
    let sumOfDigits = 0;
    let isAmazing = "False";

    for (let i = 0; i < numAsString.length; i++) {
        sumOfDigits += Number(numAsString[i]);
    }

    let sumOfDigitsAsString = String(sumOfDigits);

    for (let i = 0; i < sumOfDigitsAsString.length; i++) {
        if (sumOfDigitsAsString[i] === "9") {
            isAmazing = "True";
        }
    }
    console.log(`${num} Amazing? ${isAmazing}`);
}
amazingNumbers(1233);
amazingNumbers(999);