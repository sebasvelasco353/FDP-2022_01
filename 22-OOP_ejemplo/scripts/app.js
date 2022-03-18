class Pelota {
    constructor(posX, posY, speed, index) {
        this.posX = posX;
        this.posY = posY;
        this.speed = speed;
        this.index = index;
        this.direccion = true;
    }
    move() {
        this.dir();
        if (this.direccion) {
            this.posX += this.speed;
        } else {
            this.posX -= this.speed;
        }
    }
    dir() {
        if (this.posX > windowWidth) this.direccion = !this.direccion;
        if (this.posX < 0) this.direccion = !this.direccion;

    }
    setDireccion() {
        this.direccion = !this.direccion;
    }
    draw() {
        ellipse(this.posX, this.posY, 50, 50);
    }
}
const PELOTAS = [];

for (let index = 0; index < 2; index++) {
    console.log(index);
    PELOTAS.push(new Pelota(randomIntFromInterval(0, window.innerWidth), 
    300, 10, index));
}

console.log(PELOTAS);

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function draw() {
    background(220);
    for (let i = 0; i < PELOTAS.length; i++) {
        const elementMain = PELOTAS[i];
        elementMain.draw();
        elementMain.move();
        for (let j = 0; j < PELOTAS.length; j++) {
            const element = PELOTAS[j];
            console.log(`${elementMain.posX} && ${element.posX}`)
            if ((elementMain.posX === element.posX) && (elementMain.index !== element.index)) {
                elementMain.setDireccion();
                console.log("SE ME CHOCARON");
            }
        }
    }
}
