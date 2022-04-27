class Asteroid extends Star {
    constructor(speed, position, size, flameColor) {
        super(speed, position, size);
        this.flameColor = flameColor;
    }
    draw() {
        rect(this.position[0], this.position[1], this.size);
    }
    move() {
        this.draw();
        if (this.position[0] > 0) {
            this.position[0] -= this.speed/100;
        } else {
            this.position[0] = windowWidth - 1;
        }
    }
}