let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 2000;
cnv.height = 2000;

character = new Image();
character.src = 'images/discoverydown.png';

female = new Image();
female.src = 'images/joannaright.png';

// Variables
let characterUp = document.getElementById("discoveryup");
let characterDown = document.getElementById("discoverydown");
let characterLeft = document.getElementById("discoveryleft");
let characterRight = document.getElementById("discoveryright");
let vulcansky = document.getElementById("vulcansky");
let redrock = document.getElementById("redrock");
let klingonship = document.getElementById("klingonship");
let laptop = document.getElementById("laptop")
let wallimg = document.getElementById("wall");
let jeff = document.getElementById("jeff");
let rachael = document.getElementById("rachael");
let jane = document.getElementById("jane");
let george = document.getElementById("george");
let frank = document.getElementById("frank");
let saru = document.getElementById("saru");
let tkuvma = document.getElementById("t'kuvma");
let tkuvma2 = document.getElementById("t'kuvma2");
let key = document.getElementById("key");
let epress = document.getElementById("epress");
let speechbubble = document.getElementById("speechbox");
let characterX = 0;
let characterY = 0;
let destW = 96;
let destH = 96;
let destX = 800;
let destY = 800;
let joanna = {
    x: 0,
    y: 0,
    w: 96,
    h: 96,
    XP: -50,
    YP: 500,
    WP: 96,
    HP: 96
}
let walkDOWN = false;
let walkUP = false;
let walkLEFT = false;
let walkRIGHT = false;
let runInterval = 100;
let run = false;
let runSpeed = 2;
let allowUp = false;
let allowDown = false;
let allowRight = false;
let allowLeft = false;
let door1Y = 550;
let door2Y = 627;
let openDoors = 0;
let highlightE = false;
let cancelE = false;
let keyE = {
    x: 0,
    y: 0,
    w: 32,
    h: 32,
    XP: destX + 17,
    YP: destY - 50,
    WP: 64,
    HP: 64
};
let transporter = {
    x: 0,
    y: 0,
    w: 32,
    h: 32,
    XP: 384,
    YP: 386,
    WP: 64,
    HP: 64
};
let NPCspeak = false;
let currentNPC;
let NPCmessage;
let NPCmessage2;
let NPCmessage3;
let NPCmessage4;
let research = document.getElementById("research");
let drawResearch = false;
let talkedRachael = false;
let transporterimg = document.getElementById("transportersheet");
let transport = false;
let awayResearch = false; // If player has research
let speakNum = 0;
let tkuvmaX = 570;
let tkuvmaY = 470;
let drawTkuvma = false;
let tkuvmaEscape = false;
let area2door = false;
let computer = false;
let keypress = "none";
let keypress2 = "none";
let keypress3 = "none";
let cpucode;
let dispenseKey = false;
let obtainKey = false;
let pickUpKey = false;
let hasKey = false;
let keyX = 415;
let keyY = 885;
let door2 = "skyblue";
let area3counter = 0;
let drawKlingonShip = false;
let klingonShipY = 500;
let drawjoanna = false;
let enterjoanna = false;
let stopJoanna = false;
let JoannaLeft = false;
let joannarunLeft = false;
let joannarunRight = false;
let talkedJoanna = false;
let health = 100;
let grabLaptop = false;
let laptopGet = false;
let drawlaptop = false;
let laptopOn = false;
let attackimg = document.getElementById("attackimg");
let torpedo = document.getElementById("torpedo");
let getAttack = false;
let swing = false;
let finishAttack = true;
let attack = {
    x: 0,
    y: 0,
    w: 32,
    h: 32,
    XP: destX,
    YP: destY,
    WP: 105,
    HP: 105
};
let cpu = {
    x: 930,
    y: 800,
    w: 70,
    h: 70
};
let camo = false;
let fireOrbs = false;
let ballRadius = 50;
let resetBalls = false;
let launchTorpedos = false;
let resetTorpedos = false;
let torpedoX = 604;
let torpedoY = 500;
let torpedoFireX = destX;
let torpedoFireY = destY;
let fireBack = false;
let returnX = false;
let returnY = false;
let hitKlingon = 0;
let addHit = false;
let klingonhealth = 10;
let battle = false;
let battlehelpMsg = false;
let researchX = 400;
let researchY = 400;
let researchW = 30;
let researchH = 30;

// BALLS
let ballX = 500;
let ballY = 800;
let ball1v = 5;

let ball2X = 700;
let ball2Y = 800;
let ball2v = 5;

let ball3X = 900;
let ball3Y = 800;
let ball3v = 5;

let orb1X = 75;
let orb1Y = 75;

let orb2X = 1192;
let orb2Y = 75;

let orb3X = 75;
let orb3Y = 942;

let orb4X = 1192;
let orb4Y = 942;


let Forb1Y = Math.random() * 10;

let Forb2Y = Math.random() * 10;

let Forb3Y = Math.random() * 10;

let Forb4Y = Math.random() * 10;

let wall = {
    x: 300,
    y: 300, 
    w: 70,
    h: 250
};

let wall2 = {
    x: 300,
    y: 700, 
    w: 70,
    h: 350
};


let area = 0;

let orbcolor = ["black", "black", "black", "black"];
let wallcolor = ["skyblue", "skyblue", "skyblue", "skyblue"];




setInterval(function(){
    if (walkDOWN || walkUP || walkLEFT || walkRIGHT) {
        if (characterX < 384) {
        characterX += 96;
        }
    }
}, runInterval);

setInterval(function(){
    if (grabLaptop) {
        grabLaptop = false;
        laptopGet = true;
    }
}, 3000);

setInterval(function(){
    if (cancelE) {
        cancelE = false;
    }
}, 60);



setInterval(function() {
    if (highlightE) {
        
        keyE.x += 32;
        
    }
}, 200);

setInterval(function() {
    if (swing) {
        
        attack.x += 32;
        
    }
}, 30);

// FINAL BOSS INTERVALS
setInterval(function() {
    if (fireOrbs) {
        resetBalls = true;
        ballRadius = 5;
    }
}, 4000);
setInterval(function() {
    if (resetBalls) {
        resetBalls = false;
    }
}, 1500);




setInterval(function() {
    if (resetTorpedos) {
        resetTorpedos = false;
        torpedoFireX = destX;
        torpedoFireY = destY;
    }
}, 100);

setInterval(function() {
        if (addHit) {
            addHit = false;
            fireBack = false;
            returnX = false;
            returnY = false;
            hitKlingon += 1;
            klingonhealth -=1;
            resetBalls = true;
        }
}, 100);

setInterval(function() {
    if (swing) {
        swing = false;
    }
}, 1000);





setInterval(function() {
    if (transport) {
        transporter.x += 32;
    }
}, 60);

setInterval(function() {
if (drawjoanna) {
        joanna.x += 96;
}
}, 100);

setInterval(function() {
    if (obtainKey) {
        pickUpKey = true;
    }
}, 2000);

requestAnimationFrame(loop);
function loop() {
    if (health > 0) {
    ctx.fillStyle = "indianred";
    ctx.drawImage(redrock, -10, -10, 2200, 1200);
    ctx.fillRect(0, 0, 1300, 300);
    keyE.XP = destX + 17;
    keyE.YP = destY - 50;
    ctx.fillStyle = "white";
    ctx.fillRect(1000, 30, 200, 50);
    ctx.strokeStyle = "black";
    ctx.strokeRect(1000, 30, 200, 50);
    ctx.fillStyle = "red";
    ctx.fillRect(1002.5, 32.5, health * 2 - 5, 45);
    ctx.fillStyle = "white";
    ctx.font = "24px Alata";
    ctx.fillText("Health: " + health + "%", 1015, 63);

    if (keyE.x > 64) {
        keyE.x = 0;
    }

    if (stopJoanna == false) {
        if (joanna.x == 384) {
            joanna.x = 0;
        }
    } else if (stopJoanna) {
            joanna.x = 0;   
    }
    

    if (talkedRachael && destX < 560 && destY < 560 && area == 1) {
        drawResearch = false;
        transport = true;
        awayResearch = true;
    }


    if (drawTkuvma) {
        ctx.drawImage(tkuvma, tkuvmaX, tkuvmaY, 105, 105);
        ctx.font = "24px Alata";
        ctx.fillStyle = "white";
        ctx.fillText("T'Kuvma", tkuvmaX + 6, tkuvmaY);
        currentNPC = "T'Kuvma";
    }

    if (area == "ship") {
        if (health < 50) {
            battlehelpMsg = true;
        }
        ctx.fillStyle = "grey";
        ctx.fillRect(0, 0, 1300, 1100);
        ctx.fillStyle = "darkgrey";
        ctx.fillRect(0, 855, 160, 160);
        ctx.fillRect(1110, 855, 160, 160);
        ctx.fillRect(0, 0, 160, 160);
        ctx.fillRect(1110, 0, 160, 160);
        ctx.fillStyle = orbcolor[0];
        ctx.beginPath();
        ctx.arc(orb1X, orb1Y, ballRadius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = orbcolor[1];
        ctx.beginPath();
        ctx.arc(orb2X, orb2Y, ballRadius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = orbcolor[2];
        ctx.beginPath();
        ctx.arc(orb3X, orb3Y, ballRadius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = orbcolor[3];
        ctx.beginPath();
        ctx.arc(orb4X, orb4Y, ballRadius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = "darkgrey";
        ctx.fillRect(525, 410, 200, 200);
        ctx.font = "24px Alata";
        ctx.fillStyle = "white";
        ctx.fillText("T'Kuvma", tkuvmaX + 6, tkuvmaY);
        currentNPC = "T'Kuvma";
        ctx.drawImage(tkuvma2, tkuvmaX, tkuvmaY, 115, 115);
        ctx.fillStyle = wallcolor[0];
        ctx.fillRect(525, 410, 10, 200);
        ctx.fillStyle = wallcolor[1];
        ctx.fillRect(720, 410, 10, 200);
        ctx.fillStyle = wallcolor[2];
        ctx.fillRect(525, 410, 200, 10);
        ctx.fillStyle = wallcolor[3];
        ctx.fillRect(525, 600, 200, 10);
        ctx.fillStyle = "lightgrey";
        ctx.fillRect(800, 30, 200, 50);
        ctx.strokeStyle = "black";
        ctx.strokeRect(800, 30, 200, 50);
        ctx.fillStyle = "red";
        ctx.fillRect(802.5, 32.5, health * 2 - 5, 45);
        ctx.fillStyle = "white";
        ctx.font = "24px Alata";
        ctx.fillText("Health: " + health + "%", 815, 63);
        if (battle) {
        ctx.fillStyle = "darkgrey";
        ctx.fillRect(478, 380, 300, 20);
        ctx.fillStyle = "maroon";
        ctx.fillRect(482, 382.5, klingonhealth * 29, 15);
        ctx.fillStyle = "white";
        ctx.fillText("BOSS HEALTH", 556, 370)
        }
        if (battlehelpMsg) {
            ctx.fillStyle = "white";
            ctx.font = "30px Alata";
            ctx.fillText("Hint: Try hitting those torpedos back without touching them!", 200, 123);
        }

        if (klingonhealth > 0) {
        if (camo == false) {
            battle = true;
        } else if (camo) {
            if (destX > 464 && destX < 696 && destY > 600 && destY < 604) {
                battle = true;
            } else if (destX > 454 && destX < 458 && destY > 330 && destY < 598) {
                battle = true;
            } else if (destX > 702 && destX < 706 && destY > 330 && destY < 598) {
                battle = true;
            } else if (destX > 464 && destX < 696 && destY > 324 && destY < 328) {
                battle = true;
            }
        }
    } 


    
        

        if (destX > 464 && destX < 696 && destY > 600 && destY < 604) {
            walkUP = false;
            wallcolor[3] = "lightblue";
        } else if (allowUp) {
            walkUP = true;
            wallcolor[3] = "skyblue";
        } else {
            wallcolor[3] = "skyblue";
        }

        if (destX > 454 && destX < 458 && destY > 330 && destY < 598) {
            walkRIGHT = false;
            wallcolor[0] = "lightblue";
        } else if (allowRight) {
            walkRIGHT = true;
            wallcolor[0] = "skyblue";
        } else {
            wallcolor[0] = "skyblue";
        }

        if (destX > 702 && destX < 706 && destY > 330 && destY < 598) {
            walkLEFT = false;
            wallcolor[1] = "lightblue";
        } else if (allowLeft) {
            walkLEFT = true;
            wallcolor[1] = "skyblue";
        } else {
            wallcolor[1] = "skyblue";
        }

        if (destX > 464 && destX < 696 && destY > 324 && destY < 328) {
            walkDOWN = false;
            wallcolor[2] = "lightblue";
        } else if (allowDown) {
            walkDOWN = true;
            wallcolor[2] = "skyblue";
        } else {
            wallcolor[2] = "skyblue";
        }


        
        
        if (battle) {
        
        if (fireOrbs) {
        
            orb1X += 8;
            orb1Y += Forb1Y;

            orb2X -= 8;
            orb2Y += Forb2Y;

            orb3X += 8;
            orb3Y -= Forb3Y;

            orb4X -= 8;
            orb4Y -= Forb4Y;
        }

        if (launchTorpedos) {
            ctx.drawImage(torpedo, torpedoX, torpedoY, 50, 50);
            if (fireBack == false) {
            if (torpedoFireX > 584 && torpedoX < torpedoFireX) {
                torpedoX += 3;
            } else if (torpedoFireX < 584 && torpedoX > torpedoFireX) {
                torpedoX -= 3;
            }

            if (torpedoFireY > 468 && torpedoY < torpedoFireY) {
                torpedoY += 4.5;
            } else if (torpedoFireY < 468 && torpedoY > torpedoFireY) {
                torpedoY -= 4.5;
            }
        }
        }

        if (resetTorpedos) {
            torpedoX = 604;
            torpedoY = 500;
        }

        console.log(swing);
        if (swing == false && torpedoX + 50 > destX && torpedoY + 50 > destY && torpedoX + 50 < destX + 75 && torpedoY + 50 < destY + 85 || swing == false && torpedoX < destX + 75 && torpedoY > destY && torpedoX > destX && torpedoY < destY + 85) {
            health -= 1;
            
        } else if (swing && torpedoX + 50 > destX && torpedoY + 50 > destY && torpedoX + 50 < destX + 75 && torpedoY + 50 < destY + 85 || swing && torpedoX < destX + 75 && torpedoY > destY && torpedoX > destX && torpedoY < destY + 85) {
            fireBack = true;
        }
        
    }
        
    }


    if (battle) {
    if (ballRadius < 50) {
        ballRadius++;
        resetBalls = true;
        
    } 
    
    if (fireOrbs || torpedoX != torpedoFireX && torpedoY != torpedoFireY && addHit == false) {
        launchTorpedos = true;
        if (torpedoFireX > 584 && torpedoX > torpedoFireX && torpedoFireY == torpedoY) {
            launchTorpedos = false;
            resetTorpedos = true;
        } else if (torpedoFireX < 584 && torpedoX < torpedoFireX && torpedoFireY == torpedoY) {
            launchTorpedos = false;
            resetTorpedos = true;
        } else if (torpedoFireY > 468 && torpedoY > torpedoFireY) {
            launchTorpedos = false;
            resetTorpedos = true;
        } else if (torpedoFireY < 468 && torpedoY < torpedoFireY) {
            launchTorpedos = false;
            resetTorpedos = true;
        }
        
    } else if (torpedoX == torpedoFireX && torpedoY == torpedoFireY || addHit) {
        launchTorpedos = false;
        resetTorpedos = true;
        
        
    }

    

    
    if (fireBack) {
        if (torpedoX > 604) {
            torpedoX -= 3;
        } else if (torpedoX < 604) {
            torpedoX += 3;
        } else if (torpedoX == 604 && fireBack) {
            returnX = true;
        }

        if (torpedoY > 500) {
            torpedoY -= 3;
        } else if (torpedoY < 496) {
            torpedoY += 3;
        } else if (torpedoY > 496 && fireBack) {
            returnY = true;
        }
    }

    if (returnX && returnY) {
        addHit = true;
        
        launchTorpedos = false;
    } 

    
    
    

    if (orb1X + ballRadius > destX + 15 && orb1X < destX + 75 && orb1Y + ballRadius > destY && orb1Y < destY + 85) {
        health--;
        orbcolor[0] = "red";
    } else if (orb2X + ballRadius > destX + 15 && orb2X < destX + 75 && orb2Y + ballRadius > destY && orb2Y < destY + 85) {
        health--;
        orbcolor[1] = "red";
    } else if (orb3X + ballRadius > destX + 15 && orb3X < destX + 75 && orb3Y + ballRadius > destY && orb3Y < destY + 85) {
        health--;
        orbcolor[2] = "red";
    } else if (orb4X + ballRadius > destX + 15 && orb4X < destX + 75 && orb4Y + ballRadius > destY && orb4Y < destY + 85) {
        health--;
        orbcolor[3] = "red";
    } else {
        orbcolor[0] = "black";
        orbcolor[1] = "black";
        orbcolor[2] = "black";
        orbcolor[3] = "black";
    }

    
    // work here
    if (resetBalls) {
        

        orb1X = 75;
        orb1Y = 75;

        orb2X = 1192;
        orb2Y = 75;

        orb3X = 75;
        orb3Y = 942;

        orb4X = 1192;
        orb4Y = 942;
    }
    
    if (ballRadius == 50 && orb1X == 75) {
    fireOrbs = true;
    }
    }
} else {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1500, 1500);
    ctx.fillStyle = "white";
    ctx.font = "40px Alata";
    ctx.fillText("You Died . . .", 540, 300);
    ctx.font = "30px Alata";
}


    
if (area == "ship") {
    if (transport) {
        
        
        
        if (transporter.x > 300) {
            drawResearch = true;
        }

        
    }
}

    
    
    if (area == 0) {
        if (awayResearch == false) {
        ctx.drawImage(jeff, 900, 850);
        ctx.font = "24px Alata";
        ctx.fillStyle = "white";
        ctx.fillText("Jeff", 926, 850);
        currentNPC = "Jeff";
        } else if (awayResearch && tkuvmaEscape == false) {
        drawTkuvma = true;
        if (cancelE == false && speakNum < 1 && currentNPC == "T'Kuvma") {
            if (NPCspeak) {
            speakNum++;
            }
            NPCspeak = true;
        } else if (speakNum >= 1 && currentNPC == "T'Kuvma" && NPCspeak == false) {
            NPCspeak = false;
            if (tkuvmaX > -60) {
                tkuvmaX -= 5;
            } else {
                drawTkuvma = false;
                tkuvmaEscape = true;
            }
            
        }
    }
    }

    if (pickUpKey) {
        hasKey = true;
    }

    if (area == 1) {
    ctx.fillStyle = "lightgrey";
    ctx.fillRect(370, 360, 850, 600);
    ctx.fillRect(wall.x - 20, 550, 90, 150);
    ctx.fillStyle = "grey";
    ctx.fillRect(wall.x, wall.y, wall.w, wall.h);
    ctx.fillRect(wall2.x, wall2.y, wall2.w, wall2.h);
    ctx.fillRect(wall.x, wall.y, 980, wall.w - 10)
    ctx.fillRect(wall2.x, 960, 980, wall.w - 10)
    ctx.fillRect(1220, wall.y, 60, 800)
    ctx.fillStyle = "skyblue";
    ctx.fillRect(370, door1Y, 10, 73);
    ctx.fillRect(370, door2Y, 10, 73);
    ctx.drawImage(rachael, 1000, 400);
    ctx.fillStyle = "darkgray";
    ctx.fillRect(500, 360, 120, 10);
    ctx.fillStyle = "white"
    ctx.font = "24px Alata";
    ctx.fillText("Rachael", 1000, 400);
    currentNPC = "Rachael";
    ctx.fillStyle = "#8f8f8f";
    ctx.fillRect(490, 900, 70, 60);
    ctx.fillRect(387, 820, 80, 30);
    ctx.fillRect(370, 840, 120, 120);
    ctx.fillStyle = "yellowgreen";
    ctx.fillRect(378.5, 850, 100, 100);
    if (dispenseKey) {
        ctx.drawImage(key, keyX, keyY);
        if (destY > 780 && destX > 340 && destX < 428) {
            obtainKey = true;
        }
    }
    
    
    

    
    if (obtainKey) {
        keyX = destX + 35;
        keyY = destY - 30;
    }
    if (destX > 430 && destX < 588 && destY < 374 && cancelE == false) {
        computer = true;
    } else {
        computer = false;
    }
    
    
}

    if (hasKey) {
        area2door = true;
    }

    if (area == 2) {
    ctx.fillStyle = "lightgrey";
    ctx.fillRect(0, 300, 800, 730);
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 300, 20, 300);
    ctx.fillRect(0, 750, 20, 300);
    ctx.fillStyle = door2;
    ctx.fillRect(0, 600, 20, 150);
    if (destX <= 0 && destY < 592 || destX <= 0 && destY > 720) {
        walkLEFT = false;
    } else if (destX <= 0 && destY > 592 && destY < 720) {
        if (area2door) {
            door2 = "lightblue";
            if (allowLeft) {
                walkLEFT = true;
            }
        } else if (area2door == false) {
            walkLEFT = false;
            ctx.font = "24px Alata";
            ctx.fillStyle = "white";
            ctx.fillText("This door needs a key!", 30, 620);
        } 
    }
}

    if (area == 3) {
    ctx.fillStyle = "lightgrey";
    ctx.fillRect(452, 300, 800, 730);
    ctx.fillStyle = "grey";
    ctx.fillRect(1252, 300, 20, 300);
    ctx.fillRect(1252, 750, 20, 300);
    ctx.fillStyle = door2;
    ctx.fillRect(1252, 600, 20, 150)
    ctx.drawImage(saru, 600, 500);
    ctx.fillStyle = "white";
    ctx.font = "24px Alata";
    ctx.fillText("Saru", 622, 500);

    currentNPC = "Saru";
    if (destX >= 1180 && destY < 592 || destX >= 1180 && destY > 720) {
        walkRIGHT = false;
    } else if (destX > 1180 && destY > 592 && destY < 720) {
        if (area2door) {
            door2 = "lightblue";
        } else if (area2door == false) {
            walkRIGHT = false;
        }
        
    }
    }


    if (drawjoanna) {
        ctx.fillStyle = "white";
        ctx.font = "30px Alata";
        ctx.drawImage(female, joanna.x, joanna.y, joanna.w, joanna.h, joanna.XP, joanna.YP, joanna.WP, joanna.HP);
        ctx.fillText("Joanna", joanna.XP, joanna.YP);
    }
    
    if (joannarunLeft) {
        joanna.XP -= 3;
    }
    
    if (joannarunRight) {
        joanna.XP += 3;
    }

    

    if (area == 4) {
        drawKlingonShip = true;
        currentNPC = "Joanna";
        if (klingonShipY > -500) {
            klingonShipY -= 7;
        } else if (klingonShipY <= -500 && talkedJoanna == false) {
            drawKlingonShip = false;
            drawjoanna = true;
        }
        if (joanna.XP < 500 && drawjoanna && JoannaLeft == false && talkedJoanna == false) {
            joannarunRight = true;
            female.src = "images/joannaright.png";
        } else if (joanna.XP >= 500) {
            female.src = "images/joanna.png";
            stopJoanna = true;
            joannarunRight = false;
            
        }

        if (talkedJoanna) {
            joannarunRight = false;
        }

        if (cancelE && currentNPC == "Joanna") {
            JoannaLeft = true;
            talkedJoanna = true;
        }
       

        if (JoannaLeft) {
            if (joanna.XP > -60) {
            female.src = "images/joannaleft.png";
            stopJoanna = false;
            joannarunLeft = true;
            } else {
                drawjoanna = false;
                joanna.XP = 1240;
                joannarunLeft = false;
            }
        }
    }
    

    if (area == 5) {

        if (laptopGet == false) {
            drawlaptop = true;
        } else if (laptopGet) {
            drawlaptop = false;
        }
        drawjoanna = true;
        if (joanna.XP > 500) {
            joannarunLeft = true;
        } else {
            JoannaLeft = false;
            stopJoanna = true;
            female.src = "images/joanna.png";
            joannarunLeft = false;
           
            
        }

    
        

        ctx.fillStyle = "lightgrey";
        ctx.fillRect(200, 700, 50, 330);
        ctx.fillRect(1000, 700, 50, 330);
        ctx.fillRect(400, 700, 600, 30);
        ctx.fillStyle = "grey";
        ctx.fillRect(250, 730, 750, 550);
        ctx.fillRect(250, 650, 150, 150);


        ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(ballX, ballY, 20, 0, 2 * Math.PI);
    ctx.fill();
    ballY = ballY + ball1v;

    if (ballY < 1000) {
        ball1v = ball1v + 0.2;
    } else if (ballY > 1000) {
        ball1v = -10;
    } else if (ballY == 50) {
        ball1v = 10;
    } 

   
    ctx.beginPath();
    ctx.arc(ball2X, ball2Y, 20, 0, 2 * Math.PI);
    ctx.fill();
    ball2Y = ball2Y + ball2v;
    if (ball2Y < 1000) {
        ball2v = ball2v + 0.2;
    } else if (ball2Y > 1000) {
        ball2v = -10;
    } else if (ball2Y == 50) {
        ball2v = 10;
    } 

    ctx.beginPath();
    ctx.arc(ball3X, ball3Y, 20, 0, 2 * Math.PI);
    ctx.fill();
    ball3Y = ball3Y + ball3v;

    if (ball3Y < 1000) {
        ball3v = ball3v + 0.2;
    } else if (ball3Y > 1000) {
        ball3v = -10;
    } else if (ball3Y == 50) {
        ball3v = 10;
    } 


    if (drawlaptop) {
    ctx.drawImage(laptop, cpu.x, cpu.y, cpu.w, cpu.h);
    }
   
    
    if (destX > ballX - 90 && destX < ballX - 10 && destY > ballY - 50 && destY < ballY) {
        health -= 2;
    } else if (destX > ball2X - 90 && destX < ball2X - 10 && destY > ball2Y - 50 && destY < ball2Y) {
        health -= 2;
    } else if (destX > ball3X - 90 && destX < ball3X - 10 && destY > ball3Y - 50 && destY < ball3Y) {
        health -= 2;
    }

    if (destX > 880 && destX < 950 && destY > 722 && destY < 840) {
        grabLaptop = true;
    }
    
    
}

if (klingonhealth == 0) {
    battle = false;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1500, 1500);
    ctx.fillStyle = "white";
    ctx.font = "40px Alata";
    ctx.fillText("Congratulations, you've defeated T'Kuvma!", 250, 300);
    ctx.font = "30px Alata";
    if (health > 50) {
    ctx.fillText("You survived with still " + health + " health remaining!!", 320, 350);
    } else if (health < 50) {
    ctx.fillText("You survived with only " + health + " health remaining!!", 320, 350);
    }
    transport = true;

    transporter.WP = 100;
    transporter.HP = 100;
    transporter.XP = 550;
    researchX = 570;
    researchW = 50;
    researchH = 50;
    ctx.font = "20px Alata";
    ctx.fillText("You recovered the research and saved the station!", 370, 600);
    
    
    
    
}





    if (area == 6) {
        drawjoanna = false;
        ctx.drawImage(george, 800, 600);
        ctx.drawImage(frank, 550, 600);
        ctx.drawImage(jane, 300, 600);
        if (destX < 440) {
            currentNPC = "Jane";
        } else if (destX < 684) {
            currentNPC = "Frank";
        } else {
            currentNPC = "George";
        }
    }

    if (grabLaptop) {
        cpu.x = destX + 15;
        cpu.y = destY - 45;
    }
    if (drawKlingonShip) {
        ctx.drawImage(klingonship, 50, klingonShipY);
    }
    
    

    ctx.drawImage(character, characterX, characterY, 96, 96, destX, destY, destW, destH);
    if (talkedRachael && awayResearch == false) {
        drawResearch = true;
    }

    if (destX > 250 && destX < 400 && area == 1) {
        openDoors = 1;
    } else {
        openDoors = 2
    }

    if (getAttack) {
        if (swing) {
            attack.XP = destX;
            attack.YP = destY;
            ctx.drawImage(attackimg, attack.x, attack.y, attack.w, attack.h, attack.XP, attack.YP, attack.WP, attack.HP);
        }
    }
    

    // CHARACTER INTERACTION
    if (area == 0 && destX >= 846 && destX <= 952 && destY >= 760 && destY <= 930 && NPCspeak == false) {
        highlightE = true;
    } else if (area == 1 && destX > 944 && destX < 1052 && destY < 478 && destY > 350 && NPCspeak == false) {
        highlightE = true;
    } else if (NPCspeak) {
        highlightE = false;
    } else if (area == 3 && destX > 550 && destX < 640 && destY > 424 && destY < 584) {
        highlightE = true;
    } else if (area == 4 && destX > 456 && destX < 552 && destY > 420 && destY < 582){
        highlightE = true;
    } else if (area == 5 && destX > 448 && destX < 548 && destY > 420 && destY < 584) {
        highlightE = true;
    } else if (area == 6 && destX > 242 && destX < 362 && destY > 506 && destY < 688) {
        highlightE = true;
    } else if (area == 6 && destX > 498 && destX < 602 && destY > 506 && destY < 688) {
        highlightE = true;
    } else if (area == 6 && destX > 746 && destX < 854 && destY > 506 && destY < 688) {
        highlightE = true;
    } else {
        highlightE = false;
    }

    if (NPCspeak && cancelE) {
        NPCspeak = false;
    }


    // area == 1 && destX > 944 && destX < 1052 && destY > 478 && destY < 350 && NPCspeak == false

    if (openDoors == 1) {
        if (door1Y > 478 && door2Y < 700) {
            door1Y -= 3;
            door2Y += 3;
        }
    } else if (openDoors == 2) {
        if (door1Y != 550 && door2Y != 627) {
            door1Y += 3;
            door2Y -= 3;
        }
    }

    if (area == 0 && destX > 1240) {
        area = 1;
        destX = -60;
    } else if (area == 1 && destX < -60) {
        area = 0;
        destX = 1240;
    } else if (area == 0 && destX < -60 && awayResearch) {
        area = 2;
        destX = 1240;
    } else if (area == 2 && destX > 1240) {
        area = 0;
        destX = -60;
    } else if (area == 2 && destX < -60) {
        destX = 1240;
        area = 3;
    } else if (area == 3 && destX > 1240) {
        destX = -60;
        area = 2;
    } else if (area == 3 && destX < -60) {
        destX = 1240;
        area3counter++;
        area = 4;
    } else if (area == 4 && destX > 1240) {
        destX = -60;
        area = 3;
    } else if (area == 4 && destX < -60) {
        area = 5;
        destX = 1240;
    } else if (area == 5 && destX > 1240) {
        area = 4;
        destX = -60;
    } else if (area == 5 && destX < -60) {
        area = 6;
        destX = 1240;
    } else if (area == 6 && destX > 1240) {
        area = 5;
        destX = -60;
    }
    
    

   

    

    // Collision Detection for Area 1
    if (area == 1) {
        
    if (destX >= wall.x - wall.w && destX < wall.x && destY < wall.y + wall.h - 6) {
        walkRIGHT = false;
    } else if (destX >= wall2.x - wall2.w && destX < wall2.x && destY > wall2.y - 80) {
        walkRIGHT = false;
    } else if (destX > 1148.5) {
        walkRIGHT = false;
    } else if (allowRight) {
        walkRIGHT = true;
    }

    if (destX <= wall.x + 44 && destX > wall.x - wall.w && destY < wall.y + wall.h - 6) {
        walkLEFT = false
    } else if (destX <= wall2.x + 44 && destX > wall2.x - wall2.w && destY > wall2.y - 83) {
        walkLEFT = false;
    } else if (allowLeft) {
        walkLEFT = true;
    }

    if (destX > wall.x - wall.w && destX < wall.x + 40 && destY <= wall.y + wall.h - 6) {
        walkUP = false;
    } else if (destX > wall.x && destY < 353) {
        walkUP = false;
    } else if (allowUp) {
        walkUP = true;
    }
   


    if (destX > wall2.x - wall2.w && destX < wall2.x + 35 && destY >= wall2.y - 85) {
        walkDOWN = false;
    } else if (destX > wall.x && destY > 875) {
        walkDOWN = false;
    } else if (allowDown) {
        walkDOWN = true;
    }

}



    // COLLISION DETECTION FOR AREA 5 (what a headache)
    if (area == 5) {
        if (destX > 338 && destX < 994 && destY >= 616 && destY < 704 || destX > 136 && destX < 214 && destY >= 616 && destY < 704) {
            walkDOWN = false;
            
        } else if (allowDown) {
            walkDOWN = true;
        }

        if (destX > 338 && destX < 994 && destY <= 722 && destY > 705) {
            walkUP = false;
        } else if (allowUp) {
            walkUP = true;
        }

        if (destX >= 330 && destX < 332 && destY < 720 && destY > 622 || destX >= 128 && destX < 135 && destY < 1000 && destY > 622 || destX > 930 && destX < 945 && destY < 1000 && destY > 718) {
            walkRIGHT = false;
        } else if (allowRight) {
            walkRIGHT = true;
        }

        if (destX > 1022 && destX <= 1024 && destY < 1000 && destY > 624 || destX > 218 && destX <= 224 && destY < 1000 && destY > 624) {
            walkLEFT = false;
        } else if (allowLeft) {
            walkLEFT = true;
        }
        
    }




    if (characterX > 380) {
        characterX = 0;
    }


    if (walkDOWN) {
        destY += runSpeed;
    } 
    
    if (walkUP) {
        if (area == "ship") {
        destY -= runSpeed;
        } else {
            if (destY > 242) {
                destY -= runSpeed;
            }
        }
    }

    if (walkLEFT) {
        destX -= runSpeed;
    }

    if (walkRIGHT) {
        destX += runSpeed;
    }
    if (NPCspeak) {
        ctx.drawImage(speechbubble, 10, 750, 500, 300);
        ctx.fillStyle = "black";
        ctx.font = "30px Alata";
        ctx.fillText(currentNPC + " says...", 50, 825);
        ctx.font = "24px Alata";
        ctx.fillText(NPCmessage, 50, 855);
        ctx.fillText(NPCmessage2, 50, 880);
        ctx.fillText(NPCmessage3, 50, 905);
        ctx.fillText(NPCmessage4, 50, 930);
        ctx.font = "18px Alata";
        ctx.fillText("Press 'Enter' to Close", 306, 954);
        if (currentNPC == "Jeff") {
        NPCmessage = "HELP!! Something attacked my ";
        NPCmessage2 = "colleages at the research station ";
        NPCmessage3 = "over there, to the right! I just barely";
        NPCmessage4 = "escaped!";
        } else if (currentNPC == "Rachael") {
        NPCmessage = "help me . . ."
        NPCmessage2 = "something . . attacked . . us"
        NPCmessage3 = "take the research . . . "
        NPCmessage4 = "don't let them have it . . . "
        talkedRachael = true;
        } else if (currentNPC == "T'Kuvma") {
        NPCmessage = "Foolish human!";
        NPCmessage2 = "Did you think we would let you";
        NPCmessage3 = "take OUR research!?"
        NPCmessage4 = "If you want it so bad, come get it . . . "
        } else if (currentNPC == "Saru") {
        NPCmessage = "I bet your tired of walking!";
        NPCmessage2 = "I've never been past that door, but";
        NPCmessage3 = "there are tales of how the word 'y e e'";
        NPCmessage4 = "can make you as fast as me!";
        } else if (currentNPC == "Joanna") {
            if (area == 4) {
        NPCmessage = "Crap! Uh . . . who are you?";
        NPCmessage2 = " . . Federation? Well I guess you're";
        NPCmessage3 = "qualified enough. I work for Section 31.";
        NPCmessage4 = "I've been hunting T'Kuvma. Follow me.";
        } else if (area == 5) {
            if (laptopGet == false) {
        NPCmessage = "Alright, Federation.";
        NPCmessage2 = "Just so I know I can trust you, ";
        NPCmessage3 = "I need you to pass this test.";
        NPCmessage4 = "Go and grab that computer.";
        } else if (laptopGet) {
            NPCmessage = "Great job, Federation! ";
            NPCmessage2 = "Press 'Q' at any time to use this";
            NPCmessage3 = "triinput computer. Go on your quest,";
            NPCmessage4 = "and I'm sure we'll meet again soon.";        
        }

            }
        } else if (currentNPC == "George") {
        NPCmessage = "So I hear you're looking for T'Kuvma.";
        NPCmessage2 = "I wish I could help you find him, ";
        NPCmessage3 = "but all I can do is tell you that";
        NPCmessage4 = "the word 'c a m' means something? ";
        } else if (currentNPC == "Frank") {
        NPCmessage = "You seem a little defenseless...";
        NPCmessage2 = "...some lady wearing a black suit";
        NPCmessage3 = "told me to tell you that the word ";
        NPCmessage4 = "'k n i' gives you something.";
        } else if (currentNPC == "Jane") {
        NPCmessage = "Make sure you talk to the boys first ";
        NPCmessage2 = "before using the word 'f l y', ";
        NPCmessage3 = "because it'll take you to T'Kuvma.";
        NPCmessage4 = "That's what that lady in black said.";
        }
    }

    if (computer) {
        laptopOn = true;
        ctx.fillStyle = "white";
        ctx.fillRect(10, 10, 400, 200);
        ctx.font = "48px Alata";
        ctx.fillStyle = "black";
        if (keypress !== "none") {
        ctx.fillText(keypress, 50, 120);
        }  
        
        if (keypress2 !== "none") {
        ctx.fillText(keypress2, 100, 120);
        } 
        
        if (keypress3 !== "none") {
        ctx.fillText(keypress3, 150, 120);
        }
        ctx.font = "20px Alata";
        ctx.fillText("Press 'Enter' to reset digits/input code", 20, 195);
        ctx.fillText("TRIINPUT COMPUTER", 20, 35);
        if (cpucode == "key") {
            ctx.fillStyle = "lightgreen";
            ctx.fillText("Key Dispensed!", 20, 60);
            ctx.fillStyle = "black";
            dispenseKey = true;
        } else if (cpucode == "yee") {
            ctx.fillStyle = "lightgreen";
            ctx.fillText("Stamina Increased!", 20, 60);
            ctx.fillStyle = "black";
        } else if (cpucode == "cam") {
            ctx.fillStyle = "lightgreen";
            ctx.fillText("Redeemed Camoflage!", 20, 60);
            ctx.fillStyle = "black";
        } else if (cpucode == "kni") {
            ctx.fillStyle = "lightgreen";
            ctx.fillText("Redeemed Burst Attack! (Press 'Space')", 20, 60);
            ctx.fillStyle = "black";
        }
    } else {
        laptopOn = false;
    }

    if (drawResearch) {
        ctx.drawImage(research, researchX, researchY, researchH, researchW);
        }

        if (cpucode == "key" && pickUpKey == false) {
            dispenseKey = true;
        } else if (pickUpKey) {
            dispenseKey = false;
        }
        
        if (cpucode == "yee") {
            runSpeed = 4;
        }


        if (cpucode == "cam") {
            camo = true;
        }
        
        if (cpucode == "kni") {
            getAttack = true;
        }

        if (cpucode == "fly") {
            area = "ship";
        }
    
        if (transport) {
            ctx.drawImage(transporterimg, transporter.x, transporter.y, transporter.w, transporter.h, transporter.XP, transporter.YP, transporter.WP, transporter.HP);
            }
        

    if (highlightE) {
        ctx.drawImage(epress, keyE.x, keyE.y, keyE.w, keyE.h, keyE.XP, keyE.YP, keyE.WP, keyE.HP);
    } 
    requestAnimationFrame(loop);
}


document.addEventListener("keydown", function(event) {
    if (keypress == "none" && keypress2 == "none" && keypress3 == "none") {
    keypress = event.key; 
    } else if (keypress != "none" && keypress2 == "none" && keypress3 == "none") {
    keypress2 = event.key;
    } else if (keypress != "none" && keypress2 != "none" && keypress3 == "none") {
    keypress3 = event.key;
    }
})

// MOVEMENT
document.addEventListener("keydown", walkDown);
document.addEventListener("keyup", walkDownStop);
function walkDown() {
    if (event.code == "ArrowDown" || event.code == "KeyS") {
        walkDOWN = true;   
        allowDown = true;
        if (camo == false) {
        character.src = "images/discoverydown.png";
        } else {
        character.src = "images/klingondown.png";
        }
    }
}

function walkDownStop() {
    if (event.code == "ArrowDown" || event.code == "KeyS") {
        walkDOWN = false;   
        allowDown = false;
    }
}

document.addEventListener("keydown", walkUp);
document.addEventListener("keyup", walkUpStop);
function walkUp() {
    if (event.code == "ArrowUp" || event.code == "KeyW") {
        walkUP = true;  
        allowUp = true;
        if (camo == false) {
        character.src = "images/discoveryup.png";
        } else {
        character.src = "images/klingonup.png";
        }
    }
}

function walkUpStop() {
    if (event.code == "ArrowUp" || event.code == "KeyW") {
        walkUP = false;   
        allowUp = false;
    }
}

document.addEventListener("keydown", walkLeft);
document.addEventListener("keyup", walkLeftStop);
function walkLeft() {
    if (event.code == "ArrowLeft" || event.code == "KeyA") {
        walkLEFT = true;   
        allowLeft = true;
        if (camo == false) {
        character.src = "images/discoveryleft.png";
        } else {
        character.src = "images/klingonleft.png";
        }
    }
}

function walkLeftStop() {
    if (event.code == "ArrowLeft" || event.code == "KeyA") {
        walkLEFT = false;   
        allowLeft = false;
    }
}

document.addEventListener("keydown", walkRight);
document.addEventListener("keyup", walkRightStop);
function walkRight() {
    if (event.code == "ArrowRight" || event.code == "KeyD") {
        walkRIGHT = true;   
        allowRight = true;
        if (camo == false) {
        character.src = "images/discoveryright.png";
        } else {
        character.src = "images/klingonright.png";
        }
    }
}

function walkRightStop() {
    if (event.code == "ArrowRight" || event.code == "KeyD") {
        walkRIGHT = false;
        allowRight = false;
    }
}

document.addEventListener("keydown", EisPressed)

function EisPressed () {
    if (event.code == "KeyE") {
        if (highlightE) {
            NPCspeak = true;
            cancelE = false;
        }
    }
}

document.addEventListener("keydown", EnterIsPressed);

function EnterIsPressed() {
    if (event.code == "Enter") {
        cancelE = true;
        if (computer) {
            cpucode = keypress + keypress2 + keypress3;
            keypress = "none";
            keypress2 = "none";
            keypress3 = "none";
        }
        
    }
    
}

document.addEventListener("keydown", computerListener);
function computerListener() {
    if (event.code == "KeyQ" && laptopGet) {
        if (laptopOn == false) {
            computer = true;
        } 
        
        if (laptopOn) {
            computer = false;
        }
    }
}

document.addEventListener("keydown", attackHandler);
function attackHandler() {
    if (event.code == "Space") {
        if (finishAttack) {
        if (getAttack) {
        swing = true;
        attack.x = 0;
        }
        } else if (finishAttack == false) {
            // nothing
        }
    }
}