function equalSums(arr) {

    let sumLeft = 0;
    let sumRight = 0;
    let index = "no";

    for (let i = 0; i < arr.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            sumLeft += arr[j];
        }

        for (let k = i + 1; k < arr.length; k++) {
            sumRight += arr[k];
        }
        if (sumLeft === sumRight) {
            index = i;
            break;
        }
        sumLeft = 0;
        sumRight = 0;
    }
    console.log(index);

}
equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);