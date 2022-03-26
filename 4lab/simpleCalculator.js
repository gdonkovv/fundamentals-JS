function simpleCalculator(num1, num2, operator) {

    let multiplyFunc = (n1, n2) => n1 * n2;
    let divideFunc = (n1, n2) => n1 / n2;
    let addFunc = (n1, n2) => n1 + n2;
    let subtractFunc = (n1, n2) => n1 - n2;

    switch (operator) {
        case "multiply": console.log(multiplyFunc(num1, num2)); break;
        case "divide": console.log(divideFunc(num1, num2)); break;
        case "add": console.log(addFunc(num1, num2)); break;
        case "subtract": console.log(subtractFunc(num1, num2)); break;
    }

}
simpleCalculator(40, 8, 'divide');