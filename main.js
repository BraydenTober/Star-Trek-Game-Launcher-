document.getElementById("ship").addEventListener("click", redirectShip);
document.getElementById("away").addEventListener("click", redirectAway);

function redirectShip() {
    window.open("Star Trek - Survival (Ship Game)/index.html");
}

function redirectAway() {
    window.open("Away Team 9/index.html");
}

document.getElementById("awayhow").addEventListener("click", helpAway);

function helpAway() {
    window.open("away team instructions/index.html")
}

document.getElementById("shiphow").addEventListener("click", helpShip);

function helpShip() {
    window.open("survival instructions/index.html")
}

document.getElementById("ship").addEventListener("mouseover", addBorderShip);
document.getElementById("ship").addEventListener("mouseleave", removeborderShip);

function addBorderShip() {
    document.getElementById("ship").classList.add("imghover");
    document.getElementById("ship").classList.remove("imgborder");
    document.getElementById("shipdescription").classList.add("addcolor");
    document.getElementById("shipdescription").classList.remove("removecolor");
}

function removeborderShip() {
    document.getElementById("ship").classList.remove("imghover");
    document.getElementById("ship").classList.add("imgborder");
    document.getElementById("shipdescription").classList.remove("addcolor");
    document.getElementById("shipdescription").classList.add("removecolor");
}


document.getElementById("away").addEventListener("mouseover", addBorderAway);
document.getElementById("away").addEventListener("mouseleave", removeborderAway);

function addBorderAway() {
    document.getElementById("away").classList.add("imghover");
    document.getElementById("away").classList.remove("imgborder");
    document.getElementById("awaydescription").classList.add("addcolor");
    document.getElementById("awaydescription").classList.remove("removecolor");
}

function removeborderAway() {
    document.getElementById("away").classList.remove("imghover");
    document.getElementById("away").classList.add("imgborder");
    document.getElementById("awaydescription").classList.remove("addcolor");
    document.getElementById("awaydescription").classList.add("removecolor");
}


