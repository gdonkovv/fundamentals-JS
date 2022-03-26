function starEnigma(input) {
    let numberOfMessages = Number(input.shift());
    let decryptionKeyPattern = /[^SsTtRrAa]*(?<letter>[SsTtRrAa])[^SsTtRrAa]*/g;
    let attackedPlanets = [];
    let destroyedPlanets = [];
 
    for (let message of input) {
        let keyLetters = [];
        let validKey;
        while ((validKey = decryptionKeyPattern.exec(message)) != null) {
            keyLetters.push(validKey.groups['letter']);
        }
        let decryptionKey = keyLetters.length;
 
        let decryptedMessage = '';
 
        for (let i = 0; i < message.length; i++) {
            let currLetter = message[i];
            let currLetterCharCode = currLetter.charCodeAt();
            let newLetter = String.fromCharCode(currLetterCharCode - decryptionKey);
            decryptedMessage += newLetter;
        }
 
        let messagePattern = /[^@\-!:>]*@(?<planetName>[a-zA-Z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<attackType>[AD]?)![^@\-!:>]*->(?<soldiers>\d+)[^@\-!:>]*/;
 
        if (messagePattern.test(decryptedMessage)) {
            let planetName = messagePattern.exec(decryptedMessage).groups['planetName'];
            let attackType = messagePattern.exec(decryptedMessage).groups['attackType'];
 
            attackType == 'A' ? attackedPlanets.push(planetName) : destroyedPlanets.push(planetName);
        }
    }
    attackedPlanets.sort((a, b) => a.localeCompare(b));
    destroyedPlanets.sort((a, b) => a.localeCompare(b));
 
    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.map(planet => console.log(`-> ${planet}`));
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.map(planet => console.log(`-> ${planet}`));
}