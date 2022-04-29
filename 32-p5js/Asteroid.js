class Asteroid extends Star {
    constructor(speed, position, size, direction) {
        super(speed, position, size, direction);
    }
    draw() {
        rect(this.position[0], this.position[1], this.size);
    }
    move() {
        this.draw();
        if (this.direction) {
            if (this.position[0] < windowWidth) {
                this.position[0] += this.speed;
            } else {
                this.position[0] = 0;
            }
        } else {
            if (this.position[0] > 0) {
                this.position[0] -= this.speed;
            } else {
                this.position[0] = windowWidth;
            }
        }
    }
}