function hoursForProjects(input){
    let name = input[0];
    let hours = input[1];
    let projectsCount = (hours*3);
    console.log(`The architect ${name} will need ${projectsCount} hours to complete ${hours} project/s.`);
}
hoursForProjects("georgi", 4);