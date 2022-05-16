class Ball {
    constructor(position, size) {
        this.position = position;
        this.size = size;

        this.posWidth = (windowWidth/3);
        this.posHeight = (windowHeight/3);
        
        this.movementInput = {
            "87": -this.posWidth,
            "83": this.posWidth,
            "65": -this.posHeight,
            "68": this.posHeight,
        }
    }
    getPosition() {
        //console.log(this.position);
        return [this.posWidth*this.position[0], this.posHeight*this.position[1]]; 
    }
    paint() {
        ellipse(this.getPosition()[0], this.getPosition()[1], this.size, this.size);
    }
}