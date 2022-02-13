const paises = ['','Afganistán','Albania','Alemania','Andorra','Angola','Antigua y Barbuda','Arabia Saudita','Argelia','Argentina','Armenia','Australia','Austria','Azerbaiyán','Bahamas','Bangladés','Barbados','Baréin','Bélgica','Belice','Benín','Bielorrusia','Birmania','Bolivia','Bosnia y Herzegovina','Botsuana','Brasil','Brunéi','Bulgaria','Burkina Faso','Burundi','Bután','Cabo Verde','Camboya','Camerún','Canadá','Catar','Chad','Chile','China','Chipre','Ciudad del Vaticano','Colombia','Comoras','Corea del Norte','Corea del Sur','Costa de Marfil','Costa Rica','Croacia','Cuba','Dinamarca','Dominica','Ecuador','Egipto','El Salvador','Emiratos Árabes Unidos','Eritrea','Eslovaquia','Eslovenia','España','Estados Unidos','Estonia','Etiopía','Filipinas','Finlandia','Fiyi','Francia','Gabón','Gambia','Georgia','Ghana','Granada','Grecia','Guatemala','Guyana','Guinea','Guinea ecuatorial','Guinea-Bisáu','Haití','Honduras','Hungría','India','Indonesia','Irak','Irán','Irlanda','Islandia','Islas Marshall','Islas Salomón','Israel','Italia','Jamaica','Japón','Jordania','Kazajistán','Kenia','Kirguistán','Kiribati','Kuwait','Laos','Lesoto','Letonia','Líbano','Liberia','Libia','Liechtenstein','Lituania','Luxemburgo','Madagascar','Malasia','Malaui','Maldivas','Malí','Malta','Marruecos','Mauricio','Mauritania','México','Micronesia','Moldavia','Mónaco','Mongolia','Montenegro','Mozambique','Namibia','Nauru','Nepal','Nicaragua','Níger','Nigeria','Noruega','Nueva Zelanda','Omán','Países Bajos','Pakistán','Palaos','Palestina','Panamá','Papúa Nueva Guinea','Paraguay','Perú','Polonia','Portugal','Reino Unido','República Centroafricana','República Checa','República de Macedonia','República del Congo','República Democrática del Congo','República Dominicana','República Sudafricana','Ruanda','Rumanía','Rusia','Samoa','San Cristóbal y Nieves','San Marino','San Vicente y las Granadinas','Santa Lucía','Santo Tomé y Príncipe','Senegal','Serbia','Seychelles','Sierra Leona','Singapur','Siria','Somalia','Sri Lanka','Suazilandia','Sudán','Sudán del Sur','Suecia','Suiza','Surinam','Tailandia','Tanzania','Tayikistán','Timor Oriental','Togo','Tonga','Trinidad y Tobago','Túnez','Turkmenistán','Turquía','Tuvalu','Ucrania','Uganda','Uruguay','Uzbekistán','Vanuatu','Venezuela','Vietnam','Yemen','Yibuti','Zambia','Zimbabue'];
for (let i = 0; i < paises.length ; i++) {
    const tempObj = paises[i];
    var option = document.createElement("option");
    option.text=tempObj
    option.value=tempObj
    document.getElementById ('Nacionalidad') .appendChild(option);
}

const grupoSanguineo = ["","A+", "B+", "O+", "AB+", "A-", "B-", "O-", "AB-"];
for (let i = 0; i < grupoSanguineo.length ; i++) {
    const tempObj = grupoSanguineo[i];
    var option = document.createElement("option");
    option.text= tempObj
    option.value= tempObj
    document.getElementById ("Sangre").appendChild(option);
}

function datos() {
    var Nombre = document.getElementById("Nombre").value;
    var Apellidos = document.getElementById("Apellidos").value;
    var Estatura = document.getElementById("Estatura").value;
    var Edad = document.getElementById("Edad").value;
    var Cirugias = document.getElementById("Cirugias").value;
    
    var SiCYT = document.getElementById("SiCYT").checked;
    var NoCYT = document.getElementById("NoCYT").checked;
    var SiA = document.getElementById("SiCYT").checked;
    var NoA = document.getElementById("NoCYT").checked;

    var SiFuma = document.getElementById("SiFuma").checked;
    var NoFuma = document.getElementById("NoFuma").checked;

    var Sangre = document.getElementById("Sangre").value;
    var Nacionalidad = document.getElementById("Nacionalidad").value;
    
    {
        console.log("Nombre: " + Nombre + " Apellidos: " + Apellidos + " Estatura: " + Estatura + " Edad: " + Edad + " Cirugías: " + Cirugias);
        console.log("SiFuma " + SiFuma + " NoFuma " + NoFuma);
        console.log("SiCYT " + SiCYT + " NoCYT " + NoCYT);
        console.log("SiA " + SiA + " NoA " + NoA);  
        console.log("Tipo de Sangre " + Sangre);   
        console.log("Nacionalidad " + Nacionalidad); 
        console.log("___________________"); 
    }
        
}

function Reinicio(){
    document.getElementById("Nombre").value="";
    document.getElementById("Apellidos").value="";
    document.getElementById("Estatura").value="";
    document.getElementById("Edad").value="";
    document.getElementById("Cirugias").value="";

    document.getElementById("SiFuma").checked=false;
    document.getElementById("NoFuma").checked=false;
    document.getElementById("SiCYT").checked=false;
    document.getElementById("NoCYT").checked=false;
    document.getElementById("SiA").checked=false;
    document.getElementById("NoA").checked=false;

    document.getElementById("Nacionalidad").value="";
    document.getElementById("Sangre").value="";

    document.getElementById("Nombre").focus();
}
