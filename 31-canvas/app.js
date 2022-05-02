var canvas = document.getElementById("canvas");
let rect1 = [100,100];
let rect2 = [60,60];
let rect3 = [50,50];
const ctx = canvas.getContext('2d');

function drawShape() {
    console.log('g');
    ctx.fillRect(25,25,rect1[0],rect1[1]);
    ctx.clearRect(45,45,rect2[0],rect2[1]);
    ctx.strokeRect(50,50,rect3[0],rect3[1]);

    if (rect1[0] <= 300) {
        console.log('q');
        rect1[0] += 50;
        rect1[1] += 50;
        rect2[0] += 50;
        rect2[1] += 50;
        rect3[0] += 50;
        rect3[1] += 50;
    } else {
        console.log('b');
        rect1 = [100,100];
        rect2 = [60,60];
        rect3 = [50,50];
    }
};

setInterval(drawShape, 100);