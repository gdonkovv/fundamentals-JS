function arrayManipulations(arr) {

    let targetArr = arr.shift().split(" ").map(Number);

    for (let i = 0; i < arr.length; i++) {
        let currCommand = arr[i].split(" ");
        let command = currCommand[0];

        if (command === "Add") {
            targetArr.push(Number(currCommand[1]));
        } else if (command === "Remove") {
            for (let j = 0; j < targetArr.length; j++) {
                if (targetArr[j] === Number(currCommand[1])) {
                    targetArr.splice(j, 1);
                }
            }
        } else if (command === "RemoveAt") {
            targetArr.splice(Number(currCommand[1]), 1);
        } else if (command === "Insert") {
            targetArr.splice(Number(currCommand[2]), 0, Number(currCommand[1]));
        }
    }
    console.log(targetArr.join(" "));

}
arrayManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2'])