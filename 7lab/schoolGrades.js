function schoolGrades(input) {

    let result = {};
    for (let line of input) {
        let grades = line.split(" ");
        let name = grades.shift();

        grades = grades.map(Number);

        if (result.hasOwnProperty(name)) {
            for (let grade of grades) {
                result[name].push(grade);
            }
        } else {
            result[name] = grades;
        }
    }

    let sorted = Object.entries(result).sort((a,b) => a[0].localeCompare(b[0]));

    for(let item of sorted){
        let sum = 0;
        for(let grade of item[1]){
            sum += grade;
        }
        console.log(`${item[0]}: ${(sum/item[1].length).toFixed(2)}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);