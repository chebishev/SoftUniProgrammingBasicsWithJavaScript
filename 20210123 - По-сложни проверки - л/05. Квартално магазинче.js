function smallShop(input){
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);

    if (town === "Sofia"){
        switch(product){
            case "coffee": console.log(quantity*0.5); break;
            case "water": console.log(quantity*0.8); break;
            case "beer": console.log(quantity*1.2); break;
            case "sweets": console.log(quantity*1.45); break;
            case "peanuts": console.log(quantity*1.6); break;
               }
    }
    if(town === "Plovdiv"){
        switch(product){
            case "coffee": console.log(quantity*0.40); break;
            case "water": console.log(quantity*0.70); break;
            case "beer": console.log(quantity*1.15); break;
            case "sweets": console.log(quantity*1.30); break;
            case "peanuts": console.log(quantity*1.50); break;
               }
    }
    if(town === "Varna"){
        switch(product){
            case "coffee": console.log(quantity*0.45); break;
            case "water": console.log(quantity*0.70); break;
            case "beer": console.log(quantity*1.10); break;
            case "sweets": console.log(quantity*1.35); break;
            case "peanuts": console.log(quantity*1.55); break;
               }
    }
}
// smallShop(["sweets",
// "Sofia",
// "2.23"])
// ;

