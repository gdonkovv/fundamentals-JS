function NxNMatrix(n) {
    let row = [];
    for (let i = 0; i < n; i++) {
        row.push(n);
    }

    for (let i = 0; i < n; i++){
        console.log(row.join(" "));
    }

}
NxNMatrix(3);
NxNMatrix(7);
