const cargarSonido = function (source) {
    const sonido = document.createElement("audio");
    sonido.src = source;
    return sonido;
};
const sonidoK = cargarSonido('./images/hitK.mp3');
const sonidoY = cargarSonido('./images/hitY.mp3');
const sonidoD = cargarSonido('./images/derrota.mp3');
const sonidoA = cargarSonido('./images/ambiente.mp3');


class Fondo{
    constructor({posicion,imageSrc,escala=1, cuadrosTot=1}){
    this.posicion = posicion;
    this.width =50;
    this.height = 150;
    this.image= new Image ();
    this.image.src= imageSrc;
    this.escala=escala;
    this.cuadrosTot=cuadrosTot;
    this.cuadroActual = 0;
    this.ping=0;
    this.ms=55;
}
    pintar(){
        c.drawImage(this.image,
           this.cuadroActual * (this.image.width / this.cuadrosTot),
            0, 
            this.image.width / this.cuadrosTot,
            this.image.height,
            this.posicion.x, 
            this.posicion.y, 
            (this.image.width/this.cuadrosTot) * this.escala, 
            this.image.height * this.escala);

    }
    movimiento(){
        this.ping++
        if(this.ping % this.ms===0){
            if (this.cuadroActual<this.cuadrosTot-1){
            this.cuadroActual++;
            }else {
            this.cuadroActual=0;
            }
        }
    }
}
class Backjug extends Fondo {
    constructor({posicion,animacion,atkdir,imageSrc,escala=1, cuadrosTot=1,comandos}){
        super({
            posicion,
            imageSrc,
            escala,
            cuadrosTot,
        })
    this.image= new Image ();
    this.image.src= imageSrc;
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
    this.cuadroActual = 0;
    this.ping=0;
    this.ms=5;
    this.comandos=comandos;
    this.morir=false;
        for(const comando in this.comandos){
            comandos[comando].image = new Image();
            comandos[comando].image.src=comandos[comando].imageSrc;
        }
    }
  
    actualizar(){
        this.pintar();
        if (!this.morir){
            this.movimiento();
        }
        
        this.ataque.position.x=this.posicion.x + this.ataque.atkdir.x;
        this.ataque.position.y=this.posicion.y;
        this.posicion.x += this.animacion.x;
        this.posicion.y += this.animacion.y;
        

        if (this.posicion.y + this.height + this.animacion.y >= canvas.height-100) {
            this.animacion.y=0;
            this.posicion.y=326
        } else {this.animacion.y += gravedad};
    }
    atacar() {
        this.alternarcomando('espadazo');
        this.atacando=true
        setTimeout(() => {
            this.atacando=false
        }, 100);
    }
    golpe(){
        this.salud -= 20;
        if(this.salud<=0){
            this.alternarcomando('muerta');
            sonidoD.play();
        }else this.alternarcomando('golpeada');
    }
    alternarcomando(comando){
        if (this.image === this.comandos.muerta.image){
            if (this.cuadroActual===this.comandos.muerta.cuadrosTot-1) 
            this.morir = true
        return};
        if (this.image === this.comandos.espadazo.image && this.cuadroActual<this.comandos.espadazo.cuadrosTot-1)
        return;
        if (this.image === this.comandos.golpeada.image && this.cuadroActual<this.comandos.golpeada.cuadrosTot-1)
        return;
        switch (comando){
            case 'quieta':
                if(this.image!==this.comandos.quieta.image){
                    this.image=this.comandos.quieta.image;
                    this.cuadrosTot=this.comandos.quieta.cuadrosTot;
                    this.cuadroActual=0;
                }
                break;
            case 'moverse':
                if(this.image!==this.comandos.moverse.image){
                    this.image=this.comandos.moverse.image;
                    this.cuadrosTot=this.comandos.moverse.cuadrosTot;
                    this.cuadroActual=0;
                }
                break;
            case 'salto':
                if(this.image!==this.comandos.salto.image){
                    this.image=this.comandos.salto.image;
                    this.cuadrosTot=this.comandos.salto.cuadrosTot;
                    this.cuadroActual=0;
                }
                break;
            case 'caida':
                if(this.image!==this.comandos.caida.image){
                    this.image=this.comandos.caida.image;
                    this.cuadrosTot=this.comandos.caida.cuadrosTot;
                    this.cuadroActual=0;
                }
                break;
            case 'espadazo':
                if(this.image!==this.comandos.espadazo.image){
                    this.image=this.comandos.espadazo.image;
                    this.cuadrosTot=this.comandos.espadazo.cuadrosTot;
                    this.cuadroActual=0;
                }
                break;
            case 'golpeada':
                if(this.image!==this.comandos.golpeada.image){
                    this.image=this.comandos.golpeada.image;
                    this.cuadrosTot=this.comandos.golpeada.cuadrosTot;
                    this.cuadroActual=0;
                }
                break;
            case 'muerta':
                if(this.image!==this.comandos.muerta.image){
                    this.image=this.comandos.muerta.image;
                    this.cuadrosTot=this.comandos.muerta.cuadrosTot;
                    this.cuadroActual=0;
                }
                break;
        }
    } 
}