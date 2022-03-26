function lettersChangeNumbers(input) {

    let stringsArr = input.split(" ");
    while (stringsArr.includes("")) {
        let index = stringsArr.indexOf("");
        stringsArr.splice(index, 1);
    }


    let sum = 0;

    for (let item of stringsArr) {

        let firstLetter = item[0];
        let secondLetter = item[item.length - 1];

        let firstLetterPosition = firstLetter.toLowerCase().charCodeAt(0) - 96;
        let secondLetterPosition = secondLetter.toLowerCase().charCodeAt(0) - 96;

        let number = Number(item.slice(1, item.length - 1));

        if (firstLetter === firstLetter.toUpperCase()) {
            number /= firstLetterPosition;
        } else {
            number *= firstLetterPosition;
        }

        if (secondLetter === secondLetter.toUpperCase()) {
            number -= secondLetterPosition;
        } else {
            number += secondLetterPosition;
        }

        sum += number;

    }

    console.log(sum.toFixed(2));

}
lettersChangeNumbers('A12b s17G');