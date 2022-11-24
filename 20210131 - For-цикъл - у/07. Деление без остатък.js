function divideWithoutRemainder(input) {
    let count = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for (let i = 1; i <= count; i++) {

        if (input[i] % 2 === 0) {
            p1++;
        }
        if (input[i] % 3 === 0) {
            p2++;
        }
        if (input[i] % 4 === 0) {
            p3++;
        }

    }
    console.log(`${(p1 / count * 100).toFixed(2)}%`);
    console.log(`${(p2 / count * 100).toFixed(2)}%`);
    console.log(`${(p3 / count * 100).toFixed(2)}%`);

}
divideWithoutRemainder(["3","3","6","9"]);