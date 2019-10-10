window.onload = printerSetup;
var width, height, c, canvas;
mouseX = 0;
mouseY= 0;
mouseDown = false;


function printerSetup(){

  canvas = document.createElement("CANVAS");
  c = canvas.getContext("2d");
  document.body.appendChild(canvas);

  canvas.onmousemove = function(e){
    mouseX = e.clientX;
    mouseY = e.clientY;
  }
  canvas.onmousedown = function(){
    mouseDown = true;
  }
  canvas.onmouseup = function(){
    mouseDown = false;
  }

  printerSizeCanvas();
  setupCSS();
  setup();
  draw();
  window.setInterval(draw, 20);
}


function printerSizeCanvas() {
    height = window.innerHeight;
    width = window.innerWidth;
    canvas.height = height;
    canvas.width = width;
}

function setupCSS(){
  document.body.style.overflow  = "hidden";
  canvas.style.position = "absolute";
  canvas.style.height =  "100%";
  canvas.style.width = "100%";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.float = "left";
}

window.onresize = function() {
    printerSizeCanvas();
    setup();
    draw();
};


// Helper functions

function random(a, b){
  if(b == undefined){
    b=a;
    a=0;
  }
  return Math.random()*(b-a)+a;
}

// function map(val, a, b, c, d){
//   return v = (val/b)*d
// }
function circle(x, y, s, colour){
  c.fillStyle = colour;
  c.beginPath();
  c.arc(x, y, s, 0, 2*Math.PI);
  c.fill();
}
function rect(x, y, h, w, colour){
  if(colour == undefined)
    colour ="black"
  c.strokeStyle = colour;
  c.lineWidth = "4"
  c.beginPath();
  c.rect(x, y, h, w);
  c.stroke();
}

function line(x, y, x2, y2, w, colour){
  if(w !=undefined)
    c.lineWidth = w+"";
  if(colour != undefined)
    c.strokeStyle = colour+"";
  else{
    c.strokeStyle = "black";
  }
  c.beginPath();
  c.moveTo(x,y);
  c.lineTo(x2,y2);
  c.stroke();
}

function text(text, x, y, f, colour){
  if(x == undefined || y == undefined){
    x = 0;
    y = 0;
  }
  if(f == undefined || c == undefined){
    f = "10px monospace";
    colour = "black";
  }

  c.fillStyle = colour+"";
  c.font = f+"";
  c.fillText(text+"",x,y);
}

function clearCanvas() {
    c.clearRect(0, 0, width, height);
}

function mouse(){
  return {x: mouseX, y: mouseY,down:mouseDown};
}

function randomColour() {
    var r = Math.floor(Math.random() * 150) + 105;
    var g = Math.floor(Math.random() * 150) + 105;
    var b = Math.floor(Math.random() * 150) + 105;
    return "rgb(" + r + "," + g + "," + b + ")";
}

function getDistance(a, b){
  return Math.sqrt(Math.pow(b.x-a.x,2) + Math.pow(b.y-a.y,2));
}

function subVector(a, b){
  return {x:a.x-b.x, y:a.y-b.y};
}

function screen(){
  height = window.innerHeight;
  width = window.innerWidth;
  return({height:height,width:width});
}

function log(msg){
  console.log(msg);
}

function print(msg){
  console.log(msg);
}

function textPad(text, w){
  if(text.length < w){
    for(i = 0; i<=w-text.length; i++)
      text+=" ";
  }
  return text;
}
