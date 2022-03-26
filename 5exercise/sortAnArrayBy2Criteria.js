function sortAnArrayBy2Criteria(arr) {

    arr.sort((a, b) => {
        if (a.length - b.length !== 0) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    });
    console.log(arr.join("\n"));
}
sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
