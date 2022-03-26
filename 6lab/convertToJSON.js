function convertToJSON(firstName, lastName, hairColor) {

    let objPerson = {
        name: firstName,
        lastName,
        hairColor
    }
    let convertedToJSON = JSON.stringify(objPerson);
    console.log(convertedToJSON);

}
convertToJSON('George', 'Jones', 'Brown');