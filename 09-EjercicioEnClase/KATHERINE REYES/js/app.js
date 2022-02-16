 const paises = ['','Afganistán','Albania','Alemania','Andorra','Angola','Antigua y Barbuda','Arabia Saudita','Argelia','Argentina','Armenia','Australia','Austria','Azerbaiyán','Bahamas','Bangladés','Barbados','Baréin','Bélgica','Belice','Benín','Bielorrusia','Birmania','Bolivia','Bosnia y Herzegovina','Botsuana','Brasil','Brunéi','Bulgaria','Burkina Faso','Burundi','Bután','Cabo Verde','Camboya','Camerún','Canadá','Catar','Chad','Chile','China','Chipre','Ciudad del Vaticano','Colombia','Comoras','Corea del Norte','Corea del Sur','Costa de Marfil','Costa Rica','Croacia','Cuba','Dinamarca','Dominica','Ecuador','Egipto','El Salvador','Emiratos Árabes Unidos','Eritrea','Eslovaquia','Eslovenia','España','Estados Unidos','Estonia','Etiopía','Filipinas','Finlandia','Fiyi','Francia','Gabón','Gambia','Georgia','Ghana','Granada','Grecia','Guatemala','Guyana','Guinea','Guinea ecuatorial','Guinea-Bisáu','Haití','Honduras','Hungría','India','Indonesia','Irak','Irán','Irlanda','Islandia','Islas Marshall','Islas Salomón','Israel','Italia','Jamaica','Japón','Jordania','Kazajistán','Kenia','Kirguistán','Kiribati','Kuwait','Laos','Lesoto','Letonia','Líbano','Liberia','Libia','Liechtenstein','Lituania','Luxemburgo','Madagascar','Malasia','Malaui','Maldivas','Malí','Malta','Marruecos','Mauricio','Mauritania','México','Micronesia','Moldavia','Mónaco','Mongolia','Montenegro','Mozambique','Namibia','Nauru','Nepal','Nicaragua','Níger','Nigeria','Noruega','Nueva Zelanda','Omán','Países Bajos','Pakistán','Palaos','Palestina','Panamá','Papúa Nueva Guinea','Paraguay','Perú','Polonia','Portugal','Reino Unido','República Centroafricana','República Checa','República de Macedonia','República del Congo','República Democrática del Congo','República Dominicana','República Sudafricana','Ruanda','Rumanía','Rusia','Samoa','San Cristóbal y Nieves','San Marino','San Vicente y las Granadinas','Santa Lucía','Santo Tomé y Príncipe','Senegal','Serbia','Seychelles','Sierra Leona','Singapur','Siria','Somalia','Sri Lanka','Suazilandia','Sudán','Sudán del Sur','Suecia','Suiza','Surinam','Tailandia','Tanzania','Tayikistán','Timor Oriental','Togo','Tonga','Trinidad y Tobago','Túnez','Turkmenistán','Turquía','Tuvalu','Ucrania','Uganda','Uruguay','Uzbekistán','Vanuatu','Venezuela','Vietnam','Yemen','Yibuti','Zambia','Zimbabue'];

// recorrer paises
for (let i = 0; i < paises.length; i ++) {
    // por c/u obtener el valor
    const element = paises[i];
    // crear elemento
    const childElement = document.createElement("option")
    // valor por texto
    childElement.value = element;
    childElement.innerText = element;
    // insertarlo en el html
    document.getElementById("Nacionalidad").appendChild(childElement)
}

const grupoSanguineo = ["","A+", "B+", "O+", "AB+", "A-", "B-", "O-", "AB-"];
for (let i = 0; i < grupoSanguineo.length ; i++) {
    const tempObj = grupoSanguineo[i];
    var option = document.createElement("option");
    option.text= tempObj
    option.value= tempObj
    document.getElementById ("RH").appendChild(option);
}
const arregloEdades= ["", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"];
for (let i = 0; i < arregloEdades.length ; i++) {
    const tempObj = arregloEdades[i];
    var option = document.createElement("option");
    option.text= tempObj
    option.value= tempObj
    document.getElementById ("Edad").appendChild(option);
}
const handleRegistro = (e) => {
    const obj = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        estatura: document.getElementById("estatura").value,
        fumador: document.getElementById("fumador").checked,
        edad: document.getElementById("edad").value,
        nacionalidad: document.getElementById("nacionalidad"),
        GrupoS: document.getElementById("GrupoS").value,
        Cirugias: document.getElementById("Cirugias"),
    }
}
function datos() {
    
    registrarDatos.push(obj);
   
    console.log(registrarDatos);
} 
var Nombre = document.getElementById("Nombre").value;
var Apellido = document.getElementById("Apellidos").value;
var Estatura = document.getElementById("Estatura").value;
var Fumador = document.getElementById("Fumador").value;
var Edad = document.getElementById("Edad").value;
var Nacionalidad = document.getElementById("Nacionalidad").value;
var RH = document.getElementById("RH").value;
var Cirugías = document.getElementById("cirugias").value;

 if (!Nombre|| !Apellidos || !Estatura || !Edad || !Nacionalidad || !RH){
    alert("Por favor digite los campos obligatorios");
}
if (document.getElementById("Estatura").value >"300" ){
    alert("Por favor digite bien la estatura de manera valida");

    console.log("Nombre completo: " + Nombre + " " + Apellidos);
    console.log("Estatura: " + Estatura);
    console.log("Edad: " + Edad);
    console.log("Examen colesterol y triglicéridos: " + ExamenCYT);
    console.log("Examen azúcar: " + ExamenAzucar);     
    console.log("Fuma: " + Fumador);
    console.log("Nacionalidad: " + Nacionalidad); 
    console.log("Grupo Sanguineo: " + RH);
    console.log("Cirugías: " + cirugias);
    console.log("___________________"); 
}

function ExamenYT() {
    if (document.getElementById("Edad").value >= "50"){
        document.getElementById('CYT').style.display = 'block';
    }else{
        document.getElementById('CYT').style.display='none';
    }

function ExamenAzucar() {
    if (document.getElementById("Edad").value < "50"){
        document.getElementById('AZ').style.display = 'block';
    }else{
        document.getElementById('AZ').style.display='none';
    }
    for (let i = 0; i < registroDatos.length; i++) {
        const tempObj = registroDatos[i];
        var tag = document.createElement("p");

        tag.innerHTML =`<b>Nombre completo: </b> ${tempObj.Nombre}  ${tempObj.Apellidos} <br> <b> Estatura: </b> ${tempObj.Estatura} <br> <b> Edad: </b> ${tempObj.Edad} <br> <b> Examen de Azúcar: </b> ${tempObj.ExamenA} <br> <b> Examen coresterol y triglicéridos: </b> ${tempObj.ExamenCYT} <br> <b> ¿Fuma?: </b> ${tempObj.Fuma} <br> <b> Nacionalidad: </b> ${tempObj.Nacionalidad} <br> <b> Sangre: </b> ${tempObj.Sangre} <br>   `;
    }
}
}