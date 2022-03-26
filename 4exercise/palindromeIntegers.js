function palindromeIntegers(integersArr) {
    function isPalindrom(num) {
        let numAsString = String(num);
        if (numAsString === numAsString.split("").reverse().join("")) {
            return true;
        } else {
            return false;
        }
    }
    for(let i = 0; i < integersArr.length; i++){
        console.log(isPalindrom(integersArr[i]));
    }
}
palindromeIntegers([32,2,232,1010]);