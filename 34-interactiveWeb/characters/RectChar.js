class Rect {
    constructor(position, size) {
        this.position = position
        this.size = size;
        this.movementInput = {
            "38": -5,
            "40": 5,
            "37": -5,
            "39": 5,
        }
    }
    paint() {
        ellipse(this.posX, this.posY, this.size, this.size);
    }
    move(key) {
        console.log(this.movementInput[key]);
        if(key === 38 || key === 40) this.posY += this.movementInput[key];
        if(key === 37 || key === 39) this.posX += this.movementInput[key];
    }
}