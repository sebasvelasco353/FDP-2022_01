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

var paises = ['Afganistán','Albania','Alemania','Andorra','Angola','Antigua y Barbuda','Arabia Saudita','Argelia','Argentina','Armenia','Australia','Austria','Azerbaiyán','Bahamas','Bangladés','Barbados','Baréin','Bélgica','Belice','Benín','Bielorrusia','Birmania','Bolivia','Bosnia y Herzegovina','Botsuana','Brasil','Brunéi','Bulgaria','Burkina Faso','Burundi','Bután','Cabo Verde','Camboya','Camerún','Canadá','Catar','Chad','Chile','China','Chipre','Ciudad del Vaticano','Colombia','Comoras','Corea del Norte','Corea del Sur','Costa de Marfil','Costa Rica','Croacia','Cuba','Dinamarca','Dominica','Ecuador','Egipto','El Salvador','Emiratos Árabes Unidos','Eritrea','Eslovaquia','Eslovenia','España','Estados Unidos','Estonia','Etiopía','Filipinas','Finlandia','Fiyi','Francia','Gabón','Gambia','Georgia','Ghana','Granada','Grecia','Guatemala','Guyana','Guinea','Guinea ecuatorial','Guinea-Bisáu','Haití','Honduras','Hungría','India','Indonesia','Irak','Irán','Irlanda','Islandia','Islas Marshall','Islas Salomón','Israel','Italia','Jamaica','Japón','Jordania','Kazajistán','Kenia','Kirguistán','Kiribati','Kuwait','Laos','Lesoto','Letonia','Líbano','Liberia','Libia','Liechtenstein','Lituania','Luxemburgo','Madagascar','Malasia','Malaui','Maldivas','Malí','Malta','Marruecos','Mauricio','Mauritania','México','Micronesia','Moldavia','Mónaco','Mongolia','Montenegro','Mozambique','Namibia','Nauru','Nepal','Nicaragua','Níger','Nigeria','Noruega','Nueva Zelanda','Omán','Países Bajos','Pakistán','Palaos','Palestina','Panamá','Papúa Nueva Guinea','Paraguay','Perú','Polonia','Portugal','Reino Unido','República Centroafricana','República Checa','República de Macedonia','República del Congo','República Democrática del Congo','República Dominicana','República Sudafricana','Ruanda','Rumanía','Rusia','Samoa','San Cristóbal y Nieves','San Marino','San Vicente y las Granadinas','Santa Lucía','Santo Tomé y Príncipe','Senegal','Serbia','Seychelles','Sierra Leona','Singapur','Siria','Somalia','Sri Lanka','Suazilandia','Sudán','Sudán del Sur','Suecia','Suiza','Surinam','Tailandia','Tanzania','Tayikistán','Timor Oriental','Togo','Tonga','Trinidad y Tobago','Túnez','Turkmenistán','Turquía','Tuvalu','Ucrania','Uganda','Uruguay','Uzbekistán','Vanuatu','Venezuela','Vietnam','Yemen','Yibuti','Zambia','Zimbabue'];
var grupoSanguineo = ['A+', 'B+', 'O+', 'AB+', 'A-', 'B-', 'O-', 'AB-']






function countryselect() {
    
    
    for (var i in paises) {
        document.getElementById("nationality").innerHTML += "<option value='"+paises[i]+"'>"+paises[i]+"</option>";
    }
}

countryselect()



function bloodTSelect() {
    
    for (var i in grupoSanguineo){
        document.getElementById("bloodt").innerHTML +="<option value='"+grupoSanguineo[i]+"'>"+grupoSanguineo[i]+"</option>"
    }
}

bloodTSelect()


/*
function ageConditional() {
    
    var age = document.getElementById("age").value;
    
    if(age < 50) {
        
        
    }
}
*/

function registeredFName() {
    var name = document.getElementById("fname");

    if(name === "") {

        return false;
    }

    else{

        return true;
    }
}


function registeredLName() {
    
    var lastname = document.getElementById("lastname");

    if(lastname === "") {

        return false;
    }

    else{

        return true;
    }
}


function registeredData() {
    var regFName = registeredFName();
    var regLName = registeredLName();
    if(regFName === true && regLName === true ) {
        alert("Registrado correctamente")
    }
    else {
        alert("No se ha podido registrar. Verifica tus datos")
    }
}
var userAge = document.getElementById("age");
var height = document.getElementById("height");
var country = document.getElementById("nationality");
var bloodType = document.getElementById("bloodt");
