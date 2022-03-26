function listOfProducts(arrProducts){

    arrProducts.sort(); //(a,b) => a.localeCompare(b)

    let rank = 0;

    for(let i = 0; i < arrProducts.length; i++){
        rank++;
        console.log(`${rank}.${arrProducts[i]}`)
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);