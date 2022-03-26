function personInfo(firstName, lastName, age) {

    let result = {};
    result.firstName = firstName;
    result.lastName = lastName;
    result.age = Number(age);
    return result;

}
personInfo("Peter", "Pan", "20");