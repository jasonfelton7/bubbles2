let circleX;
let circleY;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(40);
    frameRate(5);
}

function draw() {

    circleX = random(width);
    circleY = random(height);

    fill(0, random(256), random(256));
    noStroke();
    circle(circleX, circleY, random(300))
}