function signCheck(num1, num2, num3) {

    let result = "";

    let negativeCounter = 0;
    if (num1 < 0) {
        negativeCounter++;
    }
    if (num2 < 0) {
        negativeCounter++;
    }
    if (num3 < 0) {
        negativeCounter++;
    }

    if (negativeCounter % 2 === 0) {
        result = "Positive";
    } else {
        result = "Negative";
    }

    console.log(result);
}
signCheck(-1, 0, -3);