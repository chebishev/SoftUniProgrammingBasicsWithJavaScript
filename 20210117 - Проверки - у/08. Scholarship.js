//08. Стипендии
function scholarship(input){

    let incomeInLv = Number(input[0]);
    let averageGrades = Number(input[1]);
    let minimumWage = Number(input[2]);

    let isSocialEligible = false;
    let isExcellentEligible = false;
    let isEligible = false;

    let excellentScholarship = averageGrades*25;
    let socialScholarship = minimumWage*0.35;
    let scholarship = 0;

    if((incomeInLv>=minimumWage)&&(averageGrades<5.50)){
        isEligible = false;
        console.log("You cannot get a scholarship!");
    }else if((incomeInLv<minimumWage) && (averageGrades>=4.50)){
        isSocialEligible = true;
    }else if(averageGrades>=5.50){
        isExcellentEligible = true;
    }

    if((isSocialEligible)&&(isExcellentEligible)){
        isEligibe = true;
    }
    if((isEligibe)&&(excellentScholarship>=socialScholarship)){
        console.log(`You get a scholarship for excellent results ${Math.floor(scholarship)} BGN`);
    }else

    if((isSocialEligible)&&(averageGrades>=5.50)){

        isExcellentEligible = true;

    }else if((isSocialEligible)&&(averageGrades<5.50)){
        console.log(`You get a Social scholarship ${Math.floor(minimumWage*0.35)} BGN`);   
    }

}
scholarship(["300.00",
"5.65",
"420.00"])
;