function fancyBarcodes(input) {

    let n = Number(input.shift());

    let pattern = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;

    for (let i = 0; i < n; i++) {

        let text = input[i];

        if (pattern.test(text)) {

            let match = pattern.exec(text);
            let matchedString = match[1].split("");
            let productGroup = "";

            for (let ch of matchedString) {
                if (/\d/.test(ch)) {
                    productGroup += ch;
                }
            }
            if (productGroup === "") {
                productGroup = "00";
            }

            console.log(`Product group: ${productGroup}`);

        } else {
            console.log("Invalid barcode");
        }
    }
}
fancyBarcodes(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"]);


// fancyBarcodes(["6",
//     "@###Val1d1teM@###",
//     "@#ValidIteM@#",
//     "##InvaliDiteM##",
//     "@InvalidIteM@",
//     "@#Invalid_IteM@#",
//     "@#ValiditeM@#"]);