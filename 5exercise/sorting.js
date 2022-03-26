function sorting(arr) {

    let finalArr = [];
    arr.sort((a, b) => b - a);

    while (arr.length > 0) {
        finalArr.push(arr.shift());
        finalArr.push(arr.pop());
    }
    console.log(finalArr.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);