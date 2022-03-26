function orders(productType, quantity) {

    let price = 0;
    let singlePrice = 0;
    switch (productType) {
        case "coffee": singlePrice = 1.50; break;
        case "water": singlePrice = 1.00; break;
        case "coke": singlePrice = 1.40; break;
        case "snacks": singlePrice = 2.00; break;
    }

    price = singlePrice*quantity;
    console.log(price.toFixed(2));

}
orders("water", 5);
orders("coffee", 2);
