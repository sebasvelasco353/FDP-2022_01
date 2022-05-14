let ball;
let ballPosition = [0, 0];
const map = [
    [1, 2, 3 ],
    [4, 5, 6 ],
    [7, 8, 9 ],
];

/*
* 0 -> obstaculo
* 1 espacio libre
* 2 powerup
*/

function setup() {
    createCanvas(windowWidth, windowHeight);
    ball = new Ball(ballPosition, 100);
}

function draw() {
    background(220);
    drawMap();
    ball.paint();
    if (keyIsPressed === true) {
        handleKeyPressed(keyCode);
    }
}

function drawMap() {
    let width = windowWidth/3;
    let height = windowHeight/3;

    for (let x = map.length-1; x >= 0; x--) {
        for (let y = map.length-1; y >= 0; y--) {
            fill(map[x][y] === 0 ? 0 : 255);
            rect(x*width, y*height, width, height);
        }
    }
}

function handleKeyPressed(key) {
    // arriba
    if ((key === 38) && (ballPosition[1] > 0) && (ballPosition[1]-1 !== 0)) ballPosition[1] = ballPosition[1] - 1;
    // abajo
    if ((key === 40) && (ballPosition[1] < 2)) ballPosition[1] = ballPosition[1] + 1;
    // izquierda
    if ((key === 37) && (ballPosition[0] > 0)) ballPosition[0] = ballPosition[0] - 1;
    // derecha
    if ((key === 39) && (ballPosition[0] < 2)) ballPosition[0] = ballPosition[0] + 1;
    console.log(map[ballPosition[1]][ballPosition[0]]);
}