function thePyramidOfKingDjoser(base, increment) {

    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let counter = 1;

    let pyramidHeight = increment;

    for (let i = base; i >= 1; i -= 2) {
        stepSpace = i * i * increment;

        if (i <= 2) {
            gold += stepSpace;
            break;
        }

        if (counter % 5 === 0) {
            lapisLazuli += stepSpace - (i - 2) * (i - 2) * increment;
            stone += (i - 2) * (i - 2) * increment;
        } else {
            marble += stepSpace - (i - 2) * (i - 2) * increment;
            stone += (i - 2) * (i - 2) * increment;
        }
        
        pyramidHeight += increment;
        counter++;
    }

console.log(`Stone required: ${Math.ceil(stone)}\nMarble required: ${Math.ceil(marble)}\nLapis Lazuli required: ${Math.ceil(lapisLazuli)}\nGold required: ${Math.ceil(gold)}\nFinal pyramid height: ${Math.floor(pyramidHeight)}`);
}
//thePyramidOfKingDjoser(11, 1);
//thePyramidOfKingDjoser(11,0.75);
//thePyramidOfKingDjoser(12,1);
thePyramidOfKingDjoser(23,0.5);