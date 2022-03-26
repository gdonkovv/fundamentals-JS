function piccolo(input) {

    let parkingLot = new Set();

    for (let line of input) {
        let tokens = line.split(", ");
        let direction = tokens[0];
        let carNum = tokens[1];

        if (direction === "IN") {
            parkingLot.add(carNum);
        } else {
            parkingLot.delete(carNum);
        }
    }
    
    let sorted = Array.from(parkingLot).sort();

    for(num of sorted){
        console.log(num);
    }

}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);