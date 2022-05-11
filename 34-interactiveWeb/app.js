let ball, rect;

function setup() {
    createCanvas(windowWidth, windowHeight);
    ball = new Ball(100, 100, 30);
    rect = new Rect(400, 400, 30);
}

function draw() {
    background(220);
    ball.paint();
    rect.paint();
    if (keyIsPressed === true) {
        handleKeyPressed(keyCode);
    }
}

function handleKeyPressed(key) {
    console.log( 65 <= key <= 87);
    if ( (65 <= key) && (key <= 87)) {
        ball.move(key);
    } else {
        console.log("flechas");
        rect.move(key);
    }
}