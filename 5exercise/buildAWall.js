function buildAWall(arr) {

    let arrAsNumbers = arr.map(Number);

    //195 concrete per day per section
    // they work till they reach 30

    //smallest will show how many days remain
    let newArr = arrAsNumbers.slice().sort((a, b) => a - b);
    let smallestSectionSize = newArr[0];
    let days = 30 - smallestSectionSize;

    let concrete = 0;
    let finalConcretePerDay = [];

    for (let i = 0; i < days; i++) {

        let concretePerDay = 0;
        for (let j = 0; j < arrAsNumbers.length; j++) {
            if (arrAsNumbers[j] < 30) {
                arrAsNumbers[j] += 1;
                concrete += 195;
                concretePerDay += 195;
            }
        }
        finalConcretePerDay.push(concretePerDay);
    }

    console.log(finalConcretePerDay.join(", "));
    console.log(`${concrete * 1900} pesos`);

}
buildAWall([17, 22, 17, 19, 17]);