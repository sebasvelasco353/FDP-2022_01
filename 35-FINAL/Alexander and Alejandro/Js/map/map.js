// map main
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// canvas properties
canvas.width = innerWidth;
canvas.height = innerHeight;

// count the points of player 
const point = document.querySelector('#point');
const startGame = document.querySelector('#StartGame');
const containerScore = document.querySelector('#background');
const endPoint= document.querySelector('#scoretEnd');

// object player
class Player{
    constructor(x, y, radius, velocity){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.velocity = velocity;
    }
    draw() {
        const imgHuman = new Image();
        imgHuman.src = './assets/player/Human3.png';
        ctx.drawImage(imgHuman, (canvas.width/2 - imgHuman.width/2) + imgHuman.width/4.2, canvas.height/2 - imgHuman.height/4.8);
    }
};

// coordenate of the player
const x = canvas.width / 2; 
const y = canvas.height / 2;

// arrays 
let player = new Player (x, y, 24);
let projectiles = [];
let enemies = [];

function resetGame(){
    player = new Player (x, y, 24);
    projectiles = [];
    enemies = [];
    score = 0;
    point.innerHTML = score;
}

addEventListener('keypress',(event) =>{
    console.log(event);
})

// move the player
function keyPressed() {
    if(keyPressed === UP_ARROW){
        player.y -= 5;
    }
    if(keyPressed === DOWN_ARROW){
        player.y += 5;
    }
    if(keyPressed === LEFT_ARROW){
        player.x -= 5;
    }
    if(keyPressed === RIGHT_ARROW){
        player.x += 5;
    }
}

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
        const imgBullet = new Image();
        imgBullet.src = './assets/bullet/bullet7.png';
        ctx.drawImage(imgBullet, this.x, this.y)
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
        const imgEnemy = new Image();
        imgEnemy.src = './assets/enemy/Zombie3.png';
        ctx.drawImage(imgEnemy, this.x, this.y)
    }
    update(){
        this.draw()
        this.x = this.x + this.velocity.x,
        this.y = this.y + this.velocity.y
    }
    
};

// spawnEnemies
function spawnEnemies(){
    setInterval(() =>{
        const radius = 40;

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
        const angle = Math.atan2(canvas.width / 2 - x, canvas.height / 2 - y );
        const velocity = {
            x: Math.sin(angle),
            y: Math.cos(angle)
        }
        enemies.push(new Enemy(x, y, radius, color, velocity))
    }, 1000)
};

let idAnimation;
let score = 0;

// animation projectile
function animation(){
    idAnimation = requestAnimationFrame(animation)
    const imgBg = new Image();
    imgBg.src = './assets/background/Jungle2.jpg'
    ctx.drawImage(imgBg,0 ,0)
    imgBg.width = ctx.width;
    imgBg.height = ctx.height;
    ctx.fillStyle= 'rgba(0, 0, 0, 0.008)';
    ctx.fillRect( 0, 0, canvas.width, canvas.height);

    projectiles.forEach((projectile, index) => {
        projectile.update();
        player.draw();

        // end the game
        if(projectile.x + projectile.radius < 0 ||
           projectile.x - projectile > canvas.width ||
           projectile.y + projectile < 0 ||
           projectile.y - projectile > canvas.height){
            setTimeout(() => {
                projectiles.splice(index, 1);
            }, 0);
        }
    })

// condition to hit the enemy and player
        enemies.forEach((enemy, index) => {
            enemy.update();
         const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y)
            
        //  end game
         if (dist - enemy.radius - player.radius < 1){
            cancelAnimationFrame(idAnimation);
            containerScore.style.display = 'flex';
            endPoint.innerHTML = score;
         }

        // condition to hit the bullet and the enemy
        projectiles.forEach((projectile, projectileIndex) => {
            const dist = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y)
            if (dist - enemy.radius - projectile.radius < 1)
            {
               if(enemy.radius - 12 > 6){
                    // increase points
                    score += 100;
                    point.innerHTML = score;

                    setTimeout(() => {
                        enemies.splice(index, 1);
                        projectiles.splice(projectileIndex, 1);
                    }, 0);
                }
            }
        })
    })
};

// event click the bullet
addEventListener('click', (event) =>{
    const angle = Math.atan2(event.clientX - canvas.width / 2, event.clientY - canvas.height / 2);
    const velocity = {
        x: Math.sin(angle) * 3,
        y: Math.cos(angle) * 3,
    }
    projectiles.push(new Projectile(
        canvas.width / 2,
        canvas.height / 2,
        8,
        'orange',
        velocity
    ))
});

//  event for star and reset the game 
startGame.addEventListener('click', () =>{
    resetGame()
    animation();
    spawnEnemies();
    containerScore.style.display = 'none';
});

// event to make the canvas fit the screen
addEventListener('resize',()=>{
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    ctx.width = canvas.width;
    ctx.height = canvas.height;
});
