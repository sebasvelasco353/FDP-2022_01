const PasosNaranja= "Ingredientes: Harina <br>- Leche - Azúcar - Aceite - Zumo de Naranja y Ralladura de Naranja - Polvo de hornear - Huevos";

function TortaNaranja(){
    var Paso1 = PasosNaranja; 
    return Paso1;
}

const mostrarReceta = (receta) => {
    let ol = document.createElement("p");
    let ul = document.createElement("ul");
    switch(receta){
        case "receta3":
            let texto = document.createTextNode(TortaNaranja());
            ol.appendChild(texto);
        break;
    }
    
    document.body.appendChild(ol);

}
