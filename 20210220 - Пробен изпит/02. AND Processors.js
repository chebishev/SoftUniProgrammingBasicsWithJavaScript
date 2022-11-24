function andProcessors(input) {

    let targetProcessors = Number(input[0]);
    let employes = Number(input[1]);
    let workingDays = Number(input[2]);
    let hours = employes * workingDays * 8;
    let totalProcessors = Math.floor(hours / 3);


    if (totalProcessors >= targetProcessors) {
        console.log(`Profit: -> ${((totalProcessors - targetProcessors) * 110.10).toFixed(2)} BGN`);
    } else {
        console.log(`Losses: -> ${((targetProcessors - totalProcessors) * 110.10).toFixed(2)} BGN`);
    }
}
//andProcessors(["500","8","20"]);
andProcessors(["150", "7", "18"]);