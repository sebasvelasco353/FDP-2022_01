const canvas=document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width=1024;
canvas.height=576;

c.fillRect(0,0,canvas.width,canvas.height)
const gravedad =0.7;


const fondo = new Fondo({
    posicion:{
        x: 0,
        y: 0
    },
    imageSrc:'./images/Escenario.png',
})
const buho = new Fondo({
    posicion:{
        x: 400,
        y: 5
    },
    imageSrc:'./images/decoracion.png',
    escala: 0.8,
    cuadrosTot:2,
    
})
const jugador= new Backjug({
    posicion:{
       x:0,
       y:10
    },
    animacion:{
       x:0,
       y:0
    },
    atkdir:{
       x:0,
       y:0
    },
    imageSrc:'./images/Kaguyakieta.png',
    escala:1.2,
    cuadrosTot:4,
    comandos:{
        quieta:{
            imageSrc:'./images/Kaguyakieta.png',
            cuadrosTot:4,
        },
        moverse:{
            imageSrc: './images/Kaguyacaminar.png',
            cuadrosTot:4,
        },
        salto:{
            imageSrc: './images/Kaguyasalto.png',
            cuadrosTot:2,
        },
        caida:{
            imageSrc: './images/Kaguyacaida.png',
            cuadrosTot:2,
        },
        espadazo:{
            imageSrc: './images/Kaguyaespada.png',
            cuadrosTot:6,
        },
        golpeada:{
            imageSrc: './images/Kaguyahit.png',
            cuadrosTot:4,
        },
        muerta:{
            imageSrc: './images/Kaguyaderrota.png',
            cuadrosTot:6,
        },
    }
   });
   
   const rival= new Backjug({
   posicion:{
       x:400,
       y:110
   },
   animacion:{
        x:0,
        y:0
   },
   atkdir:{
       x:-50,
       y:0
   },
   imageSrc:'./images/Yuzurukieta.png',
   escala:1.2,
   cuadrosTot:4, 
   comandos:{
    quieta:{
        imageSrc:'./images/Yuzurukieta.png',
        cuadrosTot:4,
    },
    moverse:{
        imageSrc: './images/Yuzurucaminar.png',
        cuadrosTot:4,
    },
    salto:{
        imageSrc: './images/Yuzurusalto.png',
        cuadrosTot:2,
    },
    caida:{
        imageSrc: './images/Yuzurucaida.png',
        cuadrosTot:2,
    },
    espadazo:{
        imageSrc: './images/Yuzuruespada.png',
        cuadrosTot:6,
    },
    golpeada:{
        imageSrc: './images/Yuzuruhit.png',
        cuadrosTot:4,
    },
    muerta:{
        imageSrc: './images/Yuzuruderrota.png',
        cuadrosTot:6,
    },
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

let tiempo=61;

function contador(){
    if (tiempo>1)
        setTimeout(contador, 1000)
        {tiempo--
            document.getElementById("timer").innerHTML = tiempo;
        }
    if (tiempo === 0){
        ganadora({jugador,rival});
    }
}
 function animar() {
     window.requestAnimationFrame(animar);
     c.fillStyle ='black'
     c.fillRect(0,0,canvas.width,canvas.height);
     fondo.pintar();
     buho.pintar();
     buho.movimiento();
     c.fillStyle='rgba(255,255,255,0.1';
     c.fillRect(0,0,canvas.width,canvas.height);
     jugador.actualizar();
     rival.actualizar(); 
     jugador.animacion.x=0;
     rival.animacion.x=0;
     
     
     if (teclas.a.presionado && jugador.ultimatecla === 'a'){
         jugador.animacion.x =-5;
         jugador.alternarcomando('moverse');
        } else if (teclas.d.presionado && jugador.ultimatecla === 'd'){
         jugador.animacion.x =5;
         jugador.alternarcomando('moverse');
     } else{
        jugador.alternarcomando('quieta');
     }
     if (jugador.animacion.y<0){
        jugador.alternarcomando('salto');
     }else if (jugador.animacion.y>0){
        jugador.alternarcomando('caida');
     }
     if (teclas.ArrowLeft.presionado && rival.ultimatecla === 'ArrowLeft'){
         rival.animacion.x =-5;
         rival.alternarcomando('moverse');
     } else if (teclas.ArrowRight.presionado && rival.ultimatecla=== 'ArrowRight'){
         rival.animacion.x =5;
         rival.alternarcomando('moverse');
     }else{
        rival.alternarcomando('quieta');
     }
     if (rival.animacion.y<0){
        rival.alternarcomando('salto');
     }else if (rival.animacion.y>0){
        rival.alternarcomando('caida');
     }
     if (herir({herir1:jugador,herir2:rival})&&jugador.atacando) {
        jugador.atacando =false;
        rival.golpe();
        sonidoY.play();
        
        gsap.to("#sostenriv",{
            width:rival.salud + '%'
        })
     }
     if (herir({herir1:rival,herir2:jugador})&&rival.atacando) {
        rival.atacando =false;
        jugador.golpe();
        sonidoK.play();
        
        gsap.to("#sostenjug",{
            width:jugador.salud + '%'
        })
     }
     if (jugador.salud<=0 || rival.salud<=0){
        document.getElementById("timer").innerHTML = '0';
        ganadora({jugador,rival});
     }
}
 animar();
 window.addEventListener('keydown', (ptecla) =>{
    switch (ptecla.key){
    case 'm':
        sonidoA.play();
        break;
    case 'p':
        sonidoA.pause();
        break;
    }    
    if (!jugador.morir){
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
            
        }
    }
    if (!rival.morir){
        switch (ptecla.key){
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
    contador();