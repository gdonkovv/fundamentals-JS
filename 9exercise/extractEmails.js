function extractEmails(input) {


    let pattern = /[ ][A-Za-z0-9][\w\d.\-]+[A-Za-z0-9]\@[A-Za-z][A-Za-z\-]*[A-Za-z](\.[A-Za-z][A-Za-z\-]*[A-Za-z])*\.[A-Za-z]+\b/g;

    let match = pattern.exec(input);

    while(match !== null){
        console.log(match[0]);
        match = pattern.exec(input);
    }
    
}
extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.');
