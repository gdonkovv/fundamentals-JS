function phoneShop(arr) {

    let phones = arr.shift().split(", ");

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === "End") {
            break;
        }

        let currCommand = arr[i].split(" - ");
        let commandText = currCommand[0];

        if (commandText === "Add") {
            let currPhone = currCommand[1];
            if (phones.includes(currPhone) === false) {
                phones.push(currPhone);
            }

        } else if (commandText === "Remove") {
            let currPhone = currCommand[1];
            if (phones.includes(currPhone)) {
                let index = phones.indexOf(currPhone);
                phones.splice(index, 1);
            }

        } else if (commandText === "Bonus phone") {
            let newArr = currCommand[1].split(":");
            let oldPhone = newArr[0];
            let newPhone = newArr[1];

            if (phones.includes(oldPhone)) {
                let index = phones.indexOf(oldPhone);
                phones.splice(index + 1, 0, newPhone);
            }
        } else if (commandText === "Last") {
            let currPhone = currCommand[1];
            if (phones.includes(currPhone)) {
                let index = phones.indexOf(currPhone);
                let thisPhone = phones[index];
                phones.splice(index, 1);
                phones.push(thisPhone);
            }

        }
    }
    console.log(phones.join(", "));
}
phoneShop(["SamsungA50, MotorolaG5, IphoneSE", "Add - Iphone10", "Remove - IphoneSE", "End"]);
phoneShop(["HuaweiP20, XiaomiNote", "Remove - Samsung", "Bonus phone - XiaomiNote:Iphone5", "End"]);
phoneShop(["SamsungA50, MotorolaG5, HuaweiP10", "Last - SamsungA50", "Add - MotorolaG5", "End"]);