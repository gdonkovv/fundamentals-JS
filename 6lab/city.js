function city(objCity) {

    for (let prop of Object.keys(objCity)) {
        console.log(`${prop} -> ${objCity[prop]}`);
    }
}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});