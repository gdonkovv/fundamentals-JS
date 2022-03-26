function login(input) {

    let user = input[0];
    let password = user.split("");
    password = password.reverse();
    password = password.join("");

    for (let i = 1; i <= 4; i++) {

        if (input[i] === password) {
            console.log(`User ${user} logged in.`);
            break;
        } else if(i === 4){
            console.log(`User ${user} blocked!`);
        } else {
            console.log("Incorrect password. Try again.");
        }
    }
}
login(['Acer','login','go','let me in','recA']);
//login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);