function smallestTwoNumbers(arr) {

    arr.sort((a, b) => a - b);
    let smallest2 = arr.slice(0, 2);
    console.log(smallest2.join(" "));

}
smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);