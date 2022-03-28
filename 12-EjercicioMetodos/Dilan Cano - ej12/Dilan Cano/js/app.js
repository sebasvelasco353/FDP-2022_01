var pasar = "<br>"
var prepa = "<h4>Preparación:</h4>"

//Ingredientes
var pasoAUno = "<li>Cocina las papas en agua suficiente para cubrirlas hasta que al insertar un cuchillo, cueste un poco de trabajo sacarlo; escúrrelas, pélalas y córtalas en trozos; reserva."
var pasoADos = "<li>Licua los jitomates con los chiles, la cebolla y el ajo para hacer una salsa, cuela en un recipiente y reserva."
var pasoATres = "<li>Fríe los bisteces en una sartén con aceite, cuando estén cocidos añade la salsa y las papas; sazona con sal y pimienta."
var pasoACuatro = "<li>Tapa el recipiente y cocina a fuego medio hasta que el caldillo se haya reducido."
var pasoBUno = "<li>En un recipiente mezcla los ajos, los chiles, la salsa de soya, el jugo de limón, el aceite de oliva, sal y pimienta."
var pasoBDos = "<li>Incorpora los bisteces (procura que queden cubiertos y si es necesario, añade más soya y jugo de limón en partes iguales) y refrigera durante 30 minutos."
var pasoBTres = "<li>Para hacer la guarnición: derrite la mantequilla en una sartén, agrega las papas, espolvorea las hierbas finas y fríelas hasta que estén doradas; retira del fuego, tapa el recipiente para mantenerlas calientes y reserva."
var pasoBCuatro = "<li>En otra sartén fríe los bisteces hasta que estén cocidos (añade la marinada conforme se necesite); retíralos."
var final = "<li>Reparte los bisteces entre las porciones y acompaña con papas y jitomate."
var pasoCUno = "<li>Calienta 3 cucharadas de aceite y fríe ligeramente los chiles; ponlos en una cacerola con 1 litro de agua."
var pasoCDos = "<li>En la misma grasa sofríe los ajos y la cebolla; ponlos con los chiles y cocina a fuego medio hasta que suelte el hervor y los chiles estén suaves."
var pasoCTres = "<li>Licua lo anterior con 1/4 de taza del agua de cocción, hasta obtener una mezcla homogénea; cuélala. Calienta 2 cucharadas de aceite en una cacerola a fuego bajo, vierte lo licuado, sazona con el comino, orégano, sal y pimienta y cocina hasta que hierva."
var pasoCCuatro = "<li>Incorpora los frijoles y los bisteces, pon la tapa del trasto y cocina hasta que éstos estén cocidos. Acompaña con tortillas."


const Pasos = document.getElementById("VerRecetas")

function Receta1() {
    Pasos.innerHTML = prepa + pasar + pasoAUno + pasoADos + pasoATres + pasoACuatro + final;
}
    

function Receta2() {
    Pasos.innerHTML = prepa + pasar + pasoBUno + pasoBDos + pasoBTres + pasoBCuatro + final;
}
   

function Receta3() {
    Pasos.innerHTML = prepa + pasar + pasoCUno + pasoCDos + pasoCTres + pasoCCuatro + final;
    }
    

if (document.getElementById(Receta1).style.display === "block") {
    document.getElementById(Receta2).style.display = "none";
    document.getElementById(Receta3).style.display = "none";
}

function Volver() {
    document.getElementById('VerRecetas').innerHTML = '';
}

