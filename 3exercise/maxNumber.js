function maxNumber(arr) {

    let newArr = [];
    let isBigger = true;

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] <= arr[j]) {
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            newArr.push(arr[i]);
        }

        isBigger = true;

    }
    console.log(newArr.join(" "));
}
maxNumber([14, 24, 3, 19, 15, 17]);