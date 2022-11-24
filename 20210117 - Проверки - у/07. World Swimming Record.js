//07. Световен рекорд по плуване
function worldSwimmingRecord(input){
    let worldRecord = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timePerMeter = Number(input[2]);

    let neededTime = distanceInMeters*timePerMeter;
    let addedTime = (Math.floor(distanceInMeters/15)*12.5);
    let totalTime = neededTime+addedTime;

    if(totalTime<worldRecord){
        console.log(`Yes, he succeeded! The new world record is ${(totalTime.toFixed(2))} seconds.`);
    }else{
        console.log(`No, he failed! He was ${(totalTime-worldRecord).toFixed(2)} seconds slower.`);
    }
}
//worldSwimmingRecord(["55555.67","3017","5.03"]);