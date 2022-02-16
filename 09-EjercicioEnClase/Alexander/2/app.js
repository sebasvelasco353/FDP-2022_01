const paises= ['Afganistán','Albania','Alemania','Andorra','Angola','Antigua y Barbuda','Arabia Saudita','Argelia','Argentina','Armenia','Australia','Austria','Azerbaiyán','Bahamas','Bangladés','Barbados','Baréin','Bélgica','Belice','Benín','Bielorrusia','Birmania','Bolivia','Bosnia y Herzegovina','Botsuana','Brasil','Brunéi','Bulgaria','Burkina Faso','Burundi','Bután','Cabo Verde','Camboya','Camerún','Canadá','Catar','Chad','Chile','China','Chipre','Ciudad del Vaticano','Colombia','Comoras','Corea del Norte','Corea del Sur','Costa de Marfil','Costa Rica','Croacia','Cuba','Dinamarca','Dominica','Ecuador','Egipto','El Salvador','Emiratos Árabes Unidos','Eritrea','Eslovaquia','Eslovenia','España','Estados Unidos','Estonia','Etiopía','Filipinas','Finlandia','Fiyi','Francia','Gabón','Gambia','Georgia','Ghana','Granada','Grecia','Guatemala','Guyana','Guinea','Guinea ecuatorial','Guinea-Bisáu','Haití','Honduras','Hungría','India','Indonesia','Irak','Irán','Irlanda','Islandia','Islas Marshall','Islas Salomón','Israel','Italia','Jamaica','Japón','Jordania','Kazajistán','Kenia','Kirguistán','Kiribati','Kuwait','Laos','Lesoto','Letonia','Líbano','Liberia','Libia','Liechtenstein','Lituania','Luxemburgo','Madagascar','Malasia','Malaui','Maldivas','Malí','Malta','Marruecos','Mauricio','Mauritania','México','Micronesia','Moldavia','Mónaco','Mongolia','Montenegro','Mozambique','Namibia','Nauru','Nepal','Nicaragua','Níger','Nigeria','Noruega','Nueva Zelanda','Omán','Países Bajos','Pakistán','Palaos','Palestina','Panamá','Papúa Nueva Guinea','Paraguay','Perú','Polonia','Portugal','Reino Unido','República Centroafricana','República Checa','República de Macedonia','República del Congo','República Democrática del Congo','República Dominicana','República Sudafricana','Ruanda','Rumanía','Rusia','Samoa','San Cristóbal y Nieves','San Marino','San Vicente y las Granadinas','Santa Lucía','Santo Tomé y Príncipe','Senegal','Serbia','Seychelles','Sierra Leona','Singapur','Siria','Somalia','Sri Lanka','Suazilandia','Sudán','Sudán del Sur','Suecia','Suiza','Surinam','Tailandia','Tanzania','Tayikistán','Timor Oriental','Togo','Tonga','Trinidad y Tobago','Túnez','Turkmenistán','Turquía','Tuvalu','Ucrania','Uganda','Uruguay','Uzbekistán','Vanuatu','Venezuela','Vietnam','Yemen','Yibuti','Zambia','Zimbabue'];
const grupoSanguineo = ['A+', 'B+', 'O+', 'AB+', 'A-', 'B-', 'O-', 'AB-'];

// función para obtener el valor del input de edad
function selectEdad(){
    var input_edad = document.getElementById("form_input_year").value;
    if (input_edad >= 50){
        document.getElementById('msj_sugarl').style.display ='none';
        document.getElementById('msj_colesterol').style.display ='block';
        document.getElementById('send').style.display = 'none';
        document.getElementById('send2').style.display = 'block';
       
    } else if(input_edad < 50){
        document.getElementById('msj_colesterol').style.display ='none';
        document.getElementById('msj_sugarl').style.display ='block';
        document.getElementById('send').style.display = 'none';
        document.getElementById('send2').style.display = 'block';
    }
}

function date_inputs(){
    // obtener datos de los campos de texto
    let date_input_name = document.getElementById("form_input_name").value;
    let date_input_lastname = document.getElementById("form_input_lastname").value;
    let date_input_year = document.getElementById("form_input_year").value;
    let date_input_height = document.getElementById("form_input_height").value;
    // obtener datos de los campos de selecion
    let date_input_country = document.getElementById("input_country").value;
    let date_input_blood = document.getElementById("input_blood").value;
    let date_input_ciruprev = document.getElementById("option_yes_uno").checked;
    let date_input_ciruprev2 = document.getElementById("option_no_uno").checked;
    let date_input_smoke= document.getElementById("option_yes_dos").checked;
    let date_input_smoke2 = document.getElementById("option_no_dos").checked;

    // datos imprimidos en la consola
    console.log(date_input_name);
    console.log(date_input_lastname);
    console.log(date_input_year+ "años");
    console.log(date_input_height + "cm");
    console.log(date_input_country);
    console.log(date_input_blood);
    console.log(date_input_ciruprev);
    console.log(date_input_ciruprev2);
    console.log(date_input_smoke);
    console.log(date_input_smoke2);
}

// Funciones para agregar los datos a los campos de selección
for (let i = 0; i < paises.length ; i++) {
    const ObjCountry = paises[i];
    var option_Country = document.createElement("option")
    option_Country.text= ObjCountry
    document.getElementById("input_country").appendChild(option_Country);
}

for (let i = 0; i < grupoSanguineo.length ; i++) {
    const ObjBlood = grupoSanguineo[i];
    var option_Blood = document.createElement("option")
    option_Blood.text= ObjBlood
    document.getElementById("input_blood").appendChild(option_Blood);
}
