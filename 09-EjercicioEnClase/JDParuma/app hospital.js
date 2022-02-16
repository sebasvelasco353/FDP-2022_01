
let registropacientes = [];
let registroNodes = [];
let input_edad = [];

const paises = ['Afganistán','Albania','Alemania','Andorra','Angola','Antigua y Barbuda','Arabia Saudita','Argelia','Argentina','Armenia','Australia','Austria','Azerbaiyán','Bahamas','Bangladés','Barbados','Baréin','Bélgica','Belice','Benín','Bielorrusia','Birmania','Bolivia','Bosnia y Herzegovina','Botsuana','Brasil','Brunéi','Bulgaria','Burkina Faso','Burundi','Bután','Cabo Verde','Camboya','Camerún','Canadá','Catar','Chad','Chile','China','Chipre','Ciudad del Vaticano','Colombia','Comoras','Corea del Norte','Corea del Sur','Costa de Marfil','Costa Rica','Croacia','Cuba','Dinamarca','Dominica','Ecuador','Egipto','El Salvador','Emiratos Árabes Unidos','Eritrea','Eslovaquia','Eslovenia','España','Estados Unidos','Estonia','Etiopía','Filipinas','Finlandia','Fiyi','Francia','Gabón','Gambia','Georgia','Ghana','Granada','Grecia','Guatemala','Guyana','Guinea','Guinea ecuatorial','Guinea-Bisáu','Haití','Honduras','Hungría','India','Indonesia','Irak','Irán','Irlanda','Islandia','Islas Marshall','Islas Salomón','Israel','Italia','Jamaica','Japón','Jordania','Kazajistán','Kenia','Kirguistán','Kiribati','Kuwait','Laos','Lesoto','Letonia','Líbano','Liberia','Libia','Liechtenstein','Lituania','Luxemburgo','Madagascar','Malasia','Malaui','Maldivas','Malí','Malta','Marruecos','Mauricio','Mauritania','México','Micronesia','Moldavia','Mónaco','Mongolia','Montenegro','Mozambique','Namibia','Nauru','Nepal','Nicaragua','Níger','Nigeria','Noruega','Nueva Zelanda','Omán','Países Bajos','Pakistán','Palaos','Palestina','Panamá','Papúa Nueva Guinea','Paraguay','Perú','Polonia','Portugal','Reino Unido','República Centroafricana','República Checa','República de Macedonia','República del Congo','República Democrática del Congo','República Dominicana','República Sudafricana','Ruanda','Rumanía','Rusia','Samoa','San Cristóbal y Nieves','San Marino','San Vicente y las Granadinas','Santa Lucía','Santo Tomé y Príncipe','Senegal','Serbia','Seychelles','Sierra Leona','Singapur','Siria','Somalia','Sri Lanka','Suazilandia','Sudán','Sudán del Sur','Suecia','Suiza','Surinam','Tailandia','Tanzania','Tayikistán','Timor Oriental','Togo','Tonga','Trinidad y Tobago','Túnez','Turkmenistán','Turquía','Tuvalu','Ucrania','Uganda','Uruguay','Uzbekistán','Vanuatu','Venezuela','Vietnam','Yemen','Yibuti','Zambia','Zimbabue'];
const grupoSanguineo = ['A+', 'B+', 'O+', 'AB+', 'A-', 'B-', 'O-', 'AB-'];

   for (let i = 0; i < paises.length ; i++) {
    const ObjPaises = paises[i];
    var paises_mundo = document.createElement("option")
    paises_mundo.text= ObjPaises
    paises_mundo.text= ObjPaises
    document.getElementById("Nacionalidad").appendChild(paises_mundo);
}

for (let i = 0; i <grupoSanguineo.length ; i++) {
    const ObjBlood = grupoSanguineo[i];
    var grupo_sangre = document.createElement("option")
    grupo_sangre.text= ObjBlood
    grupo_sangre.text= ObjBlood
    document.getElementById("Grupo sanguíneo").appendChild(grupo_sangre);
}

const handleRegistroTemperaturas = () => {
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var estatura = document.getElementById("estatura").value;
    var Fumador = document.getElementById("Fumador").value;
    var Edad = document.getElementById("Edad").value;
    var Nacionalidad = document.getElementById("Nacionalidad").value;
    var Gruposanguíneo = document.getElementById("Grupo sanguíneo").value;
    var cirugiasanteriores = document.getElementById("cirugias anteriores").value;
    const registroObj = {
        nombres,
        apellidos,
        estatura,
        Fumador,
        Edad,
        Nacionalidad,
        Gruposanguíneo,
        cirugiasanteriores
        
    }
    registropacientes.push(registroObj);
    renderUltimosDatos();
}
const renderUltimosDatos = () => {
    const LISTA_Pacientes = document.getElementById("ListaPacientes");
    LISTA_Pacientes.innerHTML = '';

    if (registropacientes.length > 2) {
        const registropacientesRe = [...registropacientes].reverse();
        for (let i = 0; i < 3 ; i++) {
            const pacObj = registropacientesRe[i];
            var tag = document.createElement("p");

            tag.innerHTML =`Pacientes: ${pacObj.nombres} ${pacObj.apellidos} ${pacObj.estatura} ${pacObj.Fumador} ${pacObj.Edad} ${pacObj.Nacionalidad} ${pacObj.Gruposanguíneo} ${pacObj.cirugiasanteriores}.`;

            LISTA_Pacientes.appendChild(tag);
        }
    } else {
        for (let i = 0; i < registropacientes.length; i++) {
            const pacObj = registropacientes[i];
            var tag = document.createElement("p");

            tag.innerHTML =`Pacientes: ${pacObj.nombres} ${pacObj.apellidos} ${pacObj.estatura} ${pacObj.Fumador} ${pacObj.Edad} ${pacObj.Nacionalidad} ${pacObj.Gruposanguíneo} ${pacObj.cirugiasanteriores}.`;

            console.log(tag);
            LISTA_Pacientes.appendChild(tag);
        }
    }
}
function selectEdad(){
    var input_edad = document.getElementById("Edad").value;
    if (input_edad >= 50){
        document.getElementById('msj_azucar').style.display ='none'
        document.getElementById('msj_colesterol').style.display ='block'
        console.log(input_edad);
    } else if(input_edad < 50){
        document.getElementById('msj_colesterol').style.display ='none'
        document.getElementById('msj_azucar').style.display ='block'
    }
}
