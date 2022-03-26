function factorialDivision(num1, num2) {

    function getFactorial(n) {
        let result = 1;
        for (let i = n; i >= 1; i--) {
            result *= i;
        }
        return result;
    }

    let division = getFactorial(num1) / getFactorial(num2);

    console.log(division.toFixed(2));

}
factorialDivision(5, 2);