function catalogue(input) {

    let catalogueObj = {};

    for (let line of input) {
        let tokens = line.split(" : ");
        let name = tokens[0];
        let price = tokens[1];

        catalogueObj[name] = price;
    }

    let sortedCatalogue = Object.entries(catalogueObj).sort((a, b) => a[0].localeCompare(b[0]));

    let newCatalogue = {};

    for (let i = 65; i <= 90; i++) {
        let letter = String.fromCodePoint(i);
        let group = [];

        for (let product of sortedCatalogue) {
            let productName = product[0];
            let productFirstLetter = productName[0];
            if (productFirstLetter === letter) {
                group.push(product);
            }
        }
        if (group.length > 0) {
            newCatalogue[letter] = group;
        }
    }

    for (let letter of Object.keys(newCatalogue)) {
        console.log(letter);
        for(let product of newCatalogue[letter]){
            console.log(`  ${product[0]}: ${product[1]}`);
        }
    }

}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
);