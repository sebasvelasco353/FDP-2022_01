/*
* recuerden ver el planteamiento que esta en el README.md y pensar en cuales son las instrucciones que le tengo que dar al codigo para que X o Y cosa pase,
* les recomiendo hacer un mapa de ideas o cualquier ejercicio que les permita desglosar el problema, yo personalmente hago un mapa mental de lo que tiene
* que pasar para que ocurra lo que necesito, y asi tambien mantengo las cosas divididas, recuerden la importancia del orden y las funciones bien definidas.
*
* Eso ayuda mucho a que entendamos el problema y lo abordemos mas seguros de la razon por la que escribimo alguna cosa en el codigo.
*
* Cualquier duda recuerden que pueden preguntar durante la clase o en la seccion de preguntas del Repo.
*
* Muchos exitos.
*/

// Usen estas constantes para llenar los campos de seleccion.
const paises = ['Afganistán','Albania','Alemania','Andorra','Angola','Antigua y Barbuda','Arabia Saudita','Argelia','Argentina','Armenia','Australia','Austria','Azerbaiyán','Bahamas','Bangladés','Barbados','Baréin','Bélgica','Belice','Benín','Bielorrusia','Birmania','Bolivia','Bosnia y Herzegovina','Botsuana','Brasil','Brunéi','Bulgaria','Burkina Faso','Burundi','Bután','Cabo Verde','Camboya','Camerún','Canadá','Catar','Chad','Chile','China','Chipre','Ciudad del Vaticano','Colombia','Comoras','Corea del Norte','Corea del Sur','Costa de Marfil','Costa Rica','Croacia','Cuba','Dinamarca','Dominica','Ecuador','Egipto','El Salvador','Emiratos Árabes Unidos','Eritrea','Eslovaquia','Eslovenia','España','Estados Unidos','Estonia','Etiopía','Filipinas','Finlandia','Fiyi','Francia','Gabón','Gambia','Georgia','Ghana','Granada','Grecia','Guatemala','Guyana','Guinea','Guinea ecuatorial','Guinea-Bisáu','Haití','Honduras','Hungría','India','Indonesia','Irak','Irán','Irlanda','Islandia','Islas Marshall','Islas Salomón','Israel','Italia','Jamaica','Japón','Jordania','Kazajistán','Kenia','Kirguistán','Kiribati','Kuwait','Laos','Lesoto','Letonia','Líbano','Liberia','Libia','Liechtenstein','Lituania','Luxemburgo','Madagascar','Malasia','Malaui','Maldivas','Malí','Malta','Marruecos','Mauricio','Mauritania','México','Micronesia','Moldavia','Mónaco','Mongolia','Montenegro','Mozambique','Namibia','Nauru','Nepal','Nicaragua','Níger','Nigeria','Noruega','Nueva Zelanda','Omán','Países Bajos','Pakistán','Palaos','Palestina','Panamá','Papúa Nueva Guinea','Paraguay','Perú','Polonia','Portugal','Reino Unido','República Centroafricana','República Checa','República de Macedonia','República del Congo','República Democrática del Congo','República Dominicana','República Sudafricana','Ruanda','Rumanía','Rusia','Samoa','San Cristóbal y Nieves','San Marino','San Vicente y las Granadinas','Santa Lucía','Santo Tomé y Príncipe','Senegal','Serbia','Seychelles','Sierra Leona','Singapur','Siria','Somalia','Sri Lanka','Suazilandia','Sudán','Sudán del Sur','Suecia','Suiza','Surinam','Tailandia','Tanzania','Tayikistán','Timor Oriental','Togo','Tonga','Trinidad y Tobago','Túnez','Turkmenistán','Turquía','Tuvalu','Ucrania','Uganda','Uruguay','Uzbekistán','Vanuatu','Venezuela','Vietnam','Yemen','Yibuti','Zambia','Zimbabue'];
const grupoSanguineo = ['A+', 'B+', 'O+', 'AB+', 'A-', 'B-', 'O-', 'AB-'];



function datos() {
    this.Nombre=""; 
    this.Apellidos=""; 
    this.Estatura=""; 
    this.Edad=""; 
    this.Nacionalidad=""; 
    this.Gruposanguineo=""; 
    this.Cirugíasanteriores=""; 
    this.Fumador=""; 

this.getNombre=function () {
    
    return  Nombre; 
}
this.getApellidos=function () {
    return Apellidos;
}
this.getEstatura=function () {
    
    return  Estatura; 
}
this.getEdad=function () {
    return Edad;
}

this.getNacionalidad=function () {
    return Nacion;
}

this.getGruposanguineo=function () {
    return Gruposanguineo;
}
this.getCirugíasanteriores=function () {
    return Cirugíasanteriores;
}
this.getFumador=function () {
    return Fumado;
}
this.setNombre= function (nomb){

    Nombre=nomb;}

this.setApellidos= function (aplled){
  Apellidos=aplled; 
}
this.setEdad= function (eda) {

    Edad=eda; 
}
this.setEstatura= function (esta) {

 Estatura=esta; 
}
this.setNacionalidad= function (nacio) {

 Nacionalidad=nacio; 
}
this.setGruposanguineo= function (grup) {

    Gruposanguineo=grup; 
}
this.Cirugíasanteriores= function (cirug) {

    Cirugíasanteriores=cirug; 
}
this.setFumador= function (fum) {
    Fumador=fum; 
}

}
function salida() {
    var obj=new datos(); 

var nomb=document.getElementById("Nombre").value;
var aplled=document.getElementById("Apellidos").value;
var eda=document.getElementById("Edad").value;
var esta=document.getElementById("Estatura").value;
var nacio=document.getElementById("Nacionalidad").value;
var grup=document.getElementById("Gruposanguineo").value;
var cirug=document.getElementById("Cirugíasanteriores").value;
var fum=document.getElementById("Fumador").value;


    obj.setNombre(nomb); 
    obj.setApellidos(aplled); 
    obj.setEdad(eda); 
    obj.setEstatura(esta); 
    obj.setNacionalidad(nacio); 
    obj.setGruposanguineo(grup); 
    obj.setCirugíasanteriores(cirug); 
    obj.setFumador(fum); 

    var nrl= obj.getNombre(); 
    var nr2= obj.getApellidos(); 
    var nr3= obj.getEdad(); 
    var nr4= obj.getEstatura(); 
    var nr5= obj.getNacionalidad(); 
    var nr6= obj.getGruposanguineo(); 
    var nr7= obj.getCirugíasanteriores(); 
    var nr8= obj.getFumador(); 


//imprimir valores 
document.write("formulario con datos principal "); 
document.write("Nombre:"+nrl);
document.write("Apellidos:" +nr2);
document.write("edad:"+nr3);
document.write("Estatura:" + nr4);
document.write("Nacionalidad:" + nr5);
document.write("Gruposanguineo:" + nr6);
document.write("Cirugíasanteriores:" + nr7);
document.write("fumador: "+ nr8);

}
// variable

 if(Edad >50){

}
else if(Edad >50){
    msj= "se ha realizado o no pruebas de colesterol";
}
else if(Edad <50){
    msj= "se ha realizado pruebas de Azucar en los ultimos 3 mese";
}