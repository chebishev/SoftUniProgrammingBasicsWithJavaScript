function moving(input) {

    let index = 0;
    let width = input[index];
    index++;
    let length = input[index];
    index++;
    let height = input[index];
    index++;
    let command = input[index];
    index++;
    let boxes = 0;
    let volume = width * height * length;

    while (command !== "Done") {
        boxes += Number(command);

        command = input[index];
        index++;
        if (boxes > volume) {
            console.log(`No more free space! You need ${(boxes - volume)} Cubic meters more.`);
            break;
        }
    }
    if (command === "Done") {
        console.log(`${(volume - boxes)} Cubic meters left.`);
    }

}
//moving(["10","10","2","20","20","20","20","122"]);
moving(["10", "1", "2", "4", "6", "Done"]);