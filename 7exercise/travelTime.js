function travelTime(input) {

    let countries = {};

    for (let line of input) {
        let tokens = line.split(" > ");
        let country = tokens[0];
        let town = tokens[1];
        let travelCost = Number(tokens[2]);

        if (countries.hasOwnProperty(country)) {
            if (countries[country].hasOwnProperty(town)) {
                if (countries[country][town] > travelCost) {
                    countries[country][town] = travelCost;
                }
            } else {
                countries[country][town] = travelCost;
            }
        } else {
            countries[country] = { [town]: travelCost };
        }
    }

    let sorted = Object.entries(countries).sort((a, b) => a[0].localeCompare(b[0]));

    for (let item of sorted) {
        let printer = item[0] + " -> ";
        let sortedTowns = Object.entries(item[1]).sort((a, b) => a[1] - b[1]);
        for (let town of sortedTowns) {
            printer = printer + `${town[0]} -> ${town[1]} `;
        }
        console.log(printer);
    }
}
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]);