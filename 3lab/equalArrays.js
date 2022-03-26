function equalArrays(arr1, arr2) {

    let areIdentical = true;
    let sum = 0;
    let index = 0;

    for (let i = 0; i < arr1.length; i++) {
        if (Number(arr1[i]) !== Number(arr2[i])) {
            areIdentical = false;
            index = i;
            break;
        } else {
            sum += Number(arr1[i]);
        }
    }

    if (areIdentical) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    }


}
equalArrays(['1'], ['10']);