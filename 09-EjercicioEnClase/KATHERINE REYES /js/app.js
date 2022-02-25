function mostrarreceta(){
     document.getElementById('seleccionada').style.display='block';
     document.getElementById('galeria-port').style.display='none';

function regresar(){
     document.getElementById('seleccionada').style.display='none';
     document.getElementById('galeria-port').style.display='flex';

    var Uno ="<br><br><b> 1. </b>"
    var Dos ="<br><br><b> 2. </b>"
    var Tres ="<br><br><b> 3. </b>"
    var Cuatro ="<br><br><b> 4. </b>"
    var Cinco ="<br><br><b> 5. </b>"
    var Seis ="<br><br><b> 6. </b>"
    var Siete ="<br><br><b> 7. </b>"
    var Ocho ="<br><br><b> 8. </b>"
    var nueve ="<br><br><b> 9. </b>"
    var Punto = "<br><br><b>• </b>"

    var harina = "tazas de harina"
    var azucar = "tazas de azucar"
    var polvohornear = "1 cucharada de polvo para hornear"
    var huevos = "huevos (yema y claras separadas)"
    var leche = "tazas de leche"
    var mantequilla = "tazas de mantequilla con sal"
    var esenciavainilla= "1 cucharadita de esencia de vainilla"
    var precalentar = "Precalentar el horno a"
    var engrasar = "Engrasar el molde con mantequilla o aceite"
    var derretir = "derretir la mantequilla en el microhondas en lapsos de 30 segundos"
    var sacar = "sacar la preparación del horno"
    var desmoldar = " dejar enfriar y desmoldar"
    var servir = "puedes servir y disfrutar esta delicia"

function receta1() {
const nombrereceta = document.getElementById("nombrereceta");
     nombrereceta.innerHTML = '';
    var tag = document.createElement("p");
        tag.innerHTML = 'Cupcakes';
        nombrereceta.appendChild(tag); 

const tiemporeceta = document.getElementById("tiemporeceta");
     tiemporeceta.innerHTML = '';
    var tag = document.createElement("p");
        tag.innerHTML = `40 minutos`;
        tiemporeceta.appendChild(tag);
       
const porcionesreceta = document.getElementById("porcionesreceta");
  porcionesreceta.innerHTML = '';
    var tag = document.createElement("p");
        tag.innerHTML = `24`;
        porcionesreceta.appendChild(tag);

const Ingredientes = document.getElementById("Ingredientes");
     Ingredientes.innerHTML = '';
    var tag = document.createElement("p")
        tag.innerHTML = Punto + '4' + harina + Punto + '2' +  azucar + Punto + polvohornear + '1 cucharadita de sal' + Punto + '2' + leche + Punto + '2' +  huevos + Punto + esenciavainilla + Punto + '2' + mantequilla + Punto + 'betun de vainilla' + Punto + '1 taza de arandanos deshidratados';
        Ingredientes.appendChild(tag); 

const Pasos = document.getElementById("Pasos");
     Pasos.innerHTML = '';
    var tag = document.createElement("p");
        tag.innerHTML = Uno + precalentar + '220ºC' + Dos + 'En un bol grande combinar la harina, la azúcar, el polvo para hornear, los arándanos y la sal.' + Tres + derretir + Cuatro + 'En un recipiente pequeño bate los huevos junto con la leche, la mantequilla derretida y la vainilla. + Cinco + Coloca la mezcla de ingredientes líquidos en la de ingredientes secos, integrando y batiendo bien, poco a poco.' + Seis + 'En un molde para cupcakes poner capacillos y servir la mezcla hasta 3/4 de lleno para que no se desborde. Meter al horno durante 20 minutos.' + Siete + sacar + Ocho + desmoldar + Ocho + 'Decorar con el betún de vainilla.' + Nueve + servir ;
        Pasos.appendChild(tag); 
    

function receta2() {
const nombrereceta = document.getElementById("nombrereceta");
     nombrereceta.innerHTML = '';
    var tag = document.createElement("p");
        tag.innerHTML = 'Cupcakes';
        nombrereceta.appendChild(tag); 
            
const tiemporeceta = document.getElementById("tiemporeceta");
     tiemporeceta.innerHTML = '';
    var tag = document.createElement("p");
        tag.innerHTML = `40 minutos`;
        tiemporeceta.appendChild(tag);
                   
const porcionesreceta = document.getElementById("porcionesreceta");
     porcionesreceta.innerHTML = '';
    var tag = document.createElement("p");
        tag.innerHTML = `24`;
        porcionesreceta.appendChild(tag);
            
const Ingredientes = document.getElementById("Ingredientes");
     Ingredientes.innerHTML = '';
    var tag = document.createElement("p")
        tag.innerHTML = Punto + '3' + harina + Punto + '1/4 tazas de cocoa en polvo'+ Punto + '2' + azucar + Punto + polvohornear + Punto + '1 cucharadita de bicarbonato' + Punto + '2/3' + mantequilla + Punto + '1/2' + azucar + Punto + '2' + huevos ;
        Ingredientes.appendChild(tag); 
            
const Pasos = document.getElementById("Pasos");
     Pasos.innerHTML = '';
    var tag = document.createElement("p");
        tag.innerHTML = Uno + precalentar + '220ºC' + Dos + 'En un bol grande combinar la harina, la azúcar, el polvo para hornear, los arándanos y la sal.' + Tres + derretir + Cuatro + 'En un recipiente pequeño bate los huevos junto con la leche, la mantequilla derretida y la vainilla. + Cinco + Coloca la mezcla de ingredientes líquidos en la de ingredientes secos, integrando y batiendo bien, poco a poco.' + Seis + 'En un molde para cupcakes poner capacillos y servir la mezcla hasta 3/4 de lleno para que no se desborde. Meter al horno durante 20 minutos.' + Siete + sacar + Ocho + desmoldar + Ocho + 'Decorar con el betún de vainilla.' + Nueve + servir ;
        Pasos.appendChild(tag); 