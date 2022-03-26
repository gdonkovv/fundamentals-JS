function gladiatorInventory(arr) {

    let inventory = arr.shift().split(" ");
    for (let i = 0; i < arr.length; i++) {

        let currCommand = arr[i].split(" ");
        let command = currCommand[0];
        let equipment = currCommand[1];


        if (command === "Buy") {
            if (inventory.indexOf(equipment) === -1) {
                inventory.push(equipment);
            }
        } else if (command === "Trash") {
            if (inventory.indexOf(equipment) !== -1) {
                let index = inventory.indexOf(equipment);
                inventory.splice(index, 1);
            }
        } else if (command === "Repair") {
            if (inventory.indexOf(equipment) !== -1) {
                let item = inventory.splice(inventory.indexOf(equipment), 1);
                inventory.push(item);
            }
        } else if (command === "Upgrade") {

            let equipmentUpgradeSeparated = equipment.split("-");
            let equipmentNew = equipmentUpgradeSeparated[0];
            let upgrade = equipmentUpgradeSeparated[1];

            if (inventory.indexOf(equipmentNew) !== -1) {
                let index = inventory.indexOf(equipmentNew);
                let item = inventory[index];
                inventory.splice(index+1, 0, item + ":" + upgrade);
            }
        }
    }

    console.log(inventory.join(" "));

}
gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']);