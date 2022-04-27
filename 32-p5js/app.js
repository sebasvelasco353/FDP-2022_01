const STARS = [];
const ASTEROIDS = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 6; i++) {
        STARS.push(
            new Star((100 * (i + 1)), [0, Math.round(windowHeight/6 * i)], 20)
        );
        ASTEROIDS.push(
            new Asteroid((100 * (i + 1)), [0, Math.round(windowHeight/6 * i)], 30, "red")
        );
    }
}

function draw() {
    background(51);
    for (let i = 0; i < 6; i++) {
        STARS[i].move();
        ASTEROIDS[i].move();
    }
}

function windowResized() {
    console.log('window has been resized');
    resizeCanvas(windowWidth, windowHeight);
}