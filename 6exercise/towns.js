function towns(arr) {
    for(let element of arr){
        let townInfo = element.split(" | ");
        let objTown = {
            town: townInfo[0],
            latitude: Number(townInfo[1]).toFixed(2),
            longitude: Number(townInfo[2]).toFixed(2)
        }
        console.log(objTown);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);