function chessBoard(n) {

    let output = '';

    let black = "black";
    let white = "white";

    let block = '';
    let firstColour = black;
    let secondColour = white;

    for (let i = 1; i <= n; i++) {
        if (i === 1) {
            output += '<div class="chessboard">\n';
        }

        if (i % 2 === 0) {
            firstColour = white;
            secondColour = black;
        } else {
            firstColour = black;
            secondColour = white;
        }

        for (let j = 1; j <= n; j++) {
            if (j === 1) {
                block += ' <div>\n';
            }

            if (j % 2 === 0) {
                block += `  <span class="${secondColour}"></span>\n`;
            } else {
                block += `  <span class="${firstColour}"></span>\n`;
            }

            if (j === n) {
                block += ' </div>\n';
            }
        }
        output += block;
        block = '';

        if (i === n) {
            output += '</div>';
        }
    }

    console.log(output);
}
chessBoard(3);