//window.onload=function(){alert('Holi. Pido perdón por adelantado :C');}

/*const AgregarSirope = () => {
    document.getElementById("Recetas").innerHTML = "*Agrega una cucharada de sirope de";
}

const AgregarHielo = () => {
    document.getElementById ("Recetas"). innerHTML= "*Llena tu taza favorita con hielo.";
}

const AgregarEspresso = () => {
    document.getElementById ("Recetas"). innerHTML= "*Vierte un shot de espresso en tu taza favorita.";
}

const HacerEspuma = () => {
    document.getElementById ("Recetas"). innerHTML= "*Realiza una espuma utilizando la leche tibia.";
}

const AgregarLeche = () => {
    document.getElementById ("Recetas"). innerHTML= "*Vierte la leche en tu taza.";
}

const Revolver = () => { 
    document.getElementById ("Recetas"). innerHTML= "*Revuelve muy bien.";
}

const Disfrutar = () => {
    document.getElementById ("Recetas"). innerHTML= "¡Disfruta de tu preparación!";
}

const HandleReceta = (e) => {
    const Obj1 = {
        0: AgregarSirope(), 
        1: AgregarHielo(), 
        2: AgregarEspresso(), 
        3: HacerEspuma(), 
        4: AgregarLeche(), 
        5: AgregarSirope(),
    }
    let counter = 0 
    setInterval(() => {
        console.log(counter++)
    },1000);
}*/

/*const HandleReceta = (e) => {
    var registroPasos = [AgregarSirope(), 
        AgregarHielo(), 
        AgregarEspresso(), 
        HacerEspuma(), 
        AgregarLeche(), 
        AgregarSirope()];
var contador;
 for( contador=0; contador < 6; contador++ ) {
     document.write(registroPasos[contador] + "<br/>");
 }
}*/

var Sirope = "*Agrega una cucharada de sirope de"
var Hielo = "*Llena tu taza favorita con hielo."
var Espresso = "*Vierte un shot de espresso en tu taza favorita."
var Espuma = "*Realiza una espuma utilizando la leche tibia."
var Leche = "*Vierte la leche en tu taza."
var Revolver = "*Revuelve muy bien."
var Disfrutar = "*¡Disfruta de tu preparación!";
var Enter = "<br>"

let paso = 0;

function Receta1() {
    paso1()
    let empty = "";
    if(paso === 1) {
        const Pasos = document.getElementById("Receta1")
    Pasos.innerHTML = Sirope + 'chocolate' + Enter + Hielo + Enter + Espresso + Enter + Espuma + Enter + Leche + Enter + Revolver + Enter + '*Agrega crema batida y ralladura de chocolate al gusto' + Enter + Disfrutar;
    empty = document.getElementById("Receta2");
    empty = document.getElementById("Receta3");
    }
    
}

function Receta2() {
paso2();
let empty = "";
    if(paso === 2){
        const Pasos = document.getElementById("Receta2")
        Pasos.innerHTML = Espresso + Enter + Hielo + Enter + Sirope + 'vainilla.' + Enter + Sirope + 'caramelo.' + Enter + Espuma + Enter + Leche + Revolver + Enter + Disfrutar;
        empty = document.getElementById("Receta1");
        empty = document.getElementById("Receta3");
    }
   
}

function Receta3() {
    paso3();
    let empty = "";
    if(paso === 3){
        const Pasos = document.getElementById("Receta3")
        Pasos.innerHTML = Sirope + 'vainilla.' + Enter + Espresso + Enter + Espuma + Enter + Leche + Enter + Disfrutar;
        empty = document.getElementById("Receta1");
        empty = document.getElementById("Receta2");
    }
    
}

if (document.getElementById(Receta1).style.display === "block") {
    document.getElementById(Receta2).style.display = "none";
    document.getElementById(Receta3).style.display = "none";
}

function Volver() {
    document.getElementById('HandleRecetas').style.display = 'none';
}

function paso1() {
    paso = 1;
}
function paso2() {
    paso = 2;
}
function paso3() {
    paso = 3;
}