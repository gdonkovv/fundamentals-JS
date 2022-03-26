function furniture(input) {

    let pattern = />>(?<name>[A-Z]\w+)<<(?<price>\d+(\.\d+)?)!(?<quantity>\d+)/g;
    let totalSpent = 0;

    console.log("Bought furniture:");

    for (let line of input) {

        if (line === "Purchase") {
            break;
        }
        let validProduct = pattern.exec(line);
        if (validProduct !== null) {
            console.log(validProduct.groups.name);
            totalSpent += Number(validProduct.groups.price) * Number(validProduct.groups.quantity);
        }
        validProduct = pattern.exec(line);
    }

    console.log(`Total money spend: ${totalSpent.toFixed(2)}`);

}
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);