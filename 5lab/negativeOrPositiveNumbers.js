function negativeOrPositiveNumbers(arr) {

    let arrConvertedToNumbers = arr.map(Number);

    let newArr = [];

    for (let i = 0; i < arrConvertedToNumbers.length; i++) {
        if (arrConvertedToNumbers[i] < 0) {
            newArr.unshift(arrConvertedToNumbers[i]);
        } else {
            newArr.push(arrConvertedToNumbers[i]);
        }
    }

    console.log(newArr.join("\n"));

}
negativeOrPositiveNumbers(['7', '-2', '8', '9']);
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);
