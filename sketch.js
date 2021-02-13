var r, theta, rOld;
var r0;
var direction;
var dt = 0.1;

function speed(r) {
  var v;
  if (r==0) {
    v = 0;
  } else {
    v = 30/pow(r/r0, 2);
  }
  return v;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  frameRate(120);
  stroke(color(unhex('8d'), unhex('02'), unhex('1f'), 255));
  strokeWeight(5);
  aspectRatio = width/height;
  oldx = 0;
  oldy = 0;
  STEP = 10;
  x = -width/2 + STEP/2;
  y = -height/2;
}

function is_in_heart(x, y) {
  return x**2 + (5.0*-y/4 - sqrt(abs(x)))**2 <= 1.0
  //console.log(x**2 + y**2)
  //return x**2 + y**2 <= 1.0
}

function draw() {
  //let x = random(-width/2, width/2);
  //let y = random(-height/2, height/2);
  x += STEP;
  if (x >= width/2) {
    x = -width/2 + STEP/2;
    y += STEP;
  }
  translate(width/2, height/2);
  //scale(10);
  scale = height/3;
  if(is_in_heart(x/scale, y/scale)) {
    //line(x, y, oldx, oldy);
    //oldx = x;
    //oldy = y;

    stroke(color(unhex('8d'), unhex('02'), unhex('1f'), 255));
    point(x, y);
  } else {
    stroke(200);
    point(x, y);
  }
}
