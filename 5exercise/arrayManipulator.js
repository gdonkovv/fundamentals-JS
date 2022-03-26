function arrayManipulator(arr, commands) {

    for (let i = 0; i < commands.length; i++) {

        let firstCurrCommand = commands[i].split(" ");
        let commandText = firstCurrCommand.shift();
        let currCommand = firstCurrCommand.map(Number);

        if (commandText === "add") {
            let index = currCommand[0];
            let element = currCommand[1];

            arr.splice(index, 0, element);
        } else if (commandText === "addMany") {
            let index = currCommand.shift();
            arr.splice(index, 0, ...currCommand);

        } else if (commandText === "contains") {
            let element = currCommand[0];
            console.log(arr.indexOf(element));

        } else if (commandText === "remove") {
            let index = currCommand[0];
            arr.splice(index, 1);

        } else if (commandText === "shift") {
            let positions = currCommand[0];
            for (let i = 0; i < positions; i++) {
                arr.push(arr.shift());
            }

        } else if (commandText === "sumPairs") {

            if (arr.length % 2 !== 0) {
                arr.push(0);
            }
            let newArr = [];
            for (let i = 0; i < arr.length - 1; i += 2) {
                newArr.push(arr[i] + arr[i + 1]);
            }
            arr = newArr;

        } else if (commandText === "print") {

            console.log(`[ ${arr.join(", ")} ]`);
            break;
        }
    }
}
arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']);