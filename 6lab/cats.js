function cats(input) {
    class catsClass {
        constructor(name, age) {
            this.catName = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.catName}, age ${this.age} says Meow`);
        }
    }

    for(let element of input){
        let currCat = element.split(" ");
        let catName = currCat[0];
        let catAge = Number(currCat[1]);
        let objCat = new catsClass(catName,catAge);
        objCat.meow();        
    }
}
cats(['Mellow 2', 'Tom 5']);
