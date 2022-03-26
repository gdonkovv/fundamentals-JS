function reverseInPlace(arr) {

    let temp = "";
    let j = arr.length - 1;

    for (let i = 0; i < arr.length / 2; i++, j--) {

        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    console.log(arr.join(" "));

}
reverseInPlace(['a', 'b', 'c', 'd', 'e']); // e d c b a
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reverseInPlace(['33', '123', '0', 'dd']);
