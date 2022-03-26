function returnSmallestOfThreeNumbers(num1, num2, num3) {

    let smallestNum = num1;
    if(num2 < smallestNum){
        smallestNum = num2;
    }
    if(num3 < smallestNum){
        smallestNum = num3;
    }

    console.log(smallestNum);

}
returnSmallestOfThreeNumbers(2, 5, 3);