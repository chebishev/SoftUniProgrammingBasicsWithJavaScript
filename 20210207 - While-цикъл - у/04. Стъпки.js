function walking(input) {


    let steps = 0;
    let goingHome = input[input.length - 2];
    let stepsGo = 10000;

    if (goingHome === "Going home") {
        let i = 0;
        while (i < input.length - 2) {
            let currentSteps = Number(input[i]);
            steps += currentSteps;
            i++;
        }
        steps += Number(input[input.length - 1]);

    } else {
        let i = 0;
        while (i < input.length) {
            let currentSteps = Number(input[i]);
            steps += currentSteps;
            i++;
        }

    }

    if (steps >= stepsGo) {
        console.log("Goal reached! Good job!");
        console.log(`${(steps - stepsGo)} steps over the goal!`);
    } else if (steps < stepsGo) {
        console.log(`${stepsGo - steps} more steps to reach goal.`);

    }
}
//walking(["1000", "1500", "2000", "6500"]);
//walking(["1500","300","2500","3000","Going home","200"]);
//walking(["1500","3000","250","1548","2000","Going home","2000"]);
walking(["125", "250", "4000", "30", "2678", "4682"]);