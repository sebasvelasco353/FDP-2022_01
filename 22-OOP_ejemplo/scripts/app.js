class Pelota {
    constructor(posX, posY, speed) {
        this.posX = posX;
        this.posY = posY;
        this.speed = speed;
    }
    move() {
        if (this.dir()) {
            this.posX += this.speed;
        } else {
            this.posX -= this.speed;
        }
    }
    dir() {
        // TODO: tenemos que completar el movimiento de rebote... como lo hacemos?
        if (this.posX <= windowWidth && this.posX >= 0) return true;
        return false;
    }
    draw() {
        ellipse(this.posX, this.posY, 50, 50);
    }
};

// TODO: como hago si quiero tener muchas, por ejemplo 150?
// TODO: necesito que cuando la pelota se golpee con una pared diga "Auch!"

const ball = new Pelota(100, 100, 10);

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(220);
    ball.draw();
    ball.move();
}