function condenseArrayToNumber(arr) {

    let newArr = [];

    while (arr.length > 1) {
        for (let i = 0; i < arr.length - 1; i++) {
            newArr.push(Number(arr[i]) + Number(arr[i + 1]));
        }
        arr = newArr;
        newArr = [];
    }
    console.log(arr[0]);
}
condenseArrayToNumber([2, 10, 3]);
condenseArrayToNumber([5, 0, 4, 1, 2]);
condenseArrayToNumber([1]);
