function processOddNumbers(arr){

    let newArr = [];

    for(let i = 1; i < arr.length; i+=2){
        newArr.unshift(arr[i] * 2);
    }
    console.log(newArr.join(" "));

}
processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);
