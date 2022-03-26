function storeProvision(arrCurrStock, arrDelivery) {

    let stock = {};

    for (let i = 0; i < arrCurrStock.length; i += 2) {
        let currProduct = arrCurrStock[i];
        stock[currProduct] = Number(arrCurrStock[i + 1]);
    }

    for (let j = 0; j < arrDelivery.length; j += 2){
        let currProduct = arrDelivery[j];
        if(!stock.hasOwnProperty(currProduct)){
            stock[currProduct] = 0;
        }
        stock[currProduct] += Number(arrDelivery[j+1]);
    }

    for(let product of Object.keys(stock)){
        console.log(`${product} -> ${stock[product]}`);
    }

}
storeProvision(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);