function sumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index];
    let primeNumber = 0;
    let nonPrimeNumber = 0;


    while (command !== "stop") {
        let tempNumber = Number(command);
        index++;
        if (tempNumber < 0) {
            console.log("Number is negative.");
            command = input[index];
            continue;
        }
        let isPrime = true;
        if (tempNumber === 1) {
            isPrime = false;
        }
        else {
            for (let i = tempNumber; i >= 2; i--) {
                if (tempNumber % i === 0 && i !== tempNumber) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) {
            primeNumber += tempNumber;
        } else {
            nonPrimeNumber += tempNumber;
        }
        command = input[index];
    }
    console.log(`Sum of all prime numbers is: ${primeNumber}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNumber}`);
}
sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
//sumPrimeNonPrime(["30","83","33","-1","20","stop"]);
//sumPrimeNonPrime(["0","-9","0","stop"]);