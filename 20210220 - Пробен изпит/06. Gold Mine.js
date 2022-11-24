function goldMine(input) {
    let index = 0;
    let locations = Number(input[index]);
    index++;

    for (let i = 1; i <= locations; i++) {
        let targetGoldPerDay = Number(input[index]);
        index++;
        let daysCount = Number(input[index]);
        index++;
        let totalGold = 0;
        for (let j = 1; j <= daysCount; j++) {
            let goldPerDay = Number(input[index]);
            index++;
            totalGold += goldPerDay;
        }
        if (totalGold / daysCount >= targetGoldPerDay) {
            console.log(`Good job! Average gold per day: ${(totalGold / daysCount).toFixed(2)}.`);

        } else {
            console.log(`You need ${(targetGoldPerDay - (totalGold / daysCount)).toFixed(2)} gold.`);
        }
    }
}
//goldMine(["2","10","3","10","10","11","20","2","20","10"]);
goldMine(["1", "5", "3", "10", "1", "3"]);