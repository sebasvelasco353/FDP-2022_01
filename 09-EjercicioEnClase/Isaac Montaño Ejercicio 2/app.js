const paises = [' ','Afganistán','Albania','Alemania','Andorra','Angola','Antigua y Barbuda','Arabia Saudita','Argelia','Argentina','Armenia','Australia','Austria','Azerbaiyán','Bahamas','Bangladés','Barbados','Baréin','Bélgica','Belice','Benín','Bielorrusia','Birmania','Bolivia','Bosnia y Herzegovina','Botsuana','Brasil','Brunéi','Bulgaria','Burkina Faso','Burundi','Bután','Cabo Verde','Camboya','Camerún','Canadá','Catar','Chad','Chile','China','Chipre','Ciudad del Vaticano','Colombia','Comoras','Corea del Norte','Corea del Sur','Costa de Marfil','Costa Rica','Croacia','Cuba','Dinamarca','Dominica','Ecuador','Egipto','El Salvador','Emiratos Árabes Unidos','Eritrea','Eslovaquia','Eslovenia','España','Estados Unidos','Estonia','Etiopía','Filipinas','Finlandia','Fiyi','Francia','Gabón','Gambia','Georgia','Ghana','Granada','Grecia','Guatemala','Guyana','Guinea','Guinea ecuatorial','Guinea-Bisáu','Haití','Honduras','Hungría','India','Indonesia','Irak','Irán','Irlanda','Islandia','Islas Marshall','Islas Salomón','Israel','Italia','Jamaica','Japón','Jordania','Kazajistán','Kenia','Kirguistán','Kiribati','Kuwait','Laos','Lesoto','Letonia','Líbano','Liberia','Libia','Liechtenstein','Lituania','Luxemburgo','Madagascar','Malasia','Malaui','Maldivas','Malí','Malta','Marruecos','Mauricio','Mauritania','México','Micronesia','Moldavia','Mónaco','Mongolia','Montenegro','Mozambique','Namibia','Nauru','Nepal','Nicaragua','Níger','Nigeria','Noruega','Nueva Zelanda','Omán','Países Bajos','Pakistán','Palaos','Palestina','Panamá','Papúa Nueva Guinea','Paraguay','Perú','Polonia','Portugal','Reino Unido','República Centroafricana','República Checa','República de Macedonia','República del Congo','República Democrática del Congo','República Dominicana','República Sudafricana','Ruanda','Rumanía','Rusia','Samoa','San Cristóbal y Nieves','San Marino','San Vicente y las Granadinas','Santa Lucía','Santo Tomé y Príncipe','Senegal','Serbia','Seychelles','Sierra Leona','Singapur','Siria','Somalia','Sri Lanka','Suazilandia','Sudán','Sudán del Sur','Suecia','Suiza','Surinam','Tailandia','Tanzania','Tayikistán','Timor Oriental','Togo','Tonga','Trinidad y Tobago','Túnez','Turkmenistán','Turquía','Tuvalu','Ucrania','Uganda','Uruguay','Uzbekistán','Vanuatu','Venezuela','Vietnam','Yemen','Yibuti','Zambia','Zimbabue'];
for (let i = 0; i < paises.length ; i++) {
    const tempObj = paises[i];
    var option = document.createElement("option");
    option.text=tempObj
    option.value=tempObj
    document.getElementById("nacionalidad").appendChild(option);
    }

const grupoSanguineo = ['','A+', 'B+', 'O+', 'AB+', 'A-', 'B-', 'O-', 'AB-'];
for (let i = 0; i < grupoSanguineo.length ; i++) {
    const tempObj = grupoSanguineo[i];
    var option = document.createElement("option");
    option.text= tempObj
    option.value=tempObj
    document.getElementById("GrupoSanguineo").appendChild(option);
    }

    const Edad = ['', '1' ,	'2',	'3',	'4',	'5',	'6',	'7'	,'8',	'9',	'10',
'11',	'12'	,'13'	,'14',	'15',	'16',	'17',	'18',	'19',	'20',
'21',	'22',	'23',	'24'	,'25',	'26',	'27',	'28',	'29',	'30',
'31',	'32',	'33',	'34',	'35',	'36',	'37',	'38',	'39',	'40',
'41',	'42',	'43',	'44',	'45',	'46',	'47',	'48',	'49',	'50',
'51',	'52',	'53',	'54',	'55',	'56',	'57',	'58',	'59',	'60',
'61',	'62',	'63',	'64',	'65',	'66',	'67',	'68',	'69',	'70',
'71',	'72', '73',	'74',	'75',	'76',	'77',	'78',	'79',	'80',
'81',	'82',	'83',	'84',	'85',	'86',	'87',	'88',	'89',	'90',
'91',	'92',	'93',	'94',	'95',	'96',	'97',	'98',	'99',	'100'];
for (let i = 0; i < Edad.length ; i++) {
    const tempObj = Edad[i];
    var option = document.createElement("option");
    option.text= tempObj
    option.value=tempObj
    document.getElementById("Edad").appendChild(option);
    }

function datos() {
    var Nombre = document.getElementById ("Nombre").value;
    var Apellido = document.getElementById ("Apellido").value;
    var Estatura = document.getElementById ("estatura").value;
    var Fuma = document.getElementById ("fuma").checked;
    var Edad = document.getElementById ("edad").value;
    var Nacionalidad = document.getElementById ("nacionalidad").value;
    var Sangre = document.getElementById ("GrupoSanguineo").value;
    var Cirugias = document.getElementById ("cirugias").value;

{
    console.log ("Nombre: " + Nombre )
    console.log ("Apellido: " + Apellido) 
    console.log ("Estatura en centímetros: " + Estatura)
    console.log (Fuma)
    console.log ("Edad: " + Edad)
    console.log ("Nacionalidad: " + Nacionalidad)
    console.log ("Tipo de sangre: " + Sangre)
    console.log ("Cirugias que ha tenido: " + Cirugias)

}}

function DisplayAnciano() {
    if (document.getElementById("Edad").value >= "50" )
    { document.getElementById("Anciano").style.display = 'block';
}else{document.getElementById("Anciano").style.display = "none"; 
}}
function DisplayJoven() {
    if (document.getElementById("Edad").value < "50" )
    { document.getElementById("Joven").style.display = 'block';
}else{document.getElementById("Joven").style.display = "none"; 
}}