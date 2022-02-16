const paises = ['Afganistán','Albania','Alemania','Andorra','Angola','Antigua y Barbuda','Arabia Saudita','Argelia','Argentina','Armenia','Australia','Austria','Azerbaiyán','Bahamas','Bangladés','Barbados','Baréin','Bélgica','Belice','Benín','Bielorrusia','Birmania','Bolivia','Bosnia y Herzegovina','Botsuana','Brasil','Brunéi','Bulgaria','Burkina Faso','Burundi','Bután','Cabo Verde','Camboya','Camerún','Canadá','Catar','Chad','Chile','China','Chipre','Ciudad del Vaticano','Colombia','Comoras','Corea del Norte','Corea del Sur','Costa de Marfil','Costa Rica','Croacia','Cuba','Dinamarca','Dominica','Ecuador','Egipto','El Salvador','Emiratos Árabes Unidos','Eritrea','Eslovaquia','Eslovenia','España','Estados Unidos','Estonia','Etiopía','Filipinas','Finlandia','Fiyi','Francia','Gabón','Gambia','Georgia','Ghana','Granada','Grecia','Guatemala','Guyana','Guinea','Guinea ecuatorial','Guinea-Bisáu','Haití','Honduras','Hungría','India','Indonesia','Irak','Irán','Irlanda','Islandia','Islas Marshall','Islas Salomón','Israel','Italia','Jamaica','Japón','Jordania','Kazajistán','Kenia','Kirguistán','Kiribati','Kuwait','Laos','Lesoto','Letonia','Líbano','Liberia','Libia','Liechtenstein','Lituania','Luxemburgo','Madagascar','Malasia','Malaui','Maldivas','Malí','Malta','Marruecos','Mauricio','Mauritania','México','Micronesia','Moldavia','Mónaco','Mongolia','Montenegro','Mozambique','Namibia','Nauru','Nepal','Nicaragua','Níger','Nigeria','Noruega','Nueva Zelanda','Omán','Países Bajos','Pakistán','Palaos','Palestina','Panamá','Papúa Nueva Guinea','Paraguay','Perú','Polonia','Portugal','Reino Unido','República Centroafricana','República Checa','República de Macedonia','República del Congo','República Democrática del Congo','República Dominicana','República Sudafricana','Ruanda','Rumanía','Rusia','Samoa','San Cristóbal y Nieves','San Marino','San Vicente y las Granadinas','Santa Lucía','Santo Tomé y Príncipe','Senegal','Serbia','Seychelles','Sierra Leona','Singapur','Siria','Somalia','Sri Lanka','Suazilandia','Sudán','Sudán del Sur','Suecia','Suiza','Surinam','Tailandia','Tanzania','Tayikistán','Timor Oriental','Togo','Tonga','Trinidad y Tobago','Túnez','Turkmenistán','Turquía','Tuvalu','Ucrania','Uganda','Uruguay','Uzbekistán','Vanuatu','Venezuela','Vietnam','Yemen','Yibuti','Zambia','Zimbabue'];
const grupoSanguineo = ['A+', 'B+', 'O+', 'AB+', 'A-', 'B-', 'O-', 'AB-'];
let registroTemperaturas = [];
let edad =null
let nombre=0
let fuma=0
let apellido=0
let estatura=0
let nacionalidad=0
let gruposang=0
let operaciones=0
let examenesazu=0
const handleRegistroTemperaturas = () => {   
    nombre = document.getElementById("nombre").value;
    fuma = document.getElementById("fuma").value;
    apellido = document.getElementById("apellido").value;
    estatura = document.getElementById("estatura").value;
    nacionalidad = document.getElementById("nacionalidad").value;
    gruposang = document.getElementById("gruposang").value;
    operaciones = document.getElementById("operaciones").value;
    edad = document.getElementById("edad").value;
    if (edad>49) {
        if (confirm("¿Se ha realizado exámenes de triglicéridos y colesterol en los últimos 6 meses?")) {
            let examenestri="Sí"
            let examenesazu="N/A"
            const registroObj = {
                edad,
                nombre,
                fuma,
                apellido,
                estatura,
                nacionalidad,
                gruposang,
                operaciones,
                examenestri,
                examenesazu
            }
            registroTemperaturas.push(registroObj);
        } else {
            let examenestri="No"
            let examenesazu="N/A"
            const registroObj = {
                edad,
                nombre,
                fuma,
                apellido,
                estatura,
                nacionalidad,
                gruposang,
                operaciones,
                examenestri,
                examenesazu
            }
            registroTemperaturas.push(registroObj);
        }
    } else {
        if (edad<50) {
            if (confirm("¿Se ha realizado exámenes de glucosa en los últimos 3 meses?")) {
                let examenestri="N/A"
                let examenesazu="Sí"
                const registroObj = {
                edad,
                nombre,
                fuma,
                apellido,
                estatura,
                nacionalidad,
                gruposang,
                operaciones,
                examenestri,
                examenesazu
            }
            registroTemperaturas.push(registroObj);
            } else {
                let examenestri="N/A"
                let examenesazu="No"
                const registroObj = {
                    edad,
                    nombre,
                    fuma,
                    apellido,
                    estatura,
                    nacionalidad,
                    gruposang,
                    operaciones,
                    examenestri,
                    examenesazu
                }
                registroTemperaturas.push(registroObj);  
            }
        } else {
          text="No ha ingresado la edad";  
        }
    }

    renderUltimosDatos ();        
}
const renderUltimosDatos = () => {
    const LISTA_MEDIDAS_ELEMENT = document.getElementById("listaMedidas");
    LISTA_MEDIDAS_ELEMENT.innerHTML = '';

    if (registroTemperaturas.length > 2) {
        const registroTemperaturasInv = [...registroTemperaturas].reverse();
        for (let i = 0; i < 3 ; i++) {
            const tempObj = registroTemperaturasInv[i];
            var tag = document.createElement("p");

            tag.innerHTML =`Nombre(s): ${tempObj.nombre} - Edad: ${tempObj.edad} - Apellidos: ${tempObj.apellido} -
             Mide: ${tempObj.estatura} cm - ${tempObj.fuma} fuma - Oriundo de: ${tempObj.nacionalidad} -
             Tipo de sangre: ${tempObj.gruposang} - Operaciones anteriores: ${tempObj.operaciones} - 
             Exámen de triglicéridos y colesterol: ${tempObj.examenestri} - Exámen de azucar: ${tempObj.examenesazu}.`;

            LISTA_MEDIDAS_ELEMENT.appendChild(tag);
        }
    } else {
        for (let i = 0; i < registroTemperaturas.length; i++) {
            const tempObj = registroTemperaturas[i];
            var tag = document.createElement("p");

            tag.innerHTML =`Nombre(s): ${tempObj.nombre} - Edad: ${tempObj.edad} - Apellidos: ${tempObj.apellido} -
             Mide: ${tempObj.estatura} cm - ${tempObj.fuma} fuma - Oriundo de: ${tempObj.nacionalidad} -
             Tipo de sangre: ${tempObj.gruposang} - Operaciones anteriores: ${tempObj.operaciones} - 
             Exámen de triglicéridos y colesterol: ${tempObj.examenestri} - Exámen de azucar: ${tempObj.examenesazu}.`;

            console.log(tag);
            LISTA_MEDIDAS_ELEMENT.appendChild(tag);
        }
    }
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
