class Ball {
    constructor(posX, posY, size) {
        this.posX = posX;
        this.posY = posY;
        this.size = size;
        this.movementInput = {
            "87": -5,
            "83": 5,
            "65": -5,
            "68": 5,
        }
    }
    paint() {
        ellipse(this.posX, this.posY, this.size, this.size);
    }
    move(key) {
        if(parseInt(key) === 87 || parseInt(key) === 83) this.posY += this.movementInput[key];
        if(parseInt(key) === 65 || parseInt(key) === 68) this.posX += this.movementInput[key];
    }
}