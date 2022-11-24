function fitnessCentre(input) {

    let index = 0;
    let visitors = Number(input[index]);
    index++;

    let backCounter = 0
    let chestCounter = 0;
    let legsCounter = 0;
    let absCounter = 0;
    let proteinShakeCounter = 0;
    let proteinBarCounter = 0;

    for(let i=0;i<visitors;i++){
        let activity = input[index];
        index++;
        switch(activity){
            case "Back": backCounter++;
                break;

            case "Chest": chestCounter++;
                break;
            
            case "Legs": legsCounter++;
                break;
            
            case "Abs": absCounter++;
                break;
            
            case "Protein shake": proteinShakeCounter++;
                break;
            
            case "Protein bar": proteinBarCounter++;
                    break;
        }
    }
    
    console.log(`${backCounter} - back`);
    console.log(`${chestCounter} - chest`);
    console.log(`${legsCounter} - legs`);
    console.log(`${absCounter} - abs`);
    console.log(`${proteinShakeCounter} - protein shake`);
    console.log(`${proteinBarCounter} - protein bar`);
    let totalWorkingOut = backCounter+chestCounter+legsCounter+absCounter;
    let percentWorkingOut = (totalWorkingOut/visitors)*100;
    console.log(`${percentWorkingOut.toFixed(2)}% - work out`);
    let totalProtein = proteinBarCounter+proteinShakeCounter;
    let percentProtein = (totalProtein/visitors)*100;
    console.log(`${percentProtein.toFixed(2)}% - protein`);
}
fitnessCentre(["10","Back","Chest","Legs","Abs","Protein shake","Protein bar","Protein shake","Protein bar","Legs","Abs"]);