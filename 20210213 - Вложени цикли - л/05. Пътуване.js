function travelling(input) {
    let index = 0;
    let destination = input[index++];

    while (destination !== "End") {
        let target = Number(input[index++]);
        let budget = 0;

        while (budget <= target) {
            let tempBudget = Number(input[index++]);
            budget += tempBudget;
            if (budget >= target) {
                console.log(`Going to ${destination}!`);
                break;
            }
        }
        destination = input[index++];
    }
}
travelling(["Greece","1000","200","200","300","100","150","240","Spain","1200","300","500","193","423","End"]);
//traveling(["France","2000","300","300","200","400","190","258","360","Portugal","1450","400","400","200","300","300","Egypt","1900","1000","280","300","500","End"]);