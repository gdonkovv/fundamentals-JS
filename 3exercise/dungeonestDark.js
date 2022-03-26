function dungeonestDark(roomsArrAsString) {

    let health = 100;
    let coins = 0;

    let allRoomsString = roomsArrAsString[0];
    let currRoom = "";
    let newArr = [];


    for (let i = 0; i < allRoomsString.length; i++) {
        if (allRoomsString[i] === "|") {
            newArr.push(currRoom);
            currRoom = "";
        } else {
            currRoom += allRoomsString[i];
        }
        if(i === allRoomsString.length -1){
            newArr.push(currRoom);
        }
    }

    let roomCounter = 0;

    for (let j = 0; j < newArr.length; j++) {
        roomCounter++;
        let room = newArr[j].split(" ");
        let itemOrMonster = room[0];
        let points = Number(room[1]);

        let diff = 0;
        if (itemOrMonster === "potion") {
            if (health < 100) {
                if (health + points >= 100) {
                    diff = 100 - health;
                    health = 100;
                } else {
                    health += points;
                    diff = points;
                }
            }
            console.log(`You healed for ${diff} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (itemOrMonster === "chest") {
            coins += points;
            console.log(`You found ${points} coins.`);
        } else {
            health -= points;
            if (health > 0) {
                console.log(`You slayed ${itemOrMonster}.`);
            } else {
                console.log(`You died! Killed by ${itemOrMonster}.`);
                console.log(`Best room: ${roomCounter}`);
                break;
            }
        }
        if(j === newArr.length - 1){
            console.log("You've made it!");
            console.log(`Coins: ${coins}`);
            console.log(`Health: ${health}`);
        }
    }
}
// dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);