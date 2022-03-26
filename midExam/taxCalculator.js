function taxCalculator(input) {

    let cars = input[0].split(">>");

    let totalTax = 0;

    for (let i = 0; i < cars.length; i++) {

        let currCarArr = cars[i].split(" ");
        let carType = currCarArr[0];
        let yearsToPayTax = Number(currCarArr[1]);
        let kmTravelled = Number(currCarArr[2]);

        let curTax = 0;
        if (carType === "family") {
            let initialTaxPerYear = 50;
            curTax = 12 * Math.floor(kmTravelled / 3000) + (initialTaxPerYear - yearsToPayTax * 5);

        } else if (carType === "heavyDuty") {
            let initialTaxPerYear = 80;
            curTax = 14 * Math.floor(kmTravelled / 9000) + (initialTaxPerYear - yearsToPayTax * 8);


        } else if (carType === "sports") {
            let initialTaxPerYear = 100;
            curTax = 18 * Math.floor(kmTravelled / 2000) + (initialTaxPerYear - yearsToPayTax * 9);

        } else {
            console.log("Invalid car type.");
            continue;
        }

        console.log(`A ${carType} car will pay ${curTax.toFixed(2)} euros in taxes.`);
        totalTax += curTax;

    }
    console.log(`The National Revenue Agency will collect ${totalTax.toFixed(2)} euros in taxes.`);
}
taxCalculator(["family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410"]);