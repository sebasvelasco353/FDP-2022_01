// Tu código JavaScript va aquí

var resgistroDatos =[];

const handleRegistroEdad = () => {
    var edad = document.getElementById("edad").value;
    
    if (edad >= 50) {
        document.write ("Se ha realizado pruebas de colesterol y triglicéridos en los ultimos 6 meses.")
        
    } else 
        document.write("se ha realizado pruebas de Azucar en los ultimos 3 meses.")   
    }

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
    e.preventDefault();
    const obj = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        estatura: document.getElementById("estatura").value,
        fumador: document.getElementById("fuma").value,
        edad: document.getElementById("edad").value,
        nacionalidad: document.getElementById("Nacionalidad").value,
        rh: document.getElementById("sangre").value,
        cirugias: document.getElementById("cirugia").value,
    }

    registroDatos.push(obj);
    console.log(resgistroDatos);
}