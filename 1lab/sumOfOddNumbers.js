function sumOfOddNumbers(n){

    let cycleCount = 1;
    let oddNum = 1;
    let sum = 0;

    while(cycleCount <= n){
        console.log(oddNum);
        sum += oddNum;
        oddNum += 2;
        cycleCount++;
    }
    console.log(`Sum: ${sum}`);

}
sumOfOddNumbers(3);