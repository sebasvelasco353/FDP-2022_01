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

function Receta1(){

    const Title = document.getElementById("Titulo");
    Title.innerHTML = '';
        var tag = document.createElement("p");
            tag.innerHTML = `Carimañola`;
            Title.appendChild(tag);

    const Porc = document.getElementById("Porc");
    Porc.innerHTML = '';
        var tag = document.createElement("p");
            tag.innerHTML = `4`;
            Porc.appendChild(tag);

    const Tiem = document.getElementById("Tiem");
    Tiem.innerHTML = '';
        var tag = document.createElement("p");
            tag.innerHTML = `50 min`;
            Tiem.appendChild(tag);   
                
    const Ing = document.getElementById("Ing");
    Ing.innerHTML = '';
        var tag = document.createElement("p");
            tag.innerHTML = Punto +'Carne de cerdo (500 gr)' + Punto + 'Yuca (750 gr)' + Punto + Aceite + ' (1/2 taza)';
            Ing.appendChild(tag); 

    const Proce = document.getElementById("Proce");
    Proce.innerHTML = '';
        var tag = document.createElement("p");
            tag.innerHTML = Uno + `Pelar la yuca y cocinarla en agua` + Dos + 'Cortar la carne y sofreírla' + Tres + 'Hacer una masa con la yuca y la sal' + Cuatro + 'Tomar porciones de masa y darle forma de huevo, y hacer un hueco en el centro' + Cinco + 'Rellenar con la carne y cerrarla' + Seis + Freir + Siete + Pasar;
            Proce.appendChild(tag); 
    }
    
function Receta2(){

    const Title = document.getElementById("Titulo");
    Title.innerHTML = '';
        var tag = document.createElement("p");
            tag.innerHTML = `Patacones`;
            Title.appendChild(tag);

    const Porc = document.getElementById("Porc");
    Porc.innerHTML = '';
        var tag = document.createElement("p");
            tag.innerHTML = `8`;
            Porc.appendChild(tag);

    const Tiem = document.getElementById("Tiem");
    Tiem.innerHTML = '';
        var tag = document.createElement("p");
            tag.innerHTML = `15 min`;
            Tiem.appendChild(tag);   
                
    const Ing = document.getElementById("Ing");
    Ing.innerHTML = '';
        var tag = document.createElement("p");
            tag.innerHTML = Punto + Plátano + ' verde (2)' + Punto + Aceite + Punto + Sal;
            Ing.appendChild(tag); 

    const Proce = document.getElementById("Proce");
    Proce.innerHTML = '';
        var tag = document.createElement("p");
            tag.innerHTML = Uno + Pelar + Dos + Freir + Tres + Pasar + Cuatro + 'Deje enfriar las rodajas de plátano durante 3 minutos' + Cinco + Aplastar + ' con una superficie plana ' + Seis + 'Sumergir cada rebanada en agua con sal' + Siete + Freir + Ocho + Pasar;
            Proce.appendChild(tag); 
    }

function Receta3(){

    const Title = document.getElementById("Titulo");
    Title.innerHTML = '';
        var tag = document.createElement("p");
            tag.innerHTML = `Maduros Aborrajados`;
            Title.appendChild(tag);

    const Porc = document.getElementById("Porc");
    Porc.innerHTML = '';
        var tag = document.createElement("p");
            tag.innerHTML = `2`;
            Porc.appendChild(tag);

    const Tiem = document.getElementById("Tiem");
    Tiem.innerHTML = '';
        var tag = document.createElement("p");
            tag.innerHTML = `30 min`;
            Tiem.appendChild(tag);   
                
    const Ing = document.getElementById("Ing");
    Ing.innerHTML = '';
        var tag = document.createElement("p");
            tag.innerHTML = Punto + Plátano + ' maduro (1)' + Punto + 'Queso Mozzarella (50 gr)' + Punto + 'Harina (2 cucharadas)' + Punto + 'Huevo (1)' + Punto + 'Leche (80 ml)' + Punto + Sal + ' y azúcar (1 pizca)' + Punto + Aceite;
            Ing.appendChild(tag); 

    const Proce = document.getElementById("Proce");
    Proce.innerHTML = '';
            var tag = document.createElement("p");
                tag.innerHTML = Uno + Pelar + Dos + Freir + Tres + Aplastar + Cuatro + 'Poner queso en el medio' + Cinco + 'Cerrar el plátano y darle forma de cilindro' + Seis + 'Aparte, batir el huevo, la leche, la harina, la sal y el azúcar' + Siete + 'Agregar el aborrajado en la mezcla anterior' + Ocho + Freir + Nueve + Pasar;;
                Proce.appendChild(tag);      
    }