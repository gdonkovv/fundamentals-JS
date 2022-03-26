function theatrePromotions(day, age) {

    let result;

    if (age >= 0 && age <= 122) {
        switch (day) {
            case "Weekday":
                if (age > 18 && age <= 64) {
                    result = 18;
                } else {
                    result = 12;
                }
                break;
            case "Weekend":
                if (age > 18 && age <= 64) {
                    result = 20;
                } else {
                    result = 15;
                }
                break;
            case "Holiday":
                if (age > 18 && age <= 64) {
                    result = 12;
                } else if (age <= 18) {
                    result = 5;
                } else {
                    result = 10;
                }
                break;
        }
        console.log(result + "$");
    } else {
        console.log("Error!");
    }
}
theatrePromotions('Weekday', 42);
theatrePromotions('Holiday', -12);
theatrePromotions('Holiday', 15);