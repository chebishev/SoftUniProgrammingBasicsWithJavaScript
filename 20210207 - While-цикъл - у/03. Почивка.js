function vacation(input) {

    let neededMoney = Number(input[0]);
    let startMoney = Number(input[1]);
    let index = 2;
    let daysCounter = 0;
    let spendCounter = 0;
    while (true) {
        let command = input[index++];
        let amount = Number(input[index]);
        daysCounter++;
        if (command === "spend") {
            spendCounter++;
            if (amount>startMoney) {
                startMoney = 0;
            }
            else {
                startMoney -= amount;

            }
        } else if (command === "save") {
            spendCounter = 0;
            
            startMoney += amount;
        }

        if (spendCounter === 5) {
            console.log(`You can't save the money.`);
            console.log(daysCounter);
            break;
        }

        if (startMoney >= neededMoney) {
            console.log(`You saved the money for ${daysCounter} days.`);
            break;
        }
        index++;
    }

}
vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
//vacation(["110","60","spend","10","spend","10","spend","10","spend","10","spend","10"]);