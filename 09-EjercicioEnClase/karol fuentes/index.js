/*
* recuerden ver el planteamiento que esta en el README.md y pensar en cuales son las instrucciones que le tengo que dar al codigo para que X o Y cosa pase,
* les recomiendo hacer un mapa de ideas o cualquier ejercicio que les permita desglosar el problema, yo personalmente hago un mapa mental de lo que tiene
* que pasar para que ocurra lo que necesito, y asi tambien mantengo las cosas divididas, recuerden la importancia del orden y las funciones bien definidas.
*
* Eso ayuda mucho a que entendamos el problema y lo abordemos mas seguros de la razon por la que escribimo alguna cosa en el codigo.
*
* Cualquier duda recuerden que pueden preguntar durante la clase o en la seccion de preguntas del Repo.
*
* Muchos exitos.
*/

// Usen estas constantes para llenar los campos de seleccion.
const grupoSanguineo = ["A+", "B+", "O+", "AB+", "A-", "B-", "O-", "AB-"];
const paises = ["Afganistán","Albania","Alemania","Andorra","Angola","Antigua y Barbuda","Arabia Saudita","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiyán","Bahamas","Bangladés","Barbados","Baréin","Bélgica","Belice","Benín","Bielorrusia","Birmania","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","Brunéi","Bulgaria","Burkina Faso","Burundi","Bután","Cabo Verde","Camboya","Camerún","Canadá","Catar","Chad","Chile","China","Chipre","Ciudad del Vaticano","Colombia","Comoras","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia","Eslovenia","España","Estados Unidos","Estonia","Etiopía","Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia","Ghana","Granada","Grecia","Guatemala","Guyana","Guinea","Guinea ecuatorial","Guinea-Bisáu","Haití","Honduras","Hungría","India","Indonesia","Irak","Irán","Irlanda","Islandia","Islas Marshall","Islas Salomón","Israel","Italia","Jamaica","Japón","Jordania","Kazajistán","Kenia","Kirguistán","Kiribati","Kuwait","Laos","Lesoto","Letonia","Líbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Madagascar","Malasia","Malaui","Maldivas","Malí","Malta","Marruecos","Mauricio","Mauritania","México","Micronesia","Moldavia","Mónaco","Mongolia","Montenegro","Mozambique","Namibia","Nauru","Nepal","Nicaragua","Níger","Nigeria","Noruega","Nueva Zelanda","Omán","Países Bajos","Pakistán","Palaos","Palestina","Panamá","Papúa Nueva Guinea","Paraguay","Perú","Polonia","Portugal","Reino Unido","República Centroafricana","República Checa","República de Macedonia","República del Congo","República Democrática del Congo","República Dominicana","República Sudafricana","Ruanda","Rumanía","Rusia","Samoa","San Cristóbal y Nieves","San Marino","San Vicente y las Granadinas","Santa Lucía","Santo Tomé y Príncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somalia","Sri Lanka","Suazilandia","Sudán","Sudán del Sur","Suecia","Suiza","Surinam","Tailandia","Tanzania","Tayikistán","Timor Oriental","Togo","Tonga","Trinidad y Tobago","Túnez","Turkmenistán","Turquía","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Zimbabue"];
var nombre = document.getElementById("nombre");
var apellidos = document.getElementById("apellidos");
var estatura = document.getElementById("estatura");

/*cargar datos desde el array*/
//Codigo a Ejecutar al Cargar la Pagina
function loadContent() {
   cargar_paises()
   cargar_grupoSanguineo()
}


// funcion para cargar paises y grupo sanguíneo' al campo <select>
function cargar_paises() {
   const paises = ["Afganistán","Albania","Alemania","Andorra","Angola","Antigua y Barbuda","Arabia Saudita","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiyán","Bahamas","Bangladés","Barbados","Baréin","Bélgica","Belice","Benín","Bielorrusia","Birmania","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","Brunéi","Bulgaria","Burkina Faso","Burundi","Bután","Cabo Verde","Camboya","Camerún","Canadá","Catar","Chad","Chile","China","Chipre","Ciudad del Vaticano","Colombia","Comoras","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia","Eslovenia","España","Estados Unidos","Estonia","Etiopía","Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia","Ghana","Granada","Grecia","Guatemala","Guyana","Guinea","Guinea ecuatorial","Guinea-Bisáu","Haití","Honduras","Hungría","India","Indonesia","Irak","Irán","Irlanda","Islandia","Islas Marshall","Islas Salomón","Israel","Italia","Jamaica","Japón","Jordania","Kazajistán","Kenia","Kirguistán","Kiribati","Kuwait","Laos","Lesoto","Letonia","Líbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Madagascar","Malasia","Malaui","Maldivas","Malí","Malta","Marruecos","Mauricio","Mauritania","México","Micronesia","Moldavia","Mónaco","Mongolia","Montenegro","Mozambique","Namibia","Nauru","Nepal","Nicaragua","Níger","Nigeria","Noruega","Nueva Zelanda","Omán","Países Bajos","Pakistán","Palaos","Palestina","Panamá","Papúa Nueva Guinea","Paraguay","Perú","Polonia","Portugal","Reino Unido","República Centroafricana","República Checa","República de Macedonia","República del Congo","República Democrática del Congo","República Dominicana","República Sudafricana","Ruanda","Rumanía","Rusia","Samoa","San Cristóbal y Nieves","San Marino","San Vicente y las Granadinas","Santa Lucía","Santo Tomé y Príncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somalia","Sri Lanka","Suazilandia","Sudán","Sudán del Sur","Suecia","Suiza","Surinam","Tailandia","Tanzania","Tayikistán","Timor Oriental","Togo","Tonga","Trinidad y Tobago","Túnez","Turkmenistán","Turquía","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Zimbabue"];

   addOptions("paisorigen", paises);
}

function cargar_grupoSanguineo() {
   const grupoSanguineo = ["A+", "B+", "O+", "AB+", "A-", "B-", "O-", "AB-"];

   addOptions("rh", grupoSanguineo);
}


// Agregar opciones a un <select>
function addOptions(domElement, arr) {
   console.log(domElement, arr)
   var select = document.getElementById(domElement);
   console.log(select);

   for (value in arr) {
      var option = document.createElement("option");
      option.text = arr[value];
      select.add(option);
   }
}

// function addOptions(domElement, grupoSanguineo) {
//    var select = document.getElementsByName(domElement)[0];

//    for (value in grupoSanguineo) {
//       var option = document.createElement("option");
//       option.text = grupoSanguineo[value];
//       select.add(option);
//    }
// }


console.log(nombre);

console.log(apellidos);

console.log(estatura);


/*Condicionales de edad*/
function mostrarPrueba() {
   var edad = document.getElementById("edad").value;
   if (edad < 50) {
      console.log("-50");
      document.getElementById("divazucar").style.display = "block";
      document.getElementById("divcolesterol").style.display = "none";
      
   } else {
      console.log("+50");
      document.getElementById("divcolesterol").style.display = "block";
      document.getElementById("divazucar").style.display = "none";
   }
   
}

function datos() {
   

var fumador = document.getElementById("siFuma").checked;
var paisorigen = document.getElementById("paisorigen").value;
var nombre = document.getElementById("nombre").value;
var apellidos = document.getElementById("apellidos").value;
var rh = document.getElementById("rh").value;
var cirugias = document.getElementById("siCirugias").checked;
var estatura = document.getElementById("estatura").value;
var edad = document.getElementById("edad").value;
var siPruebacolesterol = document.getElementById("siPruebacolesterol").checked;
var siPruebaazucar = document.getElementById("siPruebaazucar").checked;
{
   console.log("nombre: " + nombre);
   console.log("apellidos: " + apellidos);
   console.log("estatura: " + estatura);
   console.log("edad: " + edad);
   console.log("Ha realizado prueba de colesterol: " + siPruebacolesterol);
   console.log("Ha realizado prueba de azúcar: " + siPruebaazucar);

   console.log("fumador: " + fumador);
   console.log("país de origen: " + paisorigen);
   console.log("RH: " + rh);
   console.log("cirugías anteriores: " + cirugias);
}
alert("Sus datos han sido registrados.")
}

