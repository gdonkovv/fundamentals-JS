function triplesOfLatinLetters(numAsString) {

    for (let i = 0; i < Number(numAsString); i++) {
        let letter1 = String.fromCharCode(97 + i);
        for (let j = 0; j < Number(numAsString); j++) {
            let letter2 = String.fromCharCode(97 + j);
            for (let k = 0; k < Number(numAsString); k++) {
                let letter3 = String.fromCharCode(97 + k);

                console.log(`${letter1}${letter2}${letter3}`);
            }
        }
    }
}
triplesOfLatinLetters("2");