class Star {
    constructor(speed, position, size, direction) {
        this.speed = speed;
        this.position = position;
        this.size = size;
        this.direction = direction;
    }
    draw() {
        ellipse(this.position[0], this.position[1], this.size);
    }
    move() {
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
        this.draw();
    }
}