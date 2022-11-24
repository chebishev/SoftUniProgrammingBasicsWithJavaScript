function onTimeForTheExam(input) {
    let hour1 = Number(input[0]);
    let minutes1 = Number(input[1]);
    let hour2 = Number(input[2]);
    let minutes2 = Number(input[3]);
    let timeOfExam = (hour1 * 60) + minutes1;
    let timeOfArrival = (hour2 * 60) + minutes2;
    let difference = timeOfExam - timeOfArrival;
    let difference2 = timeOfArrival - timeOfExam;
 
 
    if (timeOfExam < timeOfArrival) {
        console.log("Late");
    } else if (timeOfExam - 30 <= timeOfArrival && timeOfExam >= timeOfArrival) {
        console.log("On time");
    } else if (timeOfExam - 30 > timeOfArrival) {
        console.log("Early");
    }
 
    if (difference <= 59 && difference > 0) {
        console.log(`${Math.abs(difference)} minutes before the start`);
    } else if (difference > 59 && difference > 0) {
        let minutes = difference % 60;
        let hour = Math.floor(difference / 60);
        if (minutes <= 9) {
            console.log(`${hour}:0${minutes} hours before the start`);
        } else {
            console.log(`${hour}:${minutes} hours before the start`);
        }
    } else if (difference2 <= 59) {
        console.log(`${Math.abs(difference2)} minutes after the start`)
    } else if (difference2 > 59) {
        let minutes = difference2 % 60;
        let hour = Math.floor(difference2 / 60);
        if (minutes <= 9) {
            console.log(`${hour}:0${minutes} hours after the start`);
        } else {
            console.log(`${hour}:${minutes} hours after the start`);
        }
    }
 
}
onTimeForTheExam(["9","0","8","30"]);