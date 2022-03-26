function searchForANumber(firstArr, secondArr) {

    let numsToTake = secondArr[0];
    let numsToDeleteFromTaken = secondArr[1];
    let searchedNumAfterManipulations = secondArr[2];

    firstArr.splice(numsToTake);
    firstArr.splice(0, numsToDeleteFromTaken);

    let counter = 0;

    for (let element of firstArr) {
        if (element === searchedNumAfterManipulations) {
            counter++;
        }
    }

    console.log(`Number ${searchedNumAfterManipulations} occurs ${counter} times.`);

}
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);