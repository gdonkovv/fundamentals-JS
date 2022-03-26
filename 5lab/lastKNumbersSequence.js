function lastKNumbersSequence(n, k) {

    // first element is 1
    // next element equals the sum of the previous k elements
    // length of the sequence is n elements
    let sequenceArr = [1];
    for (let i = 1; i < n; i++) {
        let sum = 0;
        let newArr = sequenceArr.slice(-k);

        for (let j = 0; j < newArr.length; j++) {
            sum += newArr[j];
        }
        sequenceArr.push(sum);
    }
    console.log(sequenceArr.join(" "));
}
lastKNumbersSequence(8, 2);