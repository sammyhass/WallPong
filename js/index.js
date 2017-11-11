function setup() {
  createCanvas(600, 400);
}

function movementR() {
  if (keyIsDown(RIGHT_ARROW)) {
    rectx += 5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    rectx -= 5;
  }
  if (rectx === 545) {
    rectx = -20;
  }
  if (rectx === -45) {
    rectx = 510;
  }
}

function movementB() {
  if (ballx === 10 || ballx === 590) {
    right = !right;
  }
  if (right === true) {
    ballx += ballSpeed;
  } else {
    ballx -= ballSpeed;
  }
  if (bally == recty && (ballx < rectx + 90 && ballx + 10 > rectx)) {
    if (ballx < rectx + 20) {
      right = !right;
    }
    up = !up;
    counter += 1;
    document.getElementById("counter").innerHTML = counter;
  }
  if (bally === 10) {
    up = !up;
  }
  if (up == true) {
    bally += ballSpeed;
  } else {
    bally -= ballSpeed;
  }
}
var counter = 0;
var ballSpeed = 5; 
var ballx = Math.floor(Math.random() * 50) * 10;
var bally = 40;
var rectx = 250;
var recty = 350;
var right = true;
var up = false;

function game() {
  movementR();
  movementB();
  background(51);
  fill(255);
  noStroke();
  ellipse(ballx, bally, 20, 20);
  rect(rectx, recty, 90, 30);
  if (bally < 0) {
    return;
  }
}

function draw() {
  game();
}