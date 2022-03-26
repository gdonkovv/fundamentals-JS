function passwordValidator(password) {

    function hasLengthBetween6And10(string) {
        if (string.length >= 6 && string.length <= 10) {
            return true;
        } else {
            return false;
        }
    }

    function hasOnlyLettersAndDigits(string) {
        for (let i = 0; i < string.length; i++) {
            if (!(string[i].charCodeAt(0) >= 48 && string[i].charCodeAt(0) <= 57)
                && !(string[i].charCodeAt(0) >= 65 && string[i].charCodeAt(0) <= 90)
                && !(string[i].charCodeAt(0) >= 97 && string[i].charCodeAt(0) <= 122)) {
                return false;
            }
        }
        return true;
    }

    function hasAtLeastTwoDigits(string) {
        let digitsCount = 0;
        for (let i = 0; i < string.length; i++) {
            if (string[i].charCodeAt(0) >= 48 && string[i].charCodeAt(0) <= 57) {
                digitsCount++;
            }
        }
        if (digitsCount >= 2) {
            return true;
        } else {
            return false;
        }
    }


    if (hasLengthBetween6And10(password) && hasOnlyLettersAndDigits(password) && hasAtLeastTwoDigits(password)) {
        console.log("Password is valid");
    } else {
        if (!hasLengthBetween6And10(password)) {
            console.log("Password must be between 6 and 10 characters");
        }
        if (!hasOnlyLettersAndDigits(password)) {
            console.log("Password must consist only of letters and digits");
        }
        if (!hasAtLeastTwoDigits(password)) {
            console.log("Password must have at least 2 digits");
        }
    }
}
passwordValidator('logIn');
console.log("---");
passwordValidator('MyPass123');
console.log("---");
passwordValidator('Pa$s$s');

