// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

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


