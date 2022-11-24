function uniquePinCodes(input) {

    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let thirdNumber = Number(input[2]);

    for (let i = 2; i <= firstNumber; i++) {

        for (let j = 2; j <= secondNumber; j++) {
            if (j > 2 && j % 2 === 0 || j > 7) {
                continue;
            }
            for (let k = 2; k <= thirdNumber; k++) {

                if (i % 2 === 0 && k % 2 === 0) {
                    console.log(`${i} ${j} ${k}`)
                }
            }
        }
    }
}
//uniquePinCodes(["3", "5", "5"]);
//uniquePinCodes(["8", "2", "8"]);
uniquePinCodes(["2", "2", "2"]);