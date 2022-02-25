function Displayreceta(){
    document.getElementById('opt').style.display = 'none';
    document.getElementById('InfoRecetas').style.display = 'block';
}

function volver(){
    document.getElementById('InfoRecetas').style.display = 'none';
    document.getElementById('opt').style.display = 'block';
}

var Mantequilla = "- Mantequilla <br>";
var Langostino = "- Langostino <br>";
var Ajo = "- Ajo <br>";
var Cilantro = "- Cilantro <br>";
var Limón = "- Limón <br>";
var sal = "- sal <br>";
var Aguacate = "- Aguacate <br>";
var Camarón= "- Camarón <br>";


function receta1(){
    const Ingredientes = document.getElementById("Ingredientes");
    Ingredientes.innerHTML = '';
    var IngredientsText = document.createElement("h3");
    IngredientsText.innerHTML = Mantequilla + Langostino + Ajo + Cilantro + Limón + sal;
    Ingredientes.appendChild(IngredientsText);
    console.log(IngredientsText);

    const Pasos = document.getElementById("Pas");
    Pasos.innerHTML = '';
    var PasosText = document.createElement("h3");
    PasosText.innerHTML = Mantequilla + Langostino;
    Ingredientes.appendChild(PasosText);
    console.log(PasosText);

}