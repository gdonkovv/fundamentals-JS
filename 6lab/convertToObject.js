function convertToObject(objAsJSON){

    let convertedObj = JSON.parse(objAsJSON);

    for(let prop of Object.keys(convertedObj)){
        console.log(`${prop}: ${convertedObj[prop]}`);
    }

}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');