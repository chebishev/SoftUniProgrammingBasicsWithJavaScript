function accountBalance(input) {

    let index = 0;
    let balance = 0;
    let deposit = 0;
    let command = input[index];

    while (command !== "NoMoreMoney") {

        deposit = Number(input[index]);
        if (deposit < 0) {
            console.log("Invalid operation!");
            break;
        } else {
            console.log(`Increase: ${deposit.toFixed(2)}`);
            balance += deposit;
            index++;
        }
        command = input[index];

    }
    console.log(`Total: ${balance.toFixed(2)}`);

}
//accountBalance(["5.51","69.42","100","NoMoreMoney"]);
accountBalance(["120", "45.55", "-150"]);