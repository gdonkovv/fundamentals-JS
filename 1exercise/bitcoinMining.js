function bitcoinMining(shift) {

    let count = 0;
    let day = 1;
    let money = 0;
    let firstBitcoinDay;

    for (let i = 0; i < shift.length; i++) {
        
        if(day % 3 === 0){
            money += (shift[i] * 67.51) * 0.70;
        } else {
            money += shift[i] * 67.51;
        }
        

        while (money >= 11949.16) {
            money -= 11949.16;
            count++;
            if (count === 1) {
                firstBitcoinDay = day;
            }
        }

        day++;
    }

    console.log(`Bought bitcoins: ${count}`);
    if(count !== 0){
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}
bitcoinMining([100, 200, 300]);
//bitcoinMining([50, 100]);
//bitcoinMining([3124.15, 504.212, 2511.124]);