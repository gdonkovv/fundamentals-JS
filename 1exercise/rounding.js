function rounding(num, precision) {

    let number = Number(num);
    let preci = Number(precision);

    if (precision > 15) {
        preci = 15;
    }
    console.log(parseFloat(number.toFixed(preci)));
}
rounding(10.5, 3);