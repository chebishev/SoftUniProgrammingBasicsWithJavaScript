function minNumber(input) {

    let count = Number(input[0]);
    let max = Number.MAX_SAFE_INTEGER;
    let min = 0;

    for (let i = 1; i <= count; i++) {
        min = input[i];
        if (min < max) {
max = min;        
        }
    }
    console.log(min);
}
minNumber(["4", "45", "-20", "7", "99"]);