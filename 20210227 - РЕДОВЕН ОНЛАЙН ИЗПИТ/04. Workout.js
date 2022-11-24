function workout(input) {

    let days = Number(input[0]);
    let firstDayKm = Number(input[1]);
    let index = 2;
    let totalKm = firstDayKm;
    let tempKm = 0;

    for (let i = 0; i < days; i++) {
        let percent = Number(input[index]) / 100;
        tempKm = firstDayKm + (firstDayKm * percent);
        totalKm += tempKm;
        firstDayKm = tempKm;
        index++;
    }
    if (totalKm >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(totalKm - 1000)} more kilometers!`);
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - totalKm)} more kilometers`);
    }
}
workout(["5", "30", "10", "15", "20", "5", "12"]);
workout(["4", "100", "30", "50", "60", "80"]);