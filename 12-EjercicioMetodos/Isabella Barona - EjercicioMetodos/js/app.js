function DisplayReceta(){
    document.getElementById('Seleccion').style.display='block';
    document.getElementById('Opt').style.display='none';
}

function Atras(){
    document.getElementById('Seleccion').style.display='none';
    document.getElementById('Opt').style.display='flex';
}

    var Uno ="<br><br><b>1. </b>"
    var Dos ="<br><br><b>2. </b>"
    var Tres ="<br><br><b>3. </b>"
    var Cuatro ="<br><br><b>4. </b>"
    var Cinco ="<br><br><b>5. </b>"
    var Seis ="<br><br><b>6. </b>"
    var Siete ="<br><br><b>7. </b>"
    var Ocho ="<br><br><b>8. </b>"
    var Nueve ="<br><br><b>9. </b>"
    var Punto = "<br><br><b>• </b>"
    
    var Plátano = "Plátano"
    var Sal = "Sal"
    var Aceite = "Aceite vegetal"
    var Pelar = "Pelar y cortar el plátano en porciones medianas"
    var Freir = "Freír en aceite a temperatura media hasta que este dorado"
    var Aplastar = "Aplastar el plátano en medio de una bolsa de plástico"
    var Pasar = "Pasar por papel absorbente"

    function MostrarTitulo(){
            const LISTA_Receta = document.getElementById("Titulo");
            LISTA_Receta.innerHTML = '';
            var tag = document.createElement("p");
                tag.innerHTML = `Carimañola`;
                LISTA_Receta.appendChild(tag);
    }

    function MostrarPorciones(){
        const LISTA_Receta = document.getElementById("Porc");
        LISTA_Receta.innerHTML = '';
        var tag = document.createElement("p");
            tag.innerHTML = `4`;
            LISTA_Receta.appendChild(tag);
}

    function MostrarTiempo(){
        const LISTA_Receta = document.getElementById("Tiem");
        LISTA_Receta.innerHTML = '';
        var tag = document.createElement("p");
            tag.innerHTML = `50 min`;
            LISTA_Receta.appendChild(tag);
    }

    function MostrarIng(){
        const LISTA_Receta = document.getElementById("Ing");
        LISTA_Receta.innerHTML = '';
        var tag = document.createElement("p");
        tag.innerHTML = Punto +'Carne de cerdo (500 gr)' + Punto + 'Yuca (750 gr)' + Punto + Aceite + ' (1/2 taza)';
        LISTA_Receta.appendChild(tag); 
    }

    function MostrarProce(){
        const LISTA_Receta = document.getElementById("Proce");
        LISTA_Receta.innerHTML = '';
        var tag = document.createElement("p");
        tag.innerHTML = Uno + `Pelar la yuca y cocinarla en agua` + Dos + 'Cortar la carne y sofreírla' + Tres + 'Hacer una masa con la yuca y la sal' + Cuatro + 'Tomar porciones de masa y darle forma de huevo, y hacer un hueco en el centro' + Cinco + 'Rellenar con la carne y cerrarla' + Seis + Freir + Siete + Pasar;
        LISTA_Receta.appendChild(tag); 
    }