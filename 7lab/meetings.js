function meetings(input) {

    let meetingsObj = {};

    for (let line of input) {
        let tokens = line.split(" ");
        let day = tokens[0];
        let person = tokens[1];

        if (!meetingsObj.hasOwnProperty(day)) {
            meetingsObj[day] = person;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for(let meeting in meetingsObj){
        console.log(`${meeting} -> ${meetingsObj[meeting]}`);
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);