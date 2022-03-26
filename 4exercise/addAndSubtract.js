function addAndSubtract(num1, num2, num3) {

    function sum(n1, n2) {
        return n1 + n2;
    }

    function subtract(n1, n2) {
        return n1 - n2;
    }

    console.log(subtract(sum(num1, num2), num3));

}
addAndSubtract(23, 6, 10);