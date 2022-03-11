function Displayreceta(){
    document.getElementById('opt').style.display = 'none';
    document.getElementById('InfoRecetas').style.display = 'block';
}

function volver(){
    document.getElementById('InfoRecetas').style.display = 'none';
    document.getElementById('opt').style.display = 'block';
}

var linea = "-"
var Mantequilla = "Mantequilla <br>";
var Langostino = "Langostino <br>";
var Ajo = "Ajo <br>";
var Cilantro = "Cilantro <br>";
var Limón = "Limón <br>";
var sal = "sal <br>";
var Aguacate = "Aguacate <br>";
var Camarón= "Camarón <br>";

var Pelar = "Pelamos la proteina, eliminado la cáscara <br>"; 
var Limpiar = "Limpiamos la proteina de manera adecuada <br>"; 
var Picar = "Picamos los ingredientes <br>"; 
var Bowl = "Juntamos los ingredientes en un bowl <br>"; 

function receta1(){
    const Ingredientes = document.getElementById("Ingredientes");
    Ingredientes.innerHTML = '';
    var IngredientsText = document.createElement("p");
    IngredientsText.innerHTML = linea + Mantequilla + linea + Langostino + linea + Ajo + linea + Cilantro + linea + Limón + linea + sal;
    Ingredientes.appendChild(IngredientsText);
    console.log(IngredientsText);

    const Pasos = document.getElementById("Pas");
    Pasos.innerHTML = '';
    var PasosText = document.createElement("p");
    PasosText.innerHTML = linea + Pelar + linea + Limpiar + linea + Bowl + linea + 'Con la plancha bien caliente y la mantequilla derretida, colocamos los langostinos';
    Ingredientes.appendChild(PasosText);
    console.log(PasosText);

}

function receta2(){
    const Ingredientes = document.getElementById("Ingredientes");
    Ingredientes.innerHTML = '';
    var IngredientsText = document.createElement("p");
    IngredientsText.innerHTML = linea + Aguacate + linea + Cilantro + linea + Limón + linea + sal;
    Ingredientes.appendChild(IngredientsText);
    console.log(IngredientsText);

    const Pasos = document.getElementById("Pas");
    Pasos.innerHTML = '';
    var PasosText = document.createElement("p");
    PasosText.innerHTML = linea + Bowl + linea + Limpiar + linea + 'Cortar los aguacates por la mitad <br>' + linea + 'Poner una parrilla al fuego';
    Ingredientes.appendChild(PasosText);
    console.log(PasosText);

}

function receta3(){
    const Ingredientes = document.getElementById("Ingredientes");
    Ingredientes.innerHTML = '';
    var IngredientsText = document.createElement("p");
    IngredientsText.innerHTML = linea + Mantequilla + linea + Camarón + linea + Cilantro + linea + Limón + linea + sal;
    Ingredientes.appendChild(IngredientsText);
    console.log(IngredientsText);

    const Pasos = document.getElementById("Pas");
    Pasos.innerHTML = '';
    var PasosText = document.createElement("p");
    PasosText.innerHTML = linea + Pelar + linea + Limpiar + Bowl + linea + 'Dejar cocinar por unos minutos hasta que tome cuerpo';
    Ingredientes.appendChild(PasosText);
    console.log(PasosText);

}