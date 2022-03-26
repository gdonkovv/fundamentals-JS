function biscuitFactory(arr) {

    let biscuitsPerDayPerWorker = Number(arr[0]);
    let workersCount = Number(arr[1]);
    let otherFactoryProduction30Days = Number(arr[2]);

    let newProductionPerDay = (biscuitsPerDayPerWorker * workersCount) * 0.75;
    newProductionPerDay = Math.floor(newProductionPerDay);

    let myProduction = 0;

    for (let i = 1; i <= 30; i++) {

        if (i % 3 === 0) {
            myProduction += newProductionPerDay;
        } else {
            myProduction += biscuitsPerDayPerWorker * workersCount;
        }
    }

    console.log(`You have produced ${myProduction} biscuits for the past month.`);

    let diff = Math.abs(myProduction - otherFactoryProduction30Days);
    let percentageDiff = 0;


    if (myProduction > otherFactoryProduction30Days) {
        percentageDiff = (diff / otherFactoryProduction30Days) * 100;
        console.log(`You produce ${percentageDiff.toFixed(2)} percent more biscuits.`);
    } else {
        percentageDiff = (diff / otherFactoryProduction30Days) * 100;
        console.log(`You produce ${percentageDiff.toFixed(2)} percent less biscuits.`);
    }

}
//biscuitFactory(["78", "8", "16000"]);
//biscuitFactory(["65", "12", "26000"]);
biscuitFactory(["163","16","67020"]);