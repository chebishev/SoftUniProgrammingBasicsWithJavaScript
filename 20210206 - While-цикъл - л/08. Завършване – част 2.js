function graduationPtTwo(input) {

    let index = 0;
    let studentName = input[index];
    index++;
    let grades = 0.00;
    let counter = 1;
    let average = 0.00;
    let failureCount = 0;

    while (counter < input.length) {
        counter++;

        if (input[index] >= 4) {
            grades += Number(input[index]);
            index++;

        } else {
            failureCount++;
            index++;
            if (failureCount === 2) {
                console.log(`${studentName} has been excluded at ${counter-2} grade`)
                break;
            }

        }

    }

    if (input.length - 1 === 12) {
        average = grades / 12;
        console.log(`${studentName} graduated. Average grade: ${average.toFixed(2)}`);

    }

}
graduationPtTwo(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);
graduationPtTwo(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);