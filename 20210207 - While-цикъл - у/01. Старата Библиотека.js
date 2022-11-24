function oldBooks(input) {
    let targetBook = input[0];

    //commented code, because of the speed of the program.
    
    // let command = input[1];
    // let index = 2;
    // let counter = 0;
    // while (command !== "No More Books") {
    //     counter++;
    //     command = input[index];
    //     index++;
    //     if (command === targetBook) {
    //         console.log(`You checked ${counter} books and found it.`);
    //         break;
    //     }
    // }
    // if (command === "No More Books") {
    //     console.log(`The book you search is not here!`);
    //     console.log(`You checked ${counter} books.`);
    // }

    let index = 1;
    let bookIsFound = false;
    let nextBookName = input[index];
    while(nextBookName !== "No More Books"){
        if(nextBookName === targetBook){
            bookIsFound = true;
            break;
        }
        index++;
        nextBookName = input[index];
    }
    if(bookIsFound === false){
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index-1} books.`);
    }else{
        console.log(`You checked ${index-1} books and found it.`);
    }
}
//oldBooks(["Troy","Stronger","Life Style","Troy"]);
//oldBooks(["The Spot","Hunger Games","Harry Potter","Torronto","Spotify","No More Books"]);
oldBooks(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]);