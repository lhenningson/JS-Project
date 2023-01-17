// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

let state = "start";

let mouseispressed = false

window.addEventListener("load", draw);

document.addEventListener("mousedown", mousedownhandler);

function mousedownhandler() {
    movegoalie();
}

function draw() {
    if (state === "start") {
        drawstart();
    } else if (state === "gameon") {
        drawgame();
        movegoalie();

    } else if (state === "gameover") {
        drawover();
    }

}
let goalie = {
    x: 380,
    y: 300,
    w: 50,
    h: 150,
    speed: 0,
    accel: 0.9
}
function drawstart() {
    basedraw();
}
function drawgame() {
    basedraw();  
}
function drawover() {
    basedraw();
}

function basedraw() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    
    ctx.fillStyle = "green";
    ctx.fillRect(0, 450, 800, 150);
    
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 800, 450);
    
    ctx.fillStyle = "white";
    ctx.fillRect(650, 150, 10, 300);
    
    ctx.fillStyle = "white";
    ctx.fillRect(150, 150, 10, 300);
    
    ctx.fillStyle = "white";
    ctx.fillRect(160, 150, 490, 10);
    
    ctx.fillStyle = "grey";
    ctx.fillRect(50, 100, 10, 350);
    
    ctx.fillStyle = "grey";
    ctx.fillRect(750, 100, 10, 350);
    
    ctx.fillStyle = "white";
    ctx.fillRect(740, 100, 30, 30);
    
    ctx.fillStyle = "white";
    ctx.fillRect(40, 100, 30, 30);
    
    ctx.fillStyle = "red";
    ctx.fillRect(goalie.x, goalie.y, goalie.w, goalie.h);
    
    
}
function movegoalie() {
    if (state === "gameon") {
    goalie.speed += -1;
}

    goalie.x += goalie.speed;
}



function display(event) {
    let X = event.clientX;
    let Y = event.clientY;
    
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(X -= 5, Y -= 55, 20, 0, 2 * Math.PI);
    ctx.fill();
}

