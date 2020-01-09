// CANVAS SETUP
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
let backgroundimage = document.getElementById("backgroundimage");
cnv.width = 1500;
cnv.height = 1100;

// VARIABLES
let enterprise = document.getElementById("enterprise");
let xindiship = document.getElementById("xindiship");
let enterpriseA = document.getElementById("enterpriseA");
let defiant = document.getElementById("defiant");
let discovery = document.getElementById("discovery");
let enterpriseE = document.getElementById("enterpriseE");
let starbase = document.getElementById("starbase");
let starbaseTXT = document.getElementById("starbase375txt")
let anomaly = document.getElementById("anomaly");
let lcars = document.getElementById("lcars");
let shoplcars = document.getElementById("shoplcars");
let creditslogo = document.getElementById("credits");
let shoplogo = document.getElementById("shoplogo");
let torpedo = document.getElementById("torpedo");
let explosion = document.getElementById("explosion");
let klingonlogo = document.getElementById("klingonlogo");
let federationlogo = document.getElementById("federationlogo");
let romulanlogo = document.getElementById("romulanlogo");
let explosionaudio = document.getElementById("explosionaudio");
let blackalertaudio = document.getElementById("blackalert");
let xindiphaseraudio = document.getElementById("xindiphaseraudio");
let starbasephaseraudio = document.getElementById("starbasephaser");
let cloakaudio = document.getElementById("cloak");
let decloakaudio = document.getElementById("decloak");
let borgphaser = document.getElementById("borgphaser");
let tngphaser = document.getElementById("tngphaser");
let customcursor = document.getElementById("customcursor");
let audio = document.getElementById("backgroundsong");
let phaseraudio = document.getElementById("phasers");
let purchaseaudio = document.getElementById("purchase");
let driveUp = false;
let mouseClick = false;
let driveDown = false;
let driveLeft = 0;
let driveRight = 0;
let enterpriseX = 0;
let enterpriseY = 0;
let shipwidth = 500;
let shipheight = 200;
let destX = 550;
let destY = 400;
let destW = 150;
let destH = 200;
let mouseX, mouseY;
let speed = 3;
let health = 100;
let heal = false;
let anomalyDmg = false;
let healInterval = 200;
let anomalyInterval = 200;
let turnInterval = 150;
let repairmessage = "Repairing Hull . . . ";    
let anomalyMsg = "The anomaly is crushing our hull!"
let textColor = "white";
let msgColor = "white";
let dmgColor = "#f24b4b";
let boost = false;
let boostRecharge = 100;
let rechargeStatus = false;
let rechargeInterval = 20;
let firePhaser = false;
let phaserPower = 100;
let phaserRecharge = false;
let phaserInterval = 25;
let phaserStatus = false;
let randNum = Math.random(); // Random decimal from 0 to 1
let starbaseFiringSpeed = 1000;
let starbaseAttack;
let starBaseStatus = false;
let starbaseShots = 0;
let fireTorpedo = false;
let delayTorpedo = false;
let phaserColor = "#cf3838";
let shipSelection = 1000;
let shipType = "federation";
let cloakpower = 100;
let cloak = false;
let cloakplaying = 0;
let cloakstop = 0;
let cloakrecharge = false;
let selectRomulan = false;
let selectKlingon = false;
let selectFederation = false;
let xindiHitInterval = 150;
let xindi = {
    x: 900,
    y: 800
};
let xindi2 = {
    x: 800,
    y: 900
};
let xindi3 = {
    x: 700,
    y: 700
};
let xindi4 = {
    x: 500,
    y: 500
};
let xindi5 = {
    x: 400,
    y: 400
};
let xindihealth = 100;
let xindiUp = true;
let xindiDown = false;
let xindiLeft = false;
let xindiRight = false;
let spawnxindi = false;
let xindiHIT = false;
let xindiStatus = false;
let drawExplosion = false;
let xindiAttack = true;
let xindiExplosion = false;
let xindiExplosionNum = 0;
let xindiRespawnNum = 11;
let xindiRESPAWN = false;
let playexplosion = false;
let credits = 0;
let maxhealth = 100;
let addCredits = 0;
let shop = false;
let shopicon = false;
let iconhover = "white";
let closeColor = "lightcoral";
let shopSelector = "black";
let shopSelector2 = "black";
let shopSelector3 = "black";
let shopSelector4 = "black";
let entCreditColor = "white";
let defCreditColor = "white";
let disCreditColor = "white";
let entECreditColor = "white";
let hasEnterprise = false;
let hasDefiant = false;
let hasDiscovery = false;
let hasEnterpriseE = false;
let currentShip = "nx01";
let purchaseA = false;
let purchaseDef = false;
let purchaseDisc = false;
let purchaseE = false;
let phaserDamageInterval = 1;
let spore = false;
let sporepower = 100;
let sporejump = false;
let sporeClick = false;
let spawnxindiMESSAGE = false;
let explosionDamage = false;
let shipsDefeated = 0;
let fadeImg = document.getElementById("fade");
let fadetop = document.getElementById("fadetop");
let sporejumpSFX = document.getElementById("sporejumpsound");
xindiship = new Image();
xindiship.src = "images/xindiship.png"
// SETUP ENTERPRISE
ship = new Image();
ship.src = 'images/nx01sheet2.png';
// LINK TO SPRITESHEET OF NX-01:
// https://imggmi.com/full/2019/10/16/464a1ad95bc7689be99fb2de14e14f96-full.png.html

// SLOWS DOWN SHIP ROTATION (WORKING)
setInterval(function() {
    if (driveLeft == 1) {
        enterpriseX -= 200;

    }

    if (driveRight == 1) {
        enterpriseX += 200; 
    }
}, turnInterval);

// REPAIR HULL / HEAL SHIP
setInterval(function healShip() {
    if (heal == true) {
    health++;  
    } 
}, healInterval);

// Slows down the damage taken from anomaly
setInterval(function anomalyDamage() {
    if (anomalyDmg == true) {
    health--;  
    } 
}, anomalyInterval);

// PLASMA RECHARGE SPEED (BOOSTING)
setInterval(function recharge() {
    if (rechargeStatus == true) {
    boostRecharge++;
    }
}, rechargeInterval);

// PHASER RECHARGE
setInterval(function rechargePhasers() {
    if (phaserRecharge == true) {
        phaserPower++;
    }
}, phaserInterval);

// How fast you lose cloaking power while cloaked
setInterval(function() {
    if (cloak == true && shipType == "klingon") {
        if (cloakrecharge == false) {
        cloakpower--;
        }
    }
}, 80);

// How fast the cloaking power recharges
setInterval(function() {
    if (cloak == false && cloakpower < 100) {
        if (cloakrecharge) {
        cloakpower++;
        }
    } else if (cloakpower > 100) {
        if (cloakrecharge == false) {
        cloakpower = 100;
        }
    }
}, 50);

// INTERVAL BETWEEN STARBASE SHOTS
setInterval(function starbaseInterval() {
    if (starbaseShots == 1 || starbaseShots == 2 || starbaseShots == 3) {
    starbaseShots++;
    randNum = Math.random();
    starbaseAttack = false;
    } 
}, starbaseFiringSpeed);

// How fast you lose health when hit by Starbase
setInterval(function() {
    if (starbaseAttack == true && randNum < 0.34) {
       textColor = dmgColor;
       health--; 
    } 
}, 90);

setInterval(function() {
    if (xindiHIT) {
       xindihealth = xindihealth - phaserDamageInterval; 
    } 
}, 50);

setInterval(function() {
    if (explosionDamage) {
        explosionDamage = false;
        health--;
    }
}, 20);
// setInterval(function starbaseFire() {
        
// }, starbaseFiringSpeed);

// MAIN LOOP
requestAnimationFrame(loop);
function loop() {
    // Drawing the basics
    ctx.drawImage(backgroundimage, 0, 0, 1500, 1050);
    ctx.drawImage(starbase, -150, -150, 500, 500);
    ctx.drawImage(starbaseTXT, 50, 40);
    ctx.drawImage(anomaly, 680, 620, 1100, 600);   
    ctx.fillStyle = textColor;
    ctx.font = "30px Oswald";
    ctx.fillText(health + "%", destX + 60, destY - 10);
    ctx.drawImage(ship, enterpriseX, enterpriseY, shipwidth, shipheight, destX, destY, destW, destH);
    ctx.drawImage(lcars, 700, -2, 600, 100);
    ctx.fillStyle = "#9899FB";
    ctx.fillRect(585, 3, 100, 50);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.fillStyle = "white";
    ctx.fillText(credits, 595, 40);
    ctx.strokeRect(587.4, 5.4, 95, 45);
    ctx.drawImage(creditslogo, 643, 10, 35, 35);
    ctx.fillStyle = "#ffa008";
    ctx.fillRect(1080, 100, 200, 50);
    ctx.fillStyle = "#C799C8";
    ctx.fillRect(1080, 157, 200, 50);
    ctx.fillStyle = "white";
    ctx.fillText("Phasers: " + phaserPower + "%", 1090, 137);
    ctx.fillStyle = "white";
    ctx.fillText("Plasma: " + boostRecharge + "ps", 1090, 193);
    ctx.fillStyle = "tomato";
    ctx.fillRect(920, 100, 75, 50);
    ctx.fillStyle = "lightgray";
    ctx.fillRect(1000, 100, 75, 50);
    ctx.fillStyle = "lightgreen";
    ctx.fillRect(840, 100, 75, 50);
    ctx.fillStyle = "white";
    ctx.drawImage(klingonlogo, 936, 97, 40, 47);
    ctx.drawImage(federationlogo, 1012, 103, 50, 45)
    ctx.drawImage(romulanlogo, 852, 104, 50, 40)
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.strokeRect(shipSelection, 100, 75, 50);
    ctx.fillStyle = "white";
    ctx.fillRect(585, 60, 100, 25);
    ctx.font = "14px Oswald";
    ctx.fillStyle = "black";
    ctx.fillText("Ships Defeated: " + shipsDefeated, 589, 78);
    ctx.font = "30px Oswald";
    ctx.fillStyle = "white";

   
    // If using the Klingon ship, you have the ability to cloak
    if (shipType == "klingon") {
    ctx.fillStyle = "mediumpurple";
    ctx.fillRect(1080, 214, 200, 50);
    ctx.fillStyle = "white";
    ctx.font = "30px Oswald"
    ctx.fillText("Cloak: " + cloakpower + "%", 1090, 251);
    }

    if (shipType == "federation" && currentShip == "discovery") {
    ctx.fillStyle = "mediumpurple";
    ctx.fillRect(1080, 214, 200, 50);
    ctx.fillStyle = "white";
    ctx.font = "30px Oswald";
    ctx.fillText(sporepower + " - Spores", 1090, 251);
    }




    // Makes ship look "cloaked" when "Q" is pressed
    if (cloak == true && shipType == "klingon") {
        ship.src = "images/klingoncloaksheet.png";
        starbaseAttack = false;
        starbaseShots = 0;
    } else if (cloak == false && shipType == "klingon") {
        ship.src = "images/klingonsheet.png";
    }

    // Recharges cloaking power
    if (cloak) {
        cloakrecharge = false;
        // Cannot fire phasers while cloaked
        firePhaser = false;
    } else if (cloak == false && cloakpower > 1) {
        cloakrecharge = true;
    } 

   if (xindiUp) {
        xindi.y -= 5;
    } else if (xindiDown) {
        xindi.y += 5;
    } else if (xindiLeft) {
        xindi.x -= 5;
    } else if (xindiRight) {
        xindi.x += 5;
    }


    if (xindiExplosion && xindiExplosionNum == 0) {
        ctx.drawImage(explosion, xindi.x - 50, xindi.y - 50, 200, 200);
        xindiLeft = false;
        xindiUp = false;
        xindiDown = false;
        xindiRight = false;
    }


    if (xindiExplosion && destX > xindi.x - 50 && destX < xindi.x + 150 && destY > xindi.y - 50 && destY < xindi.y + 150) {
        explosionDamage = true;
    }



    if (spawnxindi && shipsDefeated < 2) {
        ctx.drawImage(xindiship, xindi.x, xindi.y);
        ctx.fillStyle = "#cf3838";
        ctx.font = "30px Oswald"
        ctx.fillText(xindihealth + "%", xindi.x + 15, xindi.y - 10);
        ctx.fillStyle = "white";
        xindiAttack = true;
        // xindihealth = 100;
        xindiHitInterval = 150;
        xindiExplosionNum = 0;
        xindiRespawnNum = 10;
    } else if (spawnxindi && shipsDefeated < 4) {
        ctx.drawImage(xindiship, xindi.x, xindi.y);
        ctx.fillStyle = "#cf3838";
        ctx.font = "30px Oswald"
        // xindihealth = 200;
        xindiHitInterval = 110;
        ctx.fillText(xindihealth + "%", xindi.x + 15, xindi.y - 10);
        ctx.fillStyle = "white";
        xindiAttack = true;
        xindiExplosionNum = 0;
        xindiRespawnNum = 10;
    } else if (spawnxindi && shipsDefeated < 6) {
        ctx.drawImage(xindiship, xindi.x, xindi.y);
        ctx.fillStyle = "#cf3838";
        ctx.font = "30px Oswald"
        // xindihealth = 350;
        xindiHitInterval = 95;
        ctx.fillText(xindihealth + "%", xindi.x + 15, xindi.y - 10);
        ctx.fillStyle = "white";
        xindiAttack = true;
        xindiExplosionNum = 0;
        xindiRespawnNum = 10;
    } else if (spawnxindi && shipsDefeated < 8) {
        ctx.drawImage(xindiship, xindi.x, xindi.y);
        ctx.fillStyle = "#cf3838";
        ctx.font = "30px Oswald"
        // xindihealth = 500;
        xindiHitInterval = 80;
        ctx.fillText(xindihealth + "%", xindi.x + 15, xindi.y - 10);
        ctx.fillStyle = "white";
        xindiAttack = true;
        xindiExplosionNum = 0;
        xindiRespawnNum = 10;
    } else if (spawnxindi && shipsDefeated < 10) {
        ctx.drawImage(xindiship, xindi.x, xindi.y);
        ctx.fillStyle = "#cf3838";
        ctx.font = "30px Oswald"
        // xindihealth = 500;
        xindiHitInterval = 50;
        ctx.fillText(xindihealth + "%", xindi.x + 15, xindi.y - 10);
        ctx.fillStyle = "white";
        xindiAttack = true;
        xindiExplosionNum = 0;
        xindiRespawnNum = 10;
    } else if (spawnxindi && shipsDefeated < 15) {
        ctx.drawImage(xindiship, xindi.x, xindi.y);
        ctx.fillStyle = "#cf3838";
        ctx.font = "30px Oswald"
        // xindihealth = 500;
        xindiHitInterval = 50;
        ctx.fillText(xindihealth + "%", xindi.x + 15, xindi.y - 10);
        ctx.fillStyle = "white";
        xindiAttack = true;
        xindiExplosionNum = 0;
        xindiRespawnNum = 10;
    } else if (spawnxindi && shipsDefeated < 20) {
        ctx.drawImage(xindiship, xindi.x, xindi.y);
        ctx.fillStyle = "#cf3838";
        ctx.font = "30px Oswald"
        // xindihealth = 500;
        xindiHitInterval = 30;
        ctx.fillText(xindihealth + "%", xindi.x + 15, xindi.y - 10);
        ctx.fillStyle = "white";
        xindiAttack = true;
        xindiExplosionNum = 0;
        xindiRespawnNum = 10;
    } else if (spawnxindi && shipsDefeated < 30) {
        ctx.drawImage(xindiship, xindi.x, xindi.y);
        ctx.fillStyle = "#cf3838";
        ctx.font = "30px Oswald"
        // xindihealth = 500;
        xindiHitInterval = 20;
        ctx.fillText(xindihealth + "%", xindi.x + 15, xindi.y - 10);
        ctx.fillStyle = "white";
        xindiAttack = true;
        xindiExplosionNum = 0;
        xindiRespawnNum = 10;
    } else if (spawnxindi && shipsDefeated > 30) {
        ctx.drawImage(xindiship, xindi.x, xindi.y);
        ctx.fillStyle = "#cf3838";
        ctx.font = "30px Oswald"
        // xindihealth = 500;
        xindiHitInterval = 10;
        ctx.fillText(xindihealth + "%", xindi.x + 15, xindi.y - 10);
        ctx.fillStyle = "white";
        xindiAttack = true;
        xindiExplosionNum = 0;
        xindiRespawnNum = 10;
    } else if (spawnxindi == false) {
        xindiAttack = false;
    }

    if (xindiAttack && cloak) {
        xindiAttack = false;
        xindiphaseraudio.pause();

    }
// If Xindi ship spawns, display it's health
    if (spawnxindi) {
        Xhealthdisplay = true;
    } else if (spawnxindi == false) {
        Xhealthdisplay = false;
    // If xindi ship is blown up, don't show it's health
    }

    if (xindi.y < -110 || xindi.y > 1000 || xindi.x < -110 || xindi.x > 1200) {
        let flyIn = Math.random();
        
        if (flyIn < 0.25) {
            let flyRandom = (Math.random() * 1000);
            xindi.y = 1000;
            xindi.x = flyRandom;
        } else if (flyIn < 0.50) {
            let flyRandomDOWN = (Math.random() * 1000);
            xindiship.src = "images/xindidown.png";
            xindiUp = false;
            xindiLeft = false;
            xindiRight = false;
            xindiDown = true;
            xindi.y = -150;
            xindi.x = flyRandomDOWN;
        } else if (flyIn < 0.75) {
            let flyRandomLEFT = (Math.random() * 1000);
            xindiship.src = "images/xindileft.png";
            xindiUp = false;
            xindiLeft = true;
            xindiRight = false;
            xindiDown = false;
            xindi.x = 1200;
            xindi.y = flyRandomLEFT;
        } else if (flyIn < 1) {
            let flyRandomRIGHT = (Math.random() * 1000);
            xindiship.src = "images/xindiright.png";
            xindiUp = false;
            xindiLeft = false;
            xindiRight = true;
            xindiDown = false;
            xindi.x = -100;
            xindi.y = flyRandomRIGHT;
        }
        
    }


    


    // PLAYING THE CLOAK/DECLOAK SOUNDS ONCE
    if (cloak && cloakplaying == 0) {
        cloakplaying = 1;
        cloakaudio.play();
    } 
    if (cloak == false) {
        cloakplaying = 0;
    }
    if (cloak == false && cloakstop == 2) {
        cloakstop = 1;
        decloakaudio.play();
    }
    if (cloak) {
        cloakstop = 2;
    }
    
    // Stops from going into negative power
    if (cloakpower < 1) {
        cloakrecharge = true;
        cloak = false;
        ship.src = "images/klingonsheet.png";
    }

    // If ship is changed during cloak, stop cloaking
    if (shipType != "klingon" && cloak == true) {
        cloak = false;
    }

    // CHANGING SHIP
    if (firePhaser && mouseX > 936 && mouseX < 1011 && mouseY > 100 && mouseY < 150 || selectKlingon) {
        ship.src = "images/klingonsheet.png";
        // Stops firing phaser at button
        firePhaser = false;
        // Changes button outline
        shipSelection = 920;
        shipType = "klingon";
    } else if (firePhaser && mouseX > 1000 && mouseX < 1075 && mouseY > 100 && mouseY < 150 || selectFederation) {
        if (health > 50 && currentShip == "nx01") {
        ship.src = "images/nx01sheet2.png";
        } else if (health < 50 && currentShip == "nx01") {
        ship.src = "images/nx01burnsheet.png";
        }
        // Stops firing phaser at button
        firePhaser = false;
        // Changes button outline
        shipSelection = 1000;
        shipType = "federation";
    } else if (firePhaser && mouseX > 840 && mouseX < 915 && mouseY > 100 && mouseY < 150 || selectRomulan) {
        ship.src = "images/romulansheet.png";
        // Stops firing phaser at button
        firePhaser = false;
        // Changes button outline
        shipSelection = 840;
        shipType = "romulan";
    } else if (firePhaser == false && mouseX > 840 && mouseX < 915 && mouseY > 100 && mouseY < 150 && cloak == true) {
        ctx.font = "20px Oswald";
        ctx.fillText("You must de-cloak before changing ships!", 770, 180)
    } else if (firePhaser == false && mouseX > 1000 && mouseX < 1075 && mouseY > 100 && mouseY < 150 && cloak == true) {
        ctx.font = "20px Oswald";
        ctx.fillText("You must de-cloak before changing ships!", 770, 180)
    } else {
        ctx.font = "30px Oswald";
    }


    // CHANGES PHASER COLOR FOR DIFFERENT SHIPS
    if (shipType == "federation") {
        if (currentShip == "nx01") {
            maxhealth = 100;
            phaserColor = "#cf3838";
            if (shipType == "federation" && health > 50) {
                ship.src = "images/nx01sheet2.png";
            } else if (shipType == "federation" && health < 50) {
                ship.src = "images/nx01burnsheet.png";
            }
            phaserDamageInterval = 1;
        } else if (currentShip == "enterpriseA") {
            maxhealth = 150;
            ship.src = "images/enterpriseasheet.png";
            phaserDamageInterval = 2;
            phaserColor = "skyblue";
        } else if (currentShip == "defiant") {
            maxhealth = 200;
            ship.src = "images/defiantsheet.png";
            phaserDamageInterval = 3;
            phaserColor = "#ff6666";
        } else if (currentShip == "discovery") {
            maxhealth = 200;
            ship.src = "images/discoverysheet.png";
            phaserDamageInterval = 3;
            phaserColor = "#eb99ff";
        } else if (currentShip == "enterpriseE") {
            maxhealth = 300;
            ship.src = "images/enterpriseesheet.png";
            phaserDamageInterval = 4;
            phaserColor = "#99ccff";
        }
 
    } else if (shipType == "klingon") {
        phaserColor = "greenyellow";
    } else if (shipType == "romulan") {
        phaserColor = "orange";
    }

    if (health > 100 && shipType != "federation") {
        health = 100;
    }

    if (heal) {
        // If healing, display white message
        ctx.font = "30px Oswald";
        ctx.fillStyle = msgColor;
        ctx.fillText(repairmessage, 770, 50);
    } else if (anomalyDmg) {
        // If taking damage from anomaly, display white message
        ctx.fillStyle = msgColor;
        ctx.fillText(anomalyMsg, 770, 50);
    }

    // VENTING PLASMA (BOOSTING)
        if (boost == true && boostRecharge > 0) {
            // Speed of boost
            speed = 5.5;
            boostRecharge--;
            rechargeStatus = false;
            // "Venting Plasma" message
            ctx.font = "18px Oswald";
            ctx.fillText("Venting Plasma . . .", 1120, 77);
            ctx.font = "30px Oswald";
        } else if (boost == true && boostRecharge <= 0) {
            // If no plasma available, don't boost
            speed = 3;
            rechargeStatus = false;
        } else if (boost == false) {
            // If space key isn't pressed, don't boost
            speed = 3;
            rechargeStatus = true;
        } else {
            rechargeStatus = true;
            ctx.font = "30px Oswald";
        }

        if (boostRecharge > 99) {
            // Don't recharge plasma past 100
            rechargeStatus = false;
        } else if (boostRecharge < 1) {
            // Don't use up less than 0 plasma (No negative numbers)
            boostRecharge = 0;
        }
   

        if (health == 99 && currentShip == "nx01") {
            // do nothing
        } else if (currentShip == "nx01" && shipType == "federation" && health < 100 && destX < 300 && destY < 300) {
            // If ship health is low and is in spacedock, heal ship
            heal = true;
            textColor = "#adffc2";
        } else if (currentShip == "enterpriseA" && shipType == "federation" && health < 150 && destX < 300 && destY < 300) {
            // If ship health is low and is in spacedock, heal ship
            heal = true;
            textColor = "#adffc2";
        } else if (currentShip == "defiant" && shipType == "federation" && health < 200 && destX < 300 && destY < 300) {
            // If ship health is low and is in spacedock, heal ship
            heal = true;
            textColor = "#adffc2";
        } else if (currentShip == "discovery" && shipType == "federation" && health < 200 && destX < 300 && destY < 300) {
            // If ship health is low and is in spacedock, heal ship
            heal = true;
            textColor = "#adffc2";
        } else if (currentShip == "enterpriseE" && shipType == "federation" && health < 300 && destX < 300 && destY < 300) {
            // If ship health is low and is in spacedock, heal ship
            heal = true;
            textColor = "#adffc2";
        } else if (shipType != "federation" && health < 100 && destX < 300 && destY < 300) {
            // If ship health is low and is in spacedock, heal ship
            heal = false;
            ctx.font = "30px Oswald";
            ctx.fillText("The Starbase does NOT heal enemy ships!!", 770, 50);
            textColor = "white";
        } else if (shipType != "romulan" && destX > 870 && destY > 650) {
            // If ship is in anomaly (and not romulan), take damage
            textColor = dmgColor;
            anomalyDmg = true;
        } else if (shipType == "romulan" && destX > 870 && destY > 650) {
            // If ship is Romulan, don't take damage (Romulans are immune)
            textColor = "white";
            anomalyDmg = false;
        }  else {
            heal = false;
            anomalyDmg = false;
            textColor = "white";
        }

        // Stop taking damage at 0 health
        if (health < 1) {
            health = 0;
        }

        // PHASERS
        if (firePhaser) {
            usePhaser();
            phaserStatus = true;
        
        } else {
            phaserStatus = false;
            phaseraudio.pause();   
            phaseraudio.currentTime = 0.25;
            borgphaser.pause();   
            borgphaser.currentTime = 0.42;
            tngphaser.pause(); 
            tngphaser.currentTime = 0.05;
        }

        if (phaserStatus == true && shipType == "federation") {
            phaseraudio.play();
        } else if (phaserStatus == true && shipType == "romulan") {
            borgphaser.play();
        } else if (phaserStatus == true && shipType == "klingon") {
            tngphaser.play();
        }

        if (firePhaser) {
            phaserPower--;
        }

        if (drawExplosion) {
            ctx.drawImage(explosion, mouseX - 25, mouseY - 20, 45, 45);
        } else if (drawExplosion) {
            // do nothing
        }

        
        // DONT SHOOT THE STARBASE!!
        if (firePhaser == true && mouseX < 300 && mouseY < 300) {
            ctx.font = "30px Oswald";
            ctx.fillText("DON'T SHOOT THE STARBASE!!", 70, 135);
            starbaseShots = 1; 
            drawExplosion = true;
        } else if (firePhaser == true && mouseX > xindi.x - 50 && mouseX < xindi.x + 150 && mouseY < xindi.y + 230 && mouseY > xindi.y) {
            xindiHIT = true; 
            drawExplosion = true;
        } else {
            xindiHIT = false;
            drawExplosion = false;
        }


        // STARBASE FIGHTS BACK
        if (starbaseShots == 1 || starbaseShots == 2 || starbaseShots == 3) {
            starbaseAttack = true
        }

        if (starbaseShots == 4) {
            starbaseShots = 0;
        }

        if (starbaseAttack) {
            starbasephaseraudio.volume = 0.4;
            starbasephaseraudio.play();
            if (randNum < 0.34) {
                   hittingShip();
                } else if (randNum < 0.67) {
                    missingShip1();
                    } else if (randNum < 100) {
                        missingShip2();
                    }
            } 

        if (starbaseAttack == false) {
            starbasephaseraudio.pause();
            starbasephaseraudio.currentTime = 0;
        }
        

        function usePhaser() {
            if (phaserStatus == true) {
            ctx.strokeStyle = phaserColor;
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(destX + 100, destY + 50);
            ctx.lineTo(mouseX, mouseY);
            ctx.stroke();
            } else {
                // do nothing
            }
        }

        // If we run out of phaser power, don't go into negative numbers
        if (phaserPower < 1) {
            phaserPower = 0;
        } else if (phaserPower > 99) {
            phaserRecharge = false;
        } else if (phaserPower == 0 && firePhaser == true) {
            phaserRecharge = false;
        } else {
            phaserRecharge = true;
        }

        // Stop shooting phasers if we run out of power
        if (phaserPower < 1) {
            phaserStatus = false;
        } else if (phaserPower > 1) {
            phaserStatus = true;
        }

       

        if (spawnxindiMESSAGE) {
            ctx.fillStyle = "white";
            ctx.font = "30px Oswald";
            ctx.fillText("Press 'ENTER' to begin the Xindi Assault!", 20, 980);
        }

    

    // SHIP MOVEMENT
    if (driveUp == true && enterpriseX == 0) {
        enterpriseY = enterpriseY + 0.001;
        destY = destY - speed + 0.3;
    } else if (driveUp == true && enterpriseX == 1200) {
        enterpriseY = enterpriseY - 0.001;
        destY = destY + speed;
    } else if (driveUp == true && enterpriseX == 600) {
        destX = destX + speed;
    } else if (driveUp == true && enterpriseX == 1800) {
        destX = destX - speed;
    } else if (driveUp == true && enterpriseX == 200) {
        enterpriseY = enterpriseY + 0.001;
        destY = destY - speed;
        destX = destX + speed - 2;
    } else if (driveUp == true && enterpriseX == 400) {
        enterpriseY = enterpriseY + 0.001;
        destY = destY - speed;
        destX = destX + speed;
    } else if (driveUp == true && enterpriseX == 800) {
        enterpriseY = enterpriseY + 0.001;
        destY = destY + speed - 2;
        destX = destX + speed;
    } else if (driveUp == true && enterpriseX == 1000) {
        enterpriseY = enterpriseY + 0.001;
        destY = destY + speed;
        destX = destX + speed - 1;
    } else if (driveUp == true && enterpriseX == 1400) {
        enterpriseY = enterpriseY + 0.001;
        destY = destY + speed;
        destX = destX - speed + 2;
    } else if (driveUp == true && enterpriseX == 1600) {
        enterpriseY = enterpriseY + 0.001;
        destY = destY + speed - 1;
        destX = destX - speed;
    } else if (driveUp == true && enterpriseX == 2000) {
        enterpriseY = enterpriseY + 0.001;
        destY = destY - speed + 2;
        destX = destX - speed;
    } else if (driveUp == true && enterpriseX == 2200) {
        enterpriseY = enterpriseY + 0.001;
        destY = destY - speed;
        destX = destX - speed + 1.2;
    }

    // Not currently used
    // if (driveDown == true) {

    // }
        
    // MAKE SHIP CONTINUE ROTATING IF TURNING EXCEEDS SPRITESHEET
    if (enterpriseX > 2200) {
        enterpriseX = 0;
    } else if (enterpriseX < 0) {
        enterpriseX = 2200;
    } 



    // CONTROLS SHIP BORDERS
    if (enterpriseX > 200 || enterpriseX > 400 && enterpriseX < 1000) {
        shipwidth = 200;
        destW = 200;
    } else if (enterpriseX <= 1200 && enterpriseX >= 1600) {
        shipwidth = 80;
        destW = 80;
    } else {
        shipwidth = 150;
        destW = 150;
    }
    // END OF SHIP MOVEMENT


    // Draws torpedo when "E" is pressed
    if (fireTorpedo) {
        ctx.drawImage(torpedo, torpedoX, torpedoY);
    }

    window.xindiHit1 = function() {
        ctx.strokeStyle = "DarkOrchid";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(xindi.x + 50, xindi.y + 50);
        ctx.lineTo(destX + 100, destY + 50);
        ctx.stroke();
    }

    window.xindiMiss1 = function() {
        ctx.strokeStyle = "DarkOrchid";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(xindi.x + 50, xindi.y + 50);
        ctx.lineTo(destX - 150, destY + 250);
        ctx.stroke();
    }

    window.xindiMiss2 = function() {
        ctx.strokeStyle = "DarkOrchid";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(xindi.x + 50, xindi.y + 50);
        ctx.lineTo(destX + 150, destY - 250);
        ctx.stroke();
    }

    window.xindiHitStarBase = function() {
        ctx.strokeStyle = "DarkOrchid";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(xindi.x + 50, xindi.y + 50);
        ctx.lineTo(100, 100);
        ctx.stroke();
    }


    if (xindiAttack) {
        if (xindiStatus) {
        if (xindiAttackNum < 0.4) {
            xindiHit1();
        } else if (xindiAttackNum < 0.55) {
            xindiMiss1();
        } else if (xindiAttackNum < 0.75) {
            xindiMiss2();
        } else if (xindiAttackNum < 1) {
            xindiHitStarBase();
        }
    }
    } 

    if (xindiStatus == false) {
        xindiphaseraudio.play();
        xindiphaseraudio.currentTime = 0.85; 
    } 

    if (phaserPower < 1 && xindiHIT) {
        xindiHIT = false;
        phaserStatus = false;
        phaseraudio.pause();   
        phaseraudio.currentTime = 0.25;
        borgphaser.pause();   
        borgphaser.currentTime = 0.42;
        tngphaser.pause(); 
        tngphaser.currentTime = 0.05;
        drawExplosion = false;
    }

    if (xindihealth < 1 == xindiExplosionNum == 0) {
        spawnxindi = false;
        xindiExplosion = true;
        xindiDown = false;
        xindiLeft = false;
        xindiUp = false;
        xindiRight = false;
        xindiAttack = false;
    }
    
    if (spawnxindi == false && xindiRespawnNum == 11) {
        spawnxindiMESSAGE = true;
    } else if (spawnxindi) {
        spawnxindiMESSAGE = false;
    } else if (xindiRespawnNum < 20) {
        spawnxindiMESSAGE = false;
    }

    if (spawnxindi == false) {
        xindiphaseraudio.pause();
    }

    if (xindiExplosionNum == 2) {
        xindiExplosion = false;
    }

    if (playexplosion) {
        explosionaudio.play();
    } else if (playexplosion == false) {
        explosionaudio.currentTime = 0;
        explosionaudio.pause();
    }

    if (xindiExplosion == true) {
        playexplosion = true;

    } 

    if (playexplosion && xindiRespawnNum < 10) {
        playexplosion = false;
    } 
    

    if (xindiRESPAWN) {
        ctx.fillStyle = "white";
        ctx.font = "30px Oswald";
        ctx.fillText("Xindi reinforcements arriving in " + xindiRespawnNum + " seconds!", 20, 980);
    }

    if (spawnxindi == false && xindiExplosionNum == 1){
        xindiRESPAWN = true;
    }

    if (xindiRespawnNum == 0) {
        xindiRESPAWN = false;
        xindiRespawnNum = 10;
        spawnxindi = true;
        xindiExplosion = false;
        if (xindiship.src = "images/xindileft.png") {
            xindiLeft = true;
            xindiRight = false;
            xindiUp = false;
            xindiDown = false;
        } else if (xindiship.src = "images/xindiright.png") {
            xindiRight = true;
            xindiLeft = false;
            xindiUp = false;
            xindiDown = false;
        } if (xindiship.src = "images/xindiship.png") {
            xindiUp = true;
            xindiRight = false;
            xindiLeft = false;
            xindiDown = false;
        } if (xindiship.src = "images/xindidown.png") {
            xindiDown = true;
            xindiRight = false;
            xindiUp = false;
            xindiLeft = false;
        } 

        // Increases enemy health over time
        if (shipsDefeated < 2) {
            xindihealth = 100;
        } else if (shipsDefeated < 4) {
            xindihealth = 200;
        } else if (shipsDefeated < 6) {
            xindihealth = 350;
        } else if (shipsDefeated < 8) {
            xindihealth = 500;
        } else if (shipsDefeated < 10) {
            xindihealth = 600;
        } else if (shipsDefeated < 15) {
            xindihealth = 800;
        } else if (shipsDefeated < 20) {
            xindihealth = 1000;
        } else if (shipsDefeated < 30) {
            xindihealth = 2000;
        } else if (shipsDefeated < 40) {
            xindihealth = 3000;
        } else if (shipsDefeated < 50) {
            xindihealth = 4000;
        } else if (shipsDefeated > 50) {
            xindihealth = 8000;
        }
    }

    if (spawnxindi == false && xindiRespawnNum == 10) {
        addCredits = 1;
    } else {
        addCredits = 0;
    }


    if (destX < 300 && destY < 300 && shipType == "federation") {
        ctx.fillStyle = iconhover;
        ctx.fillRect(520, 5, 50, 47);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "black";
        ctx.strokeRect(521, 6, 48, 45);
        ctx.drawImage(shoplogo, 526, 10, 35, 35);
        ctx.fillStyle = "white";
        shopicon = true;
    } else if (destX > 300 && destY > 300) {
        shopicon = false;
        shop = false;
    }

    // Changes icon color to blue if mouse is hovering on it
    if (mouseX > 520 && mouseX < 570 && mouseY > 5 && mouseY < 52) {
        iconhover = "lightblue";
    } else {
        iconhover = "white";
    }

    // Makes shop TRUE if shop icon is clicked
    if (mouseX > 520 && mouseX < 570 && mouseY > 5 && mouseY < 52 && firePhaser && shopicon) {
        shop = true;
        firePhaser = false;
    } else if (shop && mouseClick && mouseX > 950 && mouseX < 990 && mouseY > 190 && mouseY < 230) {
        // closes shop if "X" is clicked
        shop = false;
        entCreditColor = "white";
        defCreditColor = "white";
        disCreditColor = "white";
    }



    if (shop) {
        ctx.drawImage(shoplcars, 220, 180);
        ctx.strokeStyle = "white";
        ctx.strokeRect(270, 290, 150, 150);
        ctx.fillStyle = closeColor;
        ctx.fillRect(950, 190, 40, 40);
        ctx.fillStyle = "white";
        ctx.fillText("x", 964, 219);
        ctx.fillStyle = shopSelector;
        ctx.fillRect(270, 290, 150, 150);
        ctx.drawImage(enterpriseA, 305, 295, 80, 140);
        ctx.fillStyle = "white";
        ctx.font = "24px Oswald";
        ctx.fillText("USS ENTERPRISE", 272, 470);
        ctx.fillText("NCC-1701-A", 272, 500);
        ctx.fillStyle = entCreditColor;
        ctx.fillText("1400", 272, 530);
        ctx.drawImage(creditslogo, 320, 508, 25, 25);
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.moveTo(272, 540);
        ctx.lineTo(422, 540);
        ctx.stroke();
        ctx.font = "30px Oswald";
        ctx.fillStyle = "white";
        ctx.fillText("Click any ship to purchase it!", 447, 235);
        if (hasEnterprise) {
            ctx.fillStyle = "white";
            ctx.fillText("PURCHASED", 277, 370);
        }
        ctx.strokeStyle = "white";
        ctx.strokeRect(450, 290, 150, 150);
        ctx.fillStyle = shopSelector2;
        ctx.fillRect(450, 290, 150, 150);
        ctx.drawImage(defiant, 478, 300, 100, 125);
        ctx.fillStyle = "white";
        ctx.font = "24px Oswald";
        ctx.fillText("USS DEFIANT", 452, 470);
        ctx.fillText("NX-74205", 452, 500);
        ctx.fillStyle = defCreditColor;
        ctx.fillText("2500", 452, 530);
        ctx.drawImage(creditslogo, 500, 508, 25, 25);
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.moveTo(452, 540);
        ctx.lineTo(602, 540);
        ctx.stroke();
        if (hasDefiant) {
            ctx.font = "30px Oswald";
            ctx.fillStyle = "white";
            ctx.fillText("PURCHASED", 457, 370);
        }
        ctx.strokeStyle = "white";
        ctx.strokeRect(630, 290, 150, 150);
        ctx.fillStyle = shopSelector3;
        ctx.fillRect(630, 290, 150, 150);
        ctx.drawImage(discovery, 668, 298, 70, 135);
        ctx.fillStyle = "white";
        ctx.font = "24px Oswald";
        ctx.fillText("USS DISCOVERY", 632, 470);
        ctx.fillText("NCC-1031", 632, 500);
        ctx.fillStyle = disCreditColor;
        ctx.fillText("4000", 632, 530);
        ctx.drawImage(creditslogo, 682, 508, 25, 25);
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.moveTo(632, 540);
        ctx.lineTo(782, 540);
        ctx.stroke();
        if (hasDiscovery) {
            ctx.font = "30px Oswald";
            ctx.fillStyle = "white";
            ctx.fillText("PURCHASED", 637, 370);
        }
        ctx.strokeStyle = "white";
        ctx.strokeRect(810, 290, 150, 150);
        ctx.fillStyle = shopSelector4;
        ctx.fillRect(810, 290, 150, 150);
        ctx.drawImage(enterpriseE, 848, 298, 70, 135);
        ctx.fillStyle = "white";
        ctx.font = "24px Oswald";
        ctx.fillText("USS ENTERPRISE", 812, 470);
        ctx.fillText("NCC-1701-E", 812, 500);
        ctx.fillStyle = entECreditColor;
        ctx.fillText("10 000", 812, 530);
        ctx.drawImage(creditslogo, 878, 508, 25, 25);
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.moveTo(812, 540);
        ctx.lineTo(962, 540);
        ctx.stroke();
        if (hasEnterpriseE) {
            ctx.font = "30px Oswald";
            ctx.fillStyle = "white";
            ctx.fillText("PURCHASED", 817, 370);
        }
    } 


    if (currentShip == "nx01" && health > 100) {
        health = 100;
    } else if (currentShip == "enterpriseA" && health > 150) {
        health = 150;
    }
 
    // If mouse hovering on "X" button, make it "redder"
    if (shop && mouseX > 950 && mouseX < 990 && mouseY > 190 && mouseY < 230) {
        closeColor = "red";
    } else {
        closeColor = "lightcoral";
    }

    // Buying the EnterpriseA
    if (shop && mouseX > 270 && mouseX < 420 && mouseY > 290 && mouseY < 440 && mouseClick && credits >= 1400 && hasEnterprise == false) {
        hasEnterprise = true;
        purchaseA = true;
        currentShip = "enterpriseA";
        health = 150;
        purchaseaudio.play();
    } else if (shop && mouseX > 270 && mouseX < 420 && mouseY > 290 && mouseY < 440 && mouseClick && credits < 1400) {
        entCreditColor = "lightcoral";
    }

    if (shop && mouseX > 450 && mouseX < 600 && mouseY > 290 && mouseY < 440 && mouseClick && credits >= 2500 && hasDefiant == false) {
        hasDefiant = true;
        purchaseDef = true;
        currentShip = "defiant";
        health = 200;
        purchaseaudio.play();
    } else if (shop && mouseX > 450 && mouseX < 600 && mouseY > 290 && mouseY < 440 && mouseClick && credits < 2500 && hasDefiant == false) {
        defCreditColor = "lightcoral";
    }

    if (shop && mouseX > 630 && mouseX < 780 && mouseY > 290 && mouseY < 440 && mouseClick && credits >= 4000) {
        hasDiscovery = true;
        purchaseDisc = true;
        currentShip = "discovery";
        health = 200;
        purchaseaudio.play();
    } else if (shop && mouseX > 630 && mouseX < 780 && mouseY > 290 && mouseY < 440 && mouseClick && credits < 4000 && hasDiscovery == false) {
        disCreditColor = "lightcoral";
    }

    if (shop && mouseX > 810 && mouseX < 960 && mouseY > 290 && mouseY < 440 && mouseClick && credits >= 10000 && hasEnterpriseE == false) {
        hasEnterpriseE = true;
        purchaseE = true;
        currentShip = "enterpriseE"
        health = 300;
    } else if (shop && mouseX > 810 && mouseX < 960 && mouseY > 290 && mouseY < 440 && mouseClick && credits < 10000 && hasEnterpriseE == false) {
        entECreditColor = "lightcoral";
    } 
    // ctx.strokeRect(630, 290, 150, 150);


    // Makes ship look "selected"
    if (shop && mouseX > 450 && mouseX < 600 && mouseY > 290 && mouseY < 440 && hasDefiant == false) {
        shopSelector2 = "darkcyan";
    } else if (shop && hasDefiant) {
        shopSelector2 = "#ff6666";
    } else {
        shopSelector2 = "black";
    }

    if (shop && mouseX > 630 && mouseX < 780 && mouseY > 290 && mouseY < 440 && hasDiscovery == false) {
        shopSelector3 = "darkcyan";
    } else if (shop && hasDiscovery) {
        shopSelector3 = "#ff6666";
    } else {
        shopSelector3 = "black";
    }

    if (shop && mouseX > 270 && mouseX < 420 && mouseY > 290 && mouseY < 440 && hasEnterprise == false) {
        shopSelector = "darkcyan";
    } else if (shop && hasEnterprise) {
        shopSelector = "#ff6666";
    } else {
        shopSelector = "black";
    }

    if (shop && mouseX > 810 && mouseX < 960 && mouseY > 290 && mouseY < 440 && hasEnterpriseE == false) {
        shopSelector4 = "darkcyan";
    } else if (shop && hasEnterpriseE) {
        shopSelector4 = "#ff6666";
    } else {
        shopSelector4 = "black";
    }

    // Don't shoot when the shop is open!
    if (shop && mouseX > 220 && mouseX < 1020 && mouseY > 180 && mouseY < 750 && firePhaser) {
        firePhaser = false;
    }

    // If ship isn't federation, stop using spore drive
    if (shipType != "federation") {
        spore = false;
    }

    // background music
    if (xindiRespawnNum <= 10) {
        audio.currentTime = 5;
        audio.volume = 0.25;
        audio.play();
    }

    // CHANGES SHIP COLOR UPON SPORE PREP
    if (spore) {
        firePhaser = false;
        customcursor = document.getElementById("sporecursor");
        ship.src = "images/sporesheet.png";
        blackalertaudio.volume = 0.7;
        blackalertaudio.play();
        ctx.drawImage(fade, 0, 520, 1300, 500);
        ctx.drawImage(fadetop, 0, 0, 1300, 500);
    } else if (spore == false && currentShip == "discovery" && shipType == "federation") {
        ship.src = "images/discoverysheet.png";
        customcursor = document.getElementById("customcursor");
    }

    // spore audio
    if (spore == false) {
        blackalertaudio.pause();
        blackalertaudio.currentTime = 0;
    }

    if (spore == false) {
        customcursor = document.getElementById("customcursor");
    }

    if (spore && currentShip == "discovery" && sporeClick) {
        sporejump = true;
        firePhaser = false;
        sporejumpSFX.currentTime = 2;
        sporejumpSFX.play();
    } 

    if (sporejump) {
        destX = mouseX;
        destY = mouseY;
    }

    if (sporepower > 100) {
        sporepower = 100;
    }

    if (sporepower <= 0) {
        spore = false;
        sporepower = 0;
    }

    // DEATH SCREEN
    if (health < 1) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 2000, 2000);
        ctx.font = "50px Oswald";
        ctx.fillStyle = "tomato";
        ctx.fillText("YOU HAVE BEEN DEFEATED", 400, 400);
        ctx.fillStyle = "white";
        ctx.font = "35px Oswald";
        ctx.fillText("YOU DESTROYED " + shipsDefeated + " SHIPS", 480, 450);
        ctx.fillText("REFRESH this page to TRY AGAIN!", 425, 600);
    }
    
    ctx.beginPath();
    ctx.drawImage(customcursor, mouseX - 8, mouseY - 2);
    ctx.fill();
    requestAnimationFrame(loop);
} // END OF LOOP //////////////////////////////////////////////

let xindiAttackNum = Math.random();

setInterval(function() {
    if (sporejump) {
        sporepower = sporepower - 25;
        sporejump = false;
    }
}, 50);

setInterval(function() {
    if (sporeClick) {
        sporeClick = false;
    }
}, 50);

setInterval(function() {
    if (sporepower < 100 && spore == false) {
        sporepower++;
    }
}, 50);


setInterval(function() {
    if (purchaseA) {
        credits -= 1400;
        purchaseA = false;
    }
}, 1000);

setInterval(function() {
    if (purchaseE) {
        credits -= 10000;
        purchaseE = false;
    }
}, 1000);


setInterval(function() {
    if (purchaseDef) {
        credits -= 2500;
        purchaseDef = false;
    }
}, 1000);

setInterval(function() {
    if (purchaseDisc) {
        credits -= 4000;
        purchaseDisc = false;
    }
}, 1000);




setInterval(function() {
    if (addCredits == 1) {
        if (shipsDefeated < 2) {
            credits += 100;
        } else if (shipsDefeated < 4) {
            credits += 200;
        } else if (shipsDefeated < 6) {
            credits += 350;
        } else if (shipsDefeated < 8) {
            credits += 500;
        } else if (shipsDefeated < 10) {
            credits += 700;
        } else if (shipsDefeated < 15) {
            credits += 1000;
        } else if (shipsDefeated < 20) {
            credits += 1200;
        } else if (shipsDefeated < 30) {
            credits += 2000;
        } else if (shipsDefeated < 40) {
            credits += 3000;
        } else if (shipsDefeated > 40) {
            credits += 5000;
        }


        shipsDefeated += 1;
    }
}, 2000);

setInterval(function() {
    if (playexplosion) {
        playexplosion = false;
    }
}, 2000);

setInterval(function() {
    if (xindiStatus) {
        xindiStatus = false;
    }
}, 1000);

setInterval(function() {
    if (xindiStatus == false) {
        xindiStatus = true;
        xindiAttackNum = Math.random();
    }
}, 1200);

setInterval(function() {
    if (xindiStatus == true && xindiAttackNum < 0.4 && xindiAttack) {
       health--; 
    } 
}, xindiHitInterval);

setInterval(function() {
    if (xindiExplosion && xindiExplosionNum == 0) {
        xindiExplosionNum = 1;
    }
}, 1500);

setInterval(function() {
    if (spawnxindi == false && xindiExplosionNum == 1) {
        xindiRespawnNum--;
    }
}, 1000);


// SHIP MOVEMENT LISTENERS
document.addEventListener("keydown", driveupHandler);
document.addEventListener("keyup", driveupstop);

document.addEventListener("keydown", drivedownHandler);
document.addEventListener("keyup", drivedownstop);

document.addEventListener("keydown", driveleftHandler);
document.addEventListener("keyup", driveleftstop);

document.addEventListener("keydown", driverightHandler);
document.addEventListener("keyup", driverightstop);


document.addEventListener("mousedown", phaserHandler);
document.addEventListener("mouseup", phaserStopHandler)

function phaserHandler() {
    firePhaser = true;
    mouseClick = true;
}

function phaserStopHandler() {
    firePhaser = false;
    mouseClick = false;
}


function boostStopHandler() {
    if (event.code == "Space") {
        boost = false;
    }
}



// CUSTOM MOUSE CURSOR
document.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("keydown", specialHandler);

function specialHandler() {
    if (event.code == "KeyQ" && cloak == false && shipType == "klingon") {
        cloak = true;
    } else if (event.code == "KeyQ" && cloak == true && shipType == "klingon") {
        cloak = false;
    }

    if (event.code == "KeyQ" && spore == false && shipType == "federation" && currentShip == "discovery") {
        spore = true;
    } else if (event.code == "KeyQ" && spore == true && shipType == "federation" && currentShip == "discovery") {
        spore = false;
    }
}

function mousemoveHandler(event) {
    pmouseX = mouseX;
    pmouseY = mouseY;

    let cnvRect = cnv.getBoundingClientRect();
    mouseX = event.x - cnvRect.x;
    mouseY = event.y - cnvRect.y;
}
// SHIP MOVEMENT HANDLERS
function driveupHandler() {
    if (event.code == "KeyW" || event.code == "ArrowUp") {
        driveUp = true;
    }
}

function driveupstop() {
    if (event.code == "KeyW" || event.code == "ArrowUp") {
        driveUp = false;
    }
}

function drivedownHandler() {
    if (event.code == "KeyS" || event.code == "ArrowDown") {
        driveDown = true;
    }
}

function drivedownstop() {
    if (event.code == "KeyS" || event.code == "ArrowDown") {
        driveDown = false;
    }
}

function driveleftHandler() {
    if (event.code == "KeyA" || event.code == "ArrowLeft") {
        driveLeft = 1;
    }
}

function driveleftstop() {
    if (event.code == "KeyA" || event.code == "ArrowLeft") {
        driveLeft = 0;
    }
}

function driverightHandler() {
    if (event.code == "KeyD" || event.code == "ArrowRight") {
        driveRight = 1;

    }
}

function driverightstop() {
    if (event.code == "KeyD" || event.code == "ArrowRight") {
        driveRight = 0;
    }
}

document.addEventListener("keydown", romulanSelector);
function romulanSelector() {
    if (event.code == "Digit1") {
        selectRomulan = true;
    }
}
setInterval(function() {
    if (selectRomulan) {
        selectRomulan = false;
    }
}, 300);

document.addEventListener("keydown", klingonSelector);
function klingonSelector() {
    if (event.code == "Digit2") {
        selectKlingon = true;
    }
}
setInterval(function() {
    if (selectKlingon) {
        selectKlingon = false;
    }
}, 300);

document.addEventListener("keydown", federationSelector);
function federationSelector() {
    if (event.code == "Digit3") {
        selectFederation = true;
    }
}
setInterval(function() {
    if (selectFederation) {
        selectFederation = false;
    }
}, 300);
// VENTING PLASMA (BOOSTING)
document.addEventListener("keydown", boostHandler);
document.addEventListener("keyup", boostStopHandler);

function boostHandler() {
    if (event.code == "Space") {
        boost = true;
    }
}

document.addEventListener("keydown", nxSelector);
function nxSelector() {
    if (event.code == "KeyZ") {
        currentShip = "nx01";
    }
}

document.addEventListener("keydown", ASelector);
function ASelector() {
    if (event.code == "KeyX") {
        if (hasEnterprise) {
        currentShip = "enterpriseA";
        }
    if (health == 100) {
        health = 150;
    }
    }
}

document.addEventListener("keydown", defSelector);
function defSelector() {
    if (event.code == "KeyC") {
        if (hasDefiant) {
            currentShip = "defiant";
        }
        if (health == 100 || health == 150 || health > 200) {
            health = 200;
        }
    }
}

document.addEventListener("keydown", DiscoSelector);
function DiscoSelector() {
    if (event.code == "KeyV") {
        if (hasDiscovery) {
            currentShip = "discovery";
        }
        if (health == 100 || health == 150 || health > 200) {
            health = 200;
        }
    }
}

document.addEventListener("keydown", enterpriseESelector);
function enterpriseESelector() {
    if (event.code == "KeyB") {
        if (hasEnterpriseE) {
            currentShip = "enterpriseE";
        }
        if (health == 100 || health == 150 || health == 200) {
            health = 300;
        }
    }
}

document.addEventListener("click", sporeHandler);

function sporeHandler() {
    sporeClick = true;
}

document.addEventListener("keydown", beginAttack);
function beginAttack() {
    if (event.code == "Enter" && spawnxindi == false && xindiRespawnNum == 11) {
        spawnxindi = true;
        audio.volume = 0.2;
    }
}