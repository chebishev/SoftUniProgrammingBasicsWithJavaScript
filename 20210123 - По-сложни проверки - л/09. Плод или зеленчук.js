function fruitOrVegetable(input){
    let product = input[0];

    switch(product){
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "grapes":
        case "lemon":
            console.log("fruit");
            break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot":
            console.log("vegetable");
            break;
        default: 
        console.log("unknown");
    }       
}
fruitOrVegetable(["water"]);