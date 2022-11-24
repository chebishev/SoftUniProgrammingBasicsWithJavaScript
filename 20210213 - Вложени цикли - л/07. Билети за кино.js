function cinemaTickets(input) {

    let index = 0;
    let command = input[index];
    index++;
    let totalTickets = 0;
    let studentTickets = 0;
    let standartTickets = 0;
    let kidsTickets = 0;

    while (command !== "Finish") {
        let name = command;
        let freeSpace = Number(input[index]);
        index++;
        let type = input[index];
        index++;
        let tempTicket = 0;

        while (type !== "End") {

            switch (type) {

                case "standard":
                    standartTickets++;
                    totalTickets++;
                    break;

                case "student":
                    studentTickets++;
                    totalTickets++;
                    break;

                case "kid":
                    kidsTickets++;
                    totalTickets++;
                    break;
            }
            tempTicket++;
            if (freeSpace <= tempTicket) {
                break;
            }
            type = input[index];
            index++;
        }

        console.log(`${name} - ${(tempTicket / freeSpace * 100).toFixed(2)}% full.`);
        command = input[index];
        index++;

    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(studentTickets / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standartTickets / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidsTickets / totalTickets * 100).toFixed(2)}% kids tickets.`);

}
cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);