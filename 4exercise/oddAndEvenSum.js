function oddAndEvenSum(num) {

    function oddDigitsSum(number){
        let numberAsString = String(number);
        let result = 0;
        for(let i = 0; i < numberAsString.length; i++){
            if(Number(numberAsString[i]) % 2 !== 0){
                result += Number(numberAsString[i]);
            }
        }
        return result;
    }

    function evenDigitsSum(number){
        let numberAsString = String(number);
        let result = 0;
        for(let i = 0; i < numberAsString.length; i++){
            if(Number(numberAsString[i]) % 2 === 0){
                result += Number(numberAsString[i]);
            }
        }
        return result;
    }

    console.log(` Odd sum = ${oddDigitsSum(num)}, Even sum = ${evenDigitsSum(num)}`);
}
oddAndEvenSum(3495892137259234);