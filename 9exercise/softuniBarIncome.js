function softuniBarIncome(input) {

    let pattern = /%(?<customer>[A-Z][a-z]+)%[^\|\$\%\.\d]*<(?<product>\w+)>[^\|\$\%\.\d]*\|(?<count>\d+)\|[^\|\$\%\.\d]*(?<price>\d+(\.\d+)?)\$/g;
    let totalIncome = 0;

    for (let line of input) {
        if (line === "end of shift") {
            break;
        }

        let match = pattern.exec(line);
        if (match !== null) {
            console.log(`${match.groups.customer}: ${match.groups.product} - ${(Number(match.groups.count) * Number(match.groups.price)).toFixed(2)}`);
            totalIncome += Number(match.groups.count) * Number(match.groups.price);
        }
        match = pattern.exec(line);
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);

}
softuniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);