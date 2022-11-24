function cake(input) {

    let length = Number(input[0]);
    let width = Number(input[1]);
    let cakeArea = length * width;
    let stop = input[input.length - 1];
    let pieces = 0;

    if (stop === "STOP") {
        let i = 2;
        while (i < input.length - 1) {
            pieces += Number(input[i]);
            i++;

        }
    }
    else {
        let i = 2;
        while (i < input.length) {
            pieces += Number(input[i]);
            i++;
        }
    }

    if ((cakeArea - pieces) < 0) {
        console.log(`No more cake left! You need ${pieces - cakeArea} pieces more.`);
    } else {
        console.log(`${cakeArea - pieces} pieces are left.`);
    }
}
//cake(["10","10","20","20","20","20","21"]);
cake(["10", "2", "2", "4", "6", "STOP"]);