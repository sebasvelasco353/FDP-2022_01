// Usen estas constantes para llenar los campos de seleccion.
const paises = ['Afganistán','Albania','Alemania','Andorra','Angola','Antigua y Barbuda','Arabia Saudita','Argelia','Argentina','Armenia','Australia','Austria','Azerbaiyán','Bahamas','Bangladés','Barbados','Baréin','Bélgica','Belice','Benín','Bielorrusia','Birmania','Bolivia','Bosnia y Herzegovina','Botsuana','Brasil','Brunéi','Bulgaria','Burkina Faso','Burundi','Bután','Cabo Verde','Camboya','Camerún','Canadá','Catar','Chad','Chile','China','Chipre','Ciudad del Vaticano','Colombia','Comoras','Corea del Norte','Corea del Sur','Costa de Marfil','Costa Rica','Croacia','Cuba','Dinamarca','Dominica','Ecuador','Egipto','El Salvador','Emiratos Árabes Unidos','Eritrea','Eslovaquia','Eslovenia','España','Estados Unidos','Estonia','Etiopía','Filipinas','Finlandia','Fiyi','Francia','Gabón','Gambia','Georgia','Ghana','Granada','Grecia','Guatemala','Guyana','Guinea','Guinea ecuatorial','Guinea-Bisáu','Haití','Honduras','Hungría','India','Indonesia','Irak','Irán','Irlanda','Islandia','Islas Marshall','Islas Salomón','Israel','Italia','Jamaica','Japón','Jordania','Kazajistán','Kenia','Kirguistán','Kiribati','Kuwait','Laos','Lesoto','Letonia','Líbano','Liberia','Libia','Liechtenstein','Lituania','Luxemburgo','Madagascar','Malasia','Malaui','Maldivas','Malí','Malta','Marruecos','Mauricio','Mauritania','México','Micronesia','Moldavia','Mónaco','Mongolia','Montenegro','Mozambique','Namibia','Nauru','Nepal','Nicaragua','Níger','Nigeria','Noruega','Nueva Zelanda','Omán','Países Bajos','Pakistán','Palaos','Palestina','Panamá','Papúa Nueva Guinea','Paraguay','Perú','Polonia','Portugal','Reino Unido','República Centroafricana','República Checa','República de Macedonia','República del Congo','República Democrática del Congo','República Dominicana','República Sudafricana','Ruanda','Rumanía','Rusia','Samoa','San Cristóbal y Nieves','San Marino','San Vicente y las Granadinas','Santa Lucía','Santo Tomé y Príncipe','Senegal','Serbia','Seychelles','Sierra Leona','Singapur','Siria','Somalia','Sri Lanka','Suazilandia','Sudán','Sudán del Sur','Suecia','Suiza','Surinam','Tailandia','Tanzania','Tayikistán','Timor Oriental','Togo','Tonga','Trinidad y Tobago','Túnez','Turkmenistán','Turquía','Tuvalu','Ucrania','Uganda','Uruguay','Uzbekistán','Vanuatu','Venezuela','Vietnam','Yemen','Yibuti','Zambia','Zimbabue'];
const grupoSanguineo = ['A+', 'B+', 'O+', 'AB+', 'A-', 'B-', 'O-', 'AB-'];
var Nombre = document.getElementById("Nombre");
var Apellido = document.getElementById("Apellido");
var fuma = document.getElementById("fuma").value;
var estatura = document.getElementById("estatura");

var Nacionalidad = document.getElementById("Nacionalidad");
for (let i = 0; i < paises.length ; i++) {
    console.log(Nacionalidad);
    const element = paises[i];
    const chilElement = document.createElement("option")
    chilElement.value = element;
    chilElement.innerText = element;
    Nacionalidad.appendChild(chilElement);

var sangre = document.getElementById("gruposangui");
for (let i = 0; i < grupoSanguineo.length ; i++) {
    console.log(sangre)
    const element = grupoSanguineo[i];
    const chilElement = document.createElement ("option")
    chilElement.value = element;
    chilElement.innerText = element;
    sangre.appendChild(chilElement);


    

    var Edad = document.getElementById("Edad");
function seleccionEdad() {
    Edad: Edad.value
    if (input_edad >= 50){
        document.getElementById('mensazucar').style.display ='none';
        document.getElementById('menscolesterol').style.display ='block';
        document.getElementById('send').style.display = 'none';
        document.getElementById('send2').style.display = 'block';
       
    } else if(input_edad < 50){
        document.getElementById('menscolesterol').style.display ='none';
        document.getElementById('mensazucar').style.display ='block';
        document.getElementById('send').style.display = 'none';
        document.getElementById('send2').style.display = 'block';
    }
}
   //const el = {

      // estatura: estatura.value
   // }
   arreglo.push(el)


   // intento de consola numero 8334789483
   function date_inputs(){
    // obtener datos de los campos de texto
    let date_input_name = document.getElementById("nombre").value;
    let date_input_lastname = document.getElementById("apellido").value;
    let date_input_year = document.getElementById("Edad").value;
    let date_input_height = document.getElementById("estatura").value;
    let date_input_country = document.getElementById("Nacionalidad").value;
 
    console.log("Nombre:"+Nombre);
    console.log("Apellido:"+date_Apellido);
    console.log("Edad:"+Edad);
    console.log("estatura:" +estatura);
    console.log("Nacionalidad:" +Nacionalidad);
   
}






  //  var mpaises = document.createElement("option")
    //mpaises.text= ObjPaises;
   // document.getElementById("Nacionalidad").appendChild(mpaises);
}
}

//<html>
  //  <script type="text/javascript">
    //    for (let i=0;<paises.length;++){
      //      document.write("<option>"+paises+"</option>")

        

   // </script>


    //<label for="Nacionalidad">Nacionalidad</label>
   // <form  id="Nacionalidad"  name="Nacionalidad" method="post" action="" >
    //<select name="Nacionalidad" id ="Nacionalidad">
      //  <script type="text/javascript">

        //</script>
    
//</select>
  //  </form>
//</html>