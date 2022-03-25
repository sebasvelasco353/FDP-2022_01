var registroDatos = [];

const handleClick = (e) => {
    e.preventDefault();
    const obj = {
        Nombre: document.getElementById("nombre").value,
        Apellidos: document.getElementById("apellidos").value,
        Edad: document.getElementById("edad").value,
        Estatura: document.getElementById("estatura").value,
        Nacionalidad: document.getElementById("nacionalidad").value,
        GrupoSanguineo: document.getElementById("gruposanguineo").value,
        Fumador: document.getElementById("fumador").value,
        CirugiasAnteriores: document.getElementById("cirugiasanteriores").value
    }
    registroDatos.push(obj);

    console.log(registroDatos);
}

const paises = ['','Afganistán','Albania','Alemania','Andorra','Angola','Antigua y Barbuda','Arabia Saudita','Argelia','Argentina','Armenia','Australia','Austria','Azerbaiyán','Bahamas','Bangladés','Barbados','Baréin','Bélgica','Belice','Benín','Bielorrusia','Birmania','Bolivia','Bosnia y Herzegovina','Botsuana','Brasil','Brunéi','Bulgaria','Burkina Faso','Burundi','Bután','Cabo Verde','Camboya','Camerún','Canadá','Catar','Chad','Chile','China','Chipre','Ciudad del Vaticano','Colombia','Comoras','Corea del Norte','Corea del Sur','Costa de Marfil','Costa Rica','Croacia','Cuba','Dinamarca','Dominica','Ecuador','Egipto','El Salvador','Emiratos Árabes Unidos','Eritrea','Eslovaquia','Eslovenia','España','Estados Unidos','Estonia','Etiopía','Filipinas','Finlandia','Fiyi','Francia','Gabón','Gambia','Georgia','Ghana','Granada','Grecia','Guatemala','Guyana','Guinea','Guinea ecuatorial','Guinea-Bisáu','Haití','Honduras','Hungría','India','Indonesia','Irak','Irán','Irlanda','Islandia','Islas Marshall','Islas Salomón','Israel','Italia','Jamaica','Japón','Jordania','Kazajistán','Kenia','Kirguistán','Kiribati','Kuwait','Laos','Lesoto','Letonia','Líbano','Liberia','Libia','Liechtenstein','Lituania','Luxemburgo','Madagascar','Malasia','Malaui','Maldivas','Malí','Malta','Marruecos','Mauricio','Mauritania','México','Micronesia','Moldavia','Mónaco','Mongolia','Montenegro','Mozambique','Namibia','Nauru','Nepal','Nicaragua','Níger','Nigeria','Noruega','Nueva Zelanda','Omán','Países Bajos','Pakistán','Palaos','Palestina','Panamá','Papúa Nueva Guinea','Paraguay','Perú','Polonia','Portugal','Reino Unido','República Centroafricana','República Checa','República de Macedonia','República del Congo','República Democrática del Congo','República Dominicana','República Sudafricana','Ruanda','Rumanía','Rusia','Samoa','San Cristóbal y Nieves','San Marino','San Vicente y las Granadinas','Santa Lucía','Santo Tomé y Príncipe','Senegal','Serbia','Seychelles','Sierra Leona','Singapur','Siria','Somalia','Sri Lanka','Suazilandia','Sudán','Sudán del Sur','Suecia','Suiza','Surinam','Tailandia','Tanzania','Tayikistán','Timor Oriental','Togo','Tonga','Trinidad y Tobago','Túnez','Turkmenistán','Turquía','Tuvalu','Ucrania','Uganda','Uruguay','Uzbekistán','Vanuatu','Venezuela','Vietnam','Yemen','Yibuti','Zambia','Zimbabue'];

var nacionalidadSelect = document.getElementById("nacionalidad");
for (let i = 0; i < paises.length; i++) {
    const element = paises[i];
    let htmlElement = document.createElement("option");
    htmlElement.setAttribute("value", element);
    htmlElement.innerHTML = element;
    nacionalidadSelect.appendChild(htmlElement);
}

const grupoSanguineo = ['','A+', 'B+', 'O+', 'AB+', 'A-', 'B-', 'O-', 'AB-']

var gruposanguineoSelect = document.getElementById("gruposanguineo");
for (let i = 0; i < grupoSanguineo.length; i++) {
    const element = grupoSanguineo[i];
    let htmlElement = document.createElement("option");
    htmlElement.setAttribute("value", element);
    htmlElement.innerHTML = element;
    gruposanguineoSelect.appendChild(htmlElement);
}

const verificarEdad = () => {
var edad = document.getElementById("edad").value;
    if (edad >= 50) {
        document.getElementById("pruebasc").disabled = false;
        document.getElementById("pruebasa").disabled = true;
    } 
    else if (edad < 50) {
        document.getElementById("pruebasa").disabled = false;
        document.getElementById("pruebasc").disabled = true;
    }
    else if (edad < null) {
        document.getElementById("pruebasa").disabled = false;
        document.getElementById("pruebasc").disabled = false;
    }
}