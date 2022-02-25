function verReceta(){
    document.getElementById("escogida").style.display='block';
    document.getElementById("opciones").style.display='none';
}

    var harina = "harina"
    var azucar = "azucar"
    var polvohornear = " polvo para hornear"
    var huevos = "huevos"
    var leche = "leche"
    var mantequilla = "mantequilla"
    var esenciavainilla= "esencia de vainilla"
    var precalentar = "Precalentar el horno a"
    var engrasar = "Engrasar el molde con mantequilla y enharinar"
    var sacarhorno = "Para sacar la torta primero asegurate de que la torta está lista, "
    var desmoldar = " dejar enfriar y desmoldar"
    var servir = "puedes servir y disfrutar esta delicia"
    var aceite = "aceite"

    var Uno ="<br><br><b> 1. </b>"
    var Dos ="<br><br><b> 2. </b>"
    var Tres ="<br><br><b> 3. </b>"
    var Cuatro ="<br><br><b> 4. </b>"
    var Cinco ="<br><br><b> 5. </b>"
    var Seis ="<br><br><b> 6. </b>"
    var Siete ="<br><br><b> 7. </b>"
    var Ocho ="<br><br><b> 8. </b>"
    var Nueve ="<br><br><b> 9. </b>"
    var Diez ="<br><br><b> 10. </b>"
    var Once ="<br><br><b> 11. </b>"
    var Doce ="<br><br><b> 12. </b>"
    var Punto = "<br><br><b> • </b>"

function receta1() {
const nombre = document.getElementById("nombre");
     nombre.innerHTML = '';
    var tag = document.createElement("p");
        tag.innerHTML = 'torta de naranja';
        nombre.appendChild(tag); 

const tiemporeceta = document.getElementById("tiempo");
     tiemporeceta.innerHTML = '';
    var tag = document.createElement("p");
        tag.innerHTML = `hora y 30 minutos`;
        tiemporeceta.appendChild(tag);
       
const porcionesreceta = document.getElementById("porciones");
  porcionesreceta.innerHTML = '';
    var tag = document.createElement("p");
        tag.innerHTML = `8 porciones`;
        porciones.appendChild(tag);

const Ingredientes = document.getElementById("Ingredientes");
     Ingredientes.innerHTML = '';
    var tag = document.createElement("p")
    tag.innerHTML = Punto + harina + Punto + azucar + Punto + polvohornear  + Punto  + aceite + Punto + Punto + huevos + Punto + 'Kumis' + Punto + + leche + Punto + 'Zumo de naranja y rayadura';
        Ingredientes.appendChild(tag); 

const Pasos = document.getElementById("Pasos");
     Pasos.innerHTML = '';
    var tag = document.createElement("p");
    tag.innerHTML = Uno + precalentar + '180ºC' + Dos +  'Pasar por un colador la harina, polvo para hornear' + Tres + 'Añadir de manera alternada los huevos, el azúcar y la mezcla de harina, hasta integrar.' + Cuatro + 'Agregar el yogurt, aceite leche. Batir hasta que no haya grumos.' + Cinco + engrasar + Seis + 'Verter la mezcla en un recipiente y hornear durante 35 minutos o hasta que esté bien cocido.' + Siete + sacar + Ocho + desmoldar + Nueve + servir ;
        Pasos.appendChild(tag); 
}

function receta2() {
const nombre = document.getElementById("nombrereceta");
     nombre.innerHTML = '';
    var tag = document.createElement("p");
        tag.innerHTML = 'Torta de banano';
        nombre.appendChild(tag); 
            
const tiemporeceta = document.getElementById("tiemporeceta");
     tiemporeceta.innerHTML = '';
    var tag = document.createElement("p");
        tag.innerHTML = `hora y 30 minutos`;
        tiemporeceta.appendChild(tag);
                   
const porciones = document.getElementById("porcionesreceta");
     porciones.innerHTML = '';
    var tag = document.createElement("p");
        tag.innerHTML = `8 porciones`;
        porciones.appendChild(tag);
            
const Ingredientes = document.getElementById("Ingredientes");
     Ingredientes.innerHTML = '';
    var tag = document.createElement("p")
        tag.innerHTML = Punto + harina + Punto + 'Bananos'+ Punto + azucar + Punto + 'bicarbonato' + Punto + aceite + Punto + Punto + huevos + Punto + esenciavainilla + Punto + leche;
        ;
        Ingredientes.appendChild(tag); 
            
const Pasos = document.getElementById("Pasos");
     Pasos.innerHTML = '';
    var tag = document.createElement("p");
        tag.innerHTML = Uno + precalentar + '180ºC' + Dos +  'Pasar por un colador la harina, bicarbonato' + Tres + 'Añadir de manera alternada los huevos, el azúcar, la vainilla y la mezcla de harina, hasta integrar.' + Cuatro+ 'Agregar el aceite y leche. Batir hasta que no haya grumos.' + Cinco + engrasar + Seis + 'Verter la mezcla en un recipiente y hornear durante 35 minutos o hasta que esté bien cocido.' + Siete + sacar + Ocho + desmoldar + Nueve + servir ;
        Pasos.appendChild(tag); 
}

function receta3() {
const nombre = document.getElementById("nombrereceta");
     nombre.innerHTML = '';
    var tag = document.createElement("p");
        tag.innerHTML = 'torta de piña';
        nombre.appendChild(tag); 
                      
const tiempo = document.getElementById("tiemporeceta");
      tiempo.innerHTML = '';
     var tag = document.createElement("p");
         tag.innerHTML = 'hora y 30 minutos';
         tiempo.appendChild(tag);
                             
const porciones = document.getElementById("porcionesreceta");
      porciones.innerHTML = '';
     var tag = document.createElement("p");
         tag.innerHTML = '8 porciones';
         porciones.appendChild(tag);
                      
const Ingredientes = document.getElementById("Ingredientes");
      Ingredientes.innerHTML = '';
     var tag = document.createElement("p")
     tag.innerHTML = Punto + harina + Punto + Punto +  azucar + Punto + polvohornear + Punto + mantequilla + Punto + huevos + Punto + esenciavainilla + Punto +'Piña' ;
         Ingredientes.appendChild(tag); 

const Pasos = document.getElementById("Pasos");
      Pasos.innerHTML = '';
     var tag = document.createElement("p");
         tag.innerHTML = Uno + precalentar + '180ºC' + Dos +  'Pasar por un colador la harina y polvo de hornear' + Tres + 'Añadir de manera alternada los huevos, el azúcar, la vainilla y la mezcla de harina, hasta integrar.' + Cuatro+ 'Agregar la mantequilla. Batir hasta que no haya grumos.' + Cinco + engrasar + Seis + 'Verter la mezcla en un recipiente y hornear durante 35 minutos o hasta que esté bien cocido.' + Siete + sacar + Ocho + desmoldar + Nueve + servir ;
         Pasos.appendChild(tag);
}

function volver(){
    document.getElementById("escogida").style.display='none';
    document.getElementById("opciones").style.display='flex';
}