function destinationMapper(input) {

    let pattern = /([\=\/])(?<placeName>[A-Z][A-Za-z]{2,})\1/g;
    let destArr = [];
    let travelPoints = 0;

    let match = pattern.exec(input);
    while (match !== null) {
        let currPlace = match.groups.placeName
        destArr.push(currPlace);
        travelPoints += currPlace.length;

        match = pattern.exec(input);
    }
    console.log(`Destinations: ${destArr.join(", ")}`);
    console.log(`Travel Points: ${travelPoints}`);

}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");