// map main
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// canvas properties
canvas.width = innerWidth;
canvas.height = innerHeight;

// object player
class Player{
    constructor(x, y, radius, color){
        this.x = x;
        this.y = y,
        this.radius = radius;
        this.color = color;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};

const x = canvas.width / 2; 
const y = canvas.height / 2;

const player = new Player (x, y, 32, 'darkblue');

// object bullet
class Projectile{
    constructor(x, y, radius, color, velocity){
        this.x = x;
        this.y = y,
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    update(){
        this.draw()
        this.x = this.x + this.velocity.x,
        this.y = this.y + this.velocity.y
    }
};

// object enemy
class Enemy{
    constructor(x, y, radius, color, velocity){
        this.x = x;
        this.y = y,
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    update(){
        this.draw()
        this.x = this.x + this.velocity.x,
        this.y = this.y + this.velocity.y
    }
};

// arrays bullet and enemies
const projectiles = [];
const enemies = [];

// spawnEnemies
function spawnEnemies(){
    setInterval(() =>{
        const radius = Math.random() * (32 - 12) + 12;

        let x;
        let y;

        if(Math.random() < 0.5){
         x = Math.random() < 0.5 ? 0 - radius: canvas.width + radius;
         y = Math.random() * canvas.height;
        } else{
             y = Math.random() < 0.5 ? 0 - radius: canvas.width + radius;
             x = Math.random() * canvas.width;
        }
        const color = 'red';
        const angle = Math.atan2(canvas.width / 2- x, canvas.height / 2 - y );
        const velocity = {
            x: Math.sin(angle),
            y: Math.cos(angle)
        }
        enemies.push(new Enemy(x, y, radius, color, velocity))
    }, 1000)
};

// animation projectile
function animation(){
    requestAnimationFrame(animation)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    player.draw()
    projectiles.forEach((projectile) => {
        projectile.update();
    })

        enemies.forEach((enemy, index) => {
         enemy.update();

// condition to hit the bullet and the enemy
        projectiles.forEach((projectile, projectileIndex) => {
            const dist = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y)
            if (dist - enemy.radius - projectile.radius < 1)
            enemies.splice(index, 1);
            projectiles.splice(projectileIndex, 1);
        })
    })
};

addEventListener('click', (event) =>{
    const angle = Math.atan2(event.clientX - canvas.width / 2, event.clientY - canvas.height / 2);
    const velocity = {
        x: Math.sin(angle),
        y: Math.cos(angle)
    }
    projectiles.push(new Projectile(
        canvas.width / 2,
        canvas.height / 2,
        8,
        'lightblue',
        velocity
    ))
});

animation();
spawnEnemies();
