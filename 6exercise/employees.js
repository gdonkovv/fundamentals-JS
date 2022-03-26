function employees(arr) {

    for (let element of arr) {
        let objEmployee = { employeeName: element, perosnalNum: element.length };
        console.log(`Name: ${objEmployee.employeeName} -- Personal Number: ${objEmployee.perosnalNum}`);
    }

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);