function requiredReading(pagesCount, pagesReadPerHour, daysToRead) {

    let timeNeeded = pagesCount/pagesReadPerHour;
    let hoursPerDay = timeNeeded / daysToRead;

    console.log(hoursPerDay);

}
requiredReading(212, 20, 2);
requiredReading(432, 15, 4);