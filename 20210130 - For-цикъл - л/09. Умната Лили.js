function cleverLily(input) {

    let age = Number(input[0]);
    let washingMachine = Number(input[1]);
    let toyPrice = Number(input[2]);
    let money = 0;
    let toy = 0;
    let total = 0;
    let sum = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            money += 10;
            sum += money;
            sum -= 1;
        } else {
            toy++;
        }
    }
    total = sum + (toy * toyPrice);

    if ((total - washingMachine) >= 0) {
        console.log(`Yes! ${(total - washingMachine).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachine - total).toFixed(2)}`);

    }
}
 //cleverLily(["21", "1570.98", "3"]);
 cleverLily(["10", "170", "6"]);

 