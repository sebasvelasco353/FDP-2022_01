class Toy {
    constructor(name, height, width, primaryColor) {
        this.name = name;
        this.height = height;
        this.width = width;
        this.primaryColor = primaryColor;
    }
    move() {
        console.log("Im moving");
    }
}

const funko502 = new Toy('funko502', 50, 20, 'red');
console.log(funko502.name);
funko502.move();