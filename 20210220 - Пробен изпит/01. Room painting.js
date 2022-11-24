function roomPainting(input) {

    let paintBoxes = Number(input[0]);
    let wallpaperRolls = Number(input[1]);
    let glovesPrice = Number(input[2]);
    let brushPrice = Number(input[3]);

    let paintBoxesTotal = 21.50 * paintBoxes;
    let wallpaperRollsTotal = 5.20 * wallpaperRolls;
    let glovesTotal = (Math.ceil(wallpaperRolls * 0.35)) * glovesPrice;
    let brushesTotal = (Math.floor(paintBoxes * 0.48)) * brushPrice;
    let total = (paintBoxesTotal + wallpaperRollsTotal + glovesTotal + brushesTotal) / 15;

    console.log(`This delivery will cost ${total.toFixed(2)} lv.`);

}
//roomPainting([ '10','8','2.2','5']);
roomPainting(['21', '18', '5', '2.2']);