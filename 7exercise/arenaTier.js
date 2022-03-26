function arenaTier(input) {

    let gladiatorsPool = {};

    for (let line of input) {

        if (line === "Ave Cesar") {
            break;
        }


        if (line.includes("->")) {
            let tokens = line.split(" -> ");
            let gladiatorName = tokens[0];
            let technique = tokens[1];
            let skill = Number(tokens[2]);

            if (gladiatorsPool.hasOwnProperty(gladiatorName)) {
                let techniquesObj = gladiatorsPool[gladiatorName];
                if (techniquesObj.hasOwnProperty(technique)) {
                    if (techniquesObj[technique] < skill) {
                        techniquesObj[technique] = skill;
                    }
                } else {
                    techniquesObj[technique] = skill;
                }
            } else {
                gladiatorsPool[gladiatorName] = { [technique]: skill };
            }

        } else {
            let tokens = line.split(" vs ");
            let gladiator1 = tokens[0];
            let gladiator2 = tokens[1];

            if (gladiatorsPool[gladiator1] && gladiatorsPool[gladiator2]) {

                let gladiator1SkillPoints = 0;
                let gladiator2SkillPoints = 0;

                let gladiator1Techniques = gladiatorsPool[gladiator1];
                let gladiator2Techniques = gladiatorsPool[gladiator2];

                for (let points of Object.values(gladiator1Techniques)) {
                    gladiator1SkillPoints += points;
                }
                for (let points of Object.values(gladiator2Techniques)) {
                    gladiator2SkillPoints += points;
                }

                let haveCommonTech = false;

                for (let tech of Object.keys(gladiator1Techniques)) {
                    if (gladiator2Techniques.hasOwnProperty(tech)) {
                        haveCommonTech = true;
                        break;
                    }
                }

                if (haveCommonTech) {
                    if (gladiator1SkillPoints > gladiator2SkillPoints) {
                        delete gladiatorsPool[gladiator2];
                    } else {
                        delete gladiatorsPool[gladiator1];
                    }
                }
            }


        }
    }

    let sorted = Object.entries(gladiatorsPool).sort((a, b) => {

        let totalA = 0;
        let totalB = 0;

        for (let points of Object.values(a[1])) {
            totalA += points;
        }
        for (let points of Object.values(b[1])) {
            totalB += points;
        }
        if (totalA !== totalB) {
            return totalB - totalA;
        } else {
            return a[0].localeCompare(b[0]);
        }
    });

    for (let glad of sorted) {
        let name = glad[0];
        let techs = glad[1];
        let total = 0;
        for (let points of Object.values(techs)) {
            total += points;
        }

        console.log(`${name}: ${total} skill`);
        let sortedTechs = Object.entries(techs).sort((a, b) => {
            if (a[1] !== b[1]) {
                return b[1] - a[1];
            } else {
                return a[0].localeCompare(b[0]);
            }
        });
        for (let item of sortedTechs) {
            console.log(`- ${item[0]} <!> ${item[1]}`);
        }

    }

}
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);

console.log("---");

arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
]);