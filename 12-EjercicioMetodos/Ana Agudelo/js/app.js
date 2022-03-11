var contenedor = document.getElementById("textoReceta");

let ol = document.createElement("p");

let li4 = document.createElement("p");
let li4Texto = document.createTextNode("Pista: Cocina la papa");
li4.appendChild(li4Texto);

ol.appendChild(li4);

let ul = document.createElement("ul");

let li1 = document.createElement("li");
let li1Texto = document.createTextNode("4 papas");
li1.appendChild(li1Texto);
             
let li2Texto = document.createTextNode("4 huevos");
let li2 = document.createElement("li");
li2.appendChild(li2Texto);


let li3Texto = document.createTextNode("1/3 de taza de harina");
let li3 = document.createElement("li");
li3.appendChild(li3Texto);

let li5Texto = document.createTextNode("1 taza de queso Cotija fresco");
let li5 = document.createElement("li");
li5.appendChild(li5Texto);

let li6Texto = document.createTextNode("1 taza de aceite");
let li6 = document.createElement("li");
li6.appendChild(li6Texto);

let li7Texto = document.createTextNode("2 tazas de leche");
let li7 = document.createElement("li");
li7.appendChild(li7Texto);

let li8Texto = document.createTextNode("5 cucharadas de mantequilla");
let li8 = document.createElement("li");
li8.appendChild(li8Texto);

let li9Texto = document.createTextNode("1 cucharada de mantequilla");
let li9 = document.createElement("li");
li9.appendChild(li9Texto);

let li10Texto = document.createTextNode("1 taza de queso gruyére rallado");
let li10 = document.createElement("li");
li10.appendChild(li10Texto);

let li11Texto = document.createTextNode("2 cucharadas de perejil picado");
let li11 = document.createElement("li");
li11.appendChild(li11Texto);

//Imprimir ingredientes

const verReceta = (Receta) => {
    console.log(Receta);

    ul.innerHTML = "";
    contenedor.innerHTML = "";

    switch (Receta) {
        
        case "receta1": //mostrar la primera receta
         
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.appendChild(li5);
        ul.appendChild(li6);

        console.log(contenedor);
        contenedor.appendChild(ul);
        
        document.body.appendChild(ol);
                           
        break;

        case "receta2": //mostrar la primera receta 

        ul.appendChild(li1);
        ul.appendChild(li7);
        ul.appendChild(li8);

        console.log(contenedor);
        contenedor.appendChild(ul);

        document.body.appendChild(ol);    
       

        break;


        case "receta3": //mostrar la primera receta
        
        ul.appendChild(li1);
        ul.appendChild(li9);
        ul.appendChild(li10);
        ul.appendChild(li11);

        console.log(contenedor);
         
        contenedor.appendChild(ul);
        
        document.body.appendChild(ol);                
        break;
    
        default:
            break;
    }
}

function unaFuncion() {
    return "Hola profe";
}

const saludo = unaFuncion();
console.log(saludo);


//location.reload();

//crear metodo con el paso en común, llamo el paso en el moemnto en el que necesito que aparezca



/*
- El usuario Clickea alguno de los botones ++
- va a querer que le muestre la receta seleccionada (¿como hago los metodos para repetir pasos?)
- al darle clic, el boton llama al metodo para que muestre los pasos de la receta que el usuario eligio 
- un metodo imprime la receta, pero distingue al mismo tiempo las tres (????????) 
- La receta aparece en una ventana emergente (puede ser flotando o pasa de pagina) con los ingredientes de un lado y el proceso de otro

** las personas para salir y volver a la pag principal pueden dar clic por fuera si la ventana emergente es flotante
** o dale clic al nombre prncipal de la web para volver a  la pagina de inicio
*/