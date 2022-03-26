function triangleOfNumbers(n) {

    let printer = "";
    let counter = 1;

    for (let i = 1; i <= n; i++) {
        
        //while (counter <= i){
        //    printer += i + " ";
        //    counter++;
        //}

        for(let j = 1; j <= i; j++){
            printer += i + " ";
        }

        console.log(printer);
        printer = "";   
        //counter = 1;     

    }

}
triangleOfNumbers(3);
//triangleOfNumbers(5);
//triangleOfNumbers(6);