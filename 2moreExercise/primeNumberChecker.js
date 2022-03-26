function primeNumberChecker(num) {
    // divisible by itself and one

    let isPrime = false;

    if (num % 2 === 0 && num !== 2) {
    } else if (num % 3 === 0 && num !== 3) {
    } else if (num % 5 === 0 && num !== 5) {
    } else if (num % 7 === 0 && num !== 7) {
    } else {
        isPrime = true;
    }

    console.log(isPrime);
}
primeNumberChecker(7);
primeNumberChecker(8);
primeNumberChecker(81);