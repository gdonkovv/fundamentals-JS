function minerTask(input) {

    let result = {};
    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);

        if (result.hasOwnProperty(resource)) {
            result[resource] += quantity;
        } else {
            result[resource] = Number(quantity);
        }
    }
    for (let key of Object.keys(result)) {
        console.log(`${key} -> ${result[key]}`);
    }
}
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);