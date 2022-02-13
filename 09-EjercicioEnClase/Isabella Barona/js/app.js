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

const Age = ["", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"];
for (let i = 0; i < Age.length ; i++) {
    const tempObj = Age[i];
    var option = document.createElement("option");
    option.text= tempObj
    option.value= tempObj
    document.getElementById ("Age").appendChild(option);
}

function datos() {
    var Nombre = document.getElementById("Nombre").value;
    var Apellidos = document.getElementById("Apellidos").value;
    var Estatura = document.getElementById("Estatura").value;
    var Age = document.getElementById("Age").value;
    var ExamenCYT = document.getElementById("ExamenCYT").checked;
    var ExamenA = document.getElementById("ExamenA").checked;
    var Fuma = document.getElementById("Fuma").checked;
    var Nacionalidad = document.getElementById("Nacionalidad").value;
    var Sangre = document.getElementById("Sangre").value;
    var Cirugias = document.getElementById("Cirugias").value;

    {
        console.log("Nombre completo: " + Nombre + Apellidos);
        console.log("Estatura: " + Estatura);
        console.log("Age: " + Age);
        console.log("Examen colesterol y triglicéridos: " + ExamenCYT);
        console.log("Examen azúcar: " + ExamenA);     
        console.log("Fuma: " + Fuma);
        console.log("Nacionalidad: " + Nacionalidad); 
        console.log("Tipo de Sangre: " + Sangre);
        console.log("Cirugías: " + Cirugias);
        console.log("___________________"); 
    }
        
}

function Reinicio(){
    document.getElementById("Nombre").value="";
    document.getElementById("Apellidos").value="";
    document.getElementById("Estatura").value="";
    document.getElementById("Age").value="";
    document.getElementById("Cirugias").value="";
    document.getElementById("Fuma").checked=false;
    document.getElementById("ExamenCYT").checked=false;
    document.getElementById("ExamenA").checked=false;
    document.getElementById("Nacionalidad").value="";
    document.getElementById("Sangre").value="";
    document.getElementById("Nombre").focus();
}

function DisplayCYT() {

    if (document.getElementById("Age").value >= "50"){
        document.getElementById('CYT').style.display = 'block';
    }else{
        document.getElementById('CYT').style.display='none';
    }
}

function DisplayAZ() {

    if (document.getElementById("Age").value < "50"){
        document.getElementById('AZ').style.display = 'block';
    }else{
        document.getElementById('AZ').style.display='none';
    }
}
