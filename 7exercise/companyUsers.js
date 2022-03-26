function companyUsers(input) {

    let companies = {};

    for (let line of input) {
        let tokens = line.split(" -> ");
        let companyName = tokens[0];
        let userId = tokens[1];

        if (companies.hasOwnProperty(companyName)) {
            if (companies[companyName].includes(userId) === false) {
                companies[companyName].push(userId);
            }

        } else {
            companies[companyName] = [];
            companies[companyName].push(userId);
        }
    }

    let sorted = Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]));


    for (let company of sorted) {

        console.log(company[0]);
        for (let user of company[1]) {
            console.log(`-- ${user}`);
        }

    }

}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);