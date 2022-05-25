const canvas=document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width=1024;
canvas.height=576;

c.fillRect(0,0,canvas.width,canvas.height)
const gravedad =0.7;

class Backjug{
    constructor({posicion,animacion,atkdir}){
    this.posicion = posicion;
    this.animacion = animacion;
    this.width =50;
    this.height = 150;
    this.ultimatecla;
    this.ataque={
        position: {
            x:this.posicion.x,
            y:this.posicion.y
        },
        atkdir,
        width:100,
        height:50
    };
    this.atacando;
    this.salud=100;
    }
    enviarjug(){
        c.fillStyle='blue';
        c.fillRect(this.posicion.x, this.posicion.y,this.width,this.height);
        if(this.atacando){
            c.fillStyle='red';
        c.fillRect(this.ataque.position.x, this.ataque.position.y,this.ataque.width,this.ataque.height);
        }
    }
    actualizar(){
        this.enviarjug();
        this.ataque.position.x=this.posicion.x + this.ataque.atkdir.x;
        this.ataque.position.y=this.posicion.y;
        this.posicion.x += this.animacion.x;
        this.posicion.y += this.animacion.y;

        if (this.posicion.y + this.height + this.animacion.y >= canvas.height) {
            this.animacion.y=0;
        } else {this.animacion.y += gravedad};

    }
    atacar() {
        this.atacando=true
        setTimeout(() => {
            this.atacando=false
        }, 100);
    } 
}
const jugador= new Backjug({
    posicion:{
       x:0,
       y:0
    },
    animacion:{
       x:0,
       y:0
    },
    atkdir:{
       x:0,
       y:0
    }
   });
   
   const rival= new Backjug({
   posicion:{
       x:400,
       y:100
   },
   animacion:{
        x:0,
        y:0
   },
   atkdir:{
       x:-50,
       y:0
   }
});
 const teclas ={
     a:{
        presionado: false
     },
     d:{
        presionado: false
     },
     ArrowLeft:{
         presionado: false
     },
     ArrowRight:{
         presionado: false
     }
}
function herir({herir1, herir2}) {
    return (
        herir1.ataque.position.x + herir1.ataque.width >= herir2.posicion.x && 
        herir1.ataque.position.x <= herir2.posicion.x + herir2.width && 
        herir1.ataque.position.y + herir1.ataque.height >= herir2.posicion.y && 
        herir1.ataque.position.y <= herir2.posicion.y + herir2.height 
    )
}
 function animar() {
     window.requestAnimationFrame(animar);
     c.fillStyle ='black'
     c.fillRect(0,0,canvas.width,canvas.height);
     jugador.actualizar();
     rival.actualizar(); 
     jugador.animacion.x=0;
     rival.animacion.x=0;
     
     if (teclas.a.presionado && jugador.ultimatecla === 'a'){
         jugador.animacion.x =-5;
     } else if (teclas.d.presionado && jugador.ultimatecla === 'd'){
         jugador.animacion.x =5;
     }
     if (teclas.ArrowLeft.presionado && rival.ultimatecla === 'ArrowLeft'){
         rival.animacion.x =-5;
     } else if (teclas.ArrowRight.presionado && rival.ultimatecla=== 'ArrowRight'){
         rival.animacion.x =5;
     }
     if (herir({herir1:jugador,herir2:rival})&&jugador.atacando) {
        jugador.atacando =false;
        rival.salud -= 20;
        document.getElementById("sostenriv").style.width= rival.salud + '%';
     }
     if (herir({herir1:rival,herir2:jugador})&&rival.atacando) {
        rival.atacando =false;
        jugador.salud -= 20;
        document.getElementById("sostenjug").style.width= jugador.salud + '%';
     }
}
 animar();
 window.addEventListener('keydown', (ptecla) =>{
switch (ptecla.key) {
    case 'd':
        teclas.d.presionado=true;
        jugador.ultimatecla='d';
        break;
    case 'a':
        teclas.a.presionado=true;
        jugador.ultimatecla='a';
        break;
    case 'w':
        if (jugador.animacion.y !=0) {
            break;
        } else {
            jugador.animacion.y=-20;   
        }
        break;
    case ' ':
        jugador.atacar();
        break;
    case 'ArrowRight':
        teclas.ArrowRight.presionado=true;
        rival.ultimatecla='ArrowRight';
        break;
    case 'ArrowLeft':
        teclas.ArrowLeft.presionado=true;
        rival.ultimatecla='ArrowLeft';
        break;
    case 'ArrowUp':
        if (rival.animacion.y !=0) {
            break;
        } else {
            rival.animacion.y=-20;   
        }
        break;
    case 'ArrowDown':
        rival.atacar();
        break;
        }
    })
    window.addEventListener('keyup', (ptecla) =>{
        switch (ptecla.key) {
        case 'd':
            teclas.d.presionado=false;
            break;   
        case 'a':
            teclas.a.presionado=false;
            break;
        case 'ArrowRight':
            teclas.ArrowRight.presionado=false;
        break;
        case 'ArrowLeft':
            teclas.ArrowLeft.presionado=false;
        break;
        } 
    })