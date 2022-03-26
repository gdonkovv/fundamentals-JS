function addressBook(input) {

    let addresses = {};

    for(let line of input){
        let tokens = line.split(":");
        let name = tokens[0];
        let address = tokens[1];

        addresses[name] = address;

    }
    let sorted = Object.entries(addresses).sort((a,b) => a[0].localeCompare(b[0]));

    for(let item of sorted){
        console.log(`${item[0]} -> ${item[1]}`);
    }
}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);