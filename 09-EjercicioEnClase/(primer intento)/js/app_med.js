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
const paises = ['Afganistán','Albania','Alemania','Andorra','Angola','Antigua y Barbuda','Arabia Saudita','Argelia','Argentina','Armenia','Australia','Austria','Azerbaiyán','Bahamas','Bangladés','Barbados','Baréin','Bélgica','Belice','Benín','Bielorrusia','Birmania','Bolivia','Bosnia y Herzegovina','Botsuana','Brasil','Brunéi','Bulgaria','Burkina Faso','Burundi','Bután','Cabo Verde','Camboya','Camerún','Canadá','Catar','Chad','Chile','China','Chipre','Ciudad del Vaticano','Colombia','Comoras','Corea del Norte','Corea del Sur','Costa de Marfil','Costa Rica','Croacia','Cuba','Dinamarca','Dominica','Ecuador','Egipto','El Salvador','Emiratos Árabes Unidos','Eritrea','Eslovaquia','Eslovenia','España','Estados Unidos','Estonia','Etiopía','Filipinas','Finlandia','Fiyi','Francia','Gabón','Gambia','Georgia','Ghana','Granada','Grecia','Guatemala','Guyana','Guinea','Guinea ecuatorial','Guinea-Bisáu','Haití','Honduras','Hungría','India','Indonesia','Irak','Irán','Irlanda','Islandia','Islas Marshall','Islas Salomón','Israel','Italia','Jamaica','Japón','Jordania','Kazajistán','Kenia','Kirguistán','Kiribati','Kuwait','Laos','Lesoto','Letonia','Líbano','Liberia','Libia','Liechtenstein','Lituania','Luxemburgo','Madagascar','Malasia','Malaui','Maldivas','Malí','Malta','Marruecos','Mauricio','Mauritania','México','Micronesia','Moldavia','Mónaco','Mongolia','Montenegro','Mozambique','Namibia','Nauru','Nepal','Nicaragua','Níger','Nigeria','Noruega','Nueva Zelanda','Omán','Países Bajos','Pakistán','Palaos','Palestina','Panamá','Papúa Nueva Guinea','Paraguay','Perú','Polonia','Portugal','Reino Unido','República Centroafricana','República Checa','República de Macedonia','República del Congo','República Democrática del Congo','República Dominicana','República Sudafricana','Ruanda','Rumanía','Rusia','Samoa','San Cristóbal y Nieves','San Marino','San Vicente y las Granadinas','Santa Lucía','Santo Tomé y Príncipe','Senegal','Serbia','Seychelles','Sierra Leona','Singapur','Siria','Somalia','Sri Lanka','Suazilandia','Sudán','Sudán del Sur','Suecia','Suiza','Surinam','Tailandia','Tanzania','Tayikistán','Timor Oriental','Togo','Tonga','Trinidad y Tobago','Túnez','Turkmenistán','Turquía','Tuvalu','Ucrania','Uganda','Uruguay','Uzbekistán','Vanuatu','Venezuela','Vietnam','Yemen','Yibuti','Zambia','Zimbabue'];
const grupoSanguineo = ['A+', 'B+', 'O+', 'AB+', 'A-', 'B-', 'O-', 'AB-'];
let operacion
let datospaciente = [];
if (confirm("¿Se ha realizado alguna operación?")) {
    operacion=true;
    var label=document.createElement("label")
    label.innerHTML="¿Qué operación(es) se ha realizado?"
    var input=document.createElement("input"); input.setAttribute("id","operación")
    input.type="text"
    document.getElementById("container__content").appendChild(label);
    document.getElementById("container__content").appendChild(input);
} else {
    operacion=false;
}
const handleinfopaciente = () => {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var estatura = document.getElementById("estatura").value;
    var fuma = document.getElementById("fuma").value;
    var edad = document.getElementById("edad").value;
    var nacionalidad = document.getElementById("nacionalidad").value;
    var gruposang = document.getElementById("gruposang").value;
    var operacion = document.getElementById("operacion").value;
    const registroObj = {
        nombre,
        apellido,
        estatura,
        fuma,
        edad,
        nacionalidad,
        gruposang,
        operacion
    }
    datospaciente.push(registroObj);
}
for (let i = 0; i < paises.length ; i++) {
    const tempObj = paises[i];
    var option = document.createElement("option");
    option.text=tempObj
    option.value=tempObj
    document.getElementById("nacionalidad").appendChild(option);
}
for (let i = 0; i <grupoSanguineo.length ; i++) {
    const tempObj = grupoSanguineo[i];
    var option = document.createElement("option");
    option.text=tempObj
    option.value=tempObj
    document.getElementById("gruposang").appendChild(option);
}
let age=datospaciente[4]
if (age>49) {
    var label2=document.createElement("label")
    label2.innerHTML="¿Se ha realizado pruebas de colesterol y triglicéridos en los ultimos 6 meses?"
    var input2=document.createElement("input")
    input2.type="select"
    document.getElementById("container__content").appendChild(label2);
    document.getElementById("container__content").appendChild(input2);
    
} else {
    var label3=document.createElement("label")
    label3.innerHTML="¿Se ha realizado pruebas de azucar en los ultimos 3 meses?"
    var input3=document.createElement("input")
    input3.type="select"
    document.getElementById("container__content").appendChild(label3);
    document.getElementById("container__content").appendChild(input3);
}
console.log(edad);
