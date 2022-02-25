var inputs = document.getElementsByClassName('formulario__input');
for (var i=0; i < inputs.length; i++) {
 inputs[i].addEventListener('keyup', function(){
    if (this.value.length>=1){
        this.nextElementSibling.classList.add('fijar');
       
    } else {
        this.nextElementSibling.classList.remove('fijar');

    }
 });
}
var registroDatos = [];
const paises = ['Afganistán','Albania','Alemania','Andorra','Angola','Antigua y Barbuda','Arabia Saudita','Argelia','Argentina','Armenia','Australia','Austria','Azerbaiyán','Bahamas','Bangladés','Barbados','Baréin','Bélgica','Belice','Benín','Bielorrusia','Birmania','Bolivia','Bosnia y Herzegovina','Botsuana','Brasil','Brunéi','Bulgaria','Burkina Faso','Burundi','Bután','Cabo Verde','Camboya','Camerún','Canadá','Catar','Chad','Chile','China','Chipre','Ciudad del Vaticano','Colombia','Comoras','Corea del Norte','Corea del Sur','Costa de Marfil','Costa Rica','Croacia','Cuba','Dinamarca','Dominica','Ecuador','Egipto','El Salvador','Emiratos Árabes Unidos','Eritrea','Eslovaquia','Eslovenia','España','Estados Unidos','Estonia','Etiopía','Filipinas','Finlandia','Fiyi','Francia','Gabón','Gambia','Georgia','Ghana','Granada','Grecia','Guatemala','Guyana','Guinea','Guinea ecuatorial','Guinea-Bisáu','Haití','Honduras','Hungría','India','Indonesia','Irak','Irán','Irlanda','Islandia','Islas Marshall','Islas Salomón','Israel','Italia','Jamaica','Japón','Jordania','Kazajistán','Kenia','Kirguistán','Kiribati','Kuwait','Laos','Lesoto','Letonia','Líbano','Liberia','Libia','Liechtenstein','Lituania','Luxemburgo','Madagascar','Malasia','Malaui','Maldivas','Malí','Malta','Marruecos','Mauricio','Mauritania','México','Micronesia','Moldavia','Mónaco','Mongolia','Montenegro','Mozambique','Namibia','Nauru','Nepal','Nicaragua','Níger','Nigeria','Noruega','Nueva Zelanda','Omán','Países Bajos','Pakistán','Palaos','Palestina','Panamá','Papúa Nueva Guinea','Paraguay','Perú','Polonia','Portugal','Reino Unido','República Centroafricana','República Checa','República de Macedonia','República del Congo','República Democrática del Congo','República Dominicana','República Sudafricana','Ruanda','Rumanía','Rusia','Samoa','San Cristóbal y Nieves','San Marino','San Vicente y las Granadinas','Santa Lucía','Santo Tomé y Príncipe','Senegal','Serbia','Seychelles','Sierra Leona','Singapur','Siria','Somalia','Sri Lanka','Suazilandia','Sudán','Sudán del Sur','Suecia','Suiza','Surinam','Tailandia','Tanzania','Tayikistán','Timor Oriental','Togo','Tonga','Trinidad y Tobago','Túnez','Turkmenistán','Turquía','Tuvalu','Ucrania','Uganda','Uruguay','Uzbekistán','Vanuatu','Venezuela','Vietnam','Yemen','Yibuti','Zambia','Zimbabue'];
const RH = ['A+', 'B+', 'O+', 'AB+', 'A-', 'B-', 'O-', 'AB-'];

const handleClick = (e) => {
    e.preventDefault();
    const obj = {
        Nombre: document.getElementById("Nombres").value,
        Apellido: document.getElementById("Apellidos").value,
        Estatura: document.getElementById("Estatura").value,
        Fumador: document.getElementById("Fumador").value,
        Edad: document.getElementById("Edad").value,
        RH: document.getElementById("grupoSanguineo").value,
        Cirugias: document.getElementById("Cirugias").value

    }
    registroDatos.push(obj);

    console.log(registroDatos);
}
var NacionalidadSelect = document.getElementById("Nacionalidad");
for (let i = 0; i < paises.length; i++) {
    const element = paises [i];
    let htmlElement = document.createElement("option");
    htmlElement.setAttribute("value", element);
    htmlElement.innerHTML = element;
    NacionalidadSelect.appendChild(htmlElement);
}
var grupoSanguineo = document.getElementById("RH");
for (let i = 0; i < RH.length; i++) {
    const element = RH [i];
    let htmlElement = document.createElement("option");
    htmlElement.setAttribute("value", element);
    htmlElement.innerHTML = element;
    grupoSanguineo.appendChild(htmlElement);
}
console.log('terminamos');
var getData =function () {
    var Cirugias = document.getElementById("Cirugias").value;

    console.log(Cirugias);

}