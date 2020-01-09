let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1500;
cnv.height = 1100;


let keyboard = document.getElementById("keyboard");




ctx.drawImage(keyboard, 70, 100);


ctx.strokeStyle = "skyblue";
ctx.lineWidth = 3;
ctx.beginPath();
ctx.moveTo(240, 280);
ctx.lineTo(120, 600);
ctx.stroke();

ctx.lineWidth = 5;
ctx.strokeStyle = "skyblue";
ctx.beginPath();
ctx.moveTo(214, 247);
ctx.lineTo(214, 292);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(261, 247);
ctx.lineTo(261, 292);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(214, 247);
ctx.lineTo(261, 247);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(189, 293);
ctx.lineTo(330, 293);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(190, 293);
ctx.lineTo(190, 340);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(332, 293);
ctx.lineTo(332, 340);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(189, 340);
ctx.lineTo(330, 340);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(237, 293);
ctx.lineTo(237, 340);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(285, 293);
ctx.lineTo(285, 340);
ctx.stroke();

ctx.fillStyle = "black";
ctx.font = "30px Poppins";
ctx.fillText("Controls the Ship", 50, 640);
ctx.fillText("Switches between purchased ships", 250, 730);
ctx.fillText("Vents plasma (boosts ship)", 450, 630);
ctx.fillText("Switches faction (Federation, Klingon, Romulan)", 510, 55);
ctx.fillText("Cloak / Spore drive", 30, 50);
ctx.fillText("*CLICK TO FIRE PHASERS", 800, 500);
ctx.font = "25px Poppins";
ctx.fillText("Note: If not all elements are loaded, reload page", 20, 850);


ctx.strokeStyle = "darkorchid";
ctx.strokeRect(284.5, 390, 285, 45)
ctx.lineWidth = 3;
ctx.beginPath();
ctx.moveTo(450, 420);
ctx.lineTo(550, 600);
ctx.stroke();

ctx.lineWidth = 5;
ctx.strokeStyle = "limegreen";
ctx.strokeRect(213.5, 340, 48, 47.5);
ctx.strokeRect(260, 340, 48, 47.5);
ctx.strokeRect(308, 340, 48, 47.5);
ctx.strokeRect(356, 340, 48, 47.5);
ctx.strokeRect(403, 340, 48, 47.5);
ctx.lineWidth = 3;
ctx.beginPath();
ctx.moveTo(330, 360);
ctx.lineTo(340, 700);
ctx.stroke();

ctx.lineWidth = 5;
ctx.strokeStyle = "tomato";
ctx.strokeRect(142, 198, 48, 47.5);
ctx.strokeRect(190, 198, 48, 47.5);
ctx.strokeRect(237, 198, 48, 47.5);
ctx.lineWidth = 3;
ctx.beginPath();
ctx.moveTo(210, 220);
ctx.lineTo(550, 70);
ctx.stroke();

ctx.lineWidth = 5;
ctx.strokeStyle = "gold";
ctx.strokeRect(167, 247, 45, 44);
ctx.lineWidth = 3;
ctx.beginPath();
ctx.moveTo(180, 260);
ctx.lineTo(160, 70);
ctx.stroke();





