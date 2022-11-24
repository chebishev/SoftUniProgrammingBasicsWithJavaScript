function club(input) {
    let index = 0;
    let wishedIncome = Number(input[index]);
    index++;
    let income = 0;
    let command = input[index];
    index++;
    let isParty = true;

    while (command !== "Party!") {
        let name = command;
        let count = Number(input[index]);
        index++;
        let drinksPrice = name.length * count;

        if (drinksPrice % 2 !== 0) {
            drinksPrice *= 0.75;
        }
        income += drinksPrice;

        if (income >= wishedIncome) {
            isParty = false;
            break;
        }
        command = input[index];
        index++;
    }

    if (isParty) {
        let diff = wishedIncome - income;
        console.log(`We need ${diff.toFixed(2)} leva more.`);
    } else {
        console.log("Target acquired.");

    }
    console.log(`Club income - ${income.toFixed(2)} leva.`);
}
//club(["500", "Bellini", "6", "Bamboo", "7", "Party!"]);
club(["500","Bellini","6","Bamboo","7","Party!"]);