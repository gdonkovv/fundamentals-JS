function distinctArray(arr) {

    let finalArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (finalArr.indexOf(arr[i]) === -1) {
            finalArr.push(arr[i]);
        }

    }
    console.log(finalArr.join(" "));

}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);