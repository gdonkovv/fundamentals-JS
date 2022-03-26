function specialNumbers(n) {

    for (let i = 1; i <= n; i++) {
        iAsString = String(i);
        let sumOfDigits = 0;
        for (let j = 0; j < iAsString.length; j++) {
            sumOfDigits += Number(iAsString[j]);
        }

        if (sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}
//specialNumbers(15);
specialNumbers(20);