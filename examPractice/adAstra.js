function adAstra(input) {

    let pattern = /([#|])(?<name>[A-Za-z ]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;

    let text = input[0];
    let foods = [];
    let totalCal = 0;

    let match = pattern.exec(text);
    while (match !== null) {

        let name = match.groups["name"];
        let expDate = match.groups["expDate"];
        let calories = Number(match.groups["calories"]);
        totalCal += calories;

        foods.push(`Item: ${name}, Best before: ${expDate}, Nutrition: ${calories}`);
        match = pattern.exec(text);
    }

    console.log(`You have food to last you for: ${Math.floor(totalCal / 2000)} days!`);
    console.log(foods.join("\n"));
}
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);