const STARS = [];
const ASTEROIDS = [];

function setup() {
    frameRate(5);
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 6; i++) {
        STARS.push(
            new Star(((i + 1)), [0, Math.round(windowHeight/6 * i)], 20, true)
        );
        ASTEROIDS.push(
            new Asteroid(((i + 1)), [0, Math.round(windowHeight/6 * i)], 30, false)
        );
    }
}

function draw() {
    background(34);
    for (let i = 0; i < 6; i++) {
        STARS[i].move();
        ASTEROIDS[i].move();
    }
    verifyCollition();
}

function windowResized() {
    console.log('window has been resized');
    resizeCanvas(windowWidth, windowHeight);
}

function verifyCollition() {
    for (let i = 0; i < STARS.length; i++) {
        const star = STARS[i];
        const asteroid = ASTEROIDS[i];

        //console.log("star pos: " + star.position[0]);
        //console.log("ast pos: " + asteroid.position[0]);
        //console.log("star pos right: " +(star.position[0] + star.size));

        if ((star.position[0] < asteroid.position[0]) && (asteroid.position[0] < (star.position[0] + star.size))) {
            console.log("se choco este man");
            star.direction != star.direction;
            asteroid.direction != asteroid.direction;
        }
    }
}