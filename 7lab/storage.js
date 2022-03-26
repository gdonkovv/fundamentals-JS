function storage(input) {

    let result = new Map();

    for (let line of input) {
        let tokens = line.split(" ");
        let product = tokens[0];
        let currQuantity = Number(tokens[1]);

        if (!result.has(product)) {
            result.set(product, 0);
        }
        result.set(product, result.get(product) + currQuantity);

    }

    for (let key of result.keys()) {
        console.log(`${key} -> ${result.get(key)}`);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);