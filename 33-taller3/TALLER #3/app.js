/*funciones
Canvas crear un lienzo
Dos número dentro de la función, primero ancho y segundo alto
Todo va a estar en la esquina sup izq
Resize para que se acomode la figura cuando se cambia de tamaño el nav

let x = 40;
let y= 40;

function setup(){

    createCanvas(windowWidth,windowHeight, 500);
    background(200);

}

function draw(){
   //ellipse (x, y, w, [h]) el x y el y son las cooredenadas
   //el w y el h el  ancho y el alto
   
   background(0, 0 , 255);   
   fill(255,255, 255);
   ellipse(x, y, 5, 15);
    y = y + 7

    
    
}

function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
    background(200);

}
*/

//FILTRO//

const url = "https://raw.githubusercontent.com/salazar2356/FDP-2022_01/main/33-taller3/weather.js";

const filterSelect = document.querySelector(".ciudades");
const ciudad = document.querySelector("ciudad");
const weeklyOverall = document.querySelector("semanaengeneral");
const daily = document.querySelector("diario")

let api;
let city;
let weeklyOverall;
let daily;
let day;
let celcius;


async function run(){

    const contenido = await fetch(url);

    api = await contenido.json();

    api.ciudades.forEach(element => {

        if(element.city === cities.value){
            
        }
        
    });

    if(api.lunes[0].daily[1].day){
        ciudad.className
    }

    
    
}
console.log(filterSelect)
filterSelect.addEventListener('change',()=>{
    console.log(filterSelect.value)
})