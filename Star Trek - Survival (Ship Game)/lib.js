
// IF THE STARBASE HITS THE SHIP
function hittingShip() {
    ctx.strokeStyle = "#4a81d9";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(destX + 100, destY + 50);
    ctx.stroke();
}

    // IF THE STARBASE MISSES THE SHIP
    function missingShip1() {
        ctx.strokeStyle = "#4a81d9";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(100, 100);
        ctx.lineTo(destX + 200, destY - 100);
        ctx.stroke();  
    }

    // IF THE STARBASE MISSES THE SHIP (OTHER SIDE)
    function missingShip2() {
        ctx.strokeStyle = "#4a81d9";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(100, 100);
        ctx.lineTo(destX + 300, destY + 500);
        ctx.stroke();
    }






    
// If needed in the future ...
// setInterval(function() {
//     if (delayTorpedo) {
//         fireTorpedo = false;
//     }
// }, 5000);

// If torpedos are added in the future ...
// document.addEventListener("keydown", torpedoHandler);
// document.addEventListener("keyup", torpedoStopHandler);

// function torpedoHandler() {
//     if (event.code == "KeyE") {
//         fireTorpedo = true;
//     }
// }

// function torpedoStopHandler() {
//     if (event.code == "KeyE") {
//         delayTorpedo = true;
//     } else {
       
//     }
// }



    