class Star {
    constructor(speed, position, size) {
        this.speed = speed;
        this.position = position;
        this.size = size;
    }
    draw() {
        ellipse(this.position[0], this.position[1], this.size);
    }
    move() {
        this.draw();
        if (this.position[0] < windowWidth) {
            this.position[0] += this.speed/100;
        } else {
            this.position[0] = 0;
        }
    }
}