// Tu código JavaScript va aquí

var resgistroDatos =[];

const paises = ['Selecciona','Afganistán','Albania','Alemania','Andorra','Angola','Antigua y Barbuda', 'Arabia Saudita','Argelia','Argentina','Armenia','Australia','Austria','Azerbaiyán','Bahamas','Bangladés','Barbados','Baréin','Bélgica','Belice','Benín','Bielorrusia','Birmania','Bolivia','Bosnia y Herzegovina','Botsuana','Brasil','Brunéi','Bulgaria', 'Burkina Faso','Burundi','Bután','Cabo Verde','Camboya','Camerún','Canadá','Catar','Chad','Chile','China','Chipre','Ciudad del Vaticano','Colombia','Comoras','Corea del Norte', 'Corea del Sur','Costa de Marfil','Costa Rica','Croacia','Cuba','Dinamarca','Dominica','Ecuador','Egipto','El Salvador','Emiratos Árabes Unidos','Eritrea','Eslovaquia','Eslovenia','España', 'Estados Unidos','Estonia','Etiopía','Filipinas','Finlandia','Fiyi','Francia','Gabón','Gambia','Georgia','Ghana','Granada','Grecia','Guatemala','Guyana','Guinea','Guinea ecuatorial','Guinea-Bisáu', 'Haití','Honduras','Hungría','India','Indonesia','Irak','Irán','Irlanda','Islandia','Islas Marshall', 'Islas Salomón','Israel','Italia','Jamaica','Japón','Jordania','Kazajistán','Kenia','Kirguistán', 'Kiribati','Kuwait','Laos','Lesoto','Letonia','Líbano','Liberia','Libia','Liechtenstein','Lituania','Luxemburgo','Madagascar','Malasia','Malaui','Maldivas','Malí','Malta','Marruecos','Mauricio','Mauritania', 'México','Micronesia','Moldavia','Mónaco','Mongolia','Montenegro','Mozambique','Namibia','Nauru','Nepal', 'Nicaragua','Níger','Nigeria','Noruega','Nueva Zelanda','Omán','Países Bajos','Pakistán','Palaos', 'Palestina','Panamá','Papúa Nueva Guinea','Paraguay','Perú','Polonia','Portugal','Reino Unido', 'República Centroafricana','República Checa','República de Macedonia','República del Congo', 'República Democrática del Congo','República Dominicana','República Sudafricana','Ruanda', 'Rumanía','Rusia','Samoa','San Cristóbal y Nieves','San Marino','San Vicente y las Granadinas', 'Santa Lucía','Santo Tomé y Príncipe','Senegal','Serbia','Seychelles','Sierra Leona','Singapur', 'Siria','Somalia','Sri Lanka','Suazilandia','Sudán','Sudán del Sur','Suecia','Suiza','Surinam', 'Tailandia','Tanzania','Tayikistán','Timor Oriental','Togo','Tonga','Trinidad y Tobago','Túnez', 'Turkmenistán','Turquía','Tuvalu','Ucrania','Uganda','Uruguay','Uzbekistán','Vanuatu','Venezuela', 'Vietnam','Yemen','Yibuti','Zambia','Zimbabue'];
for (let i = 0; i < paises.length; i++) {
    const tempObj = paises[i];
    var option = document.createElement("option");
    option.text=tempObj
    option.value=tempObj
    document.getElementById ("Nacionalidad").appendChild(option);
}

const grupoSanguineo = ['Selecciona','A+', 'B+', 'O+', 'AB+', 'A-', 'B-', 'O-', 'AB-'];
for (let i = 0; i < grupoSanguineo.length; i++) {
    const tempObj = grupoSanguineo[i];
    var option = document.createElement("option");
    option.text=tempObj
    option.value=tempObj
    document.getElementById ("sangre").appendChild(option);
}

const handleClick = (e) => { 
    const obj = {
        Nombre: document.getElementById("nombre").value,
        Apellido: document.getElementById("apellido").value,
        Estatura: document.getElementById("estatura").value,
        Fumador: document.getElementById("fumador").checked,
        Edad: document.getElementById("edad").value,
        Nacionalidad: document.getElementById("Nacionalidad").value,
        RH: document.getElementById("sangre").value,
        Cirugías: document.getElementById("Cirugías").checked,
    }

    var registroDatos = [];
    
    registroDatos.push(obj);
    console.log(registroDatos);

    alert('Los datos fueron registrados correctamente')
}

const mostrarPreguntas = (f) => {
    if (document.getElementById("edad").value >= 50) {
        document.getElementById("pColesterol").style.display="block";
        document.getElementById("pAzucar").style.display="none";
    } else {
        document.getElementById("pAzucar").style.display="block";
        document.getElementById("pColesterol").style.display="none";

    }
}

const limpiarForum = (g) => {  
    location.reload(); 
  }

function unaFuncion() {
    return "Devolviendo mensaje de return";
}

const saludo = unaFuncion();
console.log(saludo);