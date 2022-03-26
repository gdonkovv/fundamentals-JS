function vacation(peopleCount, groupType, dayOfWeek) {

    let count = Number(peopleCount);

    let studentsFriday = 8.45;
    let studentsSaturday = 9.80;
    let studentsSunday = 10.46;
    let businessFriday = 10.90;
    let businessSaturday = 15.60;
    let businessSunday = 16;
    let regularFriday = 15;
    let regularSaturday = 20;
    let regularSunday = 22.50;

    let price;
    let totalPrice;

    if (groupType === "Students" && dayOfWeek === "Friday") {
        price = studentsFriday;
    } else if (groupType === "Students" && dayOfWeek === "Saturday") {
        price = studentsSaturday;
    } else if (groupType === "Students" && dayOfWeek === "Sunday") {
        price = studentsSunday;
    } else if (groupType === "Regular" && dayOfWeek === "Friday") {
        price = regularFriday;
    } else if (groupType === "Regular" && dayOfWeek === "Saturday") {
        price = regularSaturday;
    } else if (groupType === "Regular" && dayOfWeek === "Sunday") {
        price = regularSunday;
    } else if (groupType === "Business" && dayOfWeek === "Friday") {
        price = businessFriday;
    } else if (groupType === "Business" && dayOfWeek === "Saturday") {
        price = businessSaturday;
    } else if (groupType === "Business" && dayOfWeek === "Sunday") {
        price = businessSunday;
    }

    if (groupType === "Business" && count >= 100) {
        count -= 10;
    }

    totalPrice = price * count;

    if (groupType === "Students") {
        if (count >= 30) {
            totalPrice = 0.85 * totalPrice;
        }
    } else if (groupType === "Regular") {
        if (count >= 10 && count <= 20) {
            totalPrice = 0.95 * totalPrice;
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
//vacation(30, "Students", "Sunday");
//vacation(40, "Regular", "Saturday");
vacation(100, "Business", "Saturday");
