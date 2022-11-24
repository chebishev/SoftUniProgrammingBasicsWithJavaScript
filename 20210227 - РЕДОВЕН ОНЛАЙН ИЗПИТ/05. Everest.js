function everest(input) {
    let index = 0;
    let command = input[index];
    index++;
    let daysCounter = 1;
    let meters = 5364;

    while (true) {

        if (command === "END") {
            break;
        } else if (meters >= 8848) {
            console.log(`Goal reached for ${daysCounter} days!`);
            break;
        }
        if (command === "Yes") {
            daysCounter++;
            if (daysCounter > 5) {
                break;
            }
            meters += Number(input[index]);
            index++;
        } else if (command === "No") {
            meters += Number(input[index]);
            index++;
        }
        command = input[index];
        index++;

    }
    if (meters < 8848) {
        console.log("Failed!");
        console.log(meters);
    }
}
//everest(["Yes", "1254", "Yes", "1402", "No", "250", "Yes", "635"]);
//everest(["Yes", "1000", "Yes", "945", "No", "1200", "END"]);
everest(["Yes", "535", "Yes", "849", "Yes", "499", "Yes", "400", "Yes", "500"]);
everest(["Yes", "700", "END"]);