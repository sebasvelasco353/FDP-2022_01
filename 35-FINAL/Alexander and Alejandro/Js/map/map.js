// map main
const map = document.querySelector('canvas');
const ctx = map.getContext('2d');
map.width = innerWidth;
map.height = innerHeight;

// object enemies
class atack {
    constructor(x, y, radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

const enemy = new atack(map.width / 2, map.height / 2, 32, 'darkblue')

// object player
class defender {
    constructor(x, y, radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

const player = new defender(map.width / 2, map.height / 2, 32, 'darkblue');

// object bullet
class shoot {
    constructor(x, y, radius, color, velocity){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    update(){
        this.draw()
        this.x = this.x + this.velocity.x;
        this.y = this.y + this.velocity.y;
    }
}; 

// arrays
const bullets = []
const enemies = []

// spawnEnemies
function spawnEnemies(){
    setInterval(() => {
        const x = 100;
        const y = 100;
        const radius = 30;
        const color = 'red';
        const velocity = {
            x: 1,
            y: 1
        }
        enemies.push(new atack(x, y, radius, color, velocity))
        console.log(enemies);
    }, 500);
}

// animation bullet
function animation() {
    requestAnimationFrame(animation);
    ctx.clearRect(0, 0, map.width, map.height)
    player.draw();
    bullets.forEach(shoot => {
        shoot.update();
    });
}

// angle bullet
window.addEventListener('click', (event) =>{
    const angle = Math.atan2(event.clientX - map.width / 2, event.clientY- map.height / 2)

    const velocity = {
        x:Math.sin(angle),
        y:Math.cos(angle)
    }

    bullets.push(new shoot(
        map.width / 2, 
        map.height / 2,
        8,
        'lightblue',
        velocity
    ))
})

animation();
spawnEnemies();
