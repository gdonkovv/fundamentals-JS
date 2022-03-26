function spiceMustFlow(startingYield) {

    //days the mine has operated
    //total amount of spice extracted

    let daysCounter = 0;
    let totalAmount = 0;

    while (startingYield >= 100) {
        totalAmount += startingYield;
        startingYield -= 10;
        
        if (totalAmount < 26) {
            totalAmount = 0;
        } else {
            totalAmount -= 26;
        }

        daysCounter++;
    }

    if (totalAmount < 26) {
        totalAmount = 0;
    } else {
        totalAmount -= 26;
    }

    console.log(daysCounter);
    console.log(totalAmount);

}
spiceMustFlow(111);
spiceMustFlow(450);
