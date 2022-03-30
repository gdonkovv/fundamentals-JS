function emojiDetector(input) {

    // cool threshold -> multiply all digits in the input
    // extract valid emojis from input and count them
    // calculate each emoji's coolness -> sum of all letters' ASCII codes
    // store cool emojis
    // print cool threshold
    // print stored cool emojis

    let line = input[0];

    let coolThreshold = 1;

    let digits = line.match(/\d/g);
    for (let digit of digits) {
        digit = Number(digit);
        coolThreshold *= digit;
    }

    console.log(`Cool threshold: ${coolThreshold}`);

    let pattern = /(::|\*\*)(?<emojiName>[A-Z][a-z]{2,})\1/g;
    let validCount = 0;
    let coolEmojis = [];

    let match = pattern.exec(line);
    while (match !== null) {
        validCount++;
        let name = match.groups.emojiName;
        let coolSum = 0;
        for (let ch of name) {
            coolSum += ch.charCodeAt(0);
        }

        if (coolSum >= coolThreshold) {
            coolEmojis.push(match[0]);
        }

        match = pattern.exec(line);
    }

    console.log(`${validCount} emojis found in the text. The cool ones are:`);
    for (let emoji of coolEmojis) {
        console.log(emoji);
    }

}
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
